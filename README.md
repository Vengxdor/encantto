# Encantto D' Joyas

Astro 5 + Tailwind CSS 4 + React (islands only where interaction is needed).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

```
src/
  pages/index.astro          composes the six sections, nothing else
  layouts/Layout.astro       document shell, fonts, meta
  components/
    Header.astro             announcement bar + sticky nav
    Hero.astro               split hero with looping video
    Collections.astro        signature pieces + the four collections
    Feature.astro            the craft story + stats
    Locations.astro          both boutiques, hours, directions
    Footer.astro             addresses, page links, legal
    Eyebrow.astro            shared small-caps label
    Placeholder.astro        striped image slot (swap for <Image />)
    react/MobileNav.tsx      the only React island (client:load)
  data/site.ts               all copy and content as typed data
  styles/global.css          Tailwind theme tokens (colors, fonts, rise animation)
public/video/                hero.mp4, atelier.mp4
```

## Notes

- Design tokens live in the `@theme` block of `global.css`, so classes like
  `text-gold`, `bg-night-2` and `font-display` are the palette \u2014 no hex codes
  scattered through markup (a few one-off tints remain as arbitrary values).
- Content is data-driven: edit `src/data/site.ts` to change products,
  collections, addresses or hours; the sections render whatever is there.
- React is used once, for the mobile nav drawer. Everything else ships as
  zero-JS static HTML.
- `Placeholder.astro` marks every spot that needs a real photograph. Replace
  with `astro:assets` `<Image />` once you have the product shots.

## Next

Standalone `/collections`, `/about` and `/contact` routes (from the original
design) drop into `src/pages/` reusing these same components. The EN/ES toggle
in the header is presentational \u2014 wire it to Astro i18n routing when the
Spanish copy is ready.
