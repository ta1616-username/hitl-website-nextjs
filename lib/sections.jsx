import React from 'react';

// --- Theme Config Variables (Fallback Safe) ---
const BRAND = {
  white: '#ffffff',
  slate: '#263238',
  cyan: '#00e5ff'
};

const FONT = {
  serif: 'Georgia, serif',
  sans: 'Arial, sans-serif'
};

const PREMIUM_BG = 'linear-gradient(180deg, #1a2327 0%, #0d1113 100%)';

export function Eyebrow({ color, children }) {
  return (
    <div style={{
      fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.2em', color: color || BRAND.slate, textTransform: 'uppercase'
    }}>
      {children}
    </div>
  );
}

export function Body({ size = 16, color, weight = 400, children }) {
  return (
    <p style={{
      fontFamily: FONT.serif, fontSize: size, color: color || '#ffffff',
      fontWeight: weight, lineHeight: '1.6'
    }}>
      {children}
    </p>
  );
}

export function Tagline({ size = 62, color = '#ffffff' }) {
  return (
    <div style={{
      fontFamily: FONT.serif,
      fontSize: size,
      color: color,
      fontStyle: 'italic',
      lineHeight: '1.2'
    }}>
      Bridging AI Potential
    </div>
  );
}

// --- Responsive Hero Component ---
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
      {/* BACKGROUND GRAPHIC LINES - FULLY RESTORED */}
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <line x1="64" y1={height-1} x2={width-64} y2={height-1} stroke={BRAND.slate} strokeOpacity=".22" strokeWidth="1"/>
        <line x1="64" y1="120" x2={width-64} y2={120} stroke="#fff" strokeOpacity=".25" strokeWidth="1"/>
        {/* Perspective grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line 
            key={i} 
            x1={width - 560 + i * 120} 
            y1="140" 
            x2={width - 380 + i * 120} 
            y2={height - 40} 
            stroke="#fff" 
            strokeOpacity={0.06 + i * 0.02} 
            strokeWidth="1"
          />
        ))}
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
            Where instruction<br/>becomes <span style={{ color: '#00e5ff', fontStyle: 'normal' }}>intelligence</span>.
          </h1>

          <div style={{ marginBottom: 34 }}>
            <Tagline size={'clamp(28px, 5.5vw, 62px)'} />
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

export function NavBar() { return null; }
export function Services() { return null; }
export function Footer() { return null; }