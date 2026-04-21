# Procure-to-Pay (P2P) Cycle in SAP MM

An interactive web project visualizing the end-to-end Procure-to-Pay process in SAP Materials Management (MM).

**Submitted by:** Aditya Mohan  
**Roll No:** 2305023  
**Course:** SAP Data Analytics Engineer  
**Institution:** Kalinga Institute of Industrial Technology (KIIT)

---

## 🔗 Live Demo

> Open `index.html` directly in any browser — no server or installation needed.

---

## 📁 Project Structure

```
p2p-sap-mm/
├── index.html          ← Main webpage (open this)
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← Stage data & interactivity
└── README.md           ← This file
```

---

## 📋 What's Inside

The project covers all **6 key stages** of the P2P cycle in SAP MM:

| Step | Stage | T-Code |
|------|-------|--------|
| 01 | Vendor Creation | `XK01` |
| 02 | Purchase Requisition | `ME51N` |
| 03 | Purchase Order | `ME21N` |
| 04 | Goods Receipt | `MIGO` |
| 05 | Invoice Verification | `MIRO` |
| 06 | Payment Processing | `F-53` |

### Sections Covered
- **Problem Statement** — why manual procurement fails
- **Interactive Stages** — click each stage for full details, key points, and outputs
- **Process Flowchart** — visual end-to-end P2P flow with 3-way match
- **Key Features** — automation, real-time visibility, FI integration, etc.
- **Future Improvements** — AI/ML, RPA, S/4HANA Cloud, Blockchain
- **Conclusion & References**

---

## 🚀 How to Run Locally

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/p2p-sap-mm.git
   ```

2. **Navigate** into the project folder:
   ```bash
   cd p2p-sap-mm
   ```

3. **Open** `index.html` in your browser:
   - Double-click `index.html`, OR
   - Right-click → Open With → Browser

That's it. No Node.js, no npm, no build step needed.

---

## 🌐 How to Deploy on GitHub Pages

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch and `/ (root)`.
4. Click **Save**.
5. Your site will be live at: `https://YOUR_USERNAME.github.io/p2p-sap-mm/`

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Stage interactivity, scroll animations |
| Google Fonts | DM Serif Display, Outfit, DM Mono |

---

## 📚 References

1. SAP Help Portal — Materials Management (MM) Module Documentation. SAP SE.
2. Leimbach, T. & Wenzel, T. (2019). *SAP MM Purchasing*. Rheinwerk Publishing.
3. Kalinga Institute of Industrial Technology — SAP Data Analytics Engineering Course Materials (2023).
4. SAP S/4HANA Cloud Documentation. SAP SE. https://help.sap.com

---

## 📄 License

This project is submitted as an academic assignment. All content is based on SAP MM documentation and course materials.
