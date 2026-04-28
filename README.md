# Contract Management + SOR Prototype

Interactive front-end prototype based on the shared PRD and the existing Inventory System UI patterns.

## What’s included

- Contract registry with filters
- SOR Configuration module with a read-only SOR audit dashboard and a separate Configure SOR tab
- Contract detail page with base-price input, derived margin/NLC, VSM-derived line attributes, and audit trail
- Create Contract wizard
- Multi-destination hub splitting into one contract per generated lane
- Explicit commercial type selection (`OR` or `SOR`)
- Auto-generated contract titles with optional override
- Structured payment terms for both OR and SOR contracts
- Lane uniqueness and overlap checks per generated lane
- Margin-driven pricing for both OR and SOR with derived base price and `NLC`
- VSM warning behavior
- Duplicate Contract flow
- Bulk CSV onboarding grouped by lane and commercial type
- Downloadable and local CSV template in [contract_bulk_upload_template_v6.csv](/Users/paridhigupta/Documents/Codex/2026-04-23-files-mentioned-by-the-user-prd/contract_bulk_upload_template_v6.csv)
- Downloadable and local SOR config CSV template in [sor_configuration_bulk_upload_template.csv](/Users/paridhigupta/Documents/Codex/2026-04-23-files-mentioned-by-the-user-prd/sor_configuration_bulk_upload_template.csv)
- Finance-controlled lifecycle (`DRAFT → PENDING_APPROVAL → FINANCE_APPROVED → ACTIVE`)
- Finance approvals queue with approve/reject actions and rejection reason capture
- Renewal workflow that creates a new contract ID and expires the old record
- Price revision / amendment simulation routed to finance approval
- Final integrated PRD basis in [FINAL_PRD_BASIS_v6_SOR_CONFIGURATION.md](/Users/paridhigupta/Documents/Codex/2026-04-23-files-mentioned-by-the-user-prd/FINAL_PRD_BASIS_v6_SOR_CONFIGURATION.md)

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## GitHub Pages

The shipped [index.html](/Users/paridhigupta/Documents/Codex/2026-04-23-files-mentioned-by-the-user-prd/index.html) is now self-contained for hosting, with CSS and JS inlined so the UI does not depend on relative asset paths. This makes it more reliable when published from a GitHub Pages subpath such as `/Supply/`.

Also included:
- [.nojekyll](/Users/paridhigupta/Documents/Codex/2026-04-23-files-mentioned-by-the-user-prd/.nojekyll) so GitHub Pages serves the site as plain static files

## Notes

- This is a front-end prototype with seeded data in [`script.js`](/Users/paridhigupta/Documents/Codex/2026-04-23-files-mentioned-by-the-user-prd/script.js).
- The current implementation reflects the updated contract-management rules, including OR/SOR lane contracts, commercial-type filtered SKU selection, base-price input with derived margin/NLC, finance activation on start date, and SOR configuration workflows.
