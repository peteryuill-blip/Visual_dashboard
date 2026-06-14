## 2026-05-18 - Replacing O(n^2) nested loops with O(n) Map lookups for CSV data processing
**Learning:** Found an O(n^2) operation during file processing where `Array.prototype.find()` was called repeatedly inside an `Array.prototype.map()` for every image against the CSV data. In files with large CSV data or many images, this causes a major bottleneck. Replacing the array structure with a Map index key allows for O(1) lookups and significantly improves performance without compromising code readability.
**Action:** When performing searches within iterations across two data arrays (e.g. mapping files and attaching metadata from another source), convert the lookup dataset into a hash map first, then perform an O(1) lookup during the iteration.
## 2026-05-19 - Eager Object URL decoding blocks UI with large batches
**Learning:** In React list renders where the source is `URL.createObjectURL(file)`, a large batch of images (e.g., hundreds of files) causes the browser to eagerly decode all images simultaneously if `loading="lazy"` is missing. This spikes memory usage and freezes the main thread.
**Action:** Always add `loading="lazy"` to `<img>` tags inside large list iterators, particularly when dealing with dynamically generated object URLs.

## 2026-05-20 - Memoizing elements in large lists avoids full list re-renders
**Learning:** Shallow array cloning (e.g., `[...prev]`) triggers a re-render for all items in a React list if the mapping is inline and props like `onImageClick` are recreated every render. Even if most items in the list haven't changed, React will re-render the entire list, causing severe performance issues when the list is large.
**Action:** Extract list items into a `React.memo` component and wrap functions passed as props (like event handlers) in `useCallback` to ensure they have stable references across re-renders. This allows React to skip re-rendering items whose props haven't changed.
