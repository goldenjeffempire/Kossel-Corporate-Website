---
name: Production preview parity
description: Why static-site SEO and hydration verification must test hosting route semantics, not just generated files.
---

A production preview is valid for SEO and hydration verification only when its URL routing matches the production host.

**Why:** Vite's default preview served homepage HTML for extensionless nested URLs despite the correct prerendered page files existing. This produced a hydration mismatch that looked like an SSR defect. The actual Render host uses explicit per-page rewrites.

**How to apply:** Compare the HTML returned for a nested URL with its generated file before blaming rendering. Verify extensionless and trailing-slash URLs, not only files or JavaScript-rendered content. Keep local preview routing aligned with the host's documented rewrites when adding pages.
