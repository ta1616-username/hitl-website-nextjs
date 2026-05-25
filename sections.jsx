'use client';

import { BRAND, FONT, PREMIUM_BG, Wordmark, Eyebrow, SerifH, ItalCyan, Body, Tagline, GeoMark } from './brand';

// ───────────────────────────────────────────────────────────────
// Navigation bar — premium, refined, refers to the gradient surface.
// ───────────────────────────────────────────────────────────────
export function NavBar({ width = 1440, transparent = false, active = 'Home' }) {
  const links = ['Home', 'Services', 'Case Studies', 'Research', 'Contact'];

  const handleNavClick = (label) => {
    let targetId = '';
    switch(label.toLowerCase()) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      case 'services':
        targetId = 'services';
        break;
      case 'case studies':
        targetId = 'case-studies';
        break;
      case 'research':
        targetId = 'research';
        break;
      case 'contact':
        targetId = 'contact';
        break;
    }
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      width: '100%', height: 96, padding: '0 64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: transparent ? 'transparent' : 'rgba(38,50,56,0.92)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid rgba(255,255,255,.08)',
      boxSizing: 'border-box', position: 'relative', zIndex: 2,
    }}>
      <Wordmark inverse={true} scale={1}/>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
        {links.map((l) => (
          <button key={l} onClick={() => handleNavClick(l)} style={{
            fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: l === active ? BRAND.cyan : 'rgba(255,255,255,.78)',
            textDecoration: 'none', position: 'relative', paddingBottom: 4,
            borderBottom: l === active ? `1.5px solid ${BRAND.cyan}` : '1.5px solid transparent',
            background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 4px',
            transition: 'color 0.2s ease',
          }} onMouseEnter={(e) => e.target.style.color = BRAND.cyan}
             onMouseLeave={(e) => e.target.style.color = l === active ? BRAND.cyan : 'rgba(255,255,255,.78)'}
          >{l}</button>
        ))}
        <span style={{ width: 1, height: 22, background: 'rgba(255,255,255,.15)', marginLeft: 4 }}/>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{
          fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: BRAND.slate, background: BRAND.cyan,
          padding: '11px 18px', textDecoration: 'none', border: 'none', cursor: 'pointer',
          transition: 'opacity 0.2s ease',
        }} onMouseEnter={(e) => e.target.style.opacity = '0.9'}
           onMouseLeave={(e) => e.target.style.opacity = '1'}>Begin Engagement →</button>
      </nav>
    </header>
  );
}

