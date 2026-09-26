# maestro-hong.github.io

Source for [unio-analytics.com](https://unio-analytics.com), built by GitHub Pages (Jekyll).

## Korean edition

English pages keep their addresses. Korean pages mirror them under `/ko/`.

| English | Korean |
|---|---|
| `/` | `/ko/` |
| `/entry/<file-name>/` | `/ko/entry/<file-name>/` |
| `/category/<slug>/` | `/ko/category/<slug>/` |
| `/stats/` | `/ko/stats/` |
| `/methodology/`, `/about/` | `/ko/methodology/`, `/ko/about/` (not written yet; the Korean menu links to the English pages until they exist) |

**Adding a Korean entry**

1. Copy `_entries_ko/template.md`.
2. If it translates an English entry, give it exactly the same file name as the English file (for example `_entries/AI-walmart-fraud.md` → `_entries_ko/AI-walmart-fraud.md`). Addresses come from the file name, not the `slug` field.
3. Set `published: true`.

**The EN / KR switch** sits at the right edge of the screen (in the header on phones) on every page. It goes to the same page in the other language when one exists, and otherwise to the other language's front page.

**Korean lists** (front page, categories, stats) show every entry: the Korean version where one exists, and the English entry, marked 영문, until it does.

**Where Korean text lives**

- Menu, labels and footer: `_data/i18n.yml`
- Category and status names: the `*_ko` fields in `_data/categories.yml` and `_data/statuses.yml`
- Front page and stats page text: `ko/index.html`, `ko/stats.html`

**Feeds**: `/feed.xml` (English) and `/ko/feed.xml` (Korean).
