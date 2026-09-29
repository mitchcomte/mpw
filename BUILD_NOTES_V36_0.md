# v36.0 — Mobile Dark-Mode Brand Protection

- Adds explicit light-only color-scheme metadata for browsers and embedded webviews.
- Adds Next.js viewport theme color matching the MPW cream palette (#fffaf6).
- Hardens root HTML/body against automatic dark-theme inference.
- Keeps MPW public pages in the intended cream/blush/green palette when the browser honors author color-scheme declarations.
- No database migration required.
- Note: a browser/user setting that explicitly forces webpage darkening may still override author styles; Samsung Internet documents this as browser-level Force Dark behavior.
