# Design system

## Direction

An editorial developer portfolio pairing warm paper surfaces, evergreen accents, clay highlights, and restrained CSS illustrations. Content prioritizes Sandip Sah’s education, technical toolkit, and SurakshaNet AI project. A dark theme uses the same component hierarchy with deep forest surfaces.

## Color tokens

| Role | Light | Dark | Use |
|---|---|---|---|
| Paper | `#f6f5f0` | `#121713` | Main canvas |
| Deep paper | `#ebe9e0` | `#1b241d` | Secondary surfaces |
| Surface | `#fffefa` | `#202a23` | Cards and navigation |
| Ink | `#20231f` | `#eff2e9` | Primary text |
| Muted | `#656a62` | `#b0b9ad` | Supporting text |
| Evergreen | `#31483d` | `#a4bca1` | Identity and emphasis |
| Clay | `#b24732` | `#f09978` | Accents and focus |
| Line | `#deded5` | `#39443a` | Dividers and borders |

Theme variables live in `styles.css` under `:root` and `:root[data-theme="dark"]`. The toggle in the header updates the document theme and browser theme-color metadata; the preference is stored in local storage.

## Typography and spacing

- System UI fonts are used for body text and display headings, with Georgia supplying a restrained italic editorial accent. Typography has no network dependency.
- Headings scale with `clamp()`. Body paragraphs use generous line-height (about 1.8); labels use small uppercase text with tracked lettering.
- Content width caps at 1120px; header width caps at 1280px. Gutters are 32px desktop and 20px mobile.
- Spacing scale: 8, 16, 24, 32, 48, 72, 112px.
- Desktop hero, education, and project layouts use balanced grids; cards collapse to single columns on narrow screens.

## Components and states

- Cards use 14px corners, thin theme-aware borders, and a soft shadow on hover/elevation.
- Primary action is a high-contrast ink button with a directional cue; text links use clay indicators and short hover motion.
- Skill cards show names and broad categories only—no unverified proficiency scores.
- Mobile navigation exposes `aria-expanded` and `aria-controls`, follows keyboard tab order from the toggle to the links, closes on Escape/outside click/link selection, and focuses the destination heading after link selection.
- Theme control is a labeled button with `aria-pressed`, an updated accessible name, a sun/moon glyph, and persistent preference.
- Course cards use theme-aware surfaces, clear LinkedIn Learning and Completed labels, technology-themed inline SVG icons, and direct course links. Course completions are not presented as vendor-issued certifications.
- No contact form, contact destination, social link, credential IDs, or verification badges are shown without verified details.
- Iconography uses CSS shapes and inline SVG; there is no icon dependency.
- Hover and entrance animations are subtle and are disabled/reduced by `prefers-reduced-motion`.
