import { useState } from "react";


const CREDS = [
  {
    id:"banking",
    eyebrow:"Active · Current",
    title:"Corporate Banking Operations",
    body:"16+ years inside a high-accountability, process-driven institutional environment. The origin of the methodology — not the consulting market. This is where the discipline was built.",
    brief:null, badge:null
  },
  {
    id:"ghostwriting",
    eyebrow:"Selected Work · NDA Protected",
    title:"Literary & Academic Research · Ghostwriting",
    body:"Research and writing engagements across literary and academic domains. Selected clients represented under NDA. Writing samples available upon request.",
    brief:null, badge:null
  },
  {
    id:"huffpost",
    eyebrow:"Published · Verified",
    title:"Huffington Post Contributor",
    body:"Published contributor. Proof that complex ideas — operational, methodological, strategic — translate into clear, public-facing language.",
    brief:null, badge:null
  },
  {
    id:"wharton",
    eyebrow:"Certified · Verifiable",
    title:"AI for Business",
    issuer:"Wharton School, University of Pennsylvania",
    body:"Strategic AI adoption, risk frameworks, ethics, and organizational readiness — translated into the operational reality of knowledge work and virtual service delivery.",
    brief:"https://drive.google.com/file/d/1nEQxXwa6yCZFGSn7FRWO2eEnaI-DV_GS/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"starweaver",
    eyebrow:"Certified · Verifiable",
    title:"AI-Powered Business Operations",
    issuer:"Starweaver",
    body:"Four-course applied program covering Business Process Modeling with AI, ChatGPT for Product Management & Innovation, Data Storytelling for B2B & B2C Sales, and Gen AI for Sustainability.",
    brief:"https://drive.google.com/file/d/1lyVxAlfpFSGmxMIALgIxfuEP7eukA5bc/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"scrimba",
    eyebrow:"Certified · Verifiable",
    title:"Vibe Coding Essentials: Build Apps with AI",
    issuer:"Scrimba",
    body:"Five-module builder credential: Cursor AI, GitHub Copilot, Claude Code, Model Context Protocol (MCP), and AI-assisted development foundations. The credential behind every custom tool in this stack.",
    brief:"https://drive.google.com/file/d/1JEecJWm7ZlJXzH-MiuQ6PCMzetUQHvrk/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"id-foundations",
    eyebrow:"Certified · Verifiable",
    title:"Instructional Design Foundations and Applications",
    issuer:"University of Illinois Urbana-Champaign",
    body:"The learning science behind the system architecture. Covers adult learning theory, curriculum design, learner analysis, and evaluation frameworks — applied directly to how the VA Launch System is structured and sequenced.",
    brief:"https://drive.google.com/file/d/1BkJE2i2wnFhkm2yIfitYdt5gPc86zqut/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"lxd-michigan",
    eyebrow:"Certified · Verifiable",
    title:"An Introduction to Learning Experience Design (LXD)",
    issuer:"University of Michigan",
    body:"Three-course specialization covering orientation to the profession, theories and frameworks, and development and evaluation. The discipline behind building programs that people actually complete — not just content they consume.",
    brief:"https://drive.google.com/file/d/1YOFon1qqP0kCuykpA81jRShfZsH9358R/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"design-thinking",
    eyebrow:"Certified · Verifiable",
    title:"Design Thinking",
    issuer:"University of Virginia",
    body:"The human-centered framework underneath every system that gets used. Design Thinking applied here means building operational infrastructure that accounts for how people actually work — not just how a process diagram assumes they do. The complement to Lean: one eliminates waste, the other ensures the design never creates it in the first place.",
    brief:"https://drive.google.com/file/d/1FKQpGUAHoN31fCIOiPORUXBGMPORTU1M/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"google-analytics",
    eyebrow:"Certified · Verifiable",
    title:"Google Data Analytics Professional Certificate",
    issuer:"Google",
    body:"Google's professional certificate program covering the complete data analytics workflow — from asking the right questions through cleaning, analyzing, and visualizing data to communicate findings that drive decisions. The data literacy layer applied across every engagement.",
    brief:"https://drive.google.com/file/d/1Lnb1aa3GDs1wK0h7anAv1PbgirxrDeJx/view?usp=sharing",
    pdfLabel:"View Brief →", badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"lss-gb",
    eyebrow:"Certified · Verifiable",
    title:"Lean Six Sigma Green Belt",
    issuer:"CSSC via Certify",
    body:"The credential behind the methodology. Not a framework read about — one certified in and applied operationally across every engagement.",
    brief:null, pdfLabel:null,
    badge:null,
    verify:"Verification available upon request.",
    hasBrief:true,
    briefKey:"gb"
  },
  {
    id:"lss-ai",
    eyebrow:"Certified · Verifiable",
    title:"Lean Six Sigma + AI Integration",
    issuer:"CSSC via Certify",
    body:"The methodology meets the technology. How AI integrates with Lean principles — not to replace human judgment but to eliminate the manual friction that makes good systems unsustainable.",
    brief:null, pdfLabel:null,
    badge:null,
    verify:"Verification available upon request.",
    hasBrief:true,
    briefKey:"ai"
  },
  {
    id:"lss-bb",
    eyebrow:"Certified · Verifiable",
    title:"Lean Six Sigma Black Belt",
    issuer:"CSSC via Certify",
    body:"The advanced credential. Not just process improvement at individual scale — process design and deployment at global scale. Applied to a live operational system running across 23 countries within 90 days of launch.",
    brief:null, pdfLabel:null,
    badge:null,
    verify:"Verification available upon request.",
    hasBrief:true,
    briefKey:"bb"
  },
];

