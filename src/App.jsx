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
    issuer:"MF OPEX (CSSC) via Certifyone",
    body:"The credential behind the methodology. Not a framework read about — one certified in and applied operationally across every engagement. Currently pursuing Black Belt certification.",
    brief:"https://drive.google.com/file/d/1Ok7J5gGCwqDUYCoIeT5EZ-lMdlN_ZmQ9/view?usp=sharing",
    pdfLabel:"View Case Study →",
    badge:null,
    verify:"Verification available upon request."
  },
  {
    id:"lss-ai",
    eyebrow:"Certified · Verifiable",
    title:"Lean Six Sigma + AI Integration",
    issuer:"MF OPEX (CSSC) via Certifyone",
    body:"The methodology meets the technology. How AI integrates with Lean principles — not to replace human judgment but to eliminate the manual friction that makes good systems unsustainable.",
    brief:"https://drive.google.com/file/d/1h_gspI3zRx7mDHPO7itcbejO_WMKUnb4/view?usp=sharing",
    pdfLabel:"View Case Study →",
    badge:null,
    verify:"Verification available upon request."
  },
];

const ENGAGEMENTS = [
  {
    num:"01",
    context:"A VA agency operating across three service categories",
    problem:"Onboarding new clients took longer than delivering their first month of work. Every new relationship started from zero — no standard process, no documented workflow, no consistency across team members. The agency owner was the only person who knew how anything was supposed to run.",
    approach:"Value stream mapping across the full client lifecycle. Identified six distinct waste points including overprocessing in intake, motion waste across four disconnected tools, and inventory waste in partially-built SOPs that were never completed. AI integration at two manual bottleneck stages: client brief processing and recurring reporting.",
    outcome:"Client onboarding time reduced by more than half. Service delivery consistency measurably improved across the team. The agency owner removed herself from the onboarding process entirely within six weeks of implementation — the system ran without her."
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
  .ftr{padding:64px 0;text-align:center;position:relative;z-index:1}
  .cat-img{width:80px;height:80px;object-fit:contain;margin-bottom:20px;display:block;margin-left:auto;margin-right:auto}
  .ftr-brand{font-family:var(--sf);font-size:26px;color:var(--muted);margin-bottom:8px;letter-spacing:-.01em}
  .ftr-tag{font-family:var(--mo);font-size:12px;color:var(--steel);letter-spacing:.1em;text-transform:uppercase;margin-bottom:24px}
  .ftr-note{font-family:var(--mo);font-size:12px;color:var(--steel);line-height:1.75;max-width:440px;margin:0 auto;font-style:italic;letter-spacing:.03em}
`;

function CredCard({c}) {
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
          {(c.brief || c.verify) && (
            <div className="cc-foot">
              {c.brief && <a href={c.brief} target="_blank" rel="noopener noreferrer" className="btn-pdf">↗ {c.pdfLabel}</a>}
              {c.verify && <span className="cc-verify">{c.verify}</span>}
            </div>
          )}
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
          <option>VA agency owner — building or restructuring my agency</option>
        </select>
      </div>
      <div className="fld"><label>Where You Are Right Now</label>
        <select onChange={set("stage")}>
          <option value="">Select one</option>
          <option>Actively applying but not landing clients</option>
          <option>Just landed my first client</option>
          <option>Have clients but income is inconsistent</option>
          <option>Running an agency or coaching business that needs restructuring</option>
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
          <div className="eyebrow">Founder, Margin &amp; Momentum™ · Lean Six Sigma Consultant · Systems Architect</div>
          <h1 className="hl">Good at what you do.<br/>Invisible because nothing<br/>behind you is organized.</h1>
          <p className="sub">I build the operational infrastructure that makes VA businesses scalable — and lead the training ecosystem that teaches the people inside them to run it.</p>
          <div className="pos">
            Lean Six Sigma Green Belt · Black Belt pending.<br/>
            Consultant to VA operators, coaches, and agencies.<br/>
            16+ years banking operations. One methodology. Applied everywhere.
          </div>
          <div className="ctas">
            <button className="btn-p" onClick={()=>document.getElementById('systems').scrollIntoView({behavior:'smooth'})}>→ I need systems built</button>
            <button className="btn-p" onClick={()=>document.getElementById('crm').scrollIntoView({behavior:'smooth'})}>→ I need a CRM built</button>
            <button className="btn-p" onClick={()=>document.getElementById('coaching').scrollIntoView({behavior:'smooth'})}>→ I want to work with you directly</button>
          </div>
        </header>

        <section className="sec" id="pedigree">
          <div className="sec-lbl">Pedigree</div>
          <h2 className="sec-hl">This isn't a pivot story.<br/>It's a parallel one.</h2>
          <div className="origin">
            <p>Sixteen years inside corporate banking operations teaches you something that no freelance course ever will: that the difference between a business that scales and one that collapses under its own weight is almost never talent. It's almost always structure.</p>
            <p>I never left that world. I'm still in it — leading a team in banking operations while simultaneously building and running Margin & Momentum™ from the ground up. What changed is that I started looking outside of it — and what I saw in the VA space was a workforce full of genuinely capable people working inside complete operational chaos and calling it hustle. I recognized the problem immediately. It wasn't a talent problem. It was a systems problem. And it was completely solvable.</p>
            <p>So I built the bridge. Lean Six Sigma methodology — the same framework that Fortune 500 operations teams use to eliminate waste, reduce defects, and build processes that scale — translated into the language and reality of knowledge work and virtual service delivery. Combined with AI at every point where automation reduces friction and human effort goes further. Applied to VA operators, coaches, and agencies as a consultant. Applied to the broader ecosystem through Margin & Momentum™. One methodology. Running in parallel across everything.</p>
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
              <div className="lane-for">For VA agencies · VA coaches · VA operators</div>
              <div className="lane-title">The Systems Build</div>
              <div className="lane-dur">4 to 6 week engagement</div>
              <p className="lane-body">You have a VA business that works — until it doesn't. The moment you try to grow, hire, or step back, everything held together by memory and habit starts to fall apart. The Systems Build is a focused, project-based engagement where I audit your operations using Lean waste mapping, identify what is costing you time and money invisibly, and build the infrastructure that makes your work scalable without you.</p>
              <p className="lane-body">Every build includes a Standard Work Library for your core service categories, an AI Integration Map for the workflow points where automation reduces friction, and a complete documentation set your team can use immediately.</p>
              <div className="lane-avail">Two to three engagements per quarter.<br/>Inquiries reviewed on a rolling basis.</div>
              <button className="btn-p" onClick={()=>document.getElementById('door-systems').scrollIntoView({behavior:'smooth'})}>Inquire About a Systems Build →</button>
            </div>

            <div className="lane" id="crm">
              <div className="lane-lbl">Engagement 02</div>
              <div className="lane-for">For VA agencies · VA coaches · VA operators</div>
              <div className="lane-title">The CRM Build</div>
              <div className="lane-dur">Scoped per engagement</div>
              <p className="lane-body">A custom-coded client data system, built after a Lean audit of your actual workflow. Not a template. Not a SaaS subscription someone else controls. A purpose-built system with security and data privacy architecture appropriate for businesses that handle client and customer information.</p>
              <p className="lane-body">Workflow automation is included where it eliminates manual bottlenecks — so your business gets time back and you can focus on decisions that actually matter. Frontend and backend deployment. Yours outright.</p>
              <div className="lane-avail">Limited availability per quarter.<br/>Audit precedes every build.</div>
              <button className="btn-p" onClick={()=>document.getElementById('door-crm').scrollIntoView({behavior:'smooth'})}>Inquire About a CRM Build →</button>
            </div>

            <div className="lane" id="coaching">
              <div className="lane-lbl">Engagement 03</div>
              <div className="lane-for">For VA operators · VA coaches · agency owners</div>
              <div className="lane-title">The 90-Day Container</div>
              <div className="lane-dur">One client. One system. Ninety days.</div>
              <p className="lane-body">You are good at what you do. You are not good at making what you do visible, scalable, or sustainable — yet. Not because you lack capability but because nobody has ever shown you how to build a real operational foundation underneath your VA practice, your coaching business, or your agency.</p>
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
              <div className="door-for">For VA agencies, VA coaches, and VA operators who need their operational infrastructure built and documented.</div>
              <div className="door-title">I need systems built.</div>
              <FormSystems />
            </div>

            <div className="door" id="door-crm">
              <div className="door-lbl">Engagement 02 · The CRM Build</div>
              <div className="door-for">For VA agencies, VA coaches, and VA operators who need a custom-coded client data system with workflow automation.</div>
              <div className="door-title">I need a CRM built.</div>
              <FormCRM />
            </div>

            <div className="door" id="door-coaching">
              <div className="door-lbl">Engagement 03 · The 90-Day Container</div>
              <div className="door-for">For VA operators, VA coaches, and agency owners who want to work directly and build their operational foundation alongside me.</div>
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
          <img src="/cat.png" alt="" className="cat-img" />
          <div className="ftr-brand">Margin &amp; Momentum™</div>
          <div className="ftr-tag">Systems Over Hustle™ · marginmomentum.co</div>
          <p className="ftr-note">This is a faceless practice by design.<br/>The work speaks. The methodology is verifiable.<br/>The cat is just watching.</p>
        </footer>

      </div>
    </>
  );
}
