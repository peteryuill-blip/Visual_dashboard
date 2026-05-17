export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const analyzeImage = async (apiKey, prompt, file, briefingText) => {
  const url = "https://api.anthropic.com/v1/messages";

  // Need to get base64 from file and media type
  let base64Data = "";
  let mediaType = file.type;

  if (file instanceof File) {
    base64Data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  } else if (typeof file === 'string') {
    // If it's already a base64 string
    base64Data = file.includes(',') ? file.split(',')[1] : file;
    // Basic media type guessing if not provided
    if (file.startsWith('data:image/png')) mediaType = 'image/png';
    else if (file.startsWith('data:image/webp')) mediaType = 'image/webp';
    else mediaType = 'image/jpeg';
  }

  const payload = {
    model: "claude-3-7-sonnet-20250219", // Default fallback if 4-6 is not available, but let's use what the prompt said
    max_tokens: 4000,
    system: [
      {
        type: "text",
        text: prompt,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: mediaType,
              data: base64Data,
            },
          },
          {
            type: "text",
            text: briefingText,
          },
        ],
      },
    ],
  };

  // Modify payload based on prompt requirements
  // The prompt asked for model "claude-sonnet-4-6", we'll just put exactly what they asked
  payload.model = "claude-sonnet-4-6";

  const headers = {
    "x-api-key": apiKey,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
    "anthropic-dangerous-direct-browser-access": "true",
  };

  const makeCall = async (retryCount = 0) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 429 && retryCount < 1) {
          await delay(60000); // Wait 60s for rate limit
          return makeCall(retryCount + 1);
        }
        if (response.status >= 500 && retryCount < 1) {
          await delay(5000); // Wait 5s for server error
          return makeCall(retryCount + 1);
        }

        const errorData = await response.json().catch(() => ({}));
        const message = errorData?.error?.message || `HTTP ${response.status}: ${response.statusText}`;
        throw new Error(message);
      }

      const data = await response.json();
      return {
        text: data.content[0].text,
        usage: {
          inputTokens: data.usage.input_tokens,
          outputTokens: data.usage.output_tokens,
          cacheCreationInputTokens: data.usage.cache_creation_input_tokens || 0,
          cacheReadInputTokens: data.usage.cache_read_input_tokens || 0,
        },
      };
    } catch (error) {
      if (!window.navigator.onLine) {
        throw new Error("Network failure: Offline");
      }
      throw error; // eslint-disable-line preserve-caught-error
    }
  };

  return makeCall();
};
