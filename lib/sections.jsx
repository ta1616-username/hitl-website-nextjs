'use client';

import { BRAND, FONT, PREMIUM_BG, Wordmark, Eyebrow, SerifH, ItalCyan, Body, Tagline, GeoMark } from './brand';

// ───────────────────────────────────────────────────────────────
// Navigation bar — five tabs, no Begin Engagement CTA.
// Switches the active tab in parent state rather than scrolling.
// Uses the custom HITL badge logo (public/logo-hitl.png) on the left,
// with a cleaned-up wordmark whose only subtitle is "AI Annotation".
// ───────────────────────────────────────────────────────────────
export function NavBar({ activeTab = 'Home', onTabChange = () => {} }) {
  const links = ['Home', 'Services', 'Case Studies', 'Practice', 'Contact'];

  return (
    <header data-navbar="true" style={{
      width: '100%', height: 140, padding: '0 64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(38,50,56,0.92)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid rgba(255,255,255,.08)',
      boxSizing: 'border-box', position: 'relative', zIndex: 2,
    }}>
      <button
        onClick={() => onTabChange('Home')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', gap: 16,
        }}
        aria-label="Go to Home"
      >
        {/* Plain <img> tag — next/image was failing to load this
            asset on iOS Safari with a 'broken image' placeholder.
            Reverted for reliability. */}
        <img
          src="/Human-In-The-Loop_Solutions-no-bckgrnd.png"
          alt="Human-in-the-Loop Solutions"
          width={160}
          height={160}
          style={{ display: 'block', borderRadius: 8, width: 'clamp(48px, 12vw, 160px)', height: 'auto', maxHeight: 160 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, lineHeight: 1 }}>
          <div style={{
            fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.18em', color: '#ffffff', textTransform: 'uppercase',
            textAlign: 'left',
          }}>
            HUMAN-IN-THE-LOOP <span style={{ color: BRAND.cyan }}>SOLUTIONS</span>
          </div>
          <div style={{
            fontFamily: FONT.sans, fontSize: 9.5, fontWeight: 500,
            letterSpacing: '0.28em', color: 'rgba(255,255,255,.7)', textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            AI Annotation
          </div>
        </div>
      </button>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
        {links.map((l) => (
          <button
            key={l}
            onClick={() => onTabChange(l)}
            style={{
              fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: l === activeTab ? BRAND.cyan : 'rgba(255,255,255,.78)',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0 0 4px',
              borderBottom: l === activeTab ? `1.5px solid ${BRAND.cyan}` : '1.5px solid transparent',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.cyan; }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = l === activeTab ? BRAND.cyan : 'rgba(255,255,255,.78)';
            }}
          >
            {l}
          </button>
        ))}
      </nav>
    </header>
  );
}

