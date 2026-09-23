# Hunt the Universe

Astro source for [hunttheuniverse.com](https://hunttheuniverse.com). GitHub Actions builds the site on pushes to `main` and deploys `dist/` to GitHub Pages.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm build` to type-check and generate the static site. Edit `src/content/event.md` and `src/content/pages/` to update event copy. The registration and partner forms are linked from their respective Astro pages.
