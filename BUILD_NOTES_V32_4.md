# MPW v32.4
- Added Admin Site Health “Auto Fix Safe Issues” control.
- Auto Fix is admin-authenticated and intentionally restricted to runtime/data repairs; it will never silently alter credentials, billing, destructive data, Vercel settings, or immutable production source.
- Added a Next.js file-based 1200x630 Open Graph image so nested routes inherit a branded social-sharing image even when page-level Open Graph metadata replaces parent metadata.
- Keeps scan report/JSON downloads and reruns scan after any successfully applied safe runtime repairs.
- Based on v32.3/v32.2 combined build.
