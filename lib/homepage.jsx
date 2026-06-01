'use client';

import { useState, useEffect } from 'react';
import { BRAND, FONT, PREMIUM_BG, Body, SerifH, Eyebrow } from './brand';
import { NavBar, Hero, Services, Footer } from './sections';
import { CaseCard01, CaseCard02, CaseCard03, CASE_W } from './case-studies';

// ───────────────────────────────────────────────────────────────
// Infographic data — JPGs live in /public/infographics/.
// You must copy the three JPGs from your local
// Infographics folder into hitl-website-nextjs/public/infographics/
// using these filenames before deploying.
// ───────────────────────────────────────────────────────────────
const INFOGRAPHICS = [
  {
    id: '01',
    label: 'RLHF Edge Case · 01',
    title: 'Linguistic Constraints and Rewriting',
    src: '/infographics/RLHF_Edge_Case_01_Linguistic_Constraints_page-0001.jpg',
  },
  {
    id: '02',
    label: 'RLHF Edge Case · 02',
    title: 'AI Tutoring: Multi-Step Reasoning',
    src: '/infographics/RLHF_Edge_Case_02_AI_Tutoring_page-0001.jpg',
  },
  {
    id: '03',
    label: 'RLHF Edge Case · 03',
    title: 'Empathy Calibration and Safety Alignment',
    src: '/infographics/RLHF_Edge_Case_03_Empathy_Calibration_page-0001.jpg',
  },
];

