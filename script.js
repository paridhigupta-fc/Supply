const appState = {
  today: new Date("2026-04-28T10:00:00"),
  currentModule: "contracts",
  currentSorTab: "dashboard",
  selectedContractId: "CT-25018",
  duplicateSourceId: "CT-25018",
  amendmentSourceId: "CT-25018",
  rejectApprovalContractId: null,
  wizardStep: 0,
  wizardDraft: null,
  selectedSorConfigKey: "V-2044::SKU-4210",
};

const settlementCycles = [3, 7, 14, 21, 30];
const contractStatuses = ["ALL", "DRAFT", "PENDING_APPROVAL", "FINANCE_APPROVED", "ACTIVE", "REJECTED", "EXPIRED", "NEAR_EXPIRY", "TERMINATED"];
const commercialTypes = ["OR", "SOR"];
const superCategories = ["Staples", "Dairy", "Fresh", "Frozen", "Beverages"];

const vendors = [
  {
    id: "V-1001",
    name: "Dairy Tales Namdhari Pvt Ltd",
    code: "VEN00038",
    state: "Karnataka",
    locations: ["Bidadi Depot", "Nelamangala Cold Store"],
  },
  {
    id: "V-2044",
    name: "UrbanHarvest Foods",
    code: "VEN00172",
    state: "Maharashtra",
    locations: ["Bengaluru DC", "Pune Consolidation Center"],
  },
  {
    id: "V-3098",
    name: "Greenroot Farms",
    code: "VEN00418",
    state: "Tamil Nadu",
    locations: ["Hosur Packhouse", "Salem Supplier Hub"],
  },
];

const hubs = [
  { id: "H-01", name: "Bengaluru DC", state: "Karnataka" },
  { id: "H-02", name: "Mumbai DC", state: "Maharashtra" },
  { id: "H-03", name: "Delhi DC", state: "Delhi" },
  { id: "H-04", name: "Chennai DC", state: "Tamil Nadu" },
];

const skus = [
  {
    id: "SKU-8821",
    name: "Cow Milk 500ml",
    model: "OR",
    uom: "PACK",
    hsn: "04012000",
    gst: 5,
    mrp: 34,
    vsmMissing: false,
  },
  {
    id: "SKU-9912",
    name: "Curd Cup 400g",
    model: "OR",
    uom: "UNIT",
    hsn: "04031000",
    gst: 5,
    mrp: 46,
    vsmMissing: true,
  },
  {
    id: "SKU-4210",
    name: "Avocado Hass Premium",
    model: "SOR",
    uom: "KG",
    hsn: "08044000",
    gst: 12,
    mrp: 220,
    vsmMissing: false,
  },
  {
    id: "SKU-4211",
    name: "Blueberry Punnet 125g",
    model: "SOR",
    uom: "BOX",
    hsn: "08104000",
    gst: 12,
    mrp: 155,
    vsmMissing: false,
  },
  {
    id: "SKU-7723",
    name: "Paneer Block 200g",
    model: "OR",
    uom: "UNIT",
    hsn: "04061000",
    gst: 5,
    mrp: 92,
    vsmMissing: false,
  },
];

const sorConfigurations = [
  {
    key: "V-1001::SKU-8821",
    vendorId: "V-1001",
    skuId: "SKU-8821",
    commercialType: "OR",
    updatedAt: "Apr 28, 2026 10:10",
    updatedBy: "Paridhi Gupta",
    history: [{ label: "Configuration created", meta: "Initial OR commercial type.", at: "Apr 28, 2026 10:10", by: "Paridhi Gupta" }],
  },
  {
    key: "V-1001::SKU-7723",
    vendorId: "V-1001",
    skuId: "SKU-7723",
    commercialType: "OR",
    updatedAt: "Apr 28, 2026 10:15",
    updatedBy: "Paridhi Gupta",
    history: [{ label: "Configuration created", meta: "Initial OR commercial type.", at: "Apr 28, 2026 10:15", by: "Paridhi Gupta" }],
  },
  {
    key: "V-1001::SKU-9912",
    vendorId: "V-1001",
    skuId: "SKU-9912",
    commercialType: "OR",
    updatedAt: "Apr 28, 2026 10:18",
    updatedBy: "Paridhi Gupta",
    history: [{ label: "Configuration created", meta: "Initial OR commercial type.", at: "Apr 28, 2026 10:18", by: "Paridhi Gupta" }],
  },
  {
    key: "V-2044::SKU-4210",
    vendorId: "V-2044",
    skuId: "SKU-4210",
    commercialType: "SOR",
    updatedAt: "Apr 28, 2026 10:25",
    updatedBy: "Riya Shah",
    history: [{ label: "Changed to SOR", meta: "Commercial type aligned for SOR rollout.", at: "Apr 28, 2026 10:25", by: "Riya Shah" }],
  },
  {
    key: "V-2044::SKU-4211",
    vendorId: "V-2044",
    skuId: "SKU-4211",
    commercialType: "SOR",
    updatedAt: "Apr 28, 2026 10:26",
    updatedBy: "Riya Shah",
    history: [{ label: "Changed to SOR", meta: "Commercial type aligned for SOR rollout.", at: "Apr 28, 2026 10:26", by: "Riya Shah" }],
  },
  {
    key: "V-3098::SKU-4211",
    vendorId: "V-3098",
    skuId: "SKU-4211",
    commercialType: "OR",
    updatedAt: "Apr 28, 2026 10:32",
    updatedBy: "Rahul Menon",
    history: [{ label: "Configuration created", meta: "Initial OR commercial type.", at: "Apr 28, 2026 10:32", by: "Rahul Menon" }],
  },
  {
    key: "V-2044::SKU-8821",
    vendorId: "V-2044",
    skuId: "SKU-8821",
    commercialType: "OR",
    updatedAt: "Apr 28, 2026 10:40",
    updatedBy: "Aditi Rao",
    history: [{ label: "Configuration created", meta: "Initial OR commercial type.", at: "Apr 28, 2026 10:40", by: "Aditi Rao" }],
  },
];

const contracts = [
  {
    id: "CT-25018",
    vendorId: "V-1001",
    supplyLocation: "Bidadi Depot",
    hubId: "H-01",
    type: "OR",
    superCategory: "Dairy",
    title: "Dairy Tales Namdhari Pvt Ltd - Bidadi Depot - Bengaluru DC - Dairy - OR",
    titleAuto: true,
    status: "ACTIVE",
    currency: "INR",
    payment: { mode: "OR", paymentType: "CREDIT", creditDays: 21, advanceAmount: null, paymentCurrency: "INR" },
    notes: "Primary dairy replenishment lane for Bengaluru DC.",
    startDate: "2026-04-20",
    endDate: "2026-07-20",
    createdBy: "Paridhi Gupta",
    categoryOwner: "Aditi Rao",
    latestFinanceReason: "",
    lines: [
      { skuId: "SKU-8821", basePrice: 26.5, marginValue: 6.18, nlc: 27.825, moq: 60, minOrderValue: 3000, leadTime: "P2D", vsmStatus: "READY" },
      { skuId: "SKU-7723", basePrice: 70, marginValue: 18.5, nlc: 73.5, moq: 24, minOrderValue: 2400, leadTime: "P3D", vsmStatus: "READY" },
    ],
    audit: [
      { label: "Finance approved", meta: "Lifecycle moved to FINANCE_APPROVED before activation.", at: "Apr 20, 2026 09:50" },
      { label: "Contract activated", meta: "Operations unlocked after finance approval.", at: "Apr 20, 2026 10:32" },
      { label: "Draft created", meta: "Paridhi Gupta", at: "Apr 19, 2026 17:48" },
    ],
  },
  {
    id: "CT-25022",
    vendorId: "V-2044",
    supplyLocation: "Bengaluru DC",
    hubId: "H-02",
    type: "SOR",
    superCategory: "Staples",
    title: "UrbanHarvest Foods - Bengaluru DC - Mumbai DC - Staples - SOR",
    titleAuto: true,
    status: "PENDING_APPROVAL",
    currency: "INR",
    payment: { mode: "SOR", firstPaymentDays: 14, settlementCycleDays: 7 },
    notes: "Revision pending finance approval after margin change.",
    startDate: "2026-03-01",
    endDate: "2026-06-01",
    createdBy: "Riya Shah",
    categoryOwner: "Nitin Verma",
    latestFinanceReason: "",
    lines: [
      { skuId: "SKU-4210", basePrice: 159.82, marginValue: 41, nlc: 179, moq: 15, minOrderValue: 3000, leadTime: "P1D", vsmStatus: "READY" },
      { skuId: "SKU-4211", basePrice: 110.71, marginValue: 31, nlc: 124, moq: 20, minOrderValue: 2000, leadTime: "P1D", vsmStatus: "READY" },
    ],
    audit: [
      { label: "Change submitted for finance approval", meta: "Any contract creation or change now requires finance approval.", at: "Apr 23, 2026 16:10" },
      { label: "Pending approval", meta: "Old commercial terms remain effective until approval.", at: "Apr 23, 2026 16:11" },
    ],
  },
  {
    id: "CT-25025",
    vendorId: "V-1001",
    supplyLocation: "Nelamangala Cold Store",
    hubId: "H-03",
    type: "OR",
    superCategory: "Dairy",
    title: "Dairy Tales Namdhari Pvt Ltd - Nelamangala Cold Store - Delhi DC - Dairy - OR",
    titleAuto: true,
    status: "ACTIVE",
    currency: "INR",
    payment: { mode: "OR", paymentType: "ADVANCE_PARTIAL", creditDays: 14, advanceAmount: 35000, paymentCurrency: "INR" },
    notes: "Renewal required soon; SKU-9912 still has operational setup pending.",
    startDate: "2026-01-25",
    endDate: "2026-05-02",
    createdBy: "Paridhi Gupta",
    categoryOwner: "Aditi Rao",
    latestFinanceReason: "",
    lines: [
      { skuId: "SKU-8821", basePrice: 27.2, marginValue: 5.44, nlc: 28.56, moq: 80, minOrderValue: 4000, leadTime: "P3D", vsmStatus: "READY" },
      { skuId: "SKU-9912", basePrice: 33.5, marginValue: 10.82, nlc: 35.18, moq: 40, minOrderValue: 1800, leadTime: "P2D", vsmStatus: "PENDING_OPERATIONAL_SETUP" },
    ],
    audit: [
      { label: "Expiry alert fired", meta: "Creator and category owner notified because expiry is within 14 days.", at: "Apr 23, 2026 09:00" },
      { label: "VSM gap acknowledged", meta: "SKU-9912 allowed in contract but PO remains blocked.", at: "Jan 25, 2026 11:03" },
    ],
  },
  {
    id: "CT-25028",
    vendorId: "V-3098",
    supplyLocation: "Hosur Packhouse",
    hubId: "H-04",
    type: "SOR",
    superCategory: "Fresh",
    title: "Greenroot Farms - Hosur Packhouse - Chennai DC - Fresh - SOR",
    titleAuto: true,
    status: "DRAFT",
    currency: "INR",
    payment: { mode: "SOR", firstPaymentDays: 10, settlementCycleDays: 3 },
    notes: "Pilot draft under review.",
    startDate: "2026-04-28",
    endDate: "2026-08-30",
    createdBy: "Rahul Menon",
    categoryOwner: "Mitali Jain",
    latestFinanceReason: "",
    lines: [
      { skuId: "SKU-4211", basePrice: 107.14, marginValue: 35, nlc: 120, moq: 12, minOrderValue: 1500, leadTime: "P1D", vsmStatus: "READY" },
    ],
    audit: [{ label: "Draft saved", meta: "Awaiting finance submission.", at: "Apr 21, 2026 15:06" }],
  },
];

