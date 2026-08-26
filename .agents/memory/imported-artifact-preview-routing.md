---
name: Imported artifact preview routing
description: How imported artifact manifests interact with manually configured preview workflows.
---

For an imported web artifact that is not registered in the workspace artifact inventory, configure the preview workflow to listen on the `localPort` declared in its existing artifact manifest.

**Why:** The shared proxy may still apply the imported manifest's route and port mapping, while the artifact registry and screenshot helper do not recognize that imported artifact. A workflow on a different port can run normally but produce a proxy 502.

**How to apply:** When setting up an imported web project, inspect its artifact manifest before creating a workflow. Match the workflow's `PORT` and wait-for-port setting to the declared `localPort`; verify the proxied root response in addition to workflow logs.