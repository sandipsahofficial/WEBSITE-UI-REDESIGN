# Responsive design

## Layout behavior

| Range | Behavior |
|---|---|
| 320–480px | Single-column hero, project, and course cards; compact header with accessible menu; two-column skill cards; fluid headings and stacked footer. |
| 481–640px | Mobile navigation remains; content uses the narrow single-column layout and fluid gutters; course cards are stacked. |
| 641–820px | Collapsible navigation remains; hero and featured project use two columns when space allows; skills use three columns; course cards use two columns. |
| 821–900px | Desktop navigation; two-column hero; tighter section spacing and three-column skills; course cards use two columns. |
| 901–1440px | Centered 1120px content grid and 1280px header; full navigation, two-column hero/project, five-column skills, and three-column course hubs. |
| 1441px+ | Capped content width with extra hero vertical space. |

Containers and type scale fluidly. The illustrations are built in CSS and the course icons are inline SVG, so they resize without large image assets. There are no tables or fixed-width images.

## Accessibility and interaction

- Semantic header, navigation, main content, sections, headings, lists, and footer.
- Skip-to-content link; visible focus indication; touch-sized theme and menu controls.
- Menu supports keyboard activation, Escape, outside-click dismissal, and link selection; its accessible state and name track open/closed state. Keyboard navigation follows the menu and moves focus to the destination heading after selection.
- Theme toggle updates its accessible name and pressed state and remembers the selection in browser storage.
- Reduced-motion preferences disable animations and smooth scrolling.
- No contact form or links requiring missing personal details.

## Verification

The latest browser smoke test is recorded in `REDESIGN_REPORT.md`. It covers representative mobile, tablet, laptop, and desktop widths and exercises navigation and theme switching. It is not a full cross-browser, accessibility-audit, or assistive-technology certification.