const wizardSteps = [
  { key: "lane", title: "Lane + Terms" },
  { key: "sku", title: "Add SKU(s)" },
  { key: "pricing", title: "Price / Margin" },
  { key: "review", title: "Review & Submit" },
];

function vendorById(id) {
  return vendors.find((item) => item.id === id);
}

function hubById(id) {
  return hubs.find((item) => item.id === id);
}

function skuById(id) {
  return skus.find((item) => item.id === id);
}

function sorConfigByKey(key) {
  return sorConfigurations.find((item) => item.key === key);
}

function formatCurrency(value) {
  const numeric = Number(value || 0);
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(numeric);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(dateString));
}

function daysUntil(dateString) {
  const ms = new Date(dateString) - appState.today;
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

function isStartDateReached(dateString) {
  return new Date(dateString) <= appState.today;
}

function calculateTaxSplit(vendorState, hubState, gstPercent, basePrice) {
  const sameState = vendorState === hubState;
  const taxAmount = Number(basePrice) * (gstPercent / 100);
  return {
    sameState,
    gstPercent,
    taxAmount,
    nlc: Number(basePrice) + taxAmount,
    igst: sameState ? 0 : gstPercent,
    cgst: sameState ? gstPercent / 2 : 0,
    sgst: sameState ? gstPercent / 2 : 0,
  };
}

function normalizeCommercialType(value) {
  const upper = String(value || "").toUpperCase();
  return upper === "INVENTORY" ? "OR" : upper;
}

function deriveMarginFromBasePrice(sku, basePrice) {
  const normalizedBase = Number(basePrice || 0);
  const nlc = normalizedBase * (1 + sku.gst / 100);
  return Number((sku.mrp - nlc).toFixed(2));
}

function maxBasePriceForSku(sku) {
  return Number((sku.mrp / (1 + sku.gst / 100)).toFixed(2));
}

function getVsmDerivedFields(sku) {
  const map = {
    "SKU-8821": { moq: 60, minOrderValue: 3000, leadTime: "P2D", vsmStatus: "READY" },
    "SKU-7723": { moq: 24, minOrderValue: 2400, leadTime: "P3D", vsmStatus: "READY" },
    "SKU-9912": { moq: 40, minOrderValue: 1800, leadTime: "P2D", vsmStatus: "PENDING_OPERATIONAL_SETUP" },
    "SKU-4210": { moq: 15, minOrderValue: 3000, leadTime: "P1D", vsmStatus: "READY" },
    "SKU-4211": { moq: 20, minOrderValue: 2000, leadTime: "P1D", vsmStatus: "READY" },
  };
  return map[sku.id] || { moq: 25, minOrderValue: 2000, leadTime: "P2D", vsmStatus: sku.vsmMissing ? "PENDING_OPERATIONAL_SETUP" : "READY" };
}

function computeCommercialLine(sku, marginValue, vendorState, hubState) {
  const nlc = sku.mrp - Number(marginValue || 0);
  const divisor = 1 + sku.gst / 100;
  const basePrice = nlc / divisor;
  const tax = calculateTaxSplit(vendorState, hubState, sku.gst, basePrice);
  return {
    basePrice,
    marginValue: Number(marginValue),
    marginPercent: sku.mrp ? ((Number(marginValue) / sku.mrp) * 100) : 0,
    nlc,
    tax,
  };
}

function computeCommercialLineFromBase(sku, basePrice, vendorState, hubState) {
  const normalizedBase = Number(basePrice || 0);
  const marginValue = deriveMarginFromBasePrice(sku, normalizedBase);
  const tax = calculateTaxSplit(vendorState, hubState, sku.gst, normalizedBase);
  return {
    basePrice: normalizedBase,
    marginValue,
    marginPercent: sku.mrp ? ((marginValue / sku.mrp) * 100) : 0,
    nlc: tax.nlc,
    tax,
  };
}

function displayStatus(contract) {
  if (contract.status === "FINANCE_APPROVED" && isStartDateReached(contract.startDate)) return "ACTIVE";
  if (contract.status === "ACTIVE" && daysUntil(contract.endDate) <= 14) return "NEAR_EXPIRY";
  if (daysUntil(contract.endDate) < 0 && contract.status !== "TERMINATED") return "EXPIRED";
  return contract.status;
}

function paymentSummary(payment) {
  if (!payment) return "Not configured";
  if (payment.mode === "SOR") return `First payout in ${payment.firstPaymentDays} days, then every ${payment.settlementCycleDays} days`;
  if (payment.paymentType === "ADVANCE_FULL") return `Advance full · ${formatCurrency(payment.advanceAmount)}`;
  if (payment.paymentType === "ADVANCE_PARTIAL") return `Advance partial · ${formatCurrency(payment.advanceAmount)} + ${payment.creditDays} credit days`;
  return `Credit · ${payment.creditDays} days`;
}

function contractLaneLabel(contract) {
  const hub = hubById(contract.hubId);
  return `${contract.supplyLocation} → ${hub.name}`;
}

function contractWithComputed(contract) {
  const vendor = vendorById(contract.vendorId);
  const hub = hubById(contract.hubId);
  const computedLines = contract.lines.map((line) => {
    const sku = skuById(line.skuId);
    const computed =
      Number.isFinite(Number(line.basePrice)) && Number(line.basePrice) > 0
        ? computeCommercialLineFromBase(sku, line.basePrice, vendor.state, hub.state)
        : computeCommercialLine(sku, line.marginValue, vendor.state, hub.state);
    return {
      ...line,
      ...computed,
      sku,
    };
  });

  return {
    ...contract,
    vendor,
    hub,
    displayStatus: displayStatus(contract),
    expiryDays: daysUntil(contract.endDate),
    computedLines,
  };
}

function autoActivateFinanceApprovedContracts() {
  contracts.forEach((contract) => {
    if (contract.status === "FINANCE_APPROVED" && isStartDateReached(contract.startDate) && daysUntil(contract.endDate) >= 0) {
      contract.status = "ACTIVE";
      const alreadyLogged = contract.audit.some((item) => item.label === "Contract auto-activated");
      if (!alreadyLogged) {
        contract.audit.unshift({
          label: "Contract auto-activated",
          meta: "Finance approval was already complete and the start date was reached, so the contract became active automatically.",
          at: "Apr 28, 2026 09:00",
          by: "System",
        });
      }
    }
  });
}

function generateTitle(vendorId, supplyLocation, hubId, superCategory, commercialType) {
  const vendor = vendorById(vendorId);
  const hub = hubById(hubId);
  if (!vendor || !hub || !supplyLocation || !superCategory || !commercialType) return "";
  return `${vendor.name} - ${supplyLocation} - ${hub.name} - ${superCategory} - ${commercialType}`;
}

function getDraftTitle(draft, hubId) {
  const auto = generateTitle(draft.vendorId, draft.supplyLocation, hubId, draft.superCategory, draft.commercialType);
  return draft.titleOverrideEnabled && draft.titleOverrides[hubId] ? draft.titleOverrides[hubId] : auto;
}

function nextContractId() {
  const max = contracts.reduce((highest, contract) => Math.max(highest, Number(contract.id.split("-")[1])), 25000);
  return `CT-${max + 1}`;
}

function allocateContractIds(count) {
  const max = contracts.reduce((highest, contract) => Math.max(highest, Number(contract.id.split("-")[1])), 25000);
  return Array.from({ length: count }, (_, index) => `CT-${max + index + 1}`);
}

function seedWizardDraft() {
  appState.wizardDraft = {
    vendorId: "",
    supplyLocation: "",
    destinationIds: [],
    superCategory: "",
    commercialType: "",
    titleOverrideEnabled: false,
    titleOverrides: {},
    startDate: "2026-04-25",
    endDate: "2026-07-31",
    currency: "INR",
    notes: "",
    paymentType: "CREDIT",
    creditDays: 21,
    advanceAmount: "",
    firstPaymentDays: 14,
    settlementCycleDays: 7,
    lines: [],
    acknowledgedVsm: false,
  };
}

function emptyBulkCsv() {
  return [
    "vendor_id,supply_location,destinations,sku_id,commercial_type,price_or_margin,payment_type,credit_days,advance_amount,first_payment_days,settlement_cycle_days,super_category",
    "V-2044,Bengaluru DC,H-02|H-03,SKU-4210,SOR,159.82,,,,14,7,Staples",
    "V-2044,Bengaluru DC,H-02|H-03,SKU-4211,SOR,110.71,,,,14,7,Staples",
    "V-1001,Bidadi Depot,H-01,SKU-8821,OR,26.5,CREDIT,21,,,,Dairy",
    "V-1001,Nelamangala Cold Store,H-03,SKU-9912,OR,33.5,ADVANCE_PARTIAL,14,35000,,,Dairy",
  ].join("\n");
}

function bulkTemplateFilename() {
  return "contract_bulk_upload_template_v6.csv";
}

function sorBulkTemplateFilename() {
  return "sor_configuration_bulk_upload_template.csv";
}

function emptySorBulkCsv() {
  return ["sku_id,commercial_type", "SKU-8821,SOR", "SKU-7723,SOR"].join("\n");
}

function renderFilters() {
  document.getElementById("vendorFilter").innerHTML = `<option value="ALL">All vendors</option>${vendors
    .map((vendor) => `<option value="${vendor.id}">${vendor.name} (${vendor.code})</option>`)
    .join("")}`;

  document.getElementById("hubFilter").innerHTML = `<option value="ALL">All hubs</option>${hubs
    .map((hub) => `<option value="${hub.id}">${hub.name}</option>`)
    .join("")}`;

  document.getElementById("statusFilter").innerHTML = contractStatuses
    .map((status) => `<option value="${status}">${status === "ALL" ? "All statuses" : status.replaceAll("_", " ")}</option>`)
    .join("");
}

function filteredContracts() {
  const search = document.getElementById("searchInput").value.toLowerCase().trim();
  const vendorId = document.getElementById("vendorFilter").value;
  const type = document.getElementById("typeFilter").value;
  const status = document.getElementById("statusFilter").value;
  const hubId = document.getElementById("hubFilter").value;
  const expiry = document.getElementById("expiryFilter").value;

  return contracts
    .map(contractWithComputed)
    .filter((contract) => {
      if (vendorId !== "ALL" && contract.vendorId !== vendorId) return false;
      if (type !== "ALL" && contract.type !== type) return false;
      if (status !== "ALL" && contract.displayStatus !== status) return false;
      if (hubId !== "ALL" && contract.hubId !== hubId) return false;
      if (expiry !== "ALL" && contract.expiryDays > Number(expiry)) return false;
      if (!search) return true;
      const haystack = [
        contract.id,
        contract.title,
        contract.vendor.name,
        contract.vendor.code,
        contract.superCategory,
        contractLaneLabel(contract),
        ...contract.computedLines.map((line) => `${line.sku.id} ${line.sku.name}`),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(search);
    });
}

function renderMetrics() {
  const computed = contracts.map(contractWithComputed);
  const activeCount = computed.filter((contract) => contract.displayStatus === "ACTIVE").length;
  const pendingFinance = computed.filter((contract) => contract.displayStatus === "PENDING_APPROVAL").length;
  const sorCount = computed.filter((contract) => contract.type === "SOR").length;
  const nearExpiry = computed.filter((contract) => contract.displayStatus === "NEAR_EXPIRY").length;
  const pendingSetupLines = computed.flatMap((contract) => contract.computedLines).filter((line) => line.vsmStatus === "PENDING_OPERATIONAL_SETUP").length;

  document.getElementById("heroMetrics").innerHTML = `
    <div class="metric-card"><strong>${computed.length}</strong><span>Total lane contracts</span></div>
    <div class="metric-card"><strong>${activeCount}</strong><span>Currently active</span></div>
    <div class="metric-card"><strong>${pendingFinance}</strong><span>Awaiting finance approval</span></div>
    <div class="metric-card"><strong>${sorCount}</strong><span>SOR contracts</span></div>
    <div class="metric-card"><strong>${nearExpiry}</strong><span>Contracts nearing expiry</span></div>
    <div class="metric-card"><strong>${pendingSetupLines}</strong><span>SKU lines with VSM gaps</span></div>
  `;
  document.getElementById("expiryHomepageMessage").innerHTML = `<div class="alert alert-warning" style="margin-top:16px;"><strong>${nearExpiry} contracts are nearing Expiry, please take necessary action.</strong></div>`;
}

function renderContractTable() {
  const rows = filteredContracts();
  const body = document.getElementById("contractTableBody");
  body.innerHTML = rows
    .map(
      (contract) => `
      <tr>
        <td><strong>${contract.id}</strong><div class="detail-muted">${contract.title}</div></td>
        <td>${contract.vendor.name}<div class="detail-muted">${contract.vendor.id} · ${contract.vendor.code}</div></td>
        <td>${contractLaneLabel(contract)}</td>
        <td><span class="type-pill">${contract.type}</span></td>
        <td>${contract.computedLines.length}</td>
        <td><span class="status-pill status-${contract.displayStatus}">${contract.displayStatus.replaceAll("_", " ")}</span></td>
        <td>${formatDate(contract.startDate)}<br /><span class="detail-muted">to ${formatDate(contract.endDate)}</span></td>
        <td><button class="row-action-btn" data-contract="${contract.id}">View</button></td>
      </tr>
    `
    )
    .join("");

  if (!rows.length) {
    body.innerHTML = `<tr><td colspan="8"><div class="empty-state">No contracts match the current filters.</div></td></tr>`;
  }

  [...body.querySelectorAll("[data-contract]")].forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedContractId = button.dataset.contract;
      renderContractDetail();
    });
  });
}