// ───────────────────────────────────────────────────────────────
// Hero — gradient surface, script tagline as visual anchor.
// CTAs switch tabs instead of scrolling.
// ───────────────────────────────────────────────────────────────
export function Hero({ width = 1440, height = 820, onTabChange = () => {} }) {
  return (
    <section data-hero="true" style={{
      // height changed from fixed prop to auto with minHeight, so the
      // section grows with content on mobile (when the grid stacks).
      width: '100%', minHeight: 'clamp(540px, 60vw, 820px)',
      background: PREMIUM_BG,
      position: 'relative', overflow: 'hidden',
    }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[0,1,2,3,4].map(i => (
          <line key={i} x1={width-560+i*120} y1="140" x2={width-380+i*120} y2={height-40}
                stroke="#fff" strokeOpacity={0.06 + i*0.02} strokeWidth="1"/>
        ))}
      </svg>

      {/* Top bar — uses clamp() for fluid horizontal padding so it
          shrinks on mobile without needing CSS overrides. */}
      <div data-hero-topbar="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 4vw, 64px)', borderBottom: '1px solid rgba(38,50,56,.12)',
      }}>
        <div style={{ fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 600,
          letterSpacing: '0.32em', color: BRAND.slate, textTransform: 'uppercase' }}>
          Research-Led Practice
        </div>
        <div style={{ fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 500,
          letterSpacing: '0.28em', color: BRAND.slate, textTransform: 'uppercase' }}>
          Operating Worldwide · Remote
        </div>
      </div>

      {/* Inner grid — switched from absolute positioning to static
          flow so it stacks naturally on mobile. The grid uses
          auto-fit + minmax so it collapses to one column when the
          container is narrower than 2 × 320px = 640px. This works
          without any external CSS rules. */}
      <div data-hero-grid="true" style={{
        position: 'relative',
        padding: '120px clamp(16px, 4vw, 64px) 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: 'clamp(24px, 4vw, 64px)',
        alignItems: 'center',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ marginBottom: 28 }}>
            <Eyebrow color={BRAND.slate}>A Practice in Human-AI Alignment</Eyebrow>
          </div>
          {/* clamp(min, fluid, max) — title is 36px minimum on phones,
              scales with viewport width, caps at 96px on desktop.
              Works without any CSS rules — pure inline style. */}
          <h1 data-hero-title="true" style={{
            fontFamily: FONT.serif, fontWeight: 500,
            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
            lineHeight: 1.25,
            color: BRAND.white, margin: '1.5rem 0 0 0', letterSpacing: '-0.02em',
            textShadow: '0 1px 0 rgba(38,50,56,.08)',
          }}>
            Where instruction<br/>becomes <span style={{ color: BRAND.cyan }}>intelligence</span>.
          </h1>
          {/* Tagline overflow-wrapped + sized down to 36 (still
              elegant on desktop, no longer spilling on mobile). */}
          <div style={{ marginTop: 34, marginBottom: 28, overflow: 'hidden', wordBreak: 'break-word' }}>
            <Tagline size={36} color="#ffffff"/>
          </div>
          <div style={{ maxWidth: 520, marginBottom: 40 }}>
            <Body size={16} color="rgba(38,50,56,.78)" weight={400}>
              Human-in-the-Loop Solutions is a research-led practice in the craft of
              Golden Responses: the carefully designed examples that teach large
              language models (LLMs) to be correct, careful and humane under pressure.
            </Body>
          </div>
          {/* flexWrap allows the two CTAs to wrap onto separate
              rows when they can't fit side-by-side. On phones
              the globals.css rule makes each button full-width. */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, rowGap: 10, alignItems: 'center' }}>
            <button
              data-hero-cta="primary"
              onClick={() => onTabChange('Case Studies')}
              style={{
                fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: BRAND.white, background: BRAND.slate, padding: '15px 22px',
                border: 'none', cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Explore Case Studies →
            </button>
            <button
              data-hero-cta="secondary"
              onClick={() => onTabChange('Practice')}
              style={{
                fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: BRAND.slate, padding: '15px 22px',
                background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: `1.5px solid ${BRAND.cyan}`,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Read the Practice
            </button>
          </div>
        </div>

        {/* data-hero-geometry lets globals.css cap the wrapper at
            ~280px wide on phones, so the figure doesn't push the
            rest of the page below the fold when the Hero stacks. */}
        <div data-hero-geometry="true" style={{ position: 'relative', height: 520 }}>
          <HeroGeometry/>
          <div style={{ position: 'absolute', bottom: -20, right: 0,
            fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 500,
            letterSpacing: '0.28em', color: 'rgba(38,50,56,.7)', textTransform: 'uppercase' }}>
            Fig. 01 · The Loop
          </div>
        </div>
      </div>

      {/* Statistics row removed per refinement brief (#10). The hero now
          closes on the geometric figure rather than the numbers strip. */}
    </section>
  );
}

export function HeroGeometry() {
  return (
    <svg viewBox="0 0 460 520" width="100%" height="100%" style={{ display: 'block' }}>
      <circle cx="230" cy="260" r="220" stroke="#ffffff" strokeOpacity=".30" strokeWidth="1" fill="none"/>
      <circle cx="230" cy="260" r="170" stroke="#ffffff" strokeOpacity=".22" strokeWidth="1" fill="none"/>
      <circle cx="230" cy="260" r="120" stroke="#ffffff" strokeOpacity=".18" strokeWidth="1" fill="none"/>

      <circle cx="230" cy="260" r="46" fill={BRAND.cyan}/>
      <text x="230" y="252" textAnchor="middle" fontFamily={FONT.sans} fontSize="9" fontWeight="600"
        letterSpacing="2.2" fill={BRAND.slate}>GOLDEN</text>
      <text x="230" y="268" textAnchor="middle" fontFamily={FONT.sans} fontSize="9" fontWeight="600"
        letterSpacing="2.2" fill={BRAND.slate}>RESPONSE</text>

      <g>
        <circle cx="80"  cy="160" r="9" fill={BRAND.slate}/>
        <circle cx="380" cy="120" r="9" fill={BRAND.slate}/>
        <circle cx="410" cy="350" r="9" fill={BRAND.slate}/>
        <circle cx="120" cy="420" r="9" fill={BRAND.slate}/>
      </g>

      <g stroke="#ffffff" strokeOpacity=".55" strokeWidth="1.1">
        <line x1="89" y1="166" x2="190" y2="245"/>
        <line x1="371" y1="126" x2="266" y2="240"/>
        <line x1="401" y1="346" x2="266" y2="277"/>
        <line x1="129" y1="416" x2="195" y2="290"/>
      </g>

      <g fontFamily={FONT.sans} fontSize="10" fontWeight="600" letterSpacing="2.2" fill={BRAND.slate}>
        <text x="100" y="148">PROMPT</text>
        <text x="354" y="106" textAnchor="end" transform="translate(60 0)">RULES</text>
        <text x="430" y="338" textAnchor="end" transform="translate(60 0)">AUDIT</text>
        <text x="142" y="416">REPLY</text>
      </g>

      <rect x="424" y="44" width="22" height="22" stroke={BRAND.slate} strokeWidth="1.2" fill="none"/>
      <rect x="430" y="50" width="10" height="10" fill={BRAND.cyan}/>

      <line x1="20" y1="500" x2="440" y2="500" stroke={BRAND.slate} strokeOpacity=".35" strokeWidth="1"/>
      <text x="20" y="494" fontFamily={FONT.sans} fontSize="10" fontWeight="600"
        letterSpacing="2.4" fill={BRAND.slate}>FROM INPUT</text>
      <text x="440" y="494" textAnchor="end" fontFamily={FONT.sans} fontSize="10" fontWeight="600"
        letterSpacing="2.4" fill={BRAND.slate}>TO INSTRUCTION</text>
    </svg>
  );
}

// ───────────────────────────────────────────────────────────────
// Services — four practice areas on slate ground. Read More
// switches to the Case Studies tab.
// ───────────────────────────────────────────────────────────────
export function Services({ height = 760, onTabChange = () => {} }) {
  const items = [
    {
      n: '01', t: 'AI Annotation Strategy', mark: 'orbit',
      d: 'My approach encompasses rubric construction and evaluation, fine-tuning Golden Responses and casting a critical human eye over responses to verify honesty and integrity.',
    },
    {
      n: '02', t: 'Alignment Research', mark: 'flow',
      d: 'Studying the edge cases where helpfulness, honesty and safety collide, and producing reference responses that resolve them without losing warmth.',
    },
    {
      n: '03', t: 'Language Education', mark: 'rule',
      d: 'Accessible language to teach models that learn. Multi-step reasoning, gentle correction and the metaphors that make difficult ideas hold in the mind.',
    },
    {
      n: '04', t: 'Quality Assurance & Calibration', mark: 'square',
      d: 'Verifying that every response meets the standard. The feedback loops, comparison frameworks and the attention to detail that keeps annotation honest at scale.',
    },
  ];
  return (
    <section data-services="true" style={{
      width: '100%', minHeight: height, background: BRAND.slate,
      position: 'relative', padding: '88px 64px', boxSizing: 'border-box',
      color: '#fff',
    }}>
      <div data-services-rule="true" style={{ position: 'absolute', left: 64, right: 64, top: 64, height: 1,
        background: 'rgba(255,255,255,.10)' }}/>

      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'end',
        marginBottom: 64 }}>
        <div>
          <Eyebrow color={BRAND.cyan} width={36}>Practice: Four Disciplines</Eyebrow>
          <div style={{ height: 24 }}/>
          <SerifH size={72} weight={500}>
            What I do, in <ItalCyan>careful</ItalCyan> detail.
          </SerifH>
        </div>
        <div style={{ paddingBottom: 8 }}>
          <Body size={16} color="rgba(255,255,255,.72)">
            I'm Tommy, and my work sits between language, instruction and judgement.
            Using RLHF (Rehearsed Learning through Human Feedback),
            my focus is to ensure that every example is unequivocally correct, uniform, useful and understandable.
          </Body>
          <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: FONT.mono, fontSize: 11, color: BRAND.cyan, letterSpacing: '0.18em' }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, background: BRAND.cyan }}/>
            4U · UNEQUIVOCALLY CORRECT / UNIFORM / USEFUL / UNDERSTANDABLE
          </div>
        </div>
      </div>

      <div data-services-grid="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {items.map((it) => (
          <article key={it.n} style={{
            position: 'relative', padding: '32px 26px 30px',
            background: 'rgba(255,255,255,.02)',
            borderTop: `1.5px solid ${BRAND.cyan}`,
            minHeight: 360,
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, color: BRAND.cyan,
              letterSpacing: '0.22em', marginBottom: 28,
            }}>{it.n} ::</div>
            <div style={{ marginBottom: 28 }}>
              <GeoMark kind={it.mark} color={BRAND.cyan} size={56}/>
            </div>
            <h3 style={{
              fontFamily: FONT.serif, fontWeight: 500, fontSize: 26, lineHeight: 1.15,
              color: '#fff', margin: '0 0 16px', letterSpacing: '-0.005em',
            }}>{it.t}</h3>
            <Body size={13.5} color="rgba(255,255,255,.65)">{it.d}</Body>
            <button
              onClick={() => onTabChange('Case Studies')}
              style={{
                position: 'absolute', bottom: 18, left: 26, right: 26,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 14,
                fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 600,
                letterSpacing: '0.22em', color: BRAND.cyan, textTransform: 'uppercase',
                background: 'none', border: 'none', cursor: 'pointer', width: 'auto',
                textAlign: 'left',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(0,188,212,.7)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = BRAND.cyan; }}
            >
              <span>Read More</span>
              <span>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Footer — restrained, no script tagline, updated email.
