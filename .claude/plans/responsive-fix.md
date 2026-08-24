# Responsive Fix — All Sections

Context: User asked to check all responsive differences and fix problems across the page.

Approach:
- Audit @media blocks at 1024/768/480 in src/pages/Home.css
- Fix bento grid (done), hero container (1fr + title shrink), features-highlight-grid (1fr), profile/card padding, social circles wrap, CTA form stack.
- Ensure no overflow, consistent gap/padding, readable text at mobile.

Files: src/pages/Home.css (media queries ~1458-1593, plus grid/cards), src/pages/Home.jsx (inline flex directions if needed).

Verification: View at narrow viewport; confirm single-column stacks, no overlap, text readable.
