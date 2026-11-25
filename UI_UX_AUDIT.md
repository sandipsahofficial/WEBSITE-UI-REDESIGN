# UI/UX Audit

## Scope

This is a heuristic review of the personalized portfolio implementation. The site has no backend, account flow, data-entry forms, or previous application routes.

| Nielsen heuristic | Finding / issue | Severity | Affected area | Improvement / priority |
|---|---|---:|---|---|
| 1. Visibility of system status | Theme and mobile-menu state should be clear to all users. | Medium | Header | Theme button updates `aria-pressed` and its label; menu exposes `aria-expanded` and a stateful accessible name. Implemented. |
| 2. Match between system and real world | Portfolio claims should reflect only the information Sandip supplied. | Medium | About, education, skills, project, certifications | Present the six named LinkedIn Learning completions as courses, not official AWS or Cisco certifications. No credential IDs or verification marks are claimed. |
| 3. User control and freedom | An open mobile menu needs quick exit paths. | Medium | Mobile navigation | Escape closes and restores focus; outside click and link selection also close it. Implemented. |
| 4. Consistency and standards | Theme changes should preserve the same hierarchy and component language. | Low | Whole page | Shared CSS tokens define both light and dark states; cards and controls reuse common patterns. |
| 5. Error prevention | An invented contact address or vendor certification would mislead visitors. | Medium | Contact/certifications | External links are labeled as LinkedIn Learning courses, with completed status limited to the six courses supplied. No contact action or vendor-issued credential is implied. |
| 6. Recognition rather than recall | Visitors should be able to scan education, skills, and the featured project directly. | Low | Main navigation/content | Persistent section navigation and descriptive section headings, skill labels, and project-role metadata. |
| 7. Flexibility and efficiency of use | Keyboard-only navigation must not require pointer gestures. | Low | Whole page | Semantic anchors, skip link, focus styles, keyboard-operated theme/menu buttons, and Escape support. |
| 8. Aesthetic and minimalist design | Dense or decorative elements could compete with the personal profile. | Low | Whole page | Editorial hierarchy, restrained colors, abstract CSS artwork, and subtle interactions keep focus on the content. |
| 9. Error recognition and recovery | The site has no form or remote action that can fail silently. | Low | Whole page | No fake contact submission or empty project links; theme storage errors are logged while theme switching remains available. |
| 10. Help and documentation | Editors need to know what details were intentionally omitted. | Low | Repository | README identifies the included content and warns that unknown contact and certification details were not fabricated. |

## Remaining priorities

1. Add vendor certification claims only if separately earned and verified; the current entries are course completions.
2. Add contact or social links only after actual destinations are provided.
3. Run a full accessibility audit and verify with assistive technology before publication.

## Production audit follow-up

The light-theme clay accent was darkened and the small project-art caption now uses the primary text color. Browser-computed contrast checks for representative text, navigation, button, role-chip, project-caption, and certification pairs measured at least 4.99:1 across both themes. This is a targeted contrast check, not a complete WCAG conformance audit.
