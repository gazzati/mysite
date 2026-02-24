# gazzzati.ru — Personal Portfolio

## Stack
- **Framework**: Next.js 15 (App Router, SSG)
- **Language**: TypeScript
- **Styling**: SCSS Modules (`Component.module.scss`)
- **i18n**: next-intl (3 locales: en, ru, os)
- **HTTP**: Axios for API calls

## Architecture
- `src/app/[locale]/` — pages with locale prefix
- `src/components/` — shared UI components
- `src/sections/` — page sections (Start, About, Projects, Contacts)
- `src/i18n/` — next-intl configuration
- `src/lib/` — utilities (api, age, animations)
- `src/hooks/` — React hooks
- `messages/` — translation JSON files (en.json, ru.json, os.json)

## Conventions
- Client components must have `'use client'` directive
- SCSS variables auto-imported via `sassOptions.additionalData`
- Translations: use `useTranslations()` in client, `getTranslations()` in server
- All pages render AllSections; sub-pages add ScrollToSection for auto-scroll

## Commands
- `yarn dev` — development server on port 3000
- `yarn build` — production build (SSG)
- `yarn start` — production server
- `yarn lint` — ESLint check

## i18n Rules
- Add translations to all 3 files: `messages/{en,ru,os}.json`
- SEO metadata in `meta` namespace
- Locale switching cycles: en → ru → os → en

## SEO
- Each page has unique `generateMetadata` with title, description, OG tags
- hreflang alternates on all pages
- Sitemap at `/sitemap.xml`, robots at `/robots.txt`