function filteredSorConfigurations() {
  const skuSearch = document.getElementById("sorSkuSearch")?.value.toLowerCase().trim() || "";
  const vendorSearch = document.getElementById("sorVendorSearch")?.value.toLowerCase().trim() || "";
  const typeFilter = document.getElementById("sorTypeFilter")?.value || "SOR";

  return sorConfigurations
    .map((config) => ({
      ...config,
      vendor: vendorById(config.vendorId),
      sku: skuById(config.skuId),
      sorAudit: sorChangeAudit(config),
    }))
    .filter((config) => {
      if (config.commercialType !== "SOR") return false;
      if (typeFilter !== "SOR") return false;
      if (skuSearch) {
        const skuHaystack = `${config.sku.id} ${config.sku.name}`.toLowerCase();
        if (!skuHaystack.includes(skuSearch)) return false;
      }
      if (vendorSearch) {
        const vendorHaystack = `${config.vendor.id} ${config.vendor.name} ${config.vendor.code}`.toLowerCase();
        if (!vendorHaystack.includes(vendorSearch)) return false;
      }
      return true;
    })
    .sort((left, right) => right.sorAudit.at.localeCompare(left.sorAudit.at));
}

function renderSorConfigurationTable() {
  const rows = filteredSorConfigurations();
  const body = document.getElementById("sorConfigTableBody");
  if (!body) return;

  if (!rows.some((config) => config.key === appState.selectedSorConfigKey)) {
    appState.selectedSorConfigKey = rows[0]?.key || null;
  }

  body.innerHTML = rows
    .map(
      (config) => `
        <tr>
          <td>
            <strong>${config.sku.id}</strong>
            <div class="detail-muted">${config.sku.name}</div>
          </td>
          <td>
            ${config.vendor.name}
            <div class="detail-muted">${config.vendor.id} · ${config.vendor.code}</div>
          </td>
          <td><span class="type-pill">${config.commercialType}</span></td>
          <td>${config.sorAudit.at}</td>
          <td>${config.sorAudit.by}</td>
          <td>
            <button class="row-action-btn sor-view-btn" data-sor-key="${config.key}">View</button>
          </td>
        </tr>
      `
    )
    .join("");

  if (!rows.length) {
    body.innerHTML = `<tr><td colspan="6"><div class="empty-state">No SOR-configured SKU mappings match the current filters.</div></td></tr>`;
  }

  [...body.querySelectorAll(".sor-view-btn")].forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedSorConfigKey = button.dataset.sorKey;
      renderSorConfigurationDetail();
    });
  });
}