const ENGAGEMENTS = [
  {
    num:"01",
    context:"A VA practice operating across three service categories",
    problem:"Onboarding new clients took longer than delivering their first month of work. Every new relationship started from zero — no standard process, no documented workflow, no consistency across team members. The founder was the only person who knew how anything was supposed to run.",
    approach:"Value stream mapping across the full client lifecycle. Identified six distinct waste points including overprocessing in intake, motion waste across four disconnected tools, and inventory waste in partially-built SOPs that were never completed. AI integration at two manual bottleneck stages: client brief processing and recurring reporting.",
    outcome:"Client onboarding time reduced by more than half. Service delivery consistency measurably improved across the team. The founder removed herself from the onboarding process entirely within six weeks of implementation — the system ran without her."
  },
  {
    num:"02",
    context:"A veterinary clinic managing client and patient records across disconnected systems",
    problem:"Client contact information, patient records, appointment follow-ups, and billing communications lived across three separate tools that did not communicate with each other. Staff transferred information between systems manually, multiple times per day. Post-appointment care reminders, vaccination follow-ups, and billing communications were inconsistent because no single system was triggering them. Client data was distributed across platforms with no unified privacy protocol in place.",
    approach:"Lean audit of the full client-patient data lifecycle from first contact through ongoing care and billing. Identified five manual transfer points generating daily reconciliation overhead and two gaps in data privacy handling. Custom CRM built with unified client and patient records, appointment tracking, automated follow-up triggers for post-care communications and vaccination reminders, and billing status integration. Data privacy architecture built to handle sensitive client and patient information appropriately. Workflow automation at three stages eliminated the manual cross-system transfer entirely.",
    outcome:"Daily manual data transfer eliminated within the first two weeks of deployment. Follow-up communication consistency improved immediately — reminders and post-care messages now trigger automatically from a single system. Staff recovered approximately six hours per week previously spent on reconciliation. The clinic owns the system outright with no ongoing SaaS dependency for core client data."
  }
];

