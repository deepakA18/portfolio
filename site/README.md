# Deepak Agashe — portfolio

A personal portfolio closely following leerob.com's current two-column composition: serif text, a single biography, a two-column Notes list, dated Blogs, and an original illustration. No guestbook.

## Run locally

Requires Node 22.13+.

```sh
npm ci
npm run dev
```

The default local URL is http://localhost:5173.

```sh
npx tsc --noEmit
npm run build
npm start
```

The app uses React, TypeScript, Vinext, and Cloudflare Workers. No database or API keys are needed.

## Personalize

- `app/site-config.ts`: name, biography, site origin.
- `app/notes/notes.ts`: six short sample notes.
- `app/writing/posts.ts`: two sample essays and dates.
- `app/page.tsx`: homepage sections and blog links.
- `app/globals.css`: typography, spacing, responsive layout.
- `public/images/landscape.webp`: original generated illustration.

The biography is starter copy. The notes and first two essays are labeled sample content; replace these with your writing before sharing as a finished personal portfolio. No employment, achievements, contacts, or social handles were invented.

## Hosting

`.openai/hosting.json` retains the registered private Sites project. The original registration slug includes “guestbook”; this is only an existing hosting identifier and the app has no guestbook feature or route. Site access remains private unless explicitly changed.

Use the Sites workflow to build, synchronize source, and publish. Keep generated output, local runtime state, and credentials out of source control.

## Visual references

The user's final direction is leerob.com only. General skill defaults about large marketing layouts, numerous pictures, and animation were overridden to preserve that explicit reference. The image is original AI-generated artwork, not copied from the reference site. Its prompt and provenance are in `DESIGN.md`.