// ───────────────────────────────────────────────────────────────
// Practice tab content — the Manifesto, given room to breathe.
// ───────────────────────────────────────────────────────────────
function PracticeView({ on4UClick }) {
  return (
    <section data-practice="true" style={{
      width: '100%', padding: '96px 40px', background: '#ffffff',
      display: 'flex', justifyContent: 'center',
    }}>
      <div style={{ maxWidth: 920, width: '100%' }}>
        <Eyebrow color='#0099AA''>MY PHILOSOPHY</Eyebrow>
        <div style={{ height: 18 }}/>
        <SerifH size={56} color={BRAND.slate} weight={500} leading={1.12}>
          Instructive Flow
        </SerifH>

        {/* 4U Standard badge — sits between the heading and the philosophy
            text so the symbol introduces the standard the prose explains.
            data-fouru-badge lets globals.css reset the negative marginRight
            on mobile (which otherwise pushes the badge 200px offscreen). */}
        <div data-fouru-badge="true" style={{
          marginTop: 0, marginBottom: -80,
          display: 'flex', justifyContent: 'flex-end',
          marginRight: '-200px',
        }}>
          <button
            onClick={on4UClick}
            style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <img
              src="/4u-standard.png"
              alt="4U Standard: Unequivocally Correct, Uniform, Useful, Understandable"
              width={300}
              height={300}
              style={{ display: 'block', width: 300, height: 300 }}
            />
          </button>
        </div>

        <Body size={17} color={BRAND.slate} weight={400} style={{ marginTop: -60, maxWidth: 760 }}>
          I believe that the difference between an example that teaches and one that misleads is about precision. A response can be warm, fluent and well-formed and still be wrong by a single word. When language models learn from examples that are not unequivocally correct, the model learns the wrong rule. Multiply that across thousands of examples, and a small slip becomes a <em style={{ fontStyle: 'italic' }}>fixed habit</em>.
        </Body>
        <Body size={17} color={BRAND.slate} weight={400} style={{ marginTop: 20, maxWidth: 760 }}>
          Unequivocally Correct is the first of the 4U Standard, because everything else rests on it. An example that is uniform but wrong is consistently wrong. An example that is useful but wrong is dangerously useful. Every annotation I write, every Golden Response I review, asks the same question first: is this correct beyond reasonable doubt? If the answer is anything short of yes, the example is not yet finished.
        </Body>
        
        {/* Four principles */}
        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28,
        }}>
          {[
            ['UNEQUIVOCALLY CORRECT', 'Every example is truthful, precisely reasoned and thoughtfully considered. Something you can trust.'],
            ['UNIFORM', 'When the same situation arises, the response is the same; conscientious, dependable and grounded in principle.'],
            ['USEFUL', 'The answer moves the reader forward, not in a circle.'],
            ['UNDERSTANDABLE', 'A person who is not an expert can read it and feel met.'],
          ].map(([term, def]) => (
            <div key={term} style={{
              padding: '20px 24px',
              borderLeft: `2px solid ${BRAND.cyan}`,
              background: '#fafafa',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 11, fontWeight: 600,
                letterSpacing: '0.28em', color: BRAND.cyan, marginBottom: 10,
              }}>{term}</div>
              <Body size={14} color={BRAND.slate}>{def}</Body>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Case Studies tab — the three narrative cards plus the
// infographic gallery (thumbnails open a modal at full size).
// ───────────────────────────────────────────────────────────────
function CaseStudiesView({ onExploreCase }) {
  return (
    <section data-case-studies-section="true" style={{ width: '100%', padding: '80px 40px', background: PREMIUM_BG }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        {/* Header — title and lede in soft grey for calmer contrast
            against the gradient (#8 in the refinement brief). */}
        <div style={{ marginBottom: 56 }}>
          <Eyebrow color='#0099AA''>EDGE CASES & RESEARCH</Eyebrow>
          <div style={{ height: 18 }}/>
          <SerifH size={48} color={BRAND.slate} weight={500} leading={1.15}>
            Where Annotation Meets Insight
          </SerifH>
          <Body size={16} color={BRAND.slate} style={{ marginTop: 16, maxWidth: 680 }}>
            Three snapshots from my annotation research. Each shows a moment where the gap between a near-miss answer and a Golden Response reveals something about how LLMs learn to think.
          </Body>
        </div>

        {/* Case Cards — custom layout with offset positioning.
            data-case-grid lets globals.css collapse the 2-column
            staircase to a single column on mobile (and reset the
            marginTop offsets, which only make sense in 2-col). */}
        <div data-case-grid="true" style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
          <div data-case-grid-cell="1"><CaseCard01 onExplore={() => onExploreCase('01')}/></div>
          <div data-case-grid-cell="2" style={{ marginTop: 450 }}><CaseCard02 onExplore={() => onExploreCase('02')}/></div>
          <div data-case-grid-cell="3" style={{ gridColumn: '1 / 2', marginTop: -100 }}>
            <CaseCard03 onExplore={() => onExploreCase('03')}/>
          </div>
        </div>

        {/* Infographics gallery */}
        <div style={{ marginBottom: 60 }}>
          <Eyebrow color='#0099AA''>ANNOTATED INFOGRAPHICS</Eyebrow>
          <div style={{ height: 14 }}/>
          <SerifH size={36} color="#ffffff" weight={500} leading={1.2}>
            The full walkthrough.
          </SerifH>
          <Body size={15} color="rgba(255,255,255,.72)" style={{ marginTop: 12, maxWidth: 620 }}>
            Click any panel to open the full-size annotated infographic.
          </Body>
          <div style={{
            marginTop: 28,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20,
          }}>
            {INFOGRAPHICS.map((g) => (
              <button
                key={g.id}
                onClick={() => onExploreCase(g.id)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: '#ffffff', border: 'none', padding: 0,
                  cursor: 'pointer', textAlign: 'left',
                  boxShadow: '0 2px 12px rgba(0,0,0,.18)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,.18)';
                }}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  style={{ width: '100%', display: 'block', height: 220, objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{ padding: '16px 18px 18px', background: '#fff' }}>
                  <div style={{
                    fontFamily: FONT.mono, fontSize: 10.5, fontWeight: 600,
                    letterSpacing: '0.24em', color: BRAND.cyan, textTransform: 'uppercase',
                    marginBottom: 6,
                  }}>{g.label}</div>
                  <div style={{
                    fontFamily: FONT.serif, fontSize: 18, fontWeight: 500,
                    color: BRAND.slate, letterSpacing: '-0.01em', lineHeight: 1.25,
                  }}>{g.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Contact tab — short, warm, direct.
// ───────────────────────────────────────────────────────────────
function ContactView() {
  return (
    <section style={{
      width: '100%', padding: '96px 40px', background: '#ffffff',
      display: 'flex', justifyContent: 'center',
    }}>
      <div style={{ maxWidth: 720, width: '100%' }}>
        <Eyebrow color='#0099AA''>GET IN TOUCH</Eyebrow>
        <div style={{ height: 18 }}/>
        <SerifH size={56} color={BRAND.slate} weight={500} leading={1.12}>
          Let&rsquo;s talk!
        </SerifH>
        <Body size={17} color={BRAND.slate} weight={400} style={{ marginTop: 24 }}>
          Whether it&rsquo;s a collaboration you have in mind, a project that needs assistance or you&rsquo;re quite simply a curious cat about the world of AI annotation, I&rsquo;d love to hear from you.
        </Body>

        <div style={{
          marginTop: 48, padding: '32px 36px',
          background: '#fafafa', borderLeft: `3px solid ${BRAND.cyan}`,
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, fontWeight: 600,
            letterSpacing: '0.28em', color: BRAND.cyan, textTransform: 'uppercase',
            marginBottom: 12,
          }}>EMAIL</div>
          <a
            href="mailto:hello@human-in-the-loop-solutions.org"
            style={{
              fontFamily: FONT.serif, fontSize: 28, fontWeight: 500,
              color: BRAND.slate, letterSpacing: '-0.01em',
              textDecoration: 'none', borderBottom: `1px solid ${BRAND.cyan}`,
            }}
          >
            hello@human-in-the-loop-solutions.org
          </a>
        </div>

        <div style={{
          marginTop: 28, padding: '32px 36px',
          background: '#fafafa', borderLeft: `3px solid ${BRAND.cyan}`,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, fontWeight: 600,
              letterSpacing: '0.28em', color: BRAND.cyan, textTransform: 'uppercase',
              marginBottom: 12,
            }}>CONNECT</div>
            <a
              href="https://www.linkedin.com/company/human-in-the-loop-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: FONT.sans, fontSize: 14, fontWeight: 600,
                letterSpacing: '0.18em', color: BRAND.slate, textTransform: 'uppercase',
                textDecoration: 'none', borderBottom: `1.5px solid ${BRAND.cyan}`,
                display: 'inline-block', transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              LinkedIn →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// 4U Standard modal — magnifying glass effect for the badge.
// ───────────────────────────────────────────────────────────────
function FourUModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, boxSizing: 'border-box',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff', padding: '60px', boxSizing: 'border-box',
          borderRadius: 4, boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
          maxWidth: 900, maxHeight: '85vh', overflow: 'auto',
        }}
      >
        <img
          src="/4u-standard.png"
          alt="4U Standard: Unequivocally Correct, Uniform, Useful, Understandable"
          style={{ width: '100%', display: 'block', maxWidth: 600, margin: '0 auto' }}
        />
        <div style={{
          marginTop: 28, fontFamily: FONT.serif, fontSize: 24, fontWeight: 500,
          color: BRAND.slate, textAlign: 'center', lineHeight: 1.3, letterSpacing: '-0.01em',
        }}>
          Unequivocally Correct · Uniform · Useful · Understandable
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Infographic modal overlay.
// Closes on Esc, backdrop click, or the close button.
// ───────────────────────────────────────────────────────────────
function InfographicModal({ caseId, onClose }) {
  const item = INFOGRAPHICS.find((g) => g.id === caseId);

  useEffect(() => {
    if (!item) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(16,23,25,.88)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 40,
      }}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative', maxWidth: 1100, width: '100%',
          maxHeight: 'calc(100vh - 80px)', overflow: 'auto',
          background: '#ffffff', boxShadow: '0 20px 60px rgba(0,0,0,.5)',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 24px', borderBottom: '1px solid rgba(38,50,56,.1)',
          background: '#ffffff', position: 'sticky', top: 0, zIndex: 2,
        }}>
          <div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 10.5, fontWeight: 600,
              letterSpacing: '0.24em', color: BRAND.cyan, textTransform: 'uppercase',
              marginBottom: 4,
            }}>{item.label}</div>
            <div style={{
              fontFamily: FONT.serif, fontSize: 22, fontWeight: 500,
              color: BRAND.slate, letterSpacing: '-0.01em',
            }}>{item.title}</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              fontFamily: FONT.sans, fontSize: 13, fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: BRAND.slate, background: 'none',
              border: '1px solid rgba(38,50,56,.2)', padding: '8px 14px',
              cursor: 'pointer',
            }}
          >
            Close ✕
          </button>
        </div>
        <img
          src={item.src}
          alt={item.title}
          style={{ width: '100%', display: 'block', height: 'auto' }}
        />
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Full Homepage — tab-aware composition.
// ───────────────────────────────────────────────────────────────
export function FullHomepage() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [show4UModal, setShow4UModal] = useState(false);

  const handleTabChange = (next) => {
    setActiveTab(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar activeTab={activeTab} onTabChange={handleTabChange}/>

      <main style={{ flex: 1 }}>
        {activeTab === 'Home' && <Hero onTabChange={handleTabChange}/>}
        {activeTab === 'Services' && <Services onTabChange={handleTabChange}/>}
        {activeTab === 'Case Studies' && (
          <CaseStudiesView onExploreCase={(id) => setSelectedCase(id)}/>
        )}
        {activeTab === 'Practice' && <PracticeView on4UClick={() => setShow4UModal(true)}/>}
        {activeTab === 'Contact' && <ContactView/>}
      </main>

      <Footer onTabChange={handleTabChange}/>

      {selectedCase && (
        <InfographicModal caseId={selectedCase} onClose={() => setSelectedCase(null)}/>
      )}

      {show4UModal && (
        <FourUModal onClose={() => setShow4UModal(false)}/>
      )}
    </div>
  );
}