const S = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600;700&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --deep:#0F0D0B;
    --ink:#1A1714;
    --fog:#EDE9E3;
    --ash:#D9D4CE;
    --steel:#6B7280;
    --muted:#A09C96;
    --rule:rgba(237,233,227,0.12);
    --bd:rgba(237,233,227,0.08);
    --sf:'DM Serif Display',Georgia,serif;
    --ss:'Instrument Sans',system-ui,sans-serif;
    --mo:'DM Mono',monospace;
  }
  html{scroll-behavior:smooth}
  body{background:var(--deep);color:var(--fog);font-family:var(--ss);font-size:18px;line-height:1.7;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:0;opacity:0.5}
  .pg{max-width:860px;margin:0 auto;padding:0 24px;position:relative;z-index:1}
  .hdr{padding:80px 0 64px;border-bottom:1px solid var(--rule)}
  .eyebrow{font-family:var(--mo);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--steel);margin-bottom:24px;display:flex;gap:12px;align-items:center}
  .eyebrow::before{content:'';display:block;width:24px;height:1px;background:var(--steel);flex-shrink:0}
  .hl{font-family:var(--sf);font-size:clamp(40px,7vw,70px);line-height:1.05;letter-spacing:-.02em;margin-bottom:28px;color:var(--fog)}
  .sub{font-size:19px;line-height:1.7;color:var(--muted);max-width:600px;margin-bottom:24px}
  .pos{font-family:var(--mo);font-size:13px;color:var(--steel);letter-spacing:.06em;line-height:1.9;margin-bottom:8px}
  .ctas{display:flex;gap:12px;margin-top:44px;flex-wrap:wrap}
  .btn-p{background:var(--fog);color:var(--deep);font-family:var(--mo);font-size:13px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding:14px 22px;border:none;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:background .15s}
  .btn-p:hover{background:var(--ash)}
  .btn-s{background:transparent;color:var(--muted);font-family:var(--mo);font-size:13px;letter-spacing:.1em;text-transform:uppercase;padding:13px 21px;border:1px solid var(--rule);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:border-color .15s,color .15s}
  .btn-s:hover{border-color:rgba(237,233,227,0.3);color:var(--fog)}
  .sec{padding:80px 0;border-bottom:1px solid var(--rule)}
  .sec-lbl{font-family:var(--mo);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--steel);margin-bottom:12px;display:flex;align-items:center;gap:12px}
  .sec-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--steel);flex-shrink:0}
  .sec-hl{font-family:var(--sf);font-size:clamp(28px,4vw,42px);line-height:1.1;letter-spacing:-.02em;margin-bottom:20px;color:var(--fog)}
  .sec-intro{font-size:17px;color:var(--muted);max-width:560px;line-height:1.75;margin-bottom:48px}
  .origin p{font-size:18px;line-height:1.85;color:var(--muted);margin-bottom:22px;max-width:720px}
  .origin p:first-child{font-size:19px;color:var(--fog)}
  .creds{display:flex;flex-direction:column;gap:2px;margin-top:48px}
  .cc{background:rgba(237,233,227,0.03);border:1px solid var(--bd);padding:28px 32px;transition:border-color .2s}
  .cc:hover{border-color:var(--rule)}
  .cc-inner{display:flex;gap:20px;align-items:flex-start}
  .cbadge{width:52px;height:52px;flex-shrink:0;object-fit:contain;border-radius:4px;background:#fff}
  .cc-body{flex:1;min-width:0}
  .cc-ey{font-family:var(--mo);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel);margin-bottom:6px}
  .cc-title{font-size:18px;font-weight:600;margin-bottom:4px;line-height:1.3;color:var(--fog)}
  .cc-issuer{font-family:var(--mo);font-size:12px;color:var(--steel);margin-bottom:10px;letter-spacing:.05em}
  .cc-text{font-size:15px;color:var(--muted);line-height:1.7;margin-bottom:12px}
  .cc-foot{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
  .cc-verify{font-family:var(--mo);font-size:11px;color:var(--steel);letter-spacing:.05em}
  .btn-pdf{font-family:var(--mo);font-size:12px;letter-spacing:.08em;text-transform:uppercase;padding:6px 14px;border:1px solid rgba(237,233,227,0.25);color:var(--muted);background:transparent;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:background .15s,color .15s,border-color .15s}
  .btn-pdf:hover{background:var(--fog);color:var(--deep);border-color:var(--fog)}
  .engs{display:flex;flex-direction:column;gap:2px;margin-top:12px}
  .eng{background:rgba(237,233,227,0.03);border:1px solid var(--bd);padding:32px}
  .eng-num{font-family:var(--mo);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fog);margin-bottom:6px}
  .eng-ctx{font-family:var(--mo);font-size:13px;color:var(--steel);margin-bottom:20px;font-style:italic}
  .eng-blk{margin-bottom:18px}
  .eng-lbl{font-family:var(--mo);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--steel);margin-bottom:8px}
  .eng-txt{font-size:15px;color:var(--muted);line-height:1.75}
  .eng-txt.out{color:var(--fog)}
  .meth-note{background:rgba(237,233,227,0.03);border:1px solid var(--bd);border-left:2px solid var(--steel);padding:20px 24px;margin-top:24px;font-size:15px;color:var(--muted);line-height:1.75;font-style:italic}
  .lanes{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;margin-top:40px}
  @media(max-width:860px){.lanes{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){.lanes{grid-template-columns:1fr}}
  .lane{background:rgba(237,233,227,0.03);border:1px solid var(--bd);padding:32px;display:flex;flex-direction:column}
  .lane-lbl{font-family:var(--mo);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel);margin-bottom:10px}
  .lane-for{font-family:var(--mo);font-size:10px;letter-spacing:.1em;color:var(--muted);margin-bottom:14px;padding:8px 12px;border:1px solid var(--bd);line-height:1.6}
  .lane-title{font-family:var(--sf);font-size:24px;margin-bottom:6px;letter-spacing:-.01em;color:var(--fog);line-height:1.15}
  .lane-dur{font-family:var(--mo);font-size:12px;color:var(--muted);letter-spacing:.06em;margin-bottom:20px}
  .lane-body{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:16px;flex:1}
  .lane-avail{font-family:var(--mo);font-size:12px;color:var(--steel);line-height:1.65;margin-bottom:20px;padding:12px 16px;border:1px solid var(--bd);background:rgba(237,233,227,0.02)}
  .doors{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;margin-top:40px}
  @media(max-width:860px){.doors{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){.doors{grid-template-columns:1fr}}
  .door{background:rgba(237,233,227,0.03);border:1px solid var(--bd);padding:32px}
  .door-lbl{font-family:var(--mo);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel);margin-bottom:8px}
  .door-for{font-family:var(--mo);font-size:11px;color:var(--muted);margin-bottom:16px;line-height:1.65;padding:10px 12px;border:1px solid var(--bd);background:rgba(237,233,227,0.02)}
  .door-title{font-family:var(--sf);font-size:24px;margin-bottom:20px;letter-spacing:-.01em;line-height:1.2;color:var(--fog)}
  .fld{margin-bottom:16px}
  .fld label{display:block;font-family:var(--mo);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--steel);margin-bottom:6px}
  .fld input,.fld textarea,.fld select{width:100%;background:rgba(237,233,227,0.04);border:1px solid var(--rule);color:var(--fog);font-family:var(--ss);font-size:15px;padding:10px 12px;outline:none;resize:vertical;transition:border-color .15s;-webkit-appearance:none}
  .fld input:focus,.fld textarea:focus,.fld select:focus{border-color:rgba(237,233,227,0.3)}
  .fld input::placeholder,.fld textarea::placeholder{color:var(--steel)}
  .fld textarea{min-height:80px}
  .fld select option{background:var(--ink);color:var(--fog)}
  .fnote{font-family:var(--mo);font-size:11px;color:var(--steel);line-height:1.65;margin-top:12px;letter-spacing:.03em}
  .fsuccess{background:rgba(237,233,227,0.04);border:1px solid var(--rule);padding:20px;font-family:var(--mo);font-size:12px;color:var(--fog);letter-spacing:.04em;line-height:1.65;margin-top:8px}
  .meth-link{font-family:var(--mo);font-size:12px;letter-spacing:.08em;color:var(--muted);border:1px solid var(--bd);padding:10px 18px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:color .15s,border-color .15s}
  .meth-link:hover{color:var(--fog);border-color:var(--rule)}
  .eco-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin:32px 0 2px}
  @media(max-width:680px){.eco-strip{grid-template-columns:repeat(2,1fr)}}
  .eco-stat{background:rgba(237,233,227,0.03);border:1px solid var(--bd);padding:24px 20px}
  .eco-stat-num{font-family:var(--sf);font-size:36px;color:var(--fog);line-height:1;margin-bottom:8px;letter-spacing:-.02em}
  .eco-stat-label{font-family:var(--mo);font-size:10px;color:var(--steel);letter-spacing:.12em;text-transform:uppercase;line-height:1.6}
  .country-block{background:rgba(237,233,227,0.03);border:1px solid var(--bd);padding:32px;margin:2px 0 48px}
  .country-num{font-family:var(--sf);font-size:clamp(48px,7vw,72px);color:var(--fog);line-height:1;letter-spacing:-.02em;margin-bottom:8px}
  .country-label{font-family:var(--mo);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--steel);margin-bottom:20px;display:flex;align-items:center;gap:12px}
  .country-label::before{content:'';display:block;width:16px;height:1px;background:var(--steel);flex-shrink:0}
  .country-list{font-family:var(--mo);font-size:13px;color:var(--muted);letter-spacing:.06em;line-height:2.2}
  .btn-brief-toggle{font-family:var(--mo);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--steel);background:transparent;border:1px solid var(--bd);padding:6px 14px;cursor:pointer;transition:color .15s,border-color .15s}
  .btn-brief-toggle:hover{color:var(--fog);border-color:var(--rule)}
  .brief-panel{border-top:1px solid var(--rule);margin-top:20px;padding-top:24px}
  .brief-section{margin-bottom:22px}
  .brief-section:last-child{margin-bottom:0}
  .brief-phase{font-family:var(--mo);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--steel);margin-bottom:10px;display:flex;align-items:center;gap:10px}
  .brief-phase::before{content:'';display:block;width:12px;height:1px;background:var(--steel);flex-shrink:0}
  .brief-body{font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:10px}
  .brief-body p{margin-bottom:10px}
  .brief-body p:last-child{margin-bottom:0}
  .brief-metrics{display:flex;flex-direction:column;gap:1px}
  .brief-metric-row{display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding:7px 10px;background:rgba(237,233,227,0.02);border:1px solid var(--bd)}
  .brief-metric-label{font-family:var(--mo);font-size:11px;color:var(--muted);letter-spacing:.04em;flex-shrink:0}
  .brief-metric-val{font-family:var(--mo);font-size:11px;color:var(--fog);letter-spacing:.04em;text-align:right}
  .ftr{padding:64px 0;text-align:center;position:relative;z-index:1}
  .cat-img{width:80px;height:80px;object-fit:contain;margin-bottom:20px;display:block;margin-left:auto;margin-right:auto}
  .ftr-brand{font-family:var(--sf);font-size:26px;color:var(--muted);margin-bottom:8px;letter-spacing:-.01em}
  .ftr-tag{font-family:var(--mo);font-size:12px;color:var(--steel);letter-spacing:.1em;text-transform:uppercase;margin-bottom:24px}
  .ftr-note{font-family:var(--mo);font-size:12px;color:var(--steel);line-height:1.75;max-width:440px;margin:0 auto;font-style:italic;letter-spacing:.03em}