// ───────────────────────────────────────────────────────────────
// Hero — gradient surface, script tagline as visual anchor.
// ───────────────────────────────────────────────────────────────
export function Hero({ width = 1440, height = 820, withNav = false }) {
  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      background: PREMIUM_BG,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Architectural lines */}
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <line x1="64" y1={height-1} x2={width-64} y2={height-1} stroke={BRAND.slate} strokeOpacity=".22" strokeWidth="1"/>
        <line x1="64" y1="120" x2={width-64} y2={120} stroke="#fff" strokeOpacity=".25" strokeWidth="1"/>
      </svg>

      {/* Top strap – eyebrow + ticker */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, minHeight: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 4%', borderBottom: '1px solid rgba(38,50,56,.12)',
        flexWrap: 'wrap', gap: 12
      }}>
        <div style={{ fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.32em', color: BRAND.slate, textTransform: 'uppercase' }}>
          Research-Led Practice
        </div>
        <div style={{ fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 500, letterSpacing: '0.28em', color: BRAND.slate, textTransform: 'uppercase' }}>
          Operating Worldwide ・ London / Remote
        </div>
      </div>

      {/* Body – dynamic composition for mobile & desktop */}
      <div style={{
        position: 'relative',
        padding: '120px max(20px, 5%) 60px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
        alignItems: 'center',
        marginTop: 40
      }}>
        {/* Left: title block */}
        <div style={{ position: 'relative', flex: '1 1 600px', minWidth: '280px' }}>
          <div style={{ marginBottom: 28 }}>
            <Eyebrow color={BRAND.slate}>A Practice in Human-AI Alignment</Eyebrow>
          </div>
          
          <h1 style={{
            fontFamily: FONT.serif, 
            fontWeight: 500, 
            fontSize: 'clamp(34px, 7vw, 96px)', 
            lineHeight: '1.15',
            color: BRAND.white, 
            margin: '0 0 24px 0', 
            letterSpacing: '-0.02em',
            textShadow: '0 1px 0 rgba(38,50,56,.08)',
          }}>
            Where instruction<br/>becomes <ItalCyan>intelligence</ItalCyan>.
          </h1>

          <div style={{ 
            fontFamily: FONT.serif, 
            fontSize: 'clamp(28px, 5vw, 62px)', 
            color: '#ffffff', 
            fontStyle: 'italic',
            lineHeight: '1.2',
            marginBottom: 34 
          }}>
            Bridging AI Potential
          </div>

          <div style={{ maxWidth: 520, marginBottom: 40 }}>
            <Body size={16} color="rgba(38,50,56,.78)" weight={400}>
              Human-in-the-Loop Solutions is a research-led practice in the craft of 
              Golden Responses – the carefully designed examples that teach modern 
              language models to be correct, careful and humane under pressure.
            </Body>
          </div>
        </div>
      </div>
    </section>
  );
}
// ───────────────────────────────────────────────────────────────
// Services — four practice areas on slate ground.
// ───────────────────────────────────────────────────────────────
export function Services({ height = 760, width = 1440 }) {
  const items = [
    {
      n: '01', t: 'AI Annotation Strategy', mark: 'orbit',
      d: 'Designing the example sets that quietly shape model behaviour. We build the rubrics, write the Golden Responses and run the human reviewers who keep them honest.',
    },
    {
      n: '02', t: 'Alignment Research', mark: 'flow',
      d: 'Studying the edge cases where helpfulness, honesty and safety collide — and producing reference responses that resolve them without losing warmth.',
    },
    {
      n: '03', t: 'Language Education', mark: 'rule',
      d: 'Plain-language pedagogy for models that teach. Multi-step reasoning, gentle correction, and the metaphors that make difficult ideas hold in the mind.',
    },
    {
      n: '04', t: 'Organisational Learning', mark: 'square',
      d: 'Embedding annotation craft into your team. Reviewer training, calibration sessions and the small instruments that make a Golden standard repeatable.',
    },
  ];
  return (
    <section id="services" style={{
      width: '100%', height, background: BRAND.slate,
      position: 'relative', padding: '88px 64px', boxSizing: 'border-box',
      color: '#fff',
    }}>
      {/* faint architectural rule */}
      <div style={{ position: 'absolute', left: 64, right: 64, top: 64, height: 1,
        background: 'rgba(255,255,255,.10)' }}/>

      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'end',
        marginBottom: 64 }}>
        <div>
          <Eyebrow color={BRAND.cyan} width={36}>Practice · Four Disciplines</Eyebrow>
          <div style={{ height: 24 }}/>
          <SerifH size={72} weight={500}>
            What we do, in <ItalCyan>careful</ItalCyan> detail.
          </SerifH>
        </div>
        <div style={{ paddingBottom: 8 }}>
          <Body size={16} color="rgba(255,255,255,.72)">
            Our work sits between language, instruction and judgement.
            Four disciplines, one practice — each grounded in the same
            standard: every example is correct, uniform, useful, understandable.
          </Body>
          <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: FONT.mono, fontSize: 11, color: BRAND.cyan, letterSpacing: '0.18em' }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, background: BRAND.cyan }}/>
            4U · CORRECT / UNIFORM / USEFUL / UNDERSTANDABLE
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {items.map((it, i) => (
          <article key={it.n} style={{
            position: 'relative', padding: '32px 26px 30px',
            background: 'rgba(255,255,255,.02)',
            borderTop: `1.5px solid ${BRAND.cyan}`,
            minHeight: 360,
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, color: BRAND.cyan,
              letterSpacing: '0.22em', marginBottom: 28,
            }}>{it.n} ——</div>
            <div style={{ marginBottom: 28 }}>
              <GeoMark kind={it.mark} color={BRAND.cyan} size={56}/>
            </div>
            <h3 style={{
              fontFamily: FONT.serif, fontWeight: 500, fontSize: 26, lineHeight: 1.15,
              color: '#fff', margin: '0 0 16px', letterSpacing: '-0.005em',
            }}>{it.t}</h3>
            <Body size={13.5} color="rgba(255,255,255,.65)">{it.d}</Body>
            <button onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })} style={{ position: 'absolute', bottom: 18, left: 26, right: 26,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 14,
              fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 600,
              letterSpacing: '0.22em', color: BRAND.cyan, textTransform: 'uppercase',
              background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
              transition: 'color 0.2s ease',
            }} onMouseEnter={(e) => e.target.style.color = 'rgba(0,188,212,.8)'}
               onMouseLeave={(e) => e.target.style.color = BRAND.cyan}>
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
// Footer — restrained, premium.
// ───────────────────────────────────────────────────────────────
export function Footer({ height = 360 }) {
  return (
    <footer id="contact" style={{
      width: '100%', height, background: '#101719',
      padding: '64px 64px 32px', boxSizing: 'border-box',
      position: 'relative', color: '#fff', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <Wordmark inverse={true} scale={1}/>
          <div style={{ marginTop: 28, maxWidth: 360 }}>
            <Tagline size={36} color="#ffffff" opacity={.9}/>
          </div>
        </div>
        <FooterCol title="Practice" links={['AI Annotation', 'Alignment Research', 'Language Education', 'Organisational Learning']}/>
        <FooterCol title="Case Studies" links={['Linguistic Constraints', 'AI Tutoring', 'Empathy Calibration', 'View All →']}/>
        <FooterCol title="Studio" links={['Method', 'Writing', 'Contact', 'press@hitl.studio']}/>
      </div>
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 22,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.18em', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase',
      }}>
        <span>© 2026 · Human-in-the-Loop Solutions</span>
        <span>Bridging AI Potential · 2026</span>
        <span style={{ color: BRAND.cyan }}>4U STANDARD ·  CERTIFIED PRACTICE</span>
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
            color: 'rgba(255,255,255,.78)' }}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
