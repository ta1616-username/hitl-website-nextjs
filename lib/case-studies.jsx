'use client';

import { useState } from 'react';
import { BRAND, FONT, PREMIUM_BG, ItalCyan, Body } from './brand';

// Magnifying glass modal for expanded problem/solution view
function MagnifyModal({ kind, h, body, icon, swatch, onClose }) {
  const tone = {
    problem:   { tag: 'PROBLEM',   chip: '#a85a3c', surf: 'rgba(241,217,204,.85)', stripe: '#c97a55' },
    principle: { tag: 'PRINCIPLE', chip: BRAND.cyan, surf: 'rgba(38,50,56,.92)',   stripe: BRAND.cyan, dark: true },
    solution:  { tag: 'SOLUTION',  chip: '#3f7a4a', surf: 'rgba(217,230,212,.92)', stripe: '#3f7a4a' },
  }[kind];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.85)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, boxSizing: 'border-box',
        animation: 'fadeIn 0.2s ease',
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: tone.surf, borderLeft: `3px solid ${tone.stripe}`,
          padding: '32px 36px', boxSizing: 'border-box',
          color: tone.dark ? '#fff' : BRAND.slate,
          maxWidth: 720, maxHeight: '85vh', overflow: 'auto',
          borderRadius: 4, boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
          border: '2px solid #ffffff',
        }}>
        {/* Header with tag and icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            background: tone.chip, color: tone.dark ? BRAND.slate : '#fff',
            padding: '4px 10px',
          }}>{tone.tag}</span>
          <span style={{ flex: 1 }}/>
          {icon}
        </div>

        {/* Large title */}
        <h3 style={{
          fontFamily: FONT.serif, fontWeight: 500, fontSize: 32, lineHeight: 1.2,
          color: tone.dark ? '#fff' : BRAND.slate, margin: '0 0 14px',
          letterSpacing: '-0.01em',
        }}>{h}</h3>

        {/* Body text */}
        <Body size={14.5} color={tone.dark ? 'rgba(255,255,255,.82)' : 'rgba(38,50,56,.82)'}>
          {body}
        </Body>

        {/* Swatch if present */}
        {swatch && (
          <div style={{
            marginTop: 16, padding: '12px 14px',
            background: tone.dark ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.65)',
            borderLeft: `2px solid ${tone.dark ? BRAND.cyan : tone.stripe}`,
            fontFamily: FONT.serif, fontSize: 13.5, fontStyle: 'italic',
            color: tone.dark ? '#fff' : BRAND.slate, lineHeight: 1.5,
          }}>
            {swatch}
          </div>
        )}
      </div>
    </div>
  );
}

export const CASE_W = 480;
export const CASE_H = 760;

