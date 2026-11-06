# Moore Financial Solutions: design kit

A copy of the Moore Financial Solutions website's pages, components and styles, for reskinning. It has the real layout and copy but none of the working parts: the enquiry form validates but sends nothing, the chat button does nothing, the calculators show fixed figures, and the photos are grey placeholders at the real sizes.

## Run it

Needs Node 24.

```
npm install
npm run dev
```

Then open http://localhost:3000. Before handing work back, run `npm run verify` (lint, typecheck and build).

## Where the design lives

- `src/app/globals.css`: colour, font and easing tokens (`@theme` at the top), plus shared classes such as `.wrap`, `.btn` and `.article`. Start here.
- Colour looks: the site has several colour variants of one brand, chosen with `?look=` in the address (default `pastel`). Each is a block of token overrides under `[data-look=...]` in `globals.css`. `/brand` shows them all side by side. If your design replaces them, one set of tokens is fine.
- Fonts: Bricolage Grotesque for headings, Figtree for body text, loaded in `src/app/layout.tsx`.
- `src/components/`: header, footer, logo (`logo.tsx`, drawn in SVG), hero and section building blocks (`sections.tsx`), form, reviews, floating buttons.
- `src/app/`: one folder per page. The homepage is `src/app/page.tsx`.
- Copy and business details live in `src/lib/` (`site.ts`, `content.ts`, `commercial.ts`, `blog.ts`) and blog posts in `src/content/blog/`. Please change the look, not the words: the copy and the regulatory wording go through compliance sign-off.

## Rules worth keeping

- Regulatory text (the footer notice, repossession warning and similar notes in `src/lib/site.ts`) must stay visible and readable on every page it appears on.
- Text must pass WCAG AA contrast (4.5:1 for body text) and keyboard focus must stay visible.
- Keep `data-scroll-behavior="smooth"` on `<html>` in `layout.tsx`, or pages open partway down after a link click.
- Animate only transform and opacity, and respect reduced motion.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, MDX for blog posts.
