const stages = [
  {
    icon: "🏢",
    step: "Stage 01 of 06",
    title: "Vendor Creation",
    tcode: "XK01",
    desc: "Vendor creation is the first step in the procurement process. Before any purchasing can occur, the vendor must be registered in the SAP system. Accurate vendor master data is critical as it is used throughout the entire P2P cycle.",
    points: [
      "General data: company name, address, communication details",
      "Company code data: reconciliation account, payment terms",
      "Purchasing org data: incoterms, order currency, schema group",
      "Vendor records reused across multiple POs and payment transactions"
    ],
    outputs: [
      { icon: "✅", text: "Vendor master record created in SAP" },
      { icon: "🔑", text: "Unique vendor number generated" },
      { icon: "📋", text: "Payment terms & bank details stored" }
    ]
  },
  {
    icon: "📋",
    step: "Stage 02 of 06",
    title: "Purchase Requisition",
    tcode: "ME51N",
    desc: "A Purchase Requisition (PR) is an internal request for procurement made by a department when goods or services are needed. It specifies what is required without creating a legal commitment to the vendor.",
    points: [
      "Requisitioner specifies material code and required quantity",
      "Delivery date and account assignment details included",
      "Does not create a legal commitment to the vendor",
      "Needs proper approval before conversion to a Purchase Order"
    ],
    outputs: [
      { icon: "📄", text: "Internal PR document created" },
      { icon: "🔄", text: "Routed through approval workflow" },
      { icon: "🔗", text: "Can be created manually or by MRP" }
    ]
  },
  {
    icon: "📄",
    step: "Stage 03 of 06",
    title: "Purchase Order",
    tcode: "ME21N",
    desc: "The Purchase Order (PO) is the main commercial document in the P2P cycle. Created with T-Code ME21N, it formalizes the agreement between the organization and the vendor and serves as the legal basis for the procurement transaction.",
    points: [
      "Can reference a Purchase Requisition or be created independently",
      "Vendor details and purchasing organization information",
      "Line items: material, quantity, unit price, and delivery date",
      "Payment terms, tax codes, and delivery instructions included"
    ],
    outputs: [
      { icon: "⚖️", text: "Legal procurement document issued" },
      { icon: "📤", text: "PO sent to vendor after release" },
      { icon: "🔢", text: "Unique PO number for tracking" }
    ]
  },
  {
    icon: "📦",
    step: "Stage 04 of 06",
    title: "Goods Receipt",
    tcode: "MIGO",
    desc: "When the vendor physically delivers goods, a Goods Receipt (GR) is posted in SAP using T-Code MIGO. This step records what was actually delivered and initiates the critical three-way match process.",
    points: [
      "Records the quantity and condition of goods received",
      "Updates warehouse stock and inventory valuation automatically",
      "Creates both a material document and an accounting document",
      "GR document number is required for Invoice Verification"
    ],
    outputs: [
      { icon: "🏭", text: "Inventory stock updated in real time" },
      { icon: "📝", text: "Material & accounting documents posted" },
      { icon: "🔍", text: "Three-way match process initiated" }
    ]
  },
  {
    icon: "🧾",
    step: "Stage 05 of 06",
    title: "Invoice Verification",
    tcode: "MIRO",
    desc: "Invoice Verification is an essential control point in the P2P cycle. The system automatically compares the vendor invoice against the Purchase Order and Goods Receipt. Any discrepancies trigger a warning or block in the system.",
    points: [
      "Automatic three-way match: PO vs GR vs Vendor Invoice",
      "Price or quantity differences trigger system warnings or blocks",
      "Vendor liability created in the FI module on success",
      "Tax amounts are calculated and posted automatically"
    ],
    outputs: [
      { icon: "✔️", text: "Invoice approved and liability posted" },
      { icon: "💰", text: "Tax posted to relevant GL accounts" },
      { icon: "🚫", text: "Discrepancies blocked — no incorrect payments" }
    ]
  },
  {
    icon: "💳",
    step: "Stage 06 of 06",
    title: "Payment Processing",
    tcode: "F-53",
    desc: "The final step in the P2P cycle is the actual payment to the vendor. Using T-Code F-53 (Post Outgoing Payments), the accounts payable team processes the payment. All financial entries are recorded in real time.",
    points: [
      "Clears the open vendor invoice from the liability account",
      "Posts the corresponding debit entry to the bank account",
      "Generates payment documentation for audit and reconciliation",
      "General ledger updated in real time — always accurate"
    ],
    outputs: [
      { icon: "🏦", text: "Bank account debited, vendor paid" },
      { icon: "📊", text: "GL entries posted automatically" },
      { icon: "🗂️", text: "Audit trail and payment docs generated" }
    ]
  }
];

let activeStage = 0;

function showStage(index) {
  activeStage = index;

  // Update nav buttons
  document.querySelectorAll('.snav-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  // Render detail
  const s = stages[index];
  const detail = document.getElementById('stageDetail');
  detail.innerHTML = `
    <div class="sd-header">
      <div class="sd-icon-wrap">${s.icon}</div>
      <div>
        <div class="sd-step">${s.step}</div>
        <div class="sd-title">${s.title}</div>
        <div class="sd-tcode">${s.tcode}</div>
      </div>
    </div>
    <p class="sd-desc">${s.desc}</p>
    <div class="sd-grid">
      <div class="sd-col">
        <h4>Key Points</h4>
        <ul class="sd-points">
          ${s.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="sd-col">
        <h4>Outputs / Results</h4>
        <div class="sd-outputs">
          ${s.outputs.map(o => `
            <div class="sd-output">
              <span class="out-icon">${o.icon}</span>
              <span>${o.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Init
showStage(0);

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .future-card, .pain-item, .flow-node').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