`;

const BRIEFS = {
  gb: (
    <div className="brief-panel">
      <div className="brief-section">
        <div className="brief-phase">The Project</div>
        <div className="brief-body"><p>Improving Associate Performance Metrics for QA, QSS, and SLA Compliance. Jan 2025 – Mar 2026 · DMAIC · CSSC via Certify</p><p>Full DMAIC application used to diagnose and resolve a sustained performance gap across three critical banking operations metrics. All three metrics cleared the 90% target by February 2026 — with zero urgent-request complaints sustained across Q4 2025 and into 2026.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">D — Define</div>
        <div className="brief-body"><p>One associate in a nonprofit banking pod serving churches and religious organizations. Three metrics consistently below the 90% target over nine months: QA Pass Rate, QSS Dual Review, and SLA Adherence. Three urgent request complaints in Q3 2025 involving fraud, wire, ACH, and account takeover cases confirmed operational and client relationship risk.</p><p>Project goal: improve all three metrics to ≥90% by December 2025 and sustain through March 2026.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">M — Measure</div>
        <div className="brief-body"><p>Nine months of performance data extracted from Salesforce and the internal QA monitoring dashboard.</p></div>
        <div className="brief-metrics">
          <div className="brief-metric-row"><span className="brief-metric-label">SLA Adherence</span><span className="brief-metric-val">81.8% baseline · −8.2 pp below target</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">QSS Dual Review</span><span className="brief-metric-val">77.6% baseline · −12.4 pp (widest gap)</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">QA Pass Rate</span><span className="brief-metric-val">84.3% baseline · −5.7 pp below target</span></div>
        </div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">A — Analyze</div>
        <div className="brief-body"><p>Three tools applied sequentially: Pareto Analysis, Ishikawa Fishbone, and 5 Why's. Pareto revealed the top two QA defect categories — missing/incomplete document uploads and incorrect case type tagging — accounted for approximately 66% of all failures. Both are end-of-case steps, pointing to a workflow sequencing problem, not a skills deficit.</p><p>Verified root cause: no standardized single-piece flow protocol existed. The associate was batch-processing tasks across multiple open cases instead of completing one case end-to-end before moving to the next. A Method problem, not a personnel problem.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">I — Improve</div>
        <div className="brief-body"><p>Single-piece flow protocol — complete one case fully before opening the next. QA and QSS refresher training targeted specifically at the Pareto defect categories. Weekly data-driven coaching using live Salesforce and QA dashboard data. Real-time SLA visibility with urgent request priority routing for fraud, wire, ACH, and account takeover cases.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">C — Control</div>
        <div className="brief-body"><p>Weekly KPI monitoring via live Salesforce dashboard. Performance dashboard review in every coaching session. Escalation protocol triggered if any metric drops below target for two consecutive weeks. Single-piece flow maintained as documented standard work beyond the formal intervention period.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">Results</div>
        <div className="brief-metrics">
          <div className="brief-metric-row"><span className="brief-metric-label">SLA Adherence</span><span className="brief-metric-val">81.8% → 95% · +13.2 pp · Cleared</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">QSS Dual Review</span><span className="brief-metric-val">77.6% → 100% · +22.4 pp · Cleared</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">QA Pass Rate</span><span className="brief-metric-val">84.3% → 100% · +15.7 pp · Cleared</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Urgent Complaints</span><span className="brief-metric-val">3 (Q3 2025) → 0 · Sustained</span></div>
        </div>
      </div>
    </div>
  ),
  ai: (
    <div className="brief-panel">
      <div className="brief-section">
        <div className="brief-phase">The Project</div>
        <div className="brief-body"><p>Designing AI-integrated learning systems with LSS methodology as the operational backbone. The credential validates how Lean Six Sigma integrates with AI tools in real practice. The applied project is the Intelligence Operator suite — three 30-day AI mastery tracks built with LSS waste mapping as the architecture and an LSS lens integrated into every lab.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">D — Define</div>
        <div className="brief-body"><p>Remote operators globally understand AI tools at surface level but cannot integrate them into client workflows in a structured, repeatable way. Generic AI tutorials exist. Methodology-backed AI deployment for operators does not.</p><p>Project goal: build AI courses that do not just teach tools — they teach operators to deploy AI through an LSS lens, eliminating waste and improving output quality at every stage.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">A — Analyze</div>
        <div className="brief-body"><p>LSS waste mapping applied to the standard AI deployment failure pattern:</p></div>
        <div className="brief-metrics">
          <div className="brief-metric-row"><span className="brief-metric-label">Overprocessing</span><span className="brief-metric-val">Automating tasks that should be eliminated</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Defects</span><span className="brief-metric-val">AI outputs requiring rework — unengineered prompts</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Motion</span><span className="brief-metric-val">Tool-switching without a systematic framework</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Waiting</span><span className="brief-metric-val">Manual bottlenecks AI could remove</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Underutilization</span><span className="brief-metric-val">AI available but not deployed at the right stage</span></div>
        </div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">I — Improve</div>
        <div className="brief-body"><p>Three 30-day Intelligence Operator tracks, each addressing one tool category: Mastering Gemini AI and NotebookLM for source-grounded intelligence architecture; Mastering Claude and Cowork for autonomous operations; Mastering ChatGPT for custom GPT architecture and client-facing AI products.</p><p>Each track: 30 days · 30 labs · 5 Logic-Check Checkpoints · LSS lens in every lab. The DMAIC framework is the skeleton of the entire Operator Academy: D, M, A map to Operator Tracks; I maps to AI Courses; C maps to the Growth Room.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">C — Control</div>
        <div className="brief-body"><p>Logic-Check Checkpoints as quality control gates within each track. Certification cohort targeting June 2026. Free foundation layer feeding into the paid Intelligence Operator tracks.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">Results</div>
        <div className="brief-metrics">
          <div className="brief-metric-row"><span className="brief-metric-label">Mastering Gemini and NotebookLM</span><span className="brief-metric-val">42 scholars enrolled</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Mastering Claude and Cowork</span><span className="brief-metric-val">13 scholars enrolled</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Mastering ChatGPT</span><span className="brief-metric-val">13 scholars enrolled</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">VA Library AI Courses</span><span className="brief-metric-val">1,300+ operators on free foundation layer</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Certification Cohort</span><span className="brief-metric-val">June 2026</span></div>
        </div>
      </div>
    </div>
  ),
  bb: (
    <div className="brief-panel">
      <div className="brief-section">
        <div className="brief-phase">The Project</div>
        <div className="brief-body"><p>Designing a Scalable Operational System for Remote Work Professionals. Feb 2026 – Ongoing · DMAIC · CSSC via Certify</p><p>The Black Belt credential marks a specific progression: from improving an existing process to designing and deploying a new one at scale. The capstone project is the VA Launch System — a structured, 7-lab operational framework built to close the verified failure points of unstructured remote practice launches. What started as a solution for Filipino virtual assistants scaled, within 90 days of deployment, to active operators across 23 countries.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">D — Define</div>
        <div className="brief-body"><p>Remote operators in the global market defaulted to guesswork because no standardized launch framework existed. Without niche clarity, documented proof of skill, positioning architecture, or a proposal system, operators competed on availability rather than expertise and priced on desperation rather than value.</p><p>Project goal: design a replicable, methodology-backed system that moves remote operators from unstructured to market-ready, with measurable outputs at each phase. Scope: global remote operator market.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">A — Analyze</div>
        <div className="brief-body"><p>Lean waste mapping applied to the standard remote practice launch. Seven critical failure points classified against LSS waste categories:</p></div>
        <div className="brief-metrics">
          <div className="brief-metric-row"><span className="brief-metric-label">No niche clarity</span><span className="brief-metric-val">Overproduction</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">No proof of skill</span><span className="brief-metric-val">Defects in outreach</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">No portfolio</span><span className="brief-metric-val">Motion waste</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">No platform positioning</span><span className="brief-metric-val">Inventory waste</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">No digital presence</span><span className="brief-metric-val">Waiting waste</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">No proposal system</span><span className="brief-metric-val">Conversion defects</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">No acquisition protocol</span><span className="brief-metric-val">Underutilization</span></div>
        </div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">I — Improve</div>
        <div className="brief-body"><p>The VA Launch System designed as a 7-lab, sequential deployment framework. Each lab directly addresses one verified failure point. LSS methodology and AI application run as parallel tracks within every lab. Deployed via a custom portal with a 24-hour progression lock between labs to enforce process discipline and prevent batch-style completion.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">C — Control</div>
        <div className="brief-body"><p>Sequential lab lock — no skipping phases. Cohort structure — operators move in defined groups. Graduation requirements — all 7 labs, all documented outputs. Badge and certificate issuance tied to verified completion. Ongoing cohort management — new cohorts on a structured schedule. Advanced programs deployed for operators beyond the core system.</p></div>
      </div>
      <div className="brief-section">
        <div className="brief-phase">Results — 90 Days of Deployment</div>
        <div className="brief-metrics">
          <div className="brief-metric-row"><span className="brief-metric-label">Cohorts delivered</span><span className="brief-metric-val">5</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Graduates — full 7-lab completion</span><span className="brief-metric-val">95</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Lab participants</span><span className="brief-metric-val">361+</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Mainframe VA Library learners</span><span className="brief-metric-val">1,300+</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">VA Systems Library operators</span><span className="brief-metric-val">400+</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Countries represented</span><span className="brief-metric-val">23+</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Client Pipeline System scholars</span><span className="brief-metric-val">85</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">The Operator Standard scholars</span><span className="brief-metric-val">35</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Gemini and NotebookLM scholars</span><span className="brief-metric-val">42</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Mastering Claude and Cowork scholars</span><span className="brief-metric-val">13</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Mastering ChatGPT scholars</span><span className="brief-metric-val">13</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">Operator Reference Suite scholars</span><span className="brief-metric-val">12</span></div>
          <div className="brief-metric-row"><span className="brief-metric-label">POLcode scholars</span><span className="brief-metric-val">15</span></div>
        </div>
      </div>
    </div>
  )
};

function CredCard({c}) {
  const [open, setOpen] = useState(false);
  const hasBadge = !!c.badge;
  return (
    <div className="cc">
      <div className="cc-inner">
        {hasBadge ? <img src={c.badge} alt={c.title} className="cbadge" /> : null}
        <div className="cc-body">
          <div className="cc-ey">{c.eyebrow}</div>
          <div className="cc-title">{c.title}</div>
          {c.issuer && <div className="cc-issuer">{c.issuer}</div>}
          <div className="cc-text">{c.body}</div>
          <div className="cc-foot">
            {c.brief && <a href={c.brief} target="_blank" rel="noopener noreferrer" className="btn-pdf">↗ {c.pdfLabel}</a>}
            {c.hasBrief && (
              <button className="btn-brief-toggle" onClick={() => setOpen(o => !o)}>
                {open ? "Close Brief ↑" : "View Brief ↓"}
              </button>
            )}
            {c.verify && <span className="cc-verify">{c.verify}</span>}
          </div>
          {c.hasBrief && open && BRIEFS[c.briefKey]}
        </div>
      </div>
    </div>
  );
}

function EngCard({e}) {
  return (
    <div className="eng">
      <div className="eng-num">Engagement {e.num}</div>
      <div className="eng-ctx">{e.context}</div>
      <div className="eng-blk"><div className="eng-lbl">The Problem</div><div className="eng-txt">{e.problem}</div></div>
      <div className="eng-blk"><div className="eng-lbl">The Approach</div><div className="eng-txt">{e.approach}</div></div>
      <div className="eng-blk"><div className="eng-lbl">The Outcome</div><div className="eng-txt out">{e.outcome}</div></div>
    </div>
  );
}

function FormSystems() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({});
  const set = k => e => setFields(f => ({...f, [k]: e.target.value}));
  const submit = async () => {
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xnjbklbv", {
        method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({...fields, inquiry_type:"Systems Build"})
      });
      if (res.ok) setDone(true); else setSending(false);
    } catch { setSending(false); }
  };
  if (done) return <div className="fsuccess">Inquiry received. I will review and respond within 5 business days. If there is a potential fit, you will receive next steps. If not, you will receive an honest note about why.</div>;
  return (
    <div>
      <div className="fld"><label>Your Name</label><input type="text" onChange={set("name")} /></div>
      <div className="fld"><label>Email Address</label><input type="email" onChange={set("email")} /></div>
      <div className="fld"><label>Your Business — what you do and who you serve</label><textarea rows={2} onChange={set("business")} /></div>
      <div className="fld"><label>The Problem You Are Trying to Solve</label><textarea rows={2} onChange={set("problem")} /></div>
      <div className="fld"><label>Your Timeline</label><input type="text" onChange={set("timeline")} /></div>
      <div className="fld"><label>How Did You Find This Page?</label><input type="text" onChange={set("source")} /></div>
      <button className="btn-p" disabled={sending} onClick={submit} style={{width:"100%",justifyContent:"center",marginTop:8}}>{sending ? "Sending..." : "Send My Inquiry →"}</button>
      <div className="fnote">Inquiries reviewed within 5 business days.</div>
    </div>
  );
}

function FormCRM() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({});
  const set = k => e => setFields(f => ({...f, [k]: e.target.value}));
  const submit = async () => {
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xnjbklbv", {
        method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({...fields, inquiry_type:"CRM Build"})
      });
      if (res.ok) setDone(true); else setSending(false);
    } catch { setSending(false); }
  };
  if (done) return <div className="fsuccess">Inquiry received. I will review and respond within 5 business days.</div>;
  return (
    <div>
      <div className="fld"><label>Your Name</label><input type="text" onChange={set("name")} /></div>
      <div className="fld"><label>Email Address</label><input type="email" onChange={set("email")} /></div>
      <div className="fld"><label>Your Business — what you do and who you serve</label><textarea rows={2} onChange={set("business")} /></div>
      <div className="fld"><label>What Are You Currently Using to Manage Client Data?</label><input type="text" onChange={set("current_tool")} /></div>
      <div className="fld"><label>What Is Breaking Down or Missing?</label><textarea rows={2} onChange={set("problem")} /></div>
      <div className="fld"><label>Your Timeline</label><input type="text" onChange={set("timeline")} /></div>
      <button className="btn-p" disabled={sending} onClick={submit} style={{width:"100%",justifyContent:"center",marginTop:8}}>{sending ? "Sending..." : "Send My Inquiry →"}</button>
      <div className="fnote">Inquiries reviewed within 5 business days.</div>
    </div>
  );
}

function FormCoaching() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({});
  const set = k => e => setFields(f => ({...f, [k]: e.target.value}));
  const submit = async () => {
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mjgeqjeo", {
        method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify(fields)
      });
      if (res.ok) setDone(true); else setSending(false);
    } catch { setSending(false); }
  };
  if (done) return <div className="fsuccess">Application received. Applications are reviewed weekly. Every application receives a response.</div>;
  return (
    <div>
      <div className="fld"><label>Your Name</label><input type="text" onChange={set("name")} /></div>
      <div className="fld"><label>Email Address</label><input type="email" onChange={set("email")} /></div>
      <div className="fld"><label>I Am A</label>
        <select onChange={set("role")}>
          <option value="">Select one</option>
          <option>VA operator — building or growing my practice</option>
          <option>VA coach — building or scaling my coaching business</option>
        </select>
      </div>
      <div className="fld"><label>Where You Are Right Now</label>
        <select onChange={set("stage")}>
          <option value="">Select one</option>
          <option>Actively applying but not landing clients</option>
          <option>Just landed my first client</option>
          <option>Have clients but income is inconsistent</option>
          <option>Running a coaching business that needs restructuring</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="fld"><label>What Specifically Is Not Working Right Now</label><textarea rows={2} onChange={set("problem")} /></div>
      <div className="fld"><label>What Have You Already Tried?</label><textarea rows={2} onChange={set("tried")} /></div>
      <div className="fld"><label>What Does Success Look Like in 90 Days?</label><textarea rows={2} onChange={set("success")} /></div>
      <div className="fld"><label>When Are You Ready to Start?</label><input type="text" onChange={set("timeline")} /></div>
      <button className="btn-p" disabled={sending} onClick={submit} style={{width:"100%",justifyContent:"center",marginTop:8}}>{sending ? "Sending..." : "Submit My Application →"}</button>
      <div className="fnote">Applications reviewed weekly. Maximum two active clients at any time. Every application receives a response.</div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{S}</style>
      <div className="pg">

        <header className="hdr">
          <div className="eyebrow">Founder, Margin &amp; Momentum™ · Systems Architect</div>
          <h1 className="hl">Good at what you do.<br/>Invisible because nothing<br/>behind you is organized.</h1>
          <p className="sub">I build the operational infrastructure that makes small businesses and VA practices scalable — and lead the training ecosystem that develops the operators inside them.</p>
          <div className="pos">
            Lean Six Sigma Black Belt · CSSC Certified.<br/>
            LSS Consultant to small businesses and founders.<br/>
            Systems builder for VA operators and coaches.
          </div>
          <div className="ctas">
            <button className="btn-p" onClick={()=>document.getElementById('systems').scrollIntoView({behavior:'smooth'})}>→ I need systems built</button>
            <button className="btn-p" onClick={()=>document.getElementById('crm').scrollIntoView({behavior:'smooth'})}>→ I need a CRM built</button>
            <button className="btn-p" onClick={()=>document.getElementById('coaching').scrollIntoView({behavior:'smooth'})}>→ I want to work with you directly</button>
          </div>
        </header>

        <section className="sec" id="pedigree">
          <div className="sec-lbl">Pedigree</div>
          <h2 className="sec-hl">The methodology wasn't built<br/>in a course. It was built<br/>on the job.</h2>
          <div className="origin">
            <p>Sixteen years inside corporate banking operations taught me something that no freelance course ever will: that the difference between a business that scales and one that collapses under its own weight is almost never talent. It's almost always structure.</p>
            <p>I built my operational discipline inside that world — leading teams in a high-accountability, process-driven institutional environment where the methodology wasn't theoretical. It was the job. What I carried out of it — Lean Six Sigma applied at the individual, team, and system level — is the same framework I now deploy for small businesses, founders, and VA operators who are running on memory and habit instead of documented infrastructure. The environment changed. The methodology didn't.</p>
            <p>Lean Six Sigma — the same framework that Fortune 500 operations teams use to eliminate waste, reduce defects, and build processes that scale — translated into the language and reality of small businesses, knowledge work, and virtual service delivery. Combined with AI at every point where automation reduces friction and human effort goes further. Applied to small businesses and founders as a consultant. Applied to the broader VA ecosystem through Margin & Momentum™. One methodology. Two markets. No dilution.</p>
          </div>

          <div className="eco-strip">
            <div className="eco-stat"><div className="eco-stat-num">95</div><div className="eco-stat-label">Graduates across 5 cohorts</div></div>
            <div className="eco-stat"><div className="eco-stat-num">361+</div><div className="eco-stat-label">Lab participants</div></div>
            <div className="eco-stat"><div className="eco-stat-num">215+</div><div className="eco-stat-label">Scholars across all programs</div></div>
            <div className="eco-stat"><div className="eco-stat-num">1,300+</div><div className="eco-stat-label">Library learners</div></div>
          </div>

          <div className="country-block">
            <div className="country-num">26</div>
            <div className="country-label">Countries · Active Operators</div>
            <div className="country-list">Algeria · Australia · Bangladesh · Cameroon · Canada · Hong Kong · India · Indonesia ·  Japan · Kenya · Malaysia · Nepal · Netherlands · New Zealand · Nigeria · Philippines · Qatar · South Africa · Spain · Taiwan · Thailand · UAE · Uganda · United Kingdom · United States · Zimbabwe</div>
          </div>

          <div className="creds">
            {CREDS.map(c => <CredCard key={c.id} c={c} />)}
          </div>

          <div style={{marginTop:56}}>
            <div className="sec-lbl" style={{marginBottom:8}}>Selected Engagements</div>
            <p className="sec-intro" style={{marginBottom:24}}>All engagements are anonymous by design. Methodology is consistent. Application is always specific to the business in front of me.</p>
            <div className="engs">
              {ENGAGEMENTS.map(e => <EngCard key={e.num} e={e} />)}
            </div>
            <div className="meth-note">All engagements are approached through the Lean + AI framework: identify waste, eliminate defects, standardize what works, integrate AI where it reduces friction without reducing quality. The methodology does not change. The application is always specific to the business, the team, and the operational reality in front of me.</div>
            <div style={{marginTop:28,paddingTop:28,borderTop:"1px solid rgba(237,233,227,0.08)"}}>
              <div className="sec-lbl" style={{marginBottom:12}}>The Methodology In Action</div>
              <p style={{fontSize:"15px",color:"var(--muted)",lineHeight:1.75,marginBottom:20,maxWidth:560}}>The same framework applied to real tools, real decisions, and real business problems. Free to use.</p>
              <a href="https://systems.marginmomentum.co" target="_blank" rel="noopener noreferrer" className="meth-link">
                ↗ See the system at systems.marginmomentum.co
              </a>
            </div>
          </div>
        </section>

        <section className="sec" id="practice">
          <div className="sec-lbl">Practice</div>
          <h2 className="sec-hl">Three engagements.<br/>Strictly limited.<br/>Built for people who are ready to operate.</h2>
          <p className="sec-intro">What I offer is not a service catalog. It is a specific methodology applied in one of three ways: your operations built, your data infrastructure built, or your capability built directly through working with me. All three are limited. All three have a defined outcome.</p>
          <div className="lanes">

            <div className="lane" id="systems">
              <div className="lane-lbl">Engagement 01</div>
              <div className="lane-for">For small businesses · Founders · VA operators · VA coaches</div>
              <div className="lane-title">The Systems Build</div>
              <div className="lane-dur">4 to 6 week engagement</div>
              <p className="lane-body">You have a business that works — until it doesn't. The moment you try to grow, hire, or step back, everything held together by memory and habit starts to fall apart. The Systems Build is a focused, project-based engagement where I audit your operations using Lean waste mapping, identify what is costing you time and money invisibly, and build the infrastructure that makes your work scalable without you.</p>
              <p className="lane-body">Every build includes a Standard Work Library for your core service categories, an AI Integration Map for the workflow points where automation reduces friction, and a complete documentation set your team can use immediately.</p>
              <div className="lane-avail">Two to three engagements per quarter.<br/>Inquiries reviewed on a rolling basis.</div>
              <button className="btn-p" onClick={()=>document.getElementById('door-systems').scrollIntoView({behavior:'smooth'})}>Inquire About a Systems Build →</button>
            </div>

            <div className="lane" id="crm">
              <div className="lane-lbl">Engagement 02</div>
              <div className="lane-for">For small businesses · Founders · VA operators · VA coaches</div>
              <div className="lane-title">The CRM Build</div>
              <div className="lane-dur">Scoped per engagement</div>
              <p className="lane-body">A custom-coded client data system, built after a Lean audit of your actual workflow. Not a template. Not a SaaS subscription someone else controls. A purpose-built system with security and data privacy architecture appropriate for businesses that handle client and customer information.</p>
              <p className="lane-body">Workflow automation is included where it eliminates manual bottlenecks — so your business gets time back and you can focus on decisions that actually matter. Frontend and backend deployment. Yours outright.</p>
              <div className="lane-avail">Limited availability per quarter.<br/>Audit precedes every build.</div>
              <button className="btn-p" onClick={()=>document.getElementById('door-crm').scrollIntoView({behavior:'smooth'})}>Inquire About a CRM Build →</button>
            </div>

            <div className="lane" id="coaching">
              <div className="lane-lbl">Engagement 03</div>
              <div className="lane-for">For VA operators · VA coaches</div>
              <div className="lane-title">The 90-Day Container</div>
              <div className="lane-dur">One client. One system. Ninety days.</div>
              <p className="lane-body">You are good at what you do. You are not good at making what you do visible, scalable, or sustainable — yet. Not because you lack capability but because nobody has ever shown you how to build a real operational foundation underneath your VA practice or your coaching business.</p>
              <p className="lane-body">The ninety days are structured around one of three focuses: landing your first client and building the foundation that makes you hireable, converting your first client relationship into a retainer, or restructuring inconsistent income by building the operational infrastructure your business is currently missing.</p>
              <div className="lane-avail">Maximum two active clients at any time.<br/>Applications reviewed weekly.</div>
              <button className="btn-p" onClick={()=>document.getElementById('door-coaching').scrollIntoView({behavior:'smooth'})}>Apply for the 90-Day Container →</button>
            </div>

          </div>
        </section>

        <section className="sec" id="portal">
          <div className="sec-lbl">Portal</div>
          <h2 className="sec-hl">Every system starts with<br/>a single entry point.</h2>
          <p className="sec-intro">All three engagements begin the same way: a conversation about where you are, what you need, and whether this is the right fit. Tell me where you are. I'll tell you honestly whether I can help.</p>
          <div className="doors">

            <div className="door" id="door-systems">
              <div className="door-lbl">Engagement 01 · The Systems Build</div>
              <div className="door-for">For small businesses, founders, VA operators, and VA coaches who need their operational infrastructure built and documented.</div>
              <div className="door-title">I need systems built.</div>
              <FormSystems />
            </div>

            <div className="door" id="door-crm">
              <div className="door-lbl">Engagement 02 · The CRM Build</div>
              <div className="door-for">For small businesses, founders, VA operators, and VA coaches who need a custom-coded client data system with workflow automation.</div>
              <div className="door-title">I need a CRM built.</div>
              <FormCRM />
            </div>

            <div className="door" id="door-coaching">
              <div className="door-lbl">Engagement 03 · The 90-Day Container</div>
              <div className="door-for">For VA operators and VA coaches who want to work directly and build their operational foundation alongside me.</div>
              <div className="door-title">I want to work with you directly.</div>
              <FormCoaching />
            </div>

          </div>
        </section>

        <section className="sec" id="other-pursuits">
          <div className="sec-lbl">Other Intellectual Pursuits</div>
          <p className="sec-intro" style={{marginBottom:24}}>The methodology here is applied and verifiable. What informs it — the reading, the frameworks, the analytical infrastructure — lives elsewhere.</p>
          <p style={{fontSize:15,color:"var(--muted)",lineHeight:1.8,maxWidth:640,marginBottom:16}}>An ongoing analytical practice applying Lean and systems frameworks to literature, philosophy, belief systems, and cultural texts. The intellectual infrastructure that informs the methodology.</p>
          <a href="https://kittycataclysmic.com" target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--mo)",fontSize:12,letterSpacing:".12em",textTransform:"uppercase",color:"var(--steel)",textDecoration:"none",borderBottom:"1px solid rgba(237,233,227,0.12)",paddingBottom:2,display:"inline-block"}}>kittycataclysmic.com →</a>
        </section>

        <footer className="ftr">
          
          <div className="ftr-brand">Margin &amp; Momentum™</div>
          <div className="ftr-tag">Systems Over Hustle™ · <a href="https://marginmomentum.co" target="_blank" rel="noopener noreferrer" style={{color:'inherit',borderBottom:'1px solid rgba(201,168,76,0.3)',paddingBottom:'1px',transition:'border-color .2s'}} onMouseOver={e=>e.target.style.borderColor='rgba(201,168,76,0.8)'} onMouseOut={e=>e.target.style.borderColor='rgba(201,168,76,0.3)'}>marginmomentum.co</a></div>
          <p className="ftr-note">This is a faceless practice by design.<br/>The work speaks. The methodology is verifiable.</p>
        </footer>

      </div>
    </>
  );
}
