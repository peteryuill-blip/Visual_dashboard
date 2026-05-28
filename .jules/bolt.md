## 2026-05-18 - Replacing O(n^2) nested loops with O(n) Map lookups for CSV data processing
**Learning:** Found an O(n^2) operation during file processing where `Array.prototype.find()` was called repeatedly inside an `Array.prototype.map()` for every image against the CSV data. In files with large CSV data or many images, this causes a major bottleneck. Replacing the array structure with a Map index key allows for O(1) lookups and significantly improves performance without compromising code readability.
**Action:** When performing searches within iterations across two data arrays (e.g. mapping files and attaching metadata from another source), convert the lookup dataset into a hash map first, then perform an O(1) lookup during the iteration.
## 2026-05-19 - Eager Object URL decoding blocks UI with large batches
**Learning:** In React list renders where the source is `URL.createObjectURL(file)`, a large batch of images (e.g., hundreds of files) causes the browser to eagerly decode all images simultaneously if `loading="lazy"` is missing. This spikes memory usage and freezes the main thread.
**Action:** Always add `loading="lazy"` to `<img>` tags inside large list iterators, particularly when dealing with dynamically generated object URLs.
## 2026-05-20 - Global state updates on keystrokes causing O(N) re-renders
**Learning:** In React, updating global state arrays (like `images`) on every single keystroke triggers an O(N) array map operation and re-renders the entire application for every typed character, causing noticeable input lag.
**Action:** Keep form state local to the component (like `ImageDetail`) and only push updates to global state on blur, navigation, or form submission, rather than `onChange`.
