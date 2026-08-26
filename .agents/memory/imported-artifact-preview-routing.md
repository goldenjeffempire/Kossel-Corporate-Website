---
name: Imported artifact preview routing
description: How imported artifact manifests interact with manually configured preview workflows.
---

For an imported web artifact that is not yet registered in the workspace artifact inventory, its manifest can still control shared-proxy routing. Once the platform registers the artifact, use only its managed workflow.

**Why:** The shared proxy may apply the imported manifest's route and port mapping before the artifact registry and screenshot helper recognize the artifact. A temporary workflow on a different port can run normally but produce a proxy 502; leaving it running after registration prevents the managed workflow from binding its required port.

**How to apply:** Inspect an imported manifest before configuring a temporary workflow and match its declared `localPort` if one is necessary. After artifact registration, remove that legacy workflow and start/restart only the exact managed service; verify the proxied root response in addition to workflow logs.