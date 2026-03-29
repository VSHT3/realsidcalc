# Astro Migration Workspace

This project has been reorganized toward Astro.

## Structure
- `legacy/source-html`: original exported HTML pages used as migration source
- `public/legacy-assets`: copied static assets from previous `*_files` folders
- `src/layouts`, `src/components`, `src/pages`: Astro layout/components/routes
- `docs/asset-audit.md`: inventory and classification

## Notes
- Navigation/footer are centralized components.
- Legacy page body content is loaded via `LegacyContent.astro` and cleaned of export runtime artifacts.
- Map `embed.html` references are replaced with a single Google Maps iframe URL.
