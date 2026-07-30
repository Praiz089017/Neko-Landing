Difficulty: Medium
Several navigation and footer links are still using href="#" as a placeholder instead of a real destination. Clicking them does nothing (or just jumps to the top of the page), which reads as broken to a visitor.
Found occurrences:
src/Navbar.tsx:71 — "Explore Assets" link
src/Footer.tsx:30, :46, :62 — legal/info links
src/Footer.tsx:84, :97, :108, :121 — social/footer links
Task
Wire each link to its real destination (external URL, in-app route, or anchor on the page).
For links that genuinely have no destination yet (e.g. Terms/Privacy not written), either hide them or point to a real "coming soon" page instead of a dead #.
Add target="_blank" rel="noopener noreferrer" to any external links while touching them.
Acceptance criteria
No remaining href="#" in Navbar.tsx or Footer.tsx unless intentionally a same-page anchor.
Every link either navigates somewhere real or is removed.