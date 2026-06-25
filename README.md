# Transport Site

Marketing site for a passenger transport company. Built with Astro + Tailwind CSS.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build to `./dist/`                          |
| `npm run preview` | Preview the production build locally        |

## Editing content

All site text lives in `src/i18n/`. Each language is a single file:

```
src/i18n/
├── ro.ts   ← Romanian
├── en.ts   ← English
└── index.ts
```

Open the relevant file and edit the strings directly. The structure is the same across all language files.

## Adding a new language

**1. Create a translation file**

Copy an existing one and translate the strings:

```sh
cp src/i18n/en.ts src/i18n/de.ts
```

Then open `src/i18n/de.ts` and replace the English text with the new language.

**2. Register the language**

In `src/i18n/index.ts`, import the new file and add it to the `translations` object and `locales` array:

```ts
import ro from "./ro";
import en from "./en";
import de from "./de"; // add this

const translations = { ro, en, de } as const; // add de here

export const locales: Locale[] = ["ro", "en", "de"]; // add de here
```

**3. Add it to Astro's routing config**

In `astro.config.mjs`, add the locale to the `locales` array:

```js
i18n: {
  defaultLocale: "ro",
  locales: ["ro", "en", "de"], // add de here
  ...
}
```

**4. Create the page files**

Copy an existing locale folder and rename it:

```sh
cp -r src/pages/en src/pages/de
```

Then open each file in `src/pages/de/` and change `"en"` to `"de"` in the two places it appears (the `useTranslations` call and the `lang` prop).

**5. Add the switcher link in navigation**

In `src/components/navigation.astro`, add the URL and the link button:

```astro
// in the frontmatter
const deUrl = getRelativeLocaleUrl("de", slug);
```

```astro
// in the template, next to the existing RO | EN links
<a href={deUrl} class={lang === "de" ? "text-white" : "text-gray-400 hover:text-white"}>DE</a>
```
