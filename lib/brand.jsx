// Brand tokens, primitive components and the HITL logo.

export const BRAND = {
  gradStops: ['#f2f0ec', '#cfc5b6', '#bcb8af', '#aaacad', '#99a0a5'],
  cream:  '#f2f0ec',
  warm:   '#cfc5b6',
  mid:    '#bcb8af',
  cool:   '#99a0a5',
  cyan:   '#00BCD4',
  cyanInk:'#0097a7',
  slate:  '#263238',
  slate2: '#37474f',
  ink:    '#1a2226',
  paper:  '#F5F5F5',
  white:  '#ffffff',
  surfBlue:   '#dde6ee',
  surfPeach:  '#f1d9cc',
  surfMint:   '#d9e6d4',
  surfWheat:  '#ecd9bc',
  surfLilac:  '#d6cee0',
};

export const FONT = {
  serif:  'var(--font-cormorant), "EB Garamond", Georgia, serif',
  sans:   'var(--font-inter), "Helvetica Neue", Helvetica, Arial, sans-serif',
  mono:   'var(--font-jetbrains), "IBM Plex Mono", ui-monospace, monospace',
  script: 'var(--font-italianno), "Pinyon Script", cursive',
};

export const PREMIUM_BG = `linear-gradient(135deg, ${BRAND.gradStops[0]} 0%, ${BRAND.gradStops[1]} 28%, ${BRAND.gradStops[2]} 52%, ${BRAND.gradStops[3]} 76%, ${BRAND.gradStops[4]} 100%)`;

export function HitlLogo({ size = 40, cyan = BRAND.cyan, slate = BRAND.slate }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <rect x="10" y="8" width="44" height="48" rx="9" stroke={slate} strokeWidth="1.6" fill="none"/>
      <circle cx="32" cy="32" r="3.2" fill={cyan}/>
      <circle cx="18" cy="20" r="1.9" fill={slate}/>
      <circle cx="46" cy="20" r="1.9" fill={cyan}/>
      <circle cx="18" cy="44" r="1.9" fill={cyan}/>
      <circle cx="46" cy="44" r="1.9" fill={slate}/>
      <circle cx="32" cy="14" r="1.6" fill={cyan}/>
      <circle cx="32" cy="50" r="1.6" fill={slate}/>
      <path d="M18 20 L26 20 L32 26 M32 26 L32 14" stroke={cyan} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M46 20 L38 20 L32 26" stroke={slate} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M18 44 L26 44 L32 38 M32 38 L32 32" stroke={slate} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M46 44 L38 44 L32 38 M32 50 L32 44" stroke={cyan} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export function Wordmark({ inverse = true, scale = 1 }) {
  const fg = inverse ? '#ffffff' : BRAND.slate;
  const sub = inverse ? 'rgba(255,255,255,.7)' : 'rgba(38,50,56,.6)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * scale }}>
      <HitlLogo size={42 * scale} cyan={BRAND.cyan} slate={inverse ? '#ffffff' : BRAND.slate}/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 * scale, lineHeight: 1 }}>
        <div style={{
          fontFamily: FONT.sans, fontSize: 12 * scale, fontWeight: 600,
          letterSpacing: '0.18em', color: fg, textTransform: 'uppercase',
        }}>
          HUMAN-IN-THE-LOOP <span style={{ color: BRAND.cyan }}>SOLUTIONS</span>
        </div>
        <div style={{
          fontFamily: FONT.sans, fontSize: 9.5 * scale, fontWeight: 500,
          letterSpacing: '0.28em', color: sub, textTransform: 'uppercase',
        }}>
          AI Annotation · Training Research
        </div>
      </div>
    </div>
  );
}

export function Tagline({ size = 44, color = '#ffffff', opacity = 1 }) {
  return (
    <span style={{
      fontFamily: FONT.script, fontSize: size, lineHeight: 1, color, opacity,
      whiteSpace: 'nowrap', letterSpacing: '0.01em',
    }}>
      Bridging AI Potential with Human Expertise
    </span>
  );
}

export function Eyebrow({ children, color = BRAND.cyan, width = 28 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: FONT.sans, fontSize: 11, fontWeight: 600,
      letterSpacing: '0.32em', color, textTransform: 'uppercase',
    }}>
      <span style={{ display: 'inline-block', width, height: 1.5, background: color }}/>
      {children}
    </div>
  );
}

export function SerifH({ size = 56, children, color = '#ffffff', weight = 500, leading = 1.05 }) {
  return (
    <h2 style={{
      fontFamily: FONT.serif, fontWeight: weight, fontSize: size,
      lineHeight: leading, color, margin: 0, letterSpacing: '-0.01em',
    }}>
      {children}
    </h2>
  );
}

export function ItalCyan({ children }) {
  return (
    <em style={{ fontStyle: 'italic', color: BRAND.cyan, fontWeight: 400 }}>{children}</em>
  );
}

export function Body({ size = 15, color = 'rgba(255,255,255,.85)', weight = 400, children, style = {} }) {
  return (
    <p style={{
      fontFamily: FONT.sans, fontSize: size, fontWeight: weight, lineHeight: 1.55,
      color, margin: 0, ...style,
    }}>
      {children}
    </p>
  );
}

export function GeoMark({ kind = 'orbit', color = BRAND.cyan, size = 56 }) {
  if (kind === 'orbit') {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="22" stroke={color} strokeWidth="1.2" opacity=".55"/>
        <circle cx="28" cy="28" r="6"  fill={color}/>
        <circle cx="50" cy="28" r="2.8" fill={color}/>
        <circle cx="6"  cy="28" r="2.8" fill="rgba(255,255,255,.7)"/>
      </svg>
    );
  }
  if (kind === 'square') {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
        <rect x="6" y="6" width="44" height="44" stroke={color} strokeWidth="1.2"/>
        <rect x="18" y="18" width="20" height="20" fill={color}/>
        <circle cx="50" cy="6" r="2.8" fill={color}/>
      </svg>
    );
  }
  if (kind === 'flow') {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
        <circle cx="10" cy="14" r="3.5" fill={color}/>
        <circle cx="46" cy="42" r="3.5" fill={color}/>
        <circle cx="28" cy="28" r="2.4" fill="rgba(255,255,255,.85)"/>
        <path d="M10 14 C 22 14, 22 28, 28 28 S 34 42, 46 42"
              stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect x="6"  y="14" width="20" height="28" stroke={color} strokeWidth="1.2"/>
      <rect x="30" y="14" width="20" height="28" fill={color}/>
    </svg>
  );
}
