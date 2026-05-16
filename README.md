# Crucible Year Archive Dashboard

This dashboard is a React application built with Vite that provides a visual analysis interface for Peter Yuill's Crucible Year Archive. It uses the Gemini 1.5 Pro multimodal API to process images and provide forensic evaluations based on a specialized system prompt.

## Setup and Usage

To run this project locally:

1. Make sure you have Node.js installed on your machine.
2. In the `dashboard` directory, install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open the local address provided in your terminal (usually `http://localhost:5173`).
5. Obtain a Gemini API Key from Google AI Studio.
6. Enter your Gemini API Key in the designated input at the top of the dashboard. This key is strictly used locally in your browser to authenticate API requests directly to Google and is never sent anywhere else.
7. Drop an image into the upload area and click "Run V5 Analysis".

## Hosting for free on GitHub Pages

You can host this entire dashboard for free directly on GitHub Pages!

1. Make sure your repository is pushed to GitHub.
2. Open your terminal, navigate to the `dashboard` folder.
3. Run the deployment command:
   \`\`\`bash
   npm run deploy
   \`\`\`
   *(This script will build your app and automatically push the compiled static files to a new branch called `gh-pages`)*.
4. Go to your repository settings on GitHub.
5. Navigate to the **Pages** section on the left sidebar.
6. Under **Source**, make sure **Deploy from a branch** is selected, then choose the \`gh-pages\` branch and the \`/(root)\` folder.
7. Click **Save**.
8. Within a minute or two, your dashboard will be live at your GitHub Pages URL!