function renderContractDetail() {
  const contract = contractWithComputed(contracts.find((item) => item.id === appState.selectedContractId) || contracts[0]);
  appState.selectedContractId = contract.id;

  const averageBase = (contract.computedLines.reduce((sum, line) => sum + line.basePrice, 0) / contract.computedLines.length).toFixed(2);
  const averageMargin = (contract.computedLines.reduce((sum, line) => sum + line.marginPercent, 0) / contract.computedLines.length).toFixed(1);

  document.getElementById("contractDetail").innerHTML = `
    <div class="detail-hero">
      <div class="detail-top">
        <div>
          <p class="eyebrow">Contract Detail</p>
          <h3>${contract.title}</h3>
        </div>
        <span class="status-pill status-${contract.displayStatus}">${contract.displayStatus.replaceAll("_", " ")}</span>
      </div>

      <div class="detail-header-meta">
        <span class="type-pill">${contract.type}</span>
        <span class="tag-pill">${contract.id}</span>
        <span class="tag-pill">${contract.superCategory}</span>
        <span class="tag-pill">${contractLaneLabel(contract)}</span>
      </div>

      <div class="detail-section">
        <div class="summary-grid">
          <div class="summary-card"><span>Vendor</span><strong>${contract.vendor.name}</strong><div class="helper-text">${contract.vendor.id} · ${contract.vendor.code}</div></div>
          <div class="summary-card"><span>Validity</span><strong>${formatDate(contract.startDate)} to ${formatDate(contract.endDate)}</strong></div>
          <div class="summary-card"><span>Payment Terms</span><strong>${paymentSummary(contract.payment)}</strong></div>
          <div class="summary-card"><span>Expiry Indicator</span><strong>${contract.expiryDays > 0 ? `${contract.expiryDays} days left` : "Expired"}</strong></div>
        </div>
        ${
          contract.latestFinanceReason
            ? `<div class="alert alert-danger" style="margin-top:14px;"><strong>Finance rejection reason</strong><div class="helper-text">${contract.latestFinanceReason}</div></div>`
            : ""
        }
        ${
          contract.expiryDays <= 14 && contract.expiryDays >= 0
            ? `<div class="alert alert-warning" style="margin-top:14px;"><strong>Expiry notification sent</strong><div class="helper-text">Creator ${contract.createdBy} and category owner ${contract.categoryOwner} have been notified.</div></div>`
            : ""
        }
      </div>
    </div>

    <div class="detail-section">
      <p class="eyebrow">Section 2</p>
      <h3>SKU Table</h3>
      <div class="contract-line-list">
        ${contract.computedLines
          .map(
            (line) => `
            <div class="sku-line">
              <div class="sku-meta">
                <strong>${line.sku.id} · ${line.sku.name}</strong>
                <span>${line.sku.uom} · HSN ${line.sku.hsn} · GST ${line.sku.gst}%</span>
                <span>MOQ ${line.moq} · Min order ${formatCurrency(line.minOrderValue)} · Lead ${line.leadTime} · VSM ${line.vsmStatus}</span>
              </div>
              <div class="sku-meta">
                <strong>Base ${formatCurrency(line.basePrice)}</strong>
                <span>MRP ${formatCurrency(line.sku.mrp)}</span>
                <span>NLC ${formatCurrency(line.nlc)}</span>
                <span>Margin ${formatCurrency(line.marginValue)} (${line.marginPercent.toFixed(1)}%)</span>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    </div>

    <div class="detail-section">
      <p class="eyebrow">Section 3</p>
      <h3>Audit Trail</h3>
      ${contract.audit
        .map(
          (item) => `
          <div class="audit-item">
            <div class="audit-meta"><strong>${item.label}</strong><p>${item.meta}</p></div>
            <span class="detail-muted">${item.at}${item.by ? ` · ${item.by}` : ""}</span>
          </div>
        `
        )
        .join("")}
    </div>

    <div class="detail-section">
      <p class="eyebrow">Insights</p>
      <div class="summary-grid">
        <div class="summary-card"><span>Average base price</span><strong>${formatCurrency(averageBase)}</strong></div>
        <div class="summary-card"><span>Historical view</span><strong>${contract.audit.length} audit events</strong></div>
        <div class="summary-card"><span>Operational risk</span><strong>${contract.computedLines.some((line) => line.vsmStatus !== "READY") ? "PO blocked on 1+ SKU" : "No VSM gaps"}</strong></div>
        <div class="summary-card"><span>Average margin</span><strong>${averageMargin}%</strong></div>
      </div>
    </div>
  `;
}

function renderSorConfigurationDetail() {
  const fallback = filteredSorConfigurations()[0];
  const config = sorConfigByKey(appState.selectedSorConfigKey) || fallback;
  const container = document.getElementById("sorConfigDetail");
  if (!container) return;
  if (!config) {
    container.innerHTML = `<div class="empty-state">Select a SOR-configured SKU mapping to inspect its audit history.</div>`;
    return;
  }
  appState.selectedSorConfigKey = config.key;
  const vendor = vendorById(config.vendorId);
  const sku = skuById(config.skuId);
  const sorAudit = sorChangeAudit(config);

  container.innerHTML = `
    <div class="detail-hero">
      <div class="detail-top">
        <div>
          <p class="eyebrow">SOR Configuration</p>
          <h3>${sku.name}</h3>
        </div>
        <span class="type-pill">${config.commercialType}</span>
      </div>

      <div class="detail-header-meta">
        <span class="tag-pill">${sku.id}</span>
        <span class="tag-pill">${vendor.name}</span>
        <span class="tag-pill">${vendor.id}</span>
      </div>

      <div class="detail-section">
        <div class="summary-grid">
          <div class="summary-card">
            <span>SKU</span>
            <strong>${sku.id}</strong>
            <div class="helper-text">${sku.name}</div>
          </div>
          <div class="summary-card">
            <span>Vendor</span>
            <strong>${vendor.name}</strong>
            <div class="helper-text">${vendor.code}</div>
          </div>
          <div class="summary-card">
            <span>Made SOR On</span>
            <strong>${sorAudit.at}</strong>
          </div>
          <div class="summary-card">
            <span>Made SOR By</span>
            <strong>${sorAudit.by}</strong>
            <div class="helper-text">${config.commercialType} commercial type is active for this mapping.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <p class="eyebrow">Current View</p>
      <h3>Read-Only Audit Summary</h3>
      <div class="alert alert-success"><strong>This dashboard only shows SKU mappings already configured as SOR.</strong></div>
      <div class="helper-text">Use the separate Configure SOR tab to search for a SKU and apply the SOR commercial type.</div>
    </div>

    <div class="detail-section">
      <p class="eyebrow">History</p>
      <h3>Configuration Audit</h3>
      ${config.history
        .map(
          (item) => `
            <div class="audit-item">
              <div class="audit-meta">
                <strong>${item.label}</strong>
                <p>${item.meta}</p>
              </div>
              <span class="detail-muted">${item.at}${item.by ? ` · ${item.by}` : ""}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

function renderModuleVisibility() {
  const isContracts = appState.currentModule === "contracts";
  document.getElementById("contractsWorkspace").classList.toggle("hidden", !isContracts);
  document.getElementById("sorConfigWorkspace").classList.toggle("hidden", isContracts);
  document.getElementById("contractTopbarActions").classList.toggle("hidden", !isContracts);
  document.getElementById("sorTopbarActions").classList.toggle("hidden", isContracts);
  document.getElementById("moduleTitle").textContent = isContracts ? "Contract Management + SOR" : "SOR Configuration";
  document.getElementById("moduleEyebrow").textContent = isContracts ? "PRD v6 Prototype" : "Commercial Controls";

  [...document.querySelectorAll("[data-module]")].forEach((button) => {
    button.classList.toggle("active", button.dataset.module === appState.currentModule);
  });
}

function renderSorTabVisibility() {
  const isDashboard = appState.currentSorTab === "dashboard";
  document.getElementById("sorDashboardView").classList.toggle("hidden", !isDashboard);
  document.getElementById("sorConfigureView").classList.toggle("hidden", isDashboard);

  [...document.querySelectorAll("[data-sor-tab]")].forEach((button) => {
    button.classList.toggle("active", button.dataset.sorTab === appState.currentSorTab);
  });
}

function sorChangeAudit(config) {
  const sorEvent = config.history.find((item) => item.label.toUpperCase().includes("SOR"));
  return {
    at: sorEvent?.at || config.updatedAt,
    by: sorEvent?.by || config.updatedBy,
  };
}

function renderSorSkuOptions() {
  const datalist = document.getElementById("sorSkuOptions");
  if (!datalist) return;
  datalist.innerHTML = skus
    .map((sku) => `<option value="${sku.id}">${sku.name}</option><option value="${sku.name}">${sku.id}</option>`)
    .join("");
}

function resolveSkuFromConfigureInput() {
  const value = document.getElementById("configureSorSkuInput")?.value.trim() || "";
  if (!value) return null;
  const match = skus.find((sku) => sku.id.toLowerCase() === value.toLowerCase() || sku.name.toLowerCase() === value.toLowerCase());
  return match || null;
}

function renderSorConfigurePanel() {
  const preview = document.getElementById("configureSorPreview");
  const feedback = document.getElementById("configureSorFeedback");
  if (!preview || !feedback) return;

  const sku = resolveSkuFromConfigureInput();
  const affectedConfigs = sku ? sorConfigurations.filter((config) => config.skuId === sku.id) : [];
  const alreadySor = affectedConfigs.filter((config) => config.commercialType === "SOR");
  const pendingChange = affectedConfigs.filter((config) => config.commercialType !== "SOR");

  feedback.innerHTML = "";

  if (!sku) {
    preview.innerHTML = `<div class="empty-state">Select a SKU from the dropdown to preview the vendor mappings that will be moved to SOR.</div>`;
    return;
  }

  preview.innerHTML = `
    <div class="summary-grid">
      <div class="summary-card">
        <span>Selected SKU</span>
        <strong>${sku.id}</strong>
        <div class="helper-text">${sku.name}</div>
      </div>
      <div class="summary-card">
        <span>Affected Vendor Mappings</span>
        <strong>${affectedConfigs.length}</strong>
        <div class="helper-text">${affectedConfigs.map((config) => vendorById(config.vendorId).name).join(", ") || "No vendor mappings found."}</div>
      </div>
      <div class="summary-card">
        <span>Already SOR</span>
        <strong>${alreadySor.length}</strong>
        <div class="helper-text">${pendingChange.length} mapping(s) still need SOR configuration.</div>
      </div>
    </div>
    <div class="detail-section">
      ${
        affectedConfigs.length
          ? affectedConfigs
              .map((config) => {
                const vendor = vendorById(config.vendorId);
                return `
                  <div class="audit-item">
                    <div class="audit-meta">
                      <strong>${vendor.name}</strong>
                      <p>${vendor.id} · ${vendor.code} · Current type ${config.commercialType}</p>
                    </div>
                    <span class="detail-muted">${config.updatedAt}</span>
                  </div>
                `;
              })
              .join("")
          : `<div class="empty-state">No vendor mapping exists for this SKU in the seeded prototype data.</div>`
      }
    </div>
  `;
}

function populateDuplicateOptions() {
  document.getElementById("duplicateSupply").innerHTML = vendors
    .flatMap((vendor) => vendor.locations.map((location) => `<option value="${vendor.id}::${location}">${vendor.name} · ${location}</option>`))
    .join("");

  document.getElementById("duplicateHubChoices").innerHTML = hubs
    .map(
      (hub) => `
      <label class="checkbox-card">
        <input type="checkbox" class="duplicate-hub" value="${hub.id}" />
        <span>${hub.name}</span>
      </label>
    `
    )
    .join("");
}

function laneConflictsFor(draft, hubId, ignoreContractId = null) {
  const overlappingLane = contracts.find(
    (contract) =>
      contract.id !== ignoreContractId &&
      contract.vendorId === draft.vendorId &&
      contract.supplyLocation === draft.supplyLocation &&
      contract.hubId === hubId &&
      ["ACTIVE", "PENDING_APPROVAL", "FINANCE_APPROVED", "NEAR_EXPIRY"].includes(displayStatus(contract))
  );

  const overlappingSku = contracts.find((contract) => {
    if (contract.id === ignoreContractId) return false;
    if (contract.vendorId !== draft.vendorId || contract.supplyLocation !== draft.supplyLocation || contract.hubId !== hubId) return false;
    return contract.lines.some((existing) => draft.lines.some((line) => line.skuId && line.skuId === existing.skuId));
  });

  return { overlappingLane, overlappingSku };
}

function getDraftLanePreviews(draft) {
  return draft.destinationIds.map((hubId) => {
    const vendor = vendorById(draft.vendorId);
    const hub = hubById(hubId);
    const tax = vendor ? calculateTaxSplit(vendor.state, hub.state, 12, 100) : null;
    const conflicts = laneConflictsFor(draft, hubId);
    return { hubId, hub, tax, conflicts, title: getDraftTitle(draft, hubId) };
  });
}

function renderWizard() {
  const step = appState.wizardStep;
  const draft = appState.wizardDraft;
  const previews = getDraftLanePreviews(draft);
  const alerts = [];

  document.getElementById("wizardSteps").innerHTML = wizardSteps
    .map(
      (item, index) => `
      <div class="wizard-step ${index === step ? "active" : ""} ${index < step ? "done" : ""}">
        <span class="wizard-bullet">${index < step ? "✓" : index + 1}</span>
        <div><strong>${item.title}</strong></div>
      </div>
    `
    )
    .join("");

  if (step === 0 && previews.length) {
    previews.forEach((preview) => {
      alerts.push(`
        <div class="alert ${preview.tax && preview.tax.sameState ? "alert-success" : "alert-warning"}">
          <strong>${preview.hub.name}</strong>
          <div class="helper-text">
            ${preview.tax ? (preview.tax.sameState ? `CGST ${preview.tax.cgst}% + SGST ${preview.tax.sgst}% will apply.` : `IGST ${preview.tax.igst}% will apply.`) : ""}
          </div>
        </div>
      `);
      if (preview.conflicts.overlappingLane) {
        alerts.push(`
          <div class="alert alert-warning">
            <strong>Existing lane contract found for ${preview.hub.name}</strong>
            <div class="helper-text">${preview.conflicts.overlappingLane.id} · ${preview.conflicts.overlappingLane.title}</div>
          </div>
        `);
      }
    });
  }

  if (step >= 1 && draft.lines.some((line) => skuById(line.skuId)?.vsmMissing) && !draft.acknowledgedVsm) {
    alerts.push(`
      <div class="alert alert-warning">
        <strong>VSM mapping gap detected</strong>
        <div class="helper-text">Contract creation is allowed, but affected lines remain blocked at PO until operational setup is complete.</div>
      </div>
    `);
  }

  document.getElementById("wizardAlerts").innerHTML = alerts.join("");
  document.getElementById("wizardContent").innerHTML = renderWizardStep(step, draft, previews);
  document.getElementById("wizardBack").style.visibility = step === 0 ? "hidden" : "visible";
  document.getElementById("wizardNext").textContent = step === wizardSteps.length - 1 ? "Submit Contract" : "Next";
  attachWizardStepHandlers();
}

function renderDestinationChoices(selectedIds) {
  return hubs
    .map(
      (hub) => `
      <label class="checkbox-card">
        <input type="checkbox" class="wizard-destination" value="${hub.id}" ${selectedIds.includes(hub.id) ? "checked" : ""} />
        <span>${hub.name}</span>
      </label>
    `
    )
    .join("");
}

function renderWizardStep(step, draft, previews) {
  if (step === 0) {
    const vendor = vendorById(draft.vendorId);
    return `
      <h3 class="section-title">Step 1: Lane splitting, commercial setup, and payment terms</h3>
      <p class="section-subtitle">One input can generate multiple contracts. Each destination hub becomes its own lane and must independently pass validation.</p>
      <div class="form-grid two">
        <label>
          Vendor
          <select id="wizardVendor">
            <option value="">Select vendor</option>
            ${vendors.map((item) => `<option value="${item.id}" ${draft.vendorId === item.id ? "selected" : ""}>${item.name} (${item.code})</option>`).join("")}
          </select>
        </label>
        <label>
          Supply Location
          <select id="wizardSupply">
            <option value="">Select supply location</option>
            ${(vendor ? vendor.locations : []).map((location) => `<option value="${location}" ${draft.supplyLocation === location ? "selected" : ""}>${location}</option>`).join("")}
          </select>
        </label>
        <label>
          Super Category
          <select id="wizardSuperCategory">
            <option value="">Select super category</option>
            ${superCategories.map((item) => `<option value="${item}" ${draft.superCategory === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label>
          Commercial Type
          <select id="wizardCommercialType">
            <option value="">Select commercial type</option>
            ${commercialTypes.map((item) => `<option value="${item}" ${draft.commercialType === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label>
          Start Date
          <input id="wizardStart" type="date" value="${draft.startDate}" />
        </label>
        <label>
          End Date
          <input id="wizardEnd" type="date" value="${draft.endDate}" />
        </label>
        <label style="width:100%;">
          Notes
          <input id="wizardNotes" type="text" value="${draft.notes}" placeholder="Operational notes for approvers" />
        </label>
      </div>

      <div style="margin-top:18px;">
        <label>Destination Hubs</label>
        <div class="checkbox-grid">${renderDestinationChoices(draft.destinationIds)}</div>
      </div>

      <div class="lane-card" style="margin-top:18px;">
        <div>
          <strong>Vendor ID Display</strong>
          <p>${vendor ? `${vendor.name} · ${vendor.code}` : "Select a vendor to display vendor ID."}</p>
        </div>
      </div>

      <div class="review-card" style="margin-top:18px;">
        <strong>Auto-generated contract titles</strong>
        <label style="display:flex;gap:10px;align-items:center;font-size:14px;color:var(--muted);margin-top:8px;">
          <input id="titleOverrideToggle" type="checkbox" ${draft.titleOverrideEnabled ? "checked" : ""} />
          Allow manual title override after auto-generation
        </label>
        ${
          previews.length
            ? previews
                .map(
                  (preview) => `
                <div class="lane-card">
                  <div>
                    <strong>${preview.hub.name}</strong>
                    ${
                      draft.titleOverrideEnabled
                        ? `<input class="title-override-input" data-title-hub="${preview.hubId}" value="${getDraftTitle(draft, preview.hubId)}" />`
                        : `<p>${preview.title}</p>`
                    }
                  </div>
                </div>
              `
                )
                .join("")
            : `<div class="helper-text">Select vendor, supply location, destination hubs, super category, and commercial type to generate titles.</div>`
        }
      </div>

      <div class="review-card" style="margin-top:18px;">
        <strong>Payment Terms</strong>
        ${
          draft.commercialType === "SOR"
            ? `
            <div class="form-grid two" style="margin-top:10px;">
              <label>
                First Payment Days
                <input id="wizardFirstPaymentDays" type="number" min="1" max="60" value="${draft.firstPaymentDays}" />
              </label>
              <label>
                Settlement Cycle Days
                <select id="wizardSettlementCycle">
                  ${settlementCycles.map((value) => `<option value="${value}" ${Number(draft.settlementCycleDays) === value ? "selected" : ""}>${value}</option>`).join("")}
                </select>
              </label>
            </div>
          `
            : `
            <div class="form-grid two" style="margin-top:10px;">
              <label>
                Payment Type
                <select id="wizardPaymentType">
                  <option value="ADVANCE_FULL" ${draft.paymentType === "ADVANCE_FULL" ? "selected" : ""}>ADVANCE_FULL</option>
                  <option value="ADVANCE_PARTIAL" ${draft.paymentType === "ADVANCE_PARTIAL" ? "selected" : ""}>ADVANCE_PARTIAL</option>
                  <option value="CREDIT" ${draft.paymentType === "CREDIT" ? "selected" : ""}>CREDIT</option>
                </select>
              </label>
              <label>
                Currency
                <input id="wizardCurrency" value="${draft.currency}" />
              </label>
              ${
                draft.paymentType === "ADVANCE_FULL"
                  ? `<label><span>Advance Amount</span><input id="wizardAdvanceAmount" type="number" min="0" value="${draft.advanceAmount}" /></label>`
                  : ""
              }
              ${
                draft.paymentType === "ADVANCE_PARTIAL"
                  ? `<label><span>Advance Amount</span><input id="wizardAdvanceAmount" type="number" min="0" value="${draft.advanceAmount}" /></label>
                     <label><span>Credit Days</span><input id="wizardCreditDays" type="number" min="1" max="90" value="${draft.creditDays}" /></label>`
                  : ""
              }
              ${
                draft.paymentType === "CREDIT"
                  ? `<label><span>Credit Days</span><input id="wizardCreditDays" type="number" min="1" max="90" value="${draft.creditDays}" /></label>`
                  : ""
              }
            </div>
          `
        }
      </div>
    `;
  }

  if (step === 1) {
    const eligibleSkus = skus.filter((item) => !draft.commercialType || item.model === draft.commercialType);
    return `
      <h3 class="section-title">Step 2: Add SKU(s)</h3>
      <p class="section-subtitle">Commercial type is selected explicitly at contract header level. The SKU dropdown only shows SKUs from the selected commercial type.</p>
      <div class="list-picker">
        ${draft.lines
          .map((line, index) => {
            const sku = skuById(line.skuId);
            const vsm = sku ? getVsmDerivedFields(sku) : null;
            return `
            <div class="review-card">
              <div class="line-grid">
                <label>
                  SKU
                  <select class="line-sku" data-line-index="${index}">
                    <option value="">Select SKU</option>
                    ${eligibleSkus.map((item) => `<option value="${item.id}" ${line.skuId === item.id ? "selected" : ""}>${item.id} · ${item.name}</option>`).join("")}
                  </select>
                </label>
                <label>
                  Commercial Type
                  <input value="${sku ? sku.model : ""}" disabled />
                </label>
                <label>
                  HSN
                  <input value="${sku ? sku.hsn : ""}" disabled />
                </label>
                <label>
                  MRP
                  <input value="${sku ? formatCurrency(sku.mrp) : ""}" disabled />
                </label>
                <label>
                  MOQ
                  <input value="${vsm ? vsm.moq : ""}" disabled />
                </label>
                <label>
                  Min Order Value
                  <input value="${vsm ? formatCurrency(vsm.minOrderValue) : ""}" disabled />
                </label>
                <label>
                  Lead Time
                  <input value="${vsm ? vsm.leadTime : ""}" disabled />
                </label>
                <label>
                  VSM Status
                  <input value="${vsm ? vsm.vsmStatus : ""}" disabled />
                </label>
                <button class="ghost-btn remove-line" data-remove-line="${index}">Remove</button>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
      <div class="footer-actions" style="margin-top:16px;">
        <button class="secondary-btn" id="addSkuLine">Add SKU Line</button>
        <label style="display:flex;gap:10px;align-items:center;font-size:14px;color:var(--muted);">
          <input id="ackVsm" type="checkbox" ${draft.acknowledgedVsm ? "checked" : ""} />
          I acknowledge that VSM gaps can block PO downstream.
        </label>
      </div>
    `;
  }

  if (step === 2) {
    const vendor = vendorById(draft.vendorId);
    const firstHub = hubById(draft.destinationIds[0]);
    return `
      <h3 class="section-title">Step 3: Price / Margin Input</h3>
      <p class="section-subtitle">Base price is the editable field. MRP and tax are pre-populated, and margin plus NLC are derived automatically from what the user enters.</p>
      <div class="list-picker">
        ${draft.lines
          .map((line, index) => {
            const sku = skuById(line.skuId);
            if (!sku) return "";
            const computed = computeCommercialLineFromBase(sku, Number(line.basePrice || 0), vendor?.state || "", firstHub?.state || "");
            return `
              <div class="review-card">
                <strong>${sku.id} · ${sku.name}</strong>
                <div class="form-grid two">
                  <label>
                    Base Price
                    <input type="number" min="0" max="${maxBasePriceForSku(sku)}" step="0.01" class="line-price" data-line-index="${index}" value="${line.basePrice ?? ""}" />
                  </label>
                  <label><span>MRP Snapshot</span><input value="${formatCurrency(sku.mrp)}" disabled /></label>
                  <label><span>Tax % (from HSN)</span><input value="${sku.gst}%" disabled /></label>
                  <label>
                    Margin Value
                    <input value="${Number(line.basePrice || 0) > 0 ? formatCurrency(computed.marginValue) : ""}" disabled />
                  </label>
                  <label><span>Margin %</span><input value="${Number(line.basePrice || 0) > 0 ? `${computed.marginPercent.toFixed(1)}%` : ""}" disabled /></label>
                  <label><span>Landed Cost (NLC)</span><input value="${Number(line.basePrice || 0) > 0 ? formatCurrency(computed.nlc) : ""}" disabled /></label>
                </div>
                <div class="helper-text">${firstHub ? (computed.tax.sameState ? `CGST ${computed.tax.cgst}% + SGST ${computed.tax.sgst}% derived from lane.` : `IGST ${computed.tax.igst}% derived from lane.`) : "Select at least one destination hub to derive tax split."}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  const duplicateSkus = new Set();
  draft.lines.forEach((line) => {
    if (draft.lines.filter((item) => item.skuId === line.skuId).length > 1 && line.skuId) duplicateSkus.add(line.skuId);
  });

  return `
    <h3 class="section-title">Step 4: Review & Submit</h3>
    <p class="section-subtitle">Submitting creates one contract per destination hub and routes each to finance approval.</p>
    <div class="review-stack">
      <div class="review-card">
        <strong>Header</strong>
        <div class="helper-text">${draft.commercialType} · ${draft.superCategory} · ${draft.destinationIds.length} generated lane contract(s)</div>
        <div class="helper-text">${draft.startDate} to ${draft.endDate}</div>
        <div class="helper-text">Payment: ${draft.commercialType === "SOR" ? `First payout ${draft.firstPaymentDays} days, cycle ${draft.settlementCycleDays} days` : `${draft.paymentType}${draft.creditDays ? ` · ${draft.creditDays} credit days` : ""}${draft.advanceAmount ? ` · Advance ${formatCurrency(draft.advanceAmount)}` : ""}`}</div>
      </div>
      <div class="review-card">
        <strong>Validation Engine</strong>
        <div class="helper-text">Duplicate SKUs: ${duplicateSkus.size ? `Blocked (${[...duplicateSkus].join(", ")})` : "Clear"}</div>
        <div class="helper-text">SKU + lane uniqueness: ${previews.some((preview) => preview.conflicts.overlappingSku) ? "Blocked" : "Clear"}</div>
        <div class="helper-text">Payment validation: ${paymentValidationMessage(draft)}</div>
        <div class="helper-text">Base price validation: ${draft.lines.every((line) => basePriceOk(line)) ? "Clear" : "Blocked"}</div>
        <div class="helper-text">VSM gaps acknowledged: ${draft.lines.some((line) => skuById(line.skuId)?.vsmMissing) ? (draft.acknowledgedVsm ? "Yes" : "No") : "Not applicable"}</div>
      </div>
      <div class="review-card">
        <strong>Generated Contracts</strong>
        ${previews
          .map(
            (preview) => `
            <div class="lane-card">
              <div>
                <strong>${preview.title}</strong>
                <p>${draft.supplyLocation} → ${preview.hub.name}</p>
                <p>Lane validation: ${
                  preview.conflicts.overlappingSku
                    ? "Blocked by overlapping active SKU + lane"
                    : preview.conflicts.overlappingLane
                      ? "Warning: lane already has an active commercial record"
                      : "Clear"
                }</p>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;
}

function attachWizardStepHandlers() {
  const draft = appState.wizardDraft;

  const bindInput = (id, key) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.addEventListener("input", (event) => {
      draft[key] = event.target.value;
      if (["vendorId", "supplyLocation", "superCategory", "commercialType"].includes(key)) renderWizard();
    });
  };

  const vendorSelect = document.getElementById("wizardVendor");
  if (vendorSelect) {
    vendorSelect.addEventListener("change", (event) => {
      draft.vendorId = event.target.value;
      draft.supplyLocation = "";
      renderWizard();
    });
  }

  const supplySelect = document.getElementById("wizardSupply");
  if (supplySelect) {
    supplySelect.addEventListener("change", (event) => {
      draft.supplyLocation = event.target.value;
      renderWizard();
    });
  }

  const superCategory = document.getElementById("wizardSuperCategory");
  if (superCategory) {
    superCategory.addEventListener("change", (event) => {
      draft.superCategory = event.target.value;
      renderWizard();
    });
  }

  const commercialType = document.getElementById("wizardCommercialType");
  if (commercialType) {
    commercialType.addEventListener("change", (event) => {
      draft.commercialType = normalizeCommercialType(event.target.value);
      draft.lines = draft.lines.filter((line) => !line.skuId || skuById(line.skuId).model === draft.commercialType);
      renderWizard();
    });
  }

  [...document.querySelectorAll(".wizard-destination")].forEach((input) => {
    input.addEventListener("change", () => {
      draft.destinationIds = [...document.querySelectorAll(".wizard-destination:checked")].map((node) => node.value);
      renderWizard();
    });
  });

  bindInput("wizardStart", "startDate");
  bindInput("wizardEnd", "endDate");
  bindInput("wizardNotes", "notes");
  bindInput("wizardCurrency", "currency");
  bindInput("wizardCreditDays", "creditDays");
  bindInput("wizardAdvanceAmount", "advanceAmount");
  bindInput("wizardFirstPaymentDays", "firstPaymentDays");

  const settlement = document.getElementById("wizardSettlementCycle");
  if (settlement) {
    settlement.addEventListener("change", (event) => {
      draft.settlementCycleDays = Number(event.target.value);
    });
  }

  const paymentType = document.getElementById("wizardPaymentType");
  if (paymentType) {
    paymentType.addEventListener("change", (event) => {
      draft.paymentType = event.target.value;
      renderWizard();
    });
  }

  const titleOverrideToggle = document.getElementById("titleOverrideToggle");
  if (titleOverrideToggle) {
    titleOverrideToggle.addEventListener("change", (event) => {
      draft.titleOverrideEnabled = event.target.checked;
      renderWizard();
    });
  }

  [...document.querySelectorAll(".title-override-input")].forEach((input) => {
    input.addEventListener("input", (event) => {
      draft.titleOverrides[event.target.dataset.titleHub] = event.target.value;
    });
  });

  const addSkuLine = document.getElementById("addSkuLine");
  if (addSkuLine) {
    addSkuLine.addEventListener("click", () => {
      draft.lines.push({ skuId: "", basePrice: "", marginValue: "" });
      renderWizard();
    });
  }

  const ack = document.getElementById("ackVsm");
  if (ack) {
    ack.addEventListener("change", (event) => {
      draft.acknowledgedVsm = event.target.checked;
    });
  }

  [...document.querySelectorAll(".line-sku")].forEach((select) => {
    select.addEventListener("change", (event) => {
      const index = Number(event.target.dataset.lineIndex);
      const sku = skuById(event.target.value);
      if (draft.commercialType && sku && sku.model !== draft.commercialType) {
        showInlineAlert("wizardAlerts", "danger", `SKU ${sku.id} belongs to ${sku.model}. It does not match selected commercial type ${draft.commercialType}.`);
        event.target.value = draft.lines[index].skuId;
        return;
      }
      draft.lines[index].skuId = event.target.value;
      renderWizard();
    });
  });

  [...document.querySelectorAll("[data-remove-line]")].forEach((button) => {
    button.addEventListener("click", () => {
      draft.lines.splice(Number(button.dataset.removeLine), 1);
      renderWizard();
    });
  });

  [...document.querySelectorAll(".line-price")].forEach((input) => {
    input.addEventListener("input", (event) => {
      draft.lines[Number(event.target.dataset.lineIndex)].basePrice = event.target.value;
      renderWizard();
    });
  });
}

function showInlineAlert(targetId, tone, message) {
  document.getElementById(targetId).innerHTML = `<div class="alert alert-${tone}"><strong>${message}</strong></div>`;
}

function hasMixedSkuModels(draft) {
  return draft.lines.some((line) => line.skuId && skuById(line.skuId).model !== draft.commercialType);
}

function paymentValidationMessage(draft) {
  if (draft.commercialType === "SOR") {
    return Number(draft.firstPaymentDays) >= 1 && Number(draft.firstPaymentDays) <= 60 && settlementCycles.includes(Number(draft.settlementCycleDays))
      ? "Clear"
      : "Blocked";
  }
  if (draft.paymentType === "ADVANCE_FULL") return draft.advanceAmount ? "Clear" : "Blocked";
  if (draft.paymentType === "ADVANCE_PARTIAL") return draft.advanceAmount && Number(draft.creditDays) >= 1 && Number(draft.creditDays) <= 90 ? "Clear" : "Blocked";
  return Number(draft.creditDays) >= 1 && Number(draft.creditDays) <= 90 ? "Clear" : "Blocked";
}

function basePriceOk(line) {
  const sku = skuById(line.skuId);
  if (!sku) return false;
  const basePrice = Number(line.basePrice);
  return Number.isFinite(basePrice) && basePrice > 0 && basePrice <= maxBasePriceForSku(sku);
}

function validateWizardStep() {
  const step = appState.wizardStep;
  const draft = appState.wizardDraft;

  if (step === 0) {
    if (!draft.vendorId || !draft.supplyLocation || !draft.destinationIds.length || !draft.superCategory || !draft.commercialType) {
      showInlineAlert("wizardAlerts", "danger", "Vendor, supply, one or more destination hubs, super category, and commercial type are required.");
      return false;
    }
    if (new Date(draft.startDate) < appState.today) {
      showInlineAlert("wizardAlerts", "danger", "Start date must be today or later.");
      return false;
    }
    if (new Date(draft.endDate) <= new Date(draft.startDate)) {
      showInlineAlert("wizardAlerts", "danger", "End date must be later than the start date.");
      return false;
    }
    if (paymentValidationMessage(draft) !== "Clear") {
      showInlineAlert("wizardAlerts", "danger", "Payment terms are incomplete for the selected commercial type.");
      return false;
    }
    return true;
  }

  if (step === 1) {
    if (!draft.lines.length || draft.lines.some((line) => !line.skuId)) {
      showInlineAlert("wizardAlerts", "danger", "Add at least one valid SKU line.");
      return false;
    }
    if (hasMixedSkuModels(draft)) {
      showInlineAlert("wizardAlerts", "danger", "Selected commercial type and SKU model do not match.");
      return false;
    }
    const ids = draft.lines.map((line) => line.skuId);
    if (new Set(ids).size !== ids.length) {
      showInlineAlert("wizardAlerts", "danger", "Duplicate SKUs are not allowed inside one contract.");
      return false;
    }
    if (draft.lines.some((line) => skuById(line.skuId)?.vsmMissing) && !draft.acknowledgedVsm) {
      showInlineAlert("wizardAlerts", "danger", "Please acknowledge the VSM warning before continuing.");
      return false;
    }
    return true;
  }

  if (step === 2) {
    if (!draft.lines.every((line) => basePriceOk(line))) {
      showInlineAlert("wizardAlerts", "danger", "Each line requires a valid base price that keeps NLC below MRP.");
      return false;
    }
    return true;
  }

  const blocked = draft.destinationIds.some((hubId) => laneConflictsFor(draft, hubId).overlappingSku);
  if (blocked) {
    showInlineAlert("wizardAlerts", "danger", "One or more generated lanes are blocked by overlapping active SKU + lane contracts.");
    return false;
  }
  return true;
}

function draftPaymentObject(draft) {
  if (draft.commercialType === "SOR") {
    return { mode: "SOR", firstPaymentDays: Number(draft.firstPaymentDays), settlementCycleDays: Number(draft.settlementCycleDays) };
  }
  return {
    mode: "OR",
    paymentType: draft.paymentType,
    creditDays: draft.paymentType === "ADVANCE_FULL" ? null : Number(draft.creditDays || 0),
    advanceAmount: draft.paymentType === "CREDIT" ? null : Number(draft.advanceAmount || 0),
    paymentCurrency: draft.currency,
  };
}

function buildLineForSave(draft, line, vendorState, hubState) {
  const sku = skuById(line.skuId);
  const computed = computeCommercialLineFromBase(sku, Number(line.basePrice), vendorState, hubState);
  const vsmFields = getVsmDerivedFields(sku);
  return {
    skuId: line.skuId,
    basePrice: Number(computed.basePrice.toFixed(2)),
    marginValue: Number(computed.marginValue.toFixed(2)),
    nlc: Number(computed.nlc.toFixed(2)),
    moq: vsmFields.moq,
    minOrderValue: vsmFields.minOrderValue,
    leadTime: vsmFields.leadTime,
    vsmStatus: vsmFields.vsmStatus,
  };
}

function createContractsFromDraft(status) {
  const draft = appState.wizardDraft;
  const vendor = vendorById(draft.vendorId);
  const payment = draftPaymentObject(draft);
  const ids = allocateContractIds(draft.destinationIds.length);

  const created = draft.destinationIds.map((hubId, index) => {
    const hub = hubById(hubId);
    return {
      id: ids[index],
      vendorId: draft.vendorId,
      supplyLocation: draft.supplyLocation,
      hubId,
      type: draft.commercialType,
      superCategory: draft.superCategory,
      title: getDraftTitle(draft, hubId),
      titleAuto: !draft.titleOverrideEnabled,
      status,
      currency: draft.currency,
      payment,
      notes: draft.notes,
      startDate: draft.startDate,
      endDate: draft.endDate,
      createdBy: "Paridhi Gupta",
      categoryOwner: "Aditi Rao",
      latestFinanceReason: "",
      lines: draft.lines.map((line) => buildLineForSave(draft, line, vendor.state, hub.state)),
      audit: [
        {
          label: status === "DRAFT" ? "Draft created" : "Submitted to finance approval",
          meta: status === "DRAFT" ? "Saved from interactive prototype." : "Lifecycle moved to PENDING_APPROVAL.",
          at: "Apr 24, 2026 11:18",
        },
      ],
    };
  });

  created.reverse().forEach((contract) => contracts.unshift(contract));
  appState.selectedContractId = created[0].id;
  closeModal("createModal");
  renderAll();
}

function renderDuplicateModal() {
  const source = contractWithComputed(contracts.find((item) => item.id === appState.duplicateSourceId) || contracts[0]);
  document.getElementById("duplicateContractInfo").innerHTML = `
    <div>
      <strong>Source contract</strong>
      <div class="helper-text">${source.id} · ${source.title}<br />${contractLaneLabel(source)} · ${source.type}</div>
    </div>
  `;
  document.getElementById("duplicateFeedback").innerHTML = "";
}

function duplicateContract() {
  const source = contracts.find((item) => item.id === appState.duplicateSourceId) || contracts[0];
  const supplyValue = document.getElementById("duplicateSupply").value;
  const [vendorId, supplyLocation] = supplyValue.split("::");
  const destinationIds = [...document.querySelectorAll(".duplicate-hub:checked")].map((node) => node.value);

  if (!destinationIds.length) {
    document.getElementById("duplicateFeedback").innerHTML = `<div class="alert alert-danger"><strong>Select at least one destination hub.</strong></div>`;
    return;
  }

  appState.wizardDraft = {
    vendorId,
    supplyLocation,
    destinationIds,
    superCategory: source.superCategory,
    commercialType: source.type,
    titleOverrideEnabled: false,
    titleOverrides: {},
    startDate: "2026-04-25",
    endDate: source.endDate,
    currency: source.currency,
    notes: "Duplicated from existing contract. Taxes and VSM recomputed per lane.",
    paymentType: source.payment.paymentType || "CREDIT",
    creditDays: source.payment.creditDays || 21,
    advanceAmount: source.payment.advanceAmount || "",
    firstPaymentDays: source.payment.firstPaymentDays || 14,
    settlementCycleDays: source.payment.settlementCycleDays || 7,
    lines: source.lines.map((line) => ({ skuId: line.skuId, basePrice: line.basePrice, marginValue: line.marginValue })),
    acknowledgedVsm: true,
  };

  closeModal("duplicateModal");
  appState.wizardStep = 0;
  openModal("createModal");
  renderWizard();
}

function renderAmendmentModal() {
  const source = contractWithComputed(contracts.find((item) => item.id === appState.amendmentSourceId) || contracts[0]);
  document.getElementById("amendmentSku").innerHTML = source.computedLines
    .map((line) => {
      const label = `${line.sku.id} · ${line.sku.name} · Current Base ${formatCurrency(line.basePrice)}`;
      return `<option value="${line.sku.id}">${label}</option>`;
    })
    .join("");
  document.getElementById("amendmentInfo").innerHTML = `
    <div>
      <strong>${source.id} · ${source.title}</strong>
      <div class="helper-text">Any contract creation or change now requires finance approval. Amendments move the selected contract to PENDING_APPROVAL.</div>
    </div>
  `;
  document.getElementById("amendmentFeedback").innerHTML = "";
  document.getElementById("amendmentPrice").placeholder = "Enter revised base price";
  document.getElementById("amendmentPrice").value = "";
}

function submitAmendment() {
  const source = contracts.find((item) => item.id === appState.amendmentSourceId) || contracts[0];
  const skuId = document.getElementById("amendmentSku").value;
  const newValue = Number(document.getElementById("amendmentPrice").value);
  const line = source.lines.find((item) => item.skuId === skuId);
  const sku = skuById(skuId);

  if (!newValue || newValue <= 0) {
    document.getElementById("amendmentFeedback").innerHTML = `<div class="alert alert-danger"><strong>Enter a valid revised value.</strong></div>`;
    return;
  }

  if (newValue > maxBasePriceForSku(sku)) {
    document.getElementById("amendmentFeedback").innerHTML = `<div class="alert alert-danger"><strong>Base price is too high and would push NLC above MRP.</strong></div>`;
    return;
  }

  line.basePrice = newValue;
  line.marginValue = deriveMarginFromBasePrice(sku, newValue);

  source.status = "PENDING_APPROVAL";
  source.latestFinanceReason = "";
  source.audit.unshift({
    label: "Commercial change submitted",
    meta: "Base price revision submitted for mandatory finance approval.",
    at: "Apr 24, 2026 11:26",
    by: "Paridhi Gupta",
  });

  document.getElementById("amendmentFeedback").innerHTML = `<div class="alert alert-warning"><strong>Revision captured. Contract is now awaiting finance approval.</strong></div>`;
  renderAll();
}

function renderRenewModal() {
  const contract = contractWithComputed(contracts.find((item) => item.id === appState.selectedContractId) || contracts[0]);
  document.getElementById("renewInfo").innerHTML = `
    <div>
      <strong>${contract.id} · ${contract.title}</strong>
      <div class="helper-text">Renewal creates a new contract ID with copied fields, then expires the old contract.</div>
    </div>
  `;
  document.getElementById("renewStartDate").value = "2026-05-03";
  document.getElementById("renewEndDate").value = "2026-08-31";
  document.getElementById("renewFeedback").innerHTML = "";
}

function confirmRenewal() {
  const source = contracts.find((item) => item.id === appState.selectedContractId) || contracts[0];
  const startDate = document.getElementById("renewStartDate").value;
  const endDate = document.getElementById("renewEndDate").value;

  if (!startDate || !endDate || new Date(endDate) <= new Date(startDate)) {
    document.getElementById("renewFeedback").innerHTML = `<div class="alert alert-danger"><strong>Provide a valid renewal validity period.</strong></div>`;
    return;
  }

  const renewed = {
    ...source,
    id: nextContractId(),
    status: "DRAFT",
    startDate,
    endDate,
    latestFinanceReason: "",
    audit: [{ label: "Renewal draft created", meta: `Copied from ${source.id}.`, at: "Apr 24, 2026 11:28" }],
  };

  source.status = "EXPIRED";
  source.audit.unshift({ label: "Contract expired after renewal", meta: `Renewed into ${renewed.id}.`, at: "Apr 24, 2026 11:28" });
  contracts.unshift(renewed);
  appState.selectedContractId = renewed.id;
  closeModal("renewModal");
  renderAll();
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((header) => header.trim());
  return lines.slice(1).map((line) => {
    const parts = line.split(",").map((value) => value.trim());
    return headers.reduce((acc, header, index) => {
      acc[header] = parts[index] || "";
      return acc;
    }, {});
  });
}

function downloadCsvFile(content, filename) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function downloadBulkTemplate() {
  downloadCsvFile(emptyBulkCsv(), bulkTemplateFilename());
}

function processBulkUpload() {
  const rows = parseCsv(document.getElementById("bulkCsvInput").value);
  if (!rows.length) {
    document.getElementById("bulkFeedback").innerHTML = `<div class="alert alert-danger"><strong>Add at least one CSV data row.</strong></div>`;
    return;
  }

  const grouped = new Map();
  rows.forEach((row) => {
    const destinations = row.destinations.split("|").map((item) => item.trim()).filter(Boolean);
    const commercialType = normalizeCommercialType(row.commercial_type);
    destinations.forEach((hubId) => {
      const key = [row.vendor_id, row.supply_location, hubId, commercialType, row.super_category].join("::");
      if (!grouped.has(key)) {
        grouped.set(key, {
          vendorId: row.vendor_id,
          supplyLocation: row.supply_location,
          hubId,
          commercialType,
          superCategory: row.super_category,
          payment:
            commercialType === "SOR"
              ? { mode: "SOR", firstPaymentDays: Number(row.first_payment_days), settlementCycleDays: Number(row.settlement_cycle_days) }
              : {
                  mode: "OR",
                  paymentType: row.payment_type || "CREDIT",
                  creditDays: Number(row.credit_days || 0),
                  advanceAmount: Number(row.advance_amount || 0),
                  paymentCurrency: "INR",
                },
          lines: [],
        });
      }
      grouped.get(key).lines.push({
        skuId: row.sku_id,
        basePrice: Number(row.price_or_margin),
        marginValue: null,
      });
    });
  });

  const created = [];
  const ids = allocateContractIds(grouped.size);
  let index = 0;
  grouped.forEach((group) => {
    const vendor = vendorById(group.vendorId);
    const hub = hubById(group.hubId);
    const draft = {
      vendorId: group.vendorId,
      supplyLocation: group.supplyLocation,
      destinationIds: [group.hubId],
      superCategory: group.superCategory,
      commercialType: group.commercialType,
      titleOverrideEnabled: false,
      titleOverrides: {},
      startDate: "2026-04-25",
      endDate: "2026-07-31",
      currency: "INR",
      notes: "Created from bulk CSV upload.",
      lines: group.lines,
    };
    created.push({
      id: ids[index],
      vendorId: group.vendorId,
      supplyLocation: group.supplyLocation,
      hubId: group.hubId,
      type: group.commercialType,
      superCategory: group.superCategory,
      title: generateTitle(group.vendorId, group.supplyLocation, group.hubId, group.superCategory, group.commercialType),
      titleAuto: true,
      status: "DRAFT",
      currency: "INR",
      payment: group.payment,
      notes: "Created from bulk CSV upload.",
      startDate: "2026-04-25",
      endDate: "2026-07-31",
      createdBy: "Paridhi Gupta",
      categoryOwner: "Aditi Rao",
      latestFinanceReason: "",
      lines: group.lines.map((line) => buildLineForSave(draft, line, vendor.state, hub.state)),
      audit: [{ label: "Bulk upload draft created", meta: "Grouped by lane and commercial type.", at: "Apr 24, 2026 11:32" }],
    });
    index += 1;
  });

  created.reverse().forEach((contract) => contracts.unshift(contract));
  appState.selectedContractId = created[0].id;
  document.getElementById("bulkFeedback").innerHTML = `<div class="alert alert-success"><strong>${created.length} draft contract(s) created from bulk upload.</strong></div>`;
  renderAll();
}

function applySorCommercialTypeForSku(skuId, source) {
  const matchingConfigs = sorConfigurations.filter((config) => config.skuId === skuId);
  matchingConfigs.forEach((config) => {
    config.commercialType = "SOR";
    config.updatedAt = "Apr 28, 2026 12:20";
    config.updatedBy = "Paridhi Gupta";
    config.history.unshift({
      label: source === "bulk" ? "Bulk upload changed to SOR" : "Changed to SOR",
      meta:
        source === "bulk"
          ? `Updated via SOR configuration bulk upload for SKU ${skuId}.`
          : `Configured from the Configure SOR tab for SKU ${skuId}.`,
      at: "Apr 28, 2026 12:20",
      by: "Paridhi Gupta",
    });
  });
  return matchingConfigs;
}

function applySorConfiguration() {
  const sku = resolveSkuFromConfigureInput();
  const feedback = document.getElementById("configureSorFeedback");
  if (!feedback) return;

  if (!sku) {
    feedback.innerHTML = `<div class="alert alert-danger"><strong>Select a valid SKU ID or SKU Name from the dropdown.</strong></div>`;
    return;
  }

  const matchingConfigs = applySorCommercialTypeForSku(sku.id, "manual");
  if (!matchingConfigs.length) {
    feedback.innerHTML = `<div class="alert alert-danger"><strong>No vendor mappings exist for ${sku.id} in the seeded prototype data.</strong></div>`;
    return;
  }

  appState.selectedSorConfigKey = matchingConfigs[0].key;
  appState.currentSorTab = "dashboard";
  document.getElementById("sorSkuSearch").value = sku.id;
  document.getElementById("sorVendorSearch").value = "";
  renderAll();
}

function processSorBulkUpload() {
  const rows = parseCsv(document.getElementById("sorBulkCsvInput").value);
  if (!rows.length) {
    document.getElementById("sorBulkFeedback").innerHTML = `<div class="alert alert-danger"><strong>Add at least one CSV data row.</strong></div>`;
    return;
  }

  let updates = 0;
  rows.forEach((row) => {
    const skuId = row.sku_id;
    const commercialType = (row.commercial_type || "").toUpperCase();
    if (!skuId || commercialType !== "SOR") return;
    updates += applySorCommercialTypeForSku(skuId, "bulk").length;
  });

  document.getElementById("sorBulkFeedback").innerHTML = updates
    ? `<div class="alert alert-success"><strong>${updates} vendor SKU mapping(s) were moved to SOR from bulk upload.</strong></div>`
    : `<div class="alert alert-danger"><strong>No matching SKU configuration rows were found, or the uploaded commercial type was not SOR.</strong></div>`;
  renderAll();
}

function renderApprovalQueue() {
  const queue = contracts
    .map(contractWithComputed)
    .filter((contract) => contract.displayStatus === "PENDING_APPROVAL");
  const container = document.getElementById("approvalQueue");
  const badge = document.getElementById("approvalQueueCount");

  badge.textContent = `${queue.length} pending`;
  container.innerHTML = queue.length
    ? `<div class="approval-list">
        ${queue
          .map(
            (contract) => `
              <div class="approval-card">
                <div class="approval-card-header">
                  <div>
                    <strong>${contract.id}</strong>
                    <div class="approval-meta">${contract.title}</div>
                    <div class="approval-meta">${contract.vendor.name} (${contract.vendor.code}) · ${contractLaneLabel(contract)} · ${contract.type}</div>
                  </div>
                  <span class="status-pill status-${contract.displayStatus}">${contract.displayStatus.replaceAll("_", " ")}</span>
                </div>
                <div class="approval-meta">
                  Created by ${contract.createdBy} · Category owner ${contract.categoryOwner}<br />
                  ${contract.computedLines.length} SKU line(s) · Payment: ${paymentSummary(contract.payment)}
                </div>
                <div class="approval-card-actions">
                  <button class="secondary-btn approval-view-btn" data-contract="${contract.id}">Open Contract</button>
                  <button class="primary-btn approval-approve-btn" data-contract="${contract.id}">Finance Approve</button>
                  <button class="ghost-btn approval-reject-btn" data-contract="${contract.id}">Reject With Reason</button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>`
    : `<div class="empty-state">No contracts are waiting on finance approval right now.</div>`;

  [...container.querySelectorAll(".approval-view-btn")].forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedContractId = button.dataset.contract;
      renderContractDetail();
    });
  });

  [...container.querySelectorAll(".approval-approve-btn")].forEach((button) => {
    button.addEventListener("click", () => financeApproveContract(button.dataset.contract));
  });

  [...container.querySelectorAll(".approval-reject-btn")].forEach((button) => {
    button.addEventListener("click", () => {
      appState.rejectApprovalContractId = button.dataset.contract;
      renderRejectApprovalModal();
      openModal("rejectApprovalModal");
    });
  });
}

function financeApproveContract(contractId) {
  const contract = contracts.find((item) => item.id === contractId);
  if (!contract) return;
  const activatesNow = isStartDateReached(contract.startDate) && daysUntil(contract.endDate) >= 0;
  contract.status = activatesNow ? "ACTIVE" : "FINANCE_APPROVED";
  contract.latestFinanceReason = "";
  contract.audit.unshift({
    label: "Finance approved contract",
    meta: activatesNow
      ? "Approved in finance queue and activated immediately because the start date is already effective."
      : "Approved in finance queue. Contract will auto-activate on its start date.",
    at: "Apr 27, 2026 12:05",
    by: "Finance Controller",
  });
  if (activatesNow) {
    contract.audit.unshift({
      label: "Contract auto-activated",
      meta: "Start date is already effective, so activation happened immediately after finance approval.",
      at: "Apr 27, 2026 12:05",
      by: "System",
    });
  }
  appState.selectedContractId = contractId;
  renderAll();
}

function renderRejectApprovalModal() {
  const contract = contracts.find((item) => item.id === appState.rejectApprovalContractId);
  if (!contract) return;
  const computed = contractWithComputed(contract);
  document.getElementById("rejectApprovalInfo").innerHTML = `
    <div>
      <strong>${computed.id} · ${computed.title}</strong>
      <div class="helper-text">${computed.vendor.name} (${computed.vendor.code}) · ${contractLaneLabel(computed)} · ${computed.type}</div>
    </div>
  `;
  document.getElementById("rejectReasonInput").value = "";
  document.getElementById("rejectApprovalFeedback").innerHTML = "";
}

function submitRejectApproval() {
  const contract = contracts.find((item) => item.id === appState.rejectApprovalContractId);
  const reason = document.getElementById("rejectReasonInput").value.trim();
  if (!contract) return;
  if (!reason) {
    document.getElementById("rejectApprovalFeedback").innerHTML = `<div class="alert alert-danger"><strong>Enter a rejection reason for finance.</strong></div>`;
    return;
  }

  contract.status = "REJECTED";
  contract.latestFinanceReason = reason;
  contract.audit.unshift({
    label: "Finance rejected contract",
    meta: `Reason: ${reason}`,
    at: "Apr 27, 2026 12:08",
    by: "Finance Controller",
  });
  closeModal("rejectApprovalModal");
  appState.selectedContractId = contract.id;
  renderAll();
}

function renderAll() {
  autoActivateFinanceApprovedContracts();
  renderModuleVisibility();
  renderSorTabVisibility();
  renderMetrics();
  renderContractTable();
  renderContractDetail();
  renderApprovalQueue();
  renderSorConfigurationTable();
  renderSorConfigurationDetail();
  renderSorConfigurePanel();
}

function attachBaseHandlers() {
  ["searchInput", "vendorFilter", "typeFilter", "statusFilter", "hubFilter", "expiryFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderContractTable);
    document.getElementById(id).addEventListener("change", renderContractTable);
  });

  document.getElementById("resetFilters").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    document.getElementById("vendorFilter").value = "ALL";
    document.getElementById("typeFilter").value = "ALL";
    document.getElementById("statusFilter").value = "ALL";
    document.getElementById("hubFilter").value = "ALL";
    document.getElementById("expiryFilter").value = "ALL";
    renderContractTable();
  });

  document.getElementById("openCreateModal").addEventListener("click", () => {
    seedWizardDraft();
    appState.wizardStep = 0;
    openModal("createModal");
    renderWizard();
  });

  document.getElementById("duplicateQuickAction").addEventListener("click", () => {
    appState.duplicateSourceId = appState.selectedContractId;
    renderDuplicateModal();
    openModal("duplicateModal");
  });

  document.getElementById("openAmendment").addEventListener("click", () => {
    appState.amendmentSourceId = appState.selectedContractId;
    renderAmendmentModal();
    openModal("amendmentModal");
  });

  document.getElementById("openBulkModal").addEventListener("click", () => {
    document.getElementById("bulkCsvInput").value = emptyBulkCsv();
    document.getElementById("bulkFeedback").innerHTML = "";
    openModal("bulkModal");
  });

  document.getElementById("useBulkTemplate").addEventListener("click", () => {
    document.getElementById("bulkCsvInput").value = emptyBulkCsv();
  });

  document.getElementById("downloadBulkTemplate").addEventListener("click", downloadBulkTemplate);

  document.getElementById("openRenewModal").addEventListener("click", () => {
    renderRenewModal();
    openModal("renewModal");
  });

  document.getElementById("openSorBulkModal").addEventListener("click", () => {
    document.getElementById("sorBulkCsvInput").value = emptySorBulkCsv();
    document.getElementById("sorBulkFeedback").innerHTML = "";
    openModal("sorBulkModal");
  });

  document.getElementById("useSorBulkTemplate").addEventListener("click", () => {
    document.getElementById("sorBulkCsvInput").value = emptySorBulkCsv();
  });

  document.getElementById("downloadSorBulkTemplate").addEventListener("click", () => {
    downloadCsvFile(emptySorBulkCsv(), sorBulkTemplateFilename());
  });

  document.getElementById("applySorConfiguration").addEventListener("click", applySorConfiguration);

  document.getElementById("wizardBack").addEventListener("click", () => {
    if (appState.wizardStep > 0) {
      appState.wizardStep -= 1;
      renderWizard();
    }
  });

  document.getElementById("wizardNext").addEventListener("click", () => {
    if (!validateWizardStep()) return;
    if (appState.wizardStep === wizardSteps.length - 1) {
      createContractsFromDraft("PENDING_APPROVAL");
      return;
    }
    appState.wizardStep += 1;
    renderWizard();
  });

  document.getElementById("saveDraftButton").addEventListener("click", () => {
    if (!validateWizardStep()) return;
    createContractsFromDraft("DRAFT");
  });

  document.getElementById("confirmDuplicate").addEventListener("click", duplicateContract);
  document.getElementById("submitAmendment").addEventListener("click", submitAmendment);
  document.getElementById("processBulkUpload").addEventListener("click", processBulkUpload);
  document.getElementById("processSorBulkUpload").addEventListener("click", processSorBulkUpload);
  document.getElementById("confirmRenewal").addEventListener("click", confirmRenewal);
  document.getElementById("submitRejectApproval").addEventListener("click", submitRejectApproval);

  ["sorSkuSearch", "sorVendorSearch", "sorTypeFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      renderSorConfigurationTable();
      renderSorConfigurationDetail();
    });
    document.getElementById(id).addEventListener("change", () => {
      renderSorConfigurationTable();
      renderSorConfigurationDetail();
    });
  });

  document.getElementById("configureSorSkuInput").addEventListener("input", renderSorConfigurePanel);

  [...document.querySelectorAll("[data-sor-tab]")].forEach((button) => {
    button.addEventListener("click", () => {
      appState.currentSorTab = button.dataset.sorTab;
      renderAll();
    });
  });

  [...document.querySelectorAll("[data-module]")].forEach((button) => {
    button.addEventListener("click", () => {
      appState.currentModule = button.dataset.module;
      renderAll();
    });
  });

  [...document.querySelectorAll("[data-close]")].forEach((button) => {
    button.addEventListener("click", () => closeModal(button.dataset.close));
  });
}

function init() {
  renderFilters();
  populateDuplicateOptions();
  renderSorSkuOptions();
  attachBaseHandlers();
  document.getElementById("bulkCsvInput").value = emptyBulkCsv();
  document.getElementById("sorBulkCsvInput").value = emptySorBulkCsv();
  document.getElementById("configureSorType").value = "SOR";
  renderAll();
}

init();
