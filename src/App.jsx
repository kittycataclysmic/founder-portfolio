import { useState, useRef } from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: #0a0a0a; }

  .app {
    font-family: 'Libre Baskerville', Georgia, serif;
    background: #0a0a0a;
    color: #e8e8e8;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  /* ── HEADER ── */
  .hdr {
    border-bottom: 1px solid #1a1a1a;
    padding: 14px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #0a0a0a;
    z-index: 200;
  }
  .brand {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #e8e8e8;
    text-decoration: none;
  }
  .hdr-nav {
    display: flex;
    gap: 32px;
    align-items: center;
  }
  .hdr-link {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #444;
    text-decoration: none;
    transition: color 0.2s;
  }
  .hdr-link:hover { color: #e8e8e8; }

  /* ── ABOVE THE FOLD ── */
  .fold {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 40px;
    border-bottom: 1px solid #1a1a1a;
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .fold-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #333;
    display: block;
    margin-bottom: 40px;
  }
  .cat-wrap {
    margin-bottom: 48px;
  }
  .cat-img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    opacity: 0.85;
  }
  .fold-title {
    font-family: 'Libre Baskerville', Georgia, serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.2;
    color: #e8e8e8;
    margin-bottom: 32px;
    max-width: 680px;
  }
  .fold-sub {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #444;
    line-height: 2;
    margin-bottom: 48px;
    max-width: 600px;
  }
  .fold-sub span {
    color: #666;
  }
  .fold-btns {
    display: flex;
    gap: 2px;
  }
  .fold-btn {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 16px 28px;
    text-decoration: none;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .fold-btn-primary {
    background: #e8e8e8;
    color: #0a0a0a;
  }
  .fold-btn-primary:hover { background: #fff; }
  .fold-btn-secondary {
    background: transparent;
    color: #444;
    border: 1px solid #1a1a1a;
  }
  .fold-btn-secondary:hover { color: #e8e8e8; border-color: #333; }

  /* ── SECTION LABELS ── */
  .section-wrap {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    padding: 80px 40px;
  }
  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #333;
    display: block;
    margin-bottom: 16px;
  }
  .section-rule {
    width: 100%;
    height: 1px;
    background: #1a1a1a;
    margin-bottom: 64px;
  }
  .section-heading {
    font-family: 'Libre Baskerville', serif;
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 400;
    font-style: italic;
    color: #e8e8e8;
    line-height: 1.25;
    margin-bottom: 16px;
  }
  .section-subhead {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #333;
    line-height: 2;
    margin-bottom: 56px;
    max-width: 640px;
  }

  /* ── PEDIGREE ORIGIN ── */
  .origin {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-bottom: 72px;
    align-items: start;
  }
  .origin-body {
    font-size: 14.5px;
    line-height: 2;
    color: #666;
  }
  .origin-body p { margin-bottom: 24px; }
  .origin-body p:last-child { margin-bottom: 0; }
  .origin-pull {
    border-left: 1px solid #1a1a1a;
    padding-left: 40px;
  }
  .pull-quote {
    font-family: 'Libre Baskerville', serif;
    font-size: clamp(18px, 2.5vw, 26px);
    font-style: italic;
    font-weight: 400;
    color: #444;
    line-height: 1.5;
    margin-bottom: 32px;
  }
  .pull-quote strong {
    color: #888;
    font-style: normal;
  }
  .origin-stats {
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin-top: 40px;
  }
  .origin-stat {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 14px 0;
    border-bottom: 1px solid #111;
  }
  .origin-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    color: #e8e8e8;
    line-height: 1;
  }
  .origin-stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
  }

  /* ── CREDENTIAL CARDS ── */
  .cred-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-bottom: 64px;
  }
  .cred-card {
    border: 1px solid #1a1a1a;
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: #0d0d0d;
  }
  .cred-badge {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 3px;
    color: #222;
    border: 1px solid #1a1a1a;
    display: inline-flex;
    padding: 8px 14px;
    align-self: flex-start;
  }
  .cred-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    color: #e8e8e8;
    line-height: 1;
    letter-spacing: 0.5px;
  }
  .cred-desc {
    font-size: 13px;
    line-height: 1.85;
    color: #555;
    flex: 1;
  }

  /* ── AUDIO PLAYER ── */
  .audio-player {
    border: 1px solid #1a1a1a;
    padding: 20px;
    background: #080808;
  }
  .audio-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
    display: block;
    margin-bottom: 14px;
  }
  .audio-title {
    font-size: 12px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 16px;
    font-style: italic;
  }
  .audio-controls {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .audio-play-btn {
    width: 36px;
    height: 36px;
    border: 1px solid #222;
    background: #0a0a0a;
    color: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
    font-size: 12px;
  }
  .audio-play-btn:hover { border-color: #444; background: #111; }
  .audio-progress-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .audio-bar-bg {
    width: 100%;
    height: 2px;
    background: #1a1a1a;
    position: relative;
    cursor: pointer;
  }
  .audio-bar-fill {
    height: 2px;
    background: #444;
    transition: width 0.1s;
  }
  .audio-time {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 1.5px;
    color: #333;
  }
  .audio-placeholder {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #222;
    font-style: normal;
    margin-top: 4px;
  }
  .cred-verify {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;
  }
  .cred-verify:hover { color: #666; }

  /* ── PUBLICATION STRIP ── */
  .pub-strip {
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
    padding: 28px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: #111;
  }
  .pub-item {
    background: #0a0a0a;
    padding: 24px 32px;
  }
  .pub-item-label {
    font-family: 'DM Mono', monospace;
    font-size: 7.5px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #222;
    display: block;
    margin-bottom: 10px;
  }
  .pub-item-text {
    font-size: 13px;
    line-height: 1.7;
    color: #444;
  }
  .pub-item-text strong { color: #666; font-weight: 400; }

  /* ── PRACTICE ── */
  .practice-border {
    border-top: 1px solid #1a1a1a;
  }
  .lane {
    border: 1px solid #1a1a1a;
    margin-bottom: 2px;
    background: #0d0d0d;
  }
  .lane-top {
    padding: 36px 40px;
    border-bottom: 1px solid #111;
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 40px;
    align-items: start;
  }
  .lane-label-block {}
  .lane-tag {
    font-family: 'DM Mono', monospace;
    font-size: 7.5px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #222;
    display: block;
    margin-bottom: 12px;
  }
  .lane-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    color: #111;
    line-height: 1;
  }
  .lane-content {}
  .lane-title {
    font-family: 'Libre Baskerville', serif;
    font-size: clamp(20px, 2.5vw, 30px);
    font-style: italic;
    font-weight: 400;
    color: #e8e8e8;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  .lane-body {
    font-size: 13.5px;
    line-height: 1.9;
    color: #555;
  }
  .lane-body p { margin-bottom: 16px; }
  .lane-body p:last-child { margin-bottom: 0; }
  .lane-bottom {
    padding: 28px 40px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: center;
  }
  .lane-specs {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
  .lane-spec {}
  .lane-spec-label {
    font-family: 'DM Mono', monospace;
    font-size: 7.5px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #222;
    display: block;
    margin-bottom: 4px;
  }
  .lane-spec-val {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 1px;
    color: #444;
  }
  .lane-cta {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 14px 24px;
    background: transparent;
    border: 1px solid #1a1a1a;
    color: #444;
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .lane-cta:hover { border-color: #444; color: #e8e8e8; }

  /* ── PORTAL ── */
  .portal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }
  .portal-form {
    border: 1px solid #1a1a1a;
    padding: 40px;
    background: #0d0d0d;
  }
  .portal-form-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #333;
    display: block;
    margin-bottom: 8px;
  }
  .portal-form-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    color: #e8e8e8;
    letter-spacing: 0.5px;
    margin-bottom: 32px;
    line-height: 1;
  }
  .form-field {
    margin-bottom: 16px;
  }
  .form-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
    display: block;
    margin-bottom: 8px;
  }
  .form-input {
    width: 100%;
    background: #080808;
    border: 1px solid #1a1a1a;
    color: #e8e8e8;
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    padding: 12px 16px;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
  }
  .form-input:focus { border-color: #333; }
  .form-input::placeholder { color: #222; }
  .form-submit {
    width: 100%;
    background: #e8e8e8;
    color: #0a0a0a;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 16px;
    border: none;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
  }
  .form-submit:hover { background: #fff; }
  .form-note {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #222;
    margin-top: 12px;
    display: block;
  }
  .form-success {
    padding: 40px;
    border: 1px solid #1a1a1a;
    background: #0d0d0d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
  }
  .form-success-check {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: #333;
  }
  .form-success-text {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #444;
    line-height: 2;
  }

  /* ── FOOTER ── */
  .ftr {
    border-top: 1px solid #111;
    padding: 32px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .ftr-cat {
    width: 32px;
    height: 32px;
    object-fit: contain;
    opacity: 0.3;
  }
  .ftr-center {
    text-align: center;
  }
  .ftr-brand {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #333;
    display: block;
    margin-bottom: 4px;
  }
  .ftr-note {
    font-family: 'DM Mono', monospace;
    font-size: 7.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #1a1a1a;
  }
  .ftr-right {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #1a1a1a;
    text-align: right;
    line-height: 2;
  }

  @media (max-width: 768px) {
    .hdr { padding: 14px 24px; }
    .hdr-nav { display: none; }
    .fold { padding: 60px 24px; min-height: auto; }
    .section-wrap { padding: 60px 24px; }
    .origin { grid-template-columns: 1fr; gap: 40px; }
    .cred-grid { grid-template-columns: 1fr; }
    .pub-strip { grid-template-columns: 1fr; }
    .portal-grid { grid-template-columns: 1fr; }
    .lane-top { grid-template-columns: 1fr; gap: 16px; }
    .lane-num { font-size: 40px; }
    .lane-bottom { grid-template-columns: 1fr; gap: 20px; }
    .fold-btns { flex-direction: column; }
    .ftr { flex-direction: column; gap: 24px; text-align: center; }
  }
`;

function AudioPlayer({ title, src, duration }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const audioRef = useRef(null);

  const toggle = () => {
    if (!src) return;
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(pct || 0);
    const mins = Math.floor(audioRef.current.currentTime / 60);
    const secs = Math.floor(audioRef.current.currentTime % 60).toString().padStart(2, "0");
    setCurrentTime(`${mins}:${secs}`);
  };

  return (
    <div className="audio-player">
      <span className="audio-label">Listen</span>
      <p className="audio-title">{title}</p>
      <div className="audio-controls">
        <button className="audio-play-btn" onClick={toggle}>
          {playing ? "▐▐" : "▶"}
        </button>
        <div className="audio-progress-wrap">
          <div className="audio-bar-bg">
            <div className="audio-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="audio-time">{currentTime} / {duration}</span>
        </div>
      </div>
      {!src && (
        <p className="audio-placeholder">· Audio coming soon ·</p>
      )}
      {src && (
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => { setPlaying(false); setProgress(0); setCurrentTime("0:00"); }}
        />
      )}
    </div>
  );
}

function ContactForm({ lane }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({});

  const fieldsA = [
    { key: "name", label: "Your name", type: "text" },
    { key: "email", label: "Your email", type: "email" },
    { key: "business", label: "What type of business or agency are you running?", type: "textarea" },
    { key: "problem", label: "What's the primary operational problem you're trying to solve?", type: "textarea" },
    { key: "timeline", label: "What is your timeline for this engagement?", type: "text" },
    { key: "source", label: "How did you find this page?", type: "text" },
  ];

  const fieldsB = [
    { key: "name", label: "Your name", type: "text" },
    { key: "email", label: "Your email", type: "email" },
    { key: "experience", label: "How long have you been working as a VA?", type: "text" },
    { key: "status", label: "Where are you right now — no clients yet / first client / inconsistent income?", type: "text" },
    { key: "fix", label: "What specifically is not working that you want to fix in the next 90 days?", type: "textarea" },
    { key: "tried", label: "What have you already tried?", type: "textarea" },
    { key: "start", label: "When do you want to start?", type: "text" },
  ];

  const fields = lane === "A" ? fieldsA : fieldsB;

  if (submitted) {
    return (
      <div className="form-success">
        <span className="form-success-check">✓</span>
        <p className="form-success-text">
          Submission received.<br />
          You'll hear back within five business days.<br />
          {lane === "B" ? "Applications are reviewed monthly." : ""}
        </p>
      </div>
    );
  }

  return (
    <div className="portal-form">
      <span className="portal-form-label">{lane === "A" ? "Systems Build →" : "90-Day Consulting →"}</span>
      <div className="portal-form-title">{lane === "A" ? "I need systems built" : "I want my first client in 90 days"}</div>
      {fields.map(f => (
        <div key={f.key} className="form-field">
          <label className="form-label">{f.label}</label>
          {f.type === "textarea" ? (
            <textarea
              className="form-input"
              rows={3}
              placeholder="—"
              onChange={e => setForm({ ...form, [f.key]: e.target.value })}
            />
          ) : (
            <input
              className="form-input"
              type={f.type}
              placeholder="—"
              onChange={e => setForm({ ...form, [f.key]: e.target.value })}
            />
          )}
        </div>
      ))}
      <button className="form-submit" onClick={() => setSubmitted(true)}>
        {lane === "A" ? "Send my inquiry →" : "Submit my application →"}
      </button>
      <span className="form-note">
        {lane === "A"
          ? "Submissions reviewed on a rolling basis. Current availability: Q2 2026 — slots open."
          : "Applications reviewed monthly. Maximum 3 clients at any time."}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <style>{CSS}</style>

      {/* HEADER */}
      <header className="hdr">
        <a className="brand" href="https://marginmomentum.co">Margin &amp; Momentum™</a>
        <nav className="hdr-nav">
          <a className="hdr-link" href="#pedigree">Pedigree</a>
          <a className="hdr-link" href="#practice">Practice</a>
          <a className="hdr-link" href="#portal">Portal</a>
          <a className="hdr-link" href="https://systems.marginmomentum.co">Free Tools</a>
        </nav>
      </header>

      {/* ABOVE THE FOLD */}
      <section style={{ borderBottom: "1px solid #111" }}>
        <div className="fold">
          <span className="fold-eyebrow">Margin &amp; Momentum™ · Systems Over Hustle™</span>
          <div className="cat-wrap">
            <img src="/cat.png" alt="" className="cat-img" />
          </div>
          <h1 className="fold-title">
            The problem was never your work.<br />
            It was always what wasn't behind it.
          </h1>
          <p className="fold-sub">
            <span>Systems Architect · Lean AI Educator</span><br />
            <span>16+ years inside corporate banking operations</span><br />
            <span>Currently active — taking limited engagements by application only</span>
          </p>
          <div className="fold-btns">
            <a className="fold-btn fold-btn-primary" href="#portal">I need systems built →</a>
            <a className="fold-btn fold-btn-secondary" href="#portal">I want my first client in 90 days →</a>
          </div>
        </div>
      </section>

      {/* PEDIGREE */}
      <section id="pedigree" style={{ borderBottom: "1px solid #111" }}>
        <div className="section-wrap">
          <span className="section-label">Pedigree</span>
          <div className="section-rule" />
          <h2 className="section-heading">
            The methodology isn't self-taught.<br />
            Neither is the discipline behind it.
          </h2>

          {/* ORIGIN */}
          <div className="origin">
            <div className="origin-body">
              <p>
                For over sixteen years I've operated inside one of the most process-driven environments that exists — corporate banking. Not as someone who observed processes. As someone who ran them, audited them, improved them, and was accountable for them in an industry where a broken system isn't an inconvenience. It's a liability.
              </p>
              <p>
                I didn't build this from the outside looking in. I built it while still inside — sixteen years in, still active, still accountable for the same standards I bring to every system I build externally. I looked out from that world and saw an entire workforce — capable, hardworking people building freelance careers — operating without the one thing that separates sustained performance from sustained exhaustion: a system.
              </p>
              <p>
                The frustration wasn't abstract. It was specific. I watched VAs treat hustle as a strategy when hustle was never the problem. The problem was the absence of structure behind the work. Good people, doing good work, completely invisible to the clients who should have been keeping them — because nothing behind the work was organized well enough to make its value undeniable.
              </p>
              <p>
                I build systems for those people. Not because I struggled through it myself. Because I've spent sixteen years being paid to see exactly where structure breaks down — and exactly how to fix it.
              </p>
            </div>
            <div className="origin-pull">
              <p className="pull-quote">
                "Good people, doing good work, completely invisible — because nothing behind the work was organized well enough to make its value <strong>undeniable.</strong>"
              </p>
              <div className="origin-stats">
                {[
                  { num: "16+", label: "Years · Banking Operations" },
                  { num: "3", label: "Active Credentials" },
                  { num: "3", label: "Max Consulting Clients · At Any Time" },
                ].map((s, i) => (
                  <div key={i} className="origin-stat">
                    <span className="origin-stat-num">{s.num}</span>
                    <span className="origin-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CREDENTIAL CARDS */}
          <div className="cred-grid">
            {[
              {
                badge: "Certifyone · LSS Green Belt",
                title: "LEAN SIX SIGMA GREEN BELT",
                desc: "Certified practitioner in waste elimination, process mapping, and structured continuous improvement methodology. Applied across banking operations for over a decade before being brought into VA consulting work.",
                audioTitle: "What this certification actually means in practice — and one waste category applied to a VA workflow.",
                duration: "4:32",
                src: null,
              },
              {
                badge: "Certifyone · LSS + AI",
                title: "LEAN SIX SIGMA + AI INTEGRATION",
                desc: "Application of LSS methodology to AI-assisted workflows — where artificial intelligence eliminates waste, not just automates tasks. The difference between using AI to do more work and using AI to eliminate defective work.",
                audioTitle: "Why Lean + AI together is a fundamentally different methodology from 'use ChatGPT to save time.'",
                duration: "5:14",
                src: null,
              },
              {
                badge: "Wharton · University of Pennsylvania · Coursera",
                title: "AI FOR BUSINESS",
                desc: "Completed through the Wharton School, University of Pennsylvania via Coursera. Covers AI strategy, machine learning applications, and the business implementation of artificial intelligence — applied directly to the LEAN+AI methodology used across all engagements.",
                audioTitle: "How the Wharton AI framework changed the way I approach AI integration in VA workflows.",
                duration: "3:48",
                src: null,
              },
            ].map((c, i) => (
              <div key={i} className="cred-card">
                <span className="cred-badge">{c.badge}</span>
                <div className="cred-title">{c.title}</div>
                <p className="cred-desc">{c.desc}</p>
                <AudioPlayer
                  title={c.audioTitle}
                  src={c.src}
                  duration={c.duration}
                />
                <a className="cred-verify" href="#">Verify credential →</a>
              </div>
            ))}
          </div>

          {/* PUBLICATION STRIP */}
          <div className="pub-strip">
            {[
              {
                label: "As published in",
                text: <><strong>Huffington Post</strong><br />Former Contributor</>,
              },
              {
                label: "Project-based writing · 10 years",
                text: <>Literary &amp; academic research · <strong>Ghostwriting</strong><br />Project-based · Independent client work</>,
              },
              {
                label: "Institutional background",
                text: <><strong>16+ years</strong><br />Corporate banking operations · Currently active</>,
              },
              {
                label: "Client work",
                text: <>Selected engagements <strong>under NDA</strong><br />Case studies available to qualified inquiries</>,
              },
            ].map((p, i) => (
              <div key={i} className="pub-item">
                <span className="pub-item-label">{p.label}</span>
                <p className="pub-item-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice" style={{ borderBottom: "1px solid #111" }}>
        <div className="section-wrap">
          <span className="section-label">Practice</span>
          <div className="section-rule" />
          <h2 className="section-heading">
            Two ways to work together.<br />
            Both strictly limited. Both by application.
          </h2>
          <p className="section-subhead">
            Currently active in a full-time institutional role.<br />
            Every external engagement is chosen deliberately —<br />
            which means the ones that are taken get full methodology and complete attention.
          </p>

          {/* LANE A */}
          <div className="lane">
            <div className="lane-top">
              <div className="lane-label-block">
                <span className="lane-tag">Lane A</span>
                <div className="lane-num">A</div>
              </div>
              <div className="lane-content">
                <h3 className="lane-title">
                  Your operation has gaps you've normalised.<br />
                  I find them, map them, and build the system that closes them.
                </h3>
                <div className="lane-body">
                  <p>Most businesses and VA agencies reach a point where the way they work starts costing them more than it produces — in rework, in miscommunication, in clients who don't renew, in team members who can't operate without constant direction. The problem is rarely the people. It's that no one ever built the system behind the people.</p>
                  <p>A Systems Build is a focused, project-based engagement that produces a complete operational system: mapped workflows, documented standard processes, identified AI integration points, and a handover guide that means the system runs without me once I'm done.</p>
                  <p>I don't advise. I build. You leave with a deliverable, not a deck of recommendations.</p>
                </div>
              </div>
            </div>
            <div className="lane-bottom">
              <div className="lane-specs">
                {[
                  { label: "Format", val: "Project-based · fixed scope · fixed deliverable" },
                  { label: "Duration", val: "4 to 6 weeks depending on scope" },
                  { label: "Availability", val: "2 to 3 engagements per quarter" },
                  { label: "Who it's for", val: "VA agencies · online businesses · knowledge work operations" },
                ].map((s, i) => (
                  <div key={i} className="lane-spec">
                    <span className="lane-spec-label">{s.label}</span>
                    <span className="lane-spec-val">{s.val}</span>
                  </div>
                ))}
              </div>
              <a className="lane-cta" href="#portal">Inquire about a Systems Build →</a>
            </div>
          </div>

          {/* LANE B */}
          <div className="lane">
            <div className="lane-top">
              <div className="lane-label-block">
                <span className="lane-tag">Lane B</span>
                <div className="lane-num">B</div>
              </div>
              <div className="lane-content">
                <h3 className="lane-title">
                  You don't have a skill problem.<br />
                  You have a structure problem.<br />
                  Ninety days fixes that.
                </h3>
                <div className="lane-body">
                  <p>The VAs I work with are not beginners who need to be taught how to find clients. They are capable people whose work is not yet organized in a way that makes its value visible, sustainable, or scalable. The gap between where they are and where they're trying to get is almost always a systems gap — not a talent gap.</p>
                  <p>The 90-Day Consulting Container is built around the Lean + AI methodology. Depending on where you are, the 90 days focuses on one of three things: landing your first client with a system behind your approach, protecting and converting your first client into a retainer, or building the stable monthly income structure that ends the feast-or-famine cycle permanently.</p>
                  <p>This is not a course with access to me. It is direct, one-on-one work — structured by a methodology, measured by outcomes, and limited to three clients at any time so the quality of attention never drops.</p>
                </div>
              </div>
            </div>
            <div className="lane-bottom">
              <div className="lane-specs">
                {[
                  { label: "Format", val: "One-on-one · structured 90-day container" },
                  { label: "Availability", val: "Maximum 3 clients simultaneously" },
                  { label: "Review", val: "Applications reviewed monthly" },
                  { label: "Who it's for", val: "VAs who are already working and ready to build properly" },
                ].map((s, i) => (
                  <div key={i} className="lane-spec">
                    <span className="lane-spec-label">{s.label}</span>
                    <span className="lane-spec-val">{s.val}</span>
                  </div>
                ))}
              </div>
              <a className="lane-cta" href="#portal">Apply for the 90-Day Container →</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL */}
      <section id="portal" style={{ borderBottom: "1px solid #111" }}>
        <div className="section-wrap">
          <span className="section-label">Portal</span>
          <div className="section-rule" />
          <h2 className="section-heading">
            Every engagement starts here.<br />
            Tell me what you're working with.
          </h2>
          <p className="section-subhead">
            Both forms are short. Every submission is read personally.<br />
            You'll hear back within five business days.
          </p>
          <div className="portal-grid">
            <ContactForm lane="A" />
            <ContactForm lane="B" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="ftr">
          <img src="/cat.png" alt="" className="ftr-cat" />
          <div className="ftr-center">
            <span className="ftr-brand">Margin &amp; Momentum™</span>
            <span className="ftr-note">Systems Over Hustle™</span>
          </div>
          <div className="ftr-right">
            Selected client work available under NDA<br />
            to qualified inquiries.<br />
            Writing samples available upon request.
          </div>
        </div>
      </footer>
    </div>
  );
}
