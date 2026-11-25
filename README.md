# Sandip Sah — Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. It presents Sandip Sah’s education, technical skills, role, and the SurakshaNet AI project. No build tool, package installation, or external runtime dependency is required.

## Run locally

From PowerShell, in the project folder:

```powershell
cd "C:\Users\Sandip Sah\OneDrive\Desktop\WEBSITE UI REDESIGN"
python -m http.server 8000
```

Then open `http://localhost:8000`. Python 3 is required for this command. Serve over HTTP rather than `file://` so browser theme preferences can persist consistently. No `npm install` or build command is needed.

## Included

- About, education, skills, featured project, and Certifications & Professional Learning sections.
- User-provided education: B.E. Computer Science and Engineering at Rathinam Technical Campus, Coimbatore.
- Skills: C, Java, Python, Excel, and Networking.
- SurakshaNet AI — Smart Predictive Public Safety System; role: Intelligent Surveillance Software Developer.
- Accessible responsive navigation with Escape and outside-click dismissal.
- Light/dark mode toggle with a saved browser preference.
- Reduced-motion support, visible keyboard focus, semantic landmarks, and a skip link.
- System fonts, CSS illustrations, and inline SVG course icons; no third-party asset requests.
- Six completed LinkedIn Learning courses, grouped into Cloud and Cisco hubs with direct course links.
- Course completions are identified as LinkedIn Learning learning milestones, not official AWS or Cisco certifications.
  - Cloud Hub: AWS Certified Solutions Architect - Associate (SAA-C03) Cert Prep; DevOps Foundations (2016); Building Serverless Applications in AWS.
  - Cisco Hub: Cisco CCNP Enterprise: ENCOR v1.2 (350-401) Cert Prep; Deploying Cisco Meraki SD-WAN and Cloud Security Appliances by Pearson; Cisco Secure Firewall.

## Personal information boundaries

No contact details, social profiles, course dates, credential IDs, achievement claims, or additional projects were provided. The six listed courses are LinkedIn Learning completions, not official AWS or Cisco vendor certifications. No credential IDs or verification badges are claimed.

## Files

- `index.html` — semantic page content and metadata.
- `styles.css` — theme tokens, components, interactions, and responsive layout.
- `script.js` — accessible mobile menu, persisted theme toggle, and current-year footer.
- `UI_UX_AUDIT.md` — Nielsen heuristic review and remaining priorities.
- `DESIGN_SYSTEM.md` — visual direction, design tokens, and interaction standards.
- `RESPONSIVE_DESIGN.md` — responsive behavior, accessibility, and verification notes.
- `REDESIGN_REPORT.md` — implementation scope, validation, and limitations.

## Validation

This static site has no dependency manifest, build script, or existing automated test suite. See `REDESIGN_REPORT.md` for checks run during the latest update.
