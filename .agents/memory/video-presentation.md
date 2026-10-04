---
name: Video presentation
description: User constraint for Kossel website videos during visual upgrades.
---

Keep all website videos free of visible playback control badges and native controls, including videos added during future visual upgrades.

**Why:** The user explicitly expanded removal from the homepage hero to all video control badges completely.

**How to apply:** Preserve muted inline playback, posters, lazy loading and reduced-motion/data-saving behavior without reintroducing visible video controls.

For browser verification, do not treat an MP4 request cancellation as proof that a video asset is broken. The automated Chromium environment may lack AVC/H.264 decoding support; check codec support before diagnosing playback failure.

**Why:** Valid H.264 files with working HTTP range responses remained at zero dimensions in the tester because its browser reported no AVC support.

**How to apply:** Keep WebM/VP9 alternatives alongside MP4 for newly added site videos, and check actual decoded dimensions and advancing playback time rather than network responses alone.