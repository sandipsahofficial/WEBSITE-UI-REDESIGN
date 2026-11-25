# Redesign report

## Scope

This static portfolio presents details supplied by Sandip Sah, with an added Certifications & Professional Learning section for six completed LinkedIn Learning courses. The site has no framework, build pipeline, backend, authentication, or API integrations.

## Implemented

- Premium hero and About section identifying Sandip Sah and the Intelligent Surveillance Software Developer role.
- Education: B.E. Computer Science and Engineering, Rathinam Technical Campus, Coimbatore.
- Skills: C, Java, Python, Excel, and Networking, displayed without invented proficiency scores.
- Featured project: SurakshaNet AI — Smart Predictive Public Safety System.
- Six completed LinkedIn Learning courses are grouped into Cloud Hub (Cloud Computing) and Cisco Hub (Computer Networking), with responsive cards, technology-themed inline icons, completion badges, and outbound course links.
- Course completions are clearly distinguished from official AWS or Cisco vendor certifications. No credential IDs, verification badges, or certificate images are shown.
- Functional light/dark theme toggle, persisted in browser storage, with updated accessible state and browser theme color.
- Responsive layouts, theme-aware design tokens, card hover feedback, subtle hero animation, keyboard-visible focus, reduced-motion support, and Escape-accessible navigation.
- No invented contact details, social profiles, course dates, credential IDs, achievements, or additional projects.

## Design and accessibility

The editorial design uses system font stacks, warm paper/evergreen/clay in light mode, and a deep forest palette in dark mode. Semantic sections, heading hierarchy, accessible menu state, skip navigation, focus indication, and labeled theme control are included.

## Performance and dependencies

No libraries or build dependencies are used. Google Fonts requests were removed during the readiness audit; the site uses system font stacks, CSS illustrations, and inline SVG icons without third-party asset requests. The six course anchors intentionally link to LinkedIn Learning and open in a new tab with `noopener noreferrer`.

## Validation

`node --check script.js` passed and all 13 local anchor references resolve. The personalized page loaded over HTTP with status 200. All five desktop navigation destinations and all five mobile destinations were activated; mobile menu state closed after selection and focus moved to the target heading. Escape returned focus to the menu toggle. Keyboard Tab reached the skip link with a visible outline, then the menu toggle and first navigation link in order.

The light/dark toggle changed rendered colors and accessible pressed state, persisted through reload, and returned to light mode. Twelve responsive widths (320, 375, 480, 640, 768, 820, 821, 900, 1024, 1280, 1440, and 1600px) showed no horizontal overflow. Skill cards rendered in 2, 3, and 5 columns at 375, 768, and 1280px respectively. Reduced-motion mode set entrance animation to `1e-05s` and scrolling to `auto`. Representative browser-computed text contrast ratios ranged from 4.99:1 to 15.75:1 across both themes. No page errors, console errors, or third-party requests were observed.

The Python server command below was not run in this audit environment because Python is unavailable; browser checks used a temporary local Node preview server. No package/build scripts or automated test suite are present.

## Certifications & learning validation

The six course cards were checked against the supplied titles and URLs. Browser assertions confirmed the six exact LinkedIn Learning destinations, `target="_blank"`, descriptive accessible labels, and `rel="noopener noreferrer"` on every course link. The existing Certifications navigation link targets the section. The embedded browser did not complete popup clicks to the external provider, so external page reachability and login behavior were not verified.

The local page was checked at 320, 375, 480, 640, 768, 820, 821, 900, 1024, 1280, 1440, and 1600px. No horizontal overflow remained; the course grid displayed one, two, or three columns as available. Testing exposed a pre-existing 320px minimum-width rule that caused 15px of overflow when the browser reserved scrollbar width; removing that constraint resolved it. Light/dark rendering and persisted theme state were verified, as were mobile menu open/close state, in-page navigation, focus styling, and no page or console errors. The new-tab attributes were validated in markup, but the external destinations were not opened successfully in the browser.

Representative course title, platform, completion-badge, and link color pairs measured at least 5.49:1 in both themes. This is a targeted contrast check, not a complete WCAG conformance audit.

These checks validate the displayed course titles and link behavior only; they do not verify course-provider enrollment or completion records.

## Remaining limitations

- No contact destination, social profile, course dates, credential IDs, project implementation specifics, or vendor-issued AWS/Cisco certification records were provided; these are not invented.
- The site has no automated test suite or build command.
- Browser smoke tests do not replace cross-browser, accessibility-tool, or assistive-technology review.
