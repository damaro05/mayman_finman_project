# Consulting Company — Proposal Site

Two one-page versions with different audiences.

- **Version 1:** consulting-to-product concept at the repository root
- **Version 2:** streamlined, outward-facing sales site under `/v2/`

Live pages after GitHub Pages deploys:

- `https://damaro05.github.io/mayman_finman_project/`
- `https://damaro05.github.io/mayman_finman_project/v2/`

## Run it

Open `index.html` or `v2/index.html` in a browser. No build step or dependencies are required.

Optionally, with a local server:

```sh
python3 -m http.server 8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Version 1 page structure |
| `src/data.js` | Version 1 proposal copy |
| `v2/index.html` | Version 2 page structure |
| `v2/data.js` | **Version 2 proposal copy** |
| `v2/main.js` | Version 2 renderer and interactions |
| `src/styles.css` | Shared visual design for both versions |
| `src/main.js` | Version 1 renderer and interactions |

The two versions share the same colors, typography, spacing and component design while presenting different content.

## Version 2 positioning

**Market:** businesses that are not yet fully digitalized, with the Dominican Republic as the initial focus and an international, European-inspired outlook on design, privacy, security and delivery quality.

**Model:** guide each client through the full digitalization process, develop personalized software using reusable solution foundations and provide continued use through a commercial license. The relationship continues after launch through support, maintenance, security updates, upgrades and new features.

**Public message:** better ways to work. The site leads with client problems and outcomes rather than explaining the internal business model.

**Why choose us:** business-first guidance, software made to fit, one accountable partner and continuous improvement after launch.

**Client-facing solution areas:** documents and approvals, operations and workflow, customer management, and data-driven decisions.

## Decisions to make next

These remain internal decisions and are intentionally not rendered on the public site:

1. Select the first Dominican business segment and define its highest-value manual workflow.
2. Define what the standard license includes: users or sites, hosting, maintenance, support and security updates.
3. Set the boundary between reusable foundations, configurable workflows and separately priced custom development.
4. Define realistic support hours, response targets, uptime objectives, backup policy and incident handling.
5. Decide how to communicate local Dominican understanding and a European quality outlook without implying a legal presence or certifications that do not exist.
6. Select one first solution capable of producing a measurable reference case in a manageable project.

## Suggested next steps

1. Interview 5–10 target businesses in the Dominican Republic and document their current workflows, costs, risks and willingness to pay.
2. Choose one segment and one repeatable workflow for the first pilot instead of marketing all six solution areas equally.
3. Draft the commercial structure: assessment fee, implementation milestones, license basis, care plan and pricing for new features.
4. Prepare contract terms covering software ownership, client data, confidentiality, license rights, service levels, termination and data export.
5. Define the technical operating baseline for hosting, backups, monitoring, security, privacy and disaster recovery.
6. Deliver one reference implementation and capture measurable before-and-after evidence, a client quote and a short case study.
7. Replace the placeholder brand and contact details before using Version 2 as a public marketing page.