// Shared card chrome.
function CaseCard({ no, eyebrow, title, lede, problem, principle, solution, onExplore }) {
  const [magnified, setMagnified] = useState(null);

  return (
    <>
      {magnified && (
        <MagnifyModal
          kind={magnified.kind}
          h={magnified.h}
          body={magnified.body}
          icon={magnified.icon}
          swatch={magnified.swatch}
          onClose={() => setMagnified(null)}
        />
      )}
      <article style={{
        width: '100%', height: '100%', background: PREMIUM_BG,
        position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
        padding: '36px 36px 0px',
        display: 'flex', flexDirection: 'column',
      }}>
      {/* watermark grid in corner */}
      <svg width="120" height="120" viewBox="0 0 120 120"
        style={{ position: 'absolute', top: -10, right: -10, opacity: .25, pointerEvents: 'none' }}>
        {[0,1,2,3,4,5].map(i => (
          <line key={i} x1={i*22} y1="0" x2={i*22} y2="120" stroke={BRAND.slate} strokeWidth=".6"/>
        ))}
        {[0,1,2,3,4,5].map(i => (
          <line key={'h'+i} x1="0" y1={i*22} x2="120" y2={i*22} stroke={BRAND.slate} strokeWidth=".6"/>
        ))}
      </svg>

      {/* Header */}
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: FONT.mono, fontSize: 10.5, fontWeight: 600,
            letterSpacing: '0.28em', color: BRAND.cyan, textTransform: 'uppercase' }}>
            {eyebrow}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: FONT.mono, fontSize: 10.5, fontWeight: 600,
              letterSpacing: '0.24em', color: BRAND.slate, textTransform: 'uppercase' }}>Case</span>
            <span style={{
              fontFamily: FONT.serif, fontSize: 36, fontWeight: 500, lineHeight: 1,
              color: BRAND.slate, letterSpacing: '-0.02em',
            }}>{no}</span>
          </div>
        </div>
        <h3 style={{
          fontFamily: FONT.serif, fontWeight: 500, fontSize: 34, lineHeight: 1.1,
          color: '#fff', margin: '20px 0 12px', letterSpacing: '-0.015em',
          textWrap: 'pretty',
        }}>{title}</h3>
        <Body size={13} color="rgba(38,50,56,.72)" style={{ maxWidth: 380, marginBottom: 22 }}>
          {lede}
        </Body>
      </header>

      {/* Body — vertical narrative: problem → principle → solution */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column',
        gap: 12 }}>
        <svg width="14" height="100%" viewBox="0 0 14 460" preserveAspectRatio="none"
          style={{ position: 'absolute', left: 20, top: 16, bottom: 16, height: 'calc(100% - 32px)' }}>
          <line x1="7" y1="0" x2="7" y2="460" stroke={BRAND.cyan} strokeOpacity=".55"
            strokeWidth="1.2" strokeDasharray="2 4"/>
          <circle cx="7" cy="20"  r="4" fill="#fff" stroke={BRAND.slate} strokeWidth="1.4"/>
          <circle cx="7" cy="230" r="4" fill={BRAND.cyan}/>
          <circle cx="7" cy="440" r="4" fill={BRAND.cyan} stroke={BRAND.slate} strokeWidth="1.4"/>
        </svg>

        <CaseRow kind="problem"   onMagnify={(data) => setMagnified({ kind: 'problem', ...data })} {...problem}/>
        <CaseRow kind="principle" onMagnify={(data) => setMagnified({ kind: 'principle', ...data })} {...principle}/>
        <CaseRow kind="solution"  onMagnify={(data) => setMagnified({ kind: 'solution', ...data })} {...solution}/>
      </div>

      {/* Footer CTA */}
      <footer style={{
        marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(38,50,56,.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: FONT.sans, fontSize: 10.5, fontWeight: 600,
          letterSpacing: '0.26em', color: BRAND.slate, textTransform: 'uppercase' }}>
          Read: Annotated walkthrough
        </span>
        <button
          onClick={onExplore}
          style={{
            fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.22em', color: BRAND.slate, textTransform: 'uppercase',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px 8px 16px', background: BRAND.cyan,
            border: 'none', cursor: 'pointer', transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          Explore Case <span style={{ fontSize: 14 }}>→</span>
        </button>
      </footer>
      </article>
    </>
  );
}

function CaseRow({ kind, h, body, icon, swatch, onMagnify }) {
  const tone = {
    problem:   { tag: 'PROBLEM',   chip: '#a85a3c', surf: 'rgba(241,217,204,.85)', stripe: '#c97a55' },
    principle: { tag: 'PRINCIPLE', chip: BRAND.cyan, surf: 'rgba(38,50,56,.92)',   stripe: BRAND.cyan, dark: true },
    solution:  { tag: 'SOLUTION',  chip: '#3f7a4a', surf: 'rgba(217,230,212,.92)', stripe: '#3f7a4a' },
  }[kind];

  const isClickable = !!onMagnify;

  return (
    <div
      onClick={() => { if (isClickable) onMagnify({ h, body, icon, swatch }); }}
      style={{
        marginLeft: 44, position: 'relative',
        background: tone.surf, borderLeft: `2px solid ${tone.stripe}`,
        padding: '14px 16px', boxSizing: 'border-box',
        color: tone.dark ? '#fff' : BRAND.slate,
        minHeight: 132,
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'opacity 0.2s ease',
        maxHeight: '120px',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => { if (isClickable) e.currentTarget.style.opacity = '0.9'; }}
      onMouseLeave={(e) => { if (isClickable) e.currentTarget.style.opacity = '1'; }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 9.5, fontWeight: 700,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          background: tone.chip, color: tone.dark ? BRAND.slate : '#fff',
          padding: '3px 8px',
        }}>{tone.tag}</span>
        <span style={{ flex: 1 }}/>
        {icon}
      </div>
      <h4 style={{
        fontFamily: FONT.serif, fontWeight: 500, fontSize: 19, lineHeight: 1.2,
        color: tone.dark ? '#fff' : BRAND.slate, margin: '0 0 6px',
      }}>{h}</h4>
      <Body size={12.5} color={tone.dark ? 'rgba(255,255,255,.78)' : 'rgba(38,50,56,.78)'}>
        {body}
      </Body>
      {swatch && (
        <div style={{
          marginTop: 10, padding: '8px 10px',
          background: tone.dark ? 'rgba(255,255,255,.06)' : 'rgba(255,255,255,.55)',
          borderLeft: `1.5px solid ${tone.dark ? BRAND.cyan : tone.stripe}`,
          fontFamily: FONT.serif, fontSize: 12.5, fontStyle: 'italic',
          color: tone.dark ? '#fff' : BRAND.slate, lineHeight: 1.45,
        }}>
          {swatch}
        </div>
      )}
    </div>
  );
}

// Mini-icons.
function IconX({ color = '#a85a3c' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="11" r="9" fill={color}/>
      <path d="M7 7 L15 15 M15 7 L7 15" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function IconCheck({ color = '#3f7a4a' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="11" r="9" fill={color}/>
      <path d="M6.5 11.5 L10 14.5 L15.5 7.5" stroke="#fff" strokeWidth="1.8"
        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconDot({ color = BRAND.cyan }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="1.4" fill="none"/>
      <circle cx="11" cy="11" r="3.5" fill={color}/>
    </svg>
  );
}

// ───────────────────────────────────────────────────────────────
// Three specific cards. onExplore is wired by the parent to open
// the corresponding infographic modal.
// ───────────────────────────────────────────────────────────────
export function CaseCard01({ onExplore }) {
  return (
    <CaseCard
      onExplore={onExplore}
      no="01"
      eyebrow="RLHF Edge Case · 01"
      title={<>Linguistic Constraints <ItalCyan>and</ItalCyan> Rewriting.</>}
      lede="The anatomy of a Golden Response. A near-miss answer differs from a true Golden Response by a single word."
      problem={{
        h: 'Generic politeness.',
        body: 'A friendly "Sure!" opener disqualifies the entire answer. Correct content; wrong contract. The polite hello becomes noise for the system downstream.',
        icon: <IconX/>,
        swatch: <><b style={{ background:'#a85a3c', color:'#fff', padding:'0 4px', fontStyle:'normal', fontFamily: FONT.sans, fontSize: 11, letterSpacing: '0.08em' }}>SURE!</b> Cognitive Behavioural Therapy is a method where people learn to identify and change negative thought patterns…</>,
      }}
      principle={{
        h: 'Respect every boundary, however small.',
        body: 'When developer rules clash with default friendliness, the rules win. Three small constraints: word limit, banned word, no preamble. Together they define the Golden contract.',
        icon: <IconDot color="#fff"/>,
      }}
      solution={{
        h: 'A Golden Response.',
        body: 'Opens with substance. Stays under eighty words. Never uses the banned term. The meaning is preserved, the tone is warm, the structure is what the developer asked for.',
        icon: <IconCheck/>,
        swatch: <>Cognitive Behavioural Therapy helps individuals identify and transform negative thought patterns…</>,
      }}
    />
  );
}

export function CaseCard02({ onExplore }) {
  return (
    <CaseCard
      onExplore={onExplore}
      no="02"
      eyebrow="RLHF Edge Case · 02"
      title={<>AI Tutoring. Multi-Step Reasoning <ItalCyan>&amp;</ItalCyan> Truthfulness.</>}
      lede="A student's polite question hides a misunderstanding. The tutor's first move decides whether they leave smarter or more confused."
      problem={{
        h: 'Agreeable but wrong.',
        body: 'The reply opens by confirming the student\'s wrong guess. Everything after is technically correct grammar information, but the misconception is now reinforced rather than repaired.',
        icon: <IconX/>,
        swatch: <><b style={{ background:'#a85a3c', color:'#fff', padding:'0 4px', fontStyle:'normal', fontFamily: FONT.sans, fontSize: 11, letterSpacing: '0.08em' }}>YES, THAT IS A GOOD WAY TO THINK ABOUT IT.</b> The third conditional describes different possibilities…</>,
      }}
      principle={{
        h: 'Be a teacher first. A helper second.',
        body: 'Politeness is not the same as truth. A good tutor flags the mistake warmly, then offers a memorable picture: a Time Machine that carries the grammar with it.',
        icon: <IconDot color="#fff"/>,
      }}
      solution={{
        h: 'A kind correction. A memorable image.',
        body: 'Gently surfaces the mistake. Replaces three tense names with one image the learner can hold. The student leaves with something they can use next time.',
        icon: <IconCheck/>,
        swatch: <>Actually, that is a very common point of confusion. Think of it like a <b style={{ fontFamily: FONT.serif, fontStyle: 'italic' }}>Time Machine</b> tense: you are looking back at the imaginary past…</>,
      }}
    />
  );
}

export function CaseCard03({ onExplore }) {
  return (
    <CaseCard
      onExplore={onExplore}
      no="03"
      eyebrow="RLHF Edge Case · 03"
      title={<>Empathy Calibration <ItalCyan>and</ItalCyan> Safety Alignment.</>}
      lede="When a person turns to an AI in real emotional distress, the reply must feel human and know its limits. Most AIs manage one but not both."
      problem={{
        h: 'Robotic. Rushed. Unsolicited.',
        body: 'A stock opener reads as a closed door. The reply then diagnoses and prescribes, stepping well outside what the AI is qualified to offer. The person feels dismissed.',
        icon: <IconX/>,
        swatch: <><b style={{ background:'#a85a3c', color:'#fff', padding:'0 4px', fontStyle:'normal', fontFamily: FONT.sans, fontSize: 11, letterSpacing: '0.08em' }}>I AM SORRY YOU FEEL THAT WAY.</b> You should try deep breathing exercises and setting strict boundaries…</>,
      }}
      principle={{
        h: 'The Humble Interpreter.',
        body: 'Warmth in one hand. Limits in the other. Acknowledge the feeling in the person\'s own language, validate the experience, then point gently toward a human qualified to help.',
        icon: <IconDot color="#fff"/>,
      }}
      solution={{
        h: 'Warm. Steady. Knows its limits.',
        body: 'Opens by validating without diagnosing. Mirrors the language the user themselves chose. Suggests a professional only after the person has felt heard, so care lands as care.',
        icon: <IconCheck/>,
        swatch: <>It is completely understandable. The regression and "fawning" you have described are very painful to navigate…</>,
      }}
    />
  );
}
                         