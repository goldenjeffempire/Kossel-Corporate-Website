---
name: Sitemap submission checks
description: Check the final live sitemap URL rather than hiding redirects during verification.
---

Inspect live sitemap response headers without following redirects before recommending a Search Console submission URL.

**Why:** Google's Sitemaps report documentation states that submitted sitemap URL redirects are not followed. A successful request with automatic redirect-following can hide a redirect and lead to recommending the wrong submission address.

**How to apply:** Recommend the directly served XML URL within the verified Search Console property. Validate both its HTTP response and XML content; do not treat a redirect-following HTTP 200 as proof that the submitted address itself serves XML.