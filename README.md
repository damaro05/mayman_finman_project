# Consulting Company — Proposal Site (v0.1 draft)

A one-page site that doubles as a strategy document. Built to open a conversation with the team, not to ship to customers.

## Run it

Open `index.html` in a browser. No build step, no dependencies.

Optionally, with a local server:

```sh
python3 -m http.server 8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page skeleton and section order |
| `src/data.js` | **All copy lives here.** Edit this to change the proposal |
| `src/styles.css` | Design system (colors, type, layout) |
| `src/main.js` | Renders `data.js` into the page, handles nav/accordion/reveal |

To change wording, pricing, product names or the open questions, only touch `src/data.js`.

## What the proposal says

**Model:** consulting funds the company, products scale it. Every engagement doubles as paid product discovery. When the same problem appears across 3+ clients it graduates from custom build to a priced module.

**Practice areas (sellable now):** transformation advisory, applied AI & data, process automation, cloud & platform engineering, blockchain & tokenization, data foundations.

**Product suite (proposed):**

| Code | Working name | Domain | Stage |
| --- | --- | --- | --- |
| DOC | DocVault | Document management + AI search | Phase 1 (MVP candidate) |
| PPL | PeopleOps | Employee lifecycle | Phase 2 |
| FIN | FinFlow | Spend, invoices, cash flow | Phase 2 |
| CRM | RelateCRM | Pipeline tied to delivery | Phase 3 |
| FLW | FlowStudio | Low-code automation layer | Phase 3 (platform) |
| TKN | TokenDesk | Asset tokenization | Exploratory |

All names are placeholders.

## Decisions to make before v1

These are rendered as the "Open questions" section on the page:

1. Which vertical first? (going horizontal is the common failure mode)
2. Which single product gets MVP funding — and which get cut?
3. Is blockchain a leading practice or a parked bet?
4. Build vs. partner/resell line while our own product matures
5. Target services-to-product revenue ratio per year
6. IP ownership clauses in client contracts — the productization model depends on them

## Suggested next steps

- Replace the placeholder brand in `src/data.js` → `brand`
- Cut the product list down to what one team can actually build
- Add 2–3 real case studies or pilot targets (currently none — a credibility gap)
- Decide whether this becomes a public marketing site or stays an internal deck