// Tab links mirror the NavBar and call onTabChange to switch tabs.
// ───────────────────────────────────────────────────────────────
export function Footer({ height = 140, onTabChange = () => {} }) {
  const tabs = ['Home', 'Services', 'Case Studies', 'Practice', 'Contact'];
  return (
    <footer data-footer="true" style={{
      // Matched to the NavBar background so the cyan 'SOLUTIONS'
      // word and the logo cyan read identically in the header
      // and footer. Same charcoal at 0.92 alpha.
      width: '100%', minHeight: height, background: 'rgba(38,50,56,0.92)',
      padding: '0 64px', boxSizing: 'border-box',
      position: 'relative', color: '#fff', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div data-footer-inner="true" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48, marginLeft: -80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Plain <img> for reliability — see header note. */}
          <img
            src="/Human-In-The-Loop_Solutions-no-bckgrnd.png"
            alt="Human-In-The-Loop Solutions"
            width={140}
            height={140}
            style={{ display: 'block', flexShrink: 0, width: 'clamp(48px, 11vw, 140px)', height: 'auto', maxHeight: 140 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontFamily: FONT.sans, fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              HUMAN-IN-THE-LOOP <span style={{ color: BRAND.cyan }}>SOLUTIONS</span>
            </div>
            <div style={{ fontFamily: FONT.sans, fontSize: 9.5, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              AI Annotation
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginLeft: 0 }}>
          {tabs.map((t) => (
            <button
              key={t}
              data-footer-tab="true"
              onClick={() => onTabChange(t)}
              style={{
                fontFamily: FONT.sans, fontSize: 13, fontWeight: 400,
                color: 'rgba(255,255,255,.78)', background: 'none', border: 'none',
                padding: 0, cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.cyan; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,.78)'; }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 22,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.18em', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase',
      }}>
        <span>© 2026 · Human-in-the-Loop Solutions</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,.5)' }}>•</span>
          <span style={{ color: BRAND.cyan }}>4U STANDARD · CERTIFIED PRACTICE</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 600,
        letterSpacing: '0.28em', color: BRAND.cyan, textTransform: 'uppercase',
        marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex',
        flexDirection: 'column', gap: 10 }}>
        {links.map((l) => (
          <li key={l} style={{ fontFamily: FONT.sans, fontSize: 13, fontWeight: 400,
            color: 'rgba(255,255,255,.78)', wordBreak: 'break-word' }}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
