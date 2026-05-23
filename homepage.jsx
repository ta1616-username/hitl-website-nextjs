'use client';

import { BRAND, FONT, PREMIUM_BG, Body, SerifH, Eyebrow, GeoMark } from './brand';
import { NavBar, Hero, Services, Footer } from './sections';
import { CaseCard01, CaseCard02, CaseCard03, CASE_W, CASE_H } from './case-studies';

// ───────────────────────────────────────────────────────────────
// Manifesto: "Instructive Geometry" philosophy
// ───────────────────────────────────────────────────────────────
function Manifesto() {
  return (
    <section id="research" style={{
      width: '100%', padding: '80px 40px', background: '#ffffff',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      <div style={{ maxWidth: 920, width: '100%' }}>
        <Eyebrow color={BRAND.cyan}>OUR PHILOSOPHY</Eyebrow>
        <SerifH size={48} color={BRAND.slate} weight={500} leading={1.15}>
          Instructive Geometry
        </SerifH>
        <Body size={16} color={BRAND.slate} weight={400} style={{ marginTop: 24, maxWidth: 720 }}>
          We believe that human judgment and AI capability are not competitors—they are complementary forces that amplify each other. Our practice is built on a simple but precise geometry: constraint clarifies intent. When humans define the rules, the principles, and the boundaries, AI systems learn to honour them. When AI systems learn to honour those boundaries with rigour, they become trustworthy partners in work that matters.
        </Body>
        <Body size={16} color={BRAND.slate} weight={400} style={{ marginTop: 16, maxWidth: 720 }}>
          Every annotation, every labelled example, every piece of feedback you provide teaches the system not just what to do, but <em style={{ fontStyle: 'italic' }}>how to think</em>. That is the instructive part. The geometry is the pattern—the repeatable, scalable structure that allows human wisdom to flow into AI capability at scale.
        </Body>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Case Studies Showcase: grid of three cards + subscription strap
// ───────────────────────────────────────────────────────────────
function CaseStudiesShowcase() {
  return (
    <section id="case-studies" style={{ width: '100%', padding: '80px 40px', background: PREMIUM_BG }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <Eyebrow color={BRAND.cyan}>EDGE CASES & RESEARCH</Eyebrow>
          <SerifH size={48} color="#ffffff" weight={500} leading={1.15}>
            Where Annotation Meets Insight
          </SerifH>
          <Body size={16} color="rgba(255,255,255,.78)" style={{ marginTop: 16, maxWidth: 680 }}>
            Three snapshots from our annotation research. Each shows a moment where the gap between a near-miss answer and a golden response reveals something about how AI learns to think.
          </Body>
        </div>

        {/* Case Cards Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(' + CASE_W + 'px, 1fr))',
          gap: 28, marginBottom: 60,
        }}>
          <CaseCard01/>
          <CaseCard02/>
          <CaseCard03/>
        </div>

        {/* Subscription Strap */}
        <div style={{
          background: '#ffffff', padding: '40px 36px',
          borderRadius: 8, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <div style={{
              fontFamily: FONT.sans, fontSize: 13, fontWeight: 600,
              letterSpacing: '0.2em', color: BRAND.slate, textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              STAY CONNECTED
            </div>
            <div style={{
              fontFamily: FONT.serif, fontSize: 24, fontWeight: 500,
              color: BRAND.slate, letterSpacing: '-0.01em',
            }}>
              Subscribe to the practice.
            </div>
          </div>
          <button style={{
            fontFamily: FONT.sans, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.22em', color: '#ffffff', textTransform: 'uppercase',
            background: BRAND.cyan, border: 'none', padding: '12px 24px',
            cursor: 'pointer', borderRadius: 4,
          }}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Full Homepage: composition of all sections
// ───────────────────────────────────────────────────────────────
export function FullHomepage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <NavBar/>
      <Hero/>
      <Services/>
      <Manifesto/>
      <CaseStudiesShowcase/>
      <Footer/>
    </div>
  );
}
