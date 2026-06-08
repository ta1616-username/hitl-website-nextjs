import { ImageResponse } from 'next/og';

// Next.js convention: this file becomes /opengraph-image at build time
// and is automatically referenced by the metadata.openGraph.images array.
export const runtime = 'edge';
export const alt = 'Human-in-the-Loop Solutions — Where instruction becomes intelligence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #f2f0ec 0%, #cfc5b6 28%, #bcb8af 52%, #aaacad 76%, #99a0a5 100%)',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        {/* Top: small wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              border: '2px solid #263238',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,.4)',
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                background: '#00BCD4',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              lineHeight: 1,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#263238',
                textTransform: 'uppercase',
              }}
            >
              HUMAN-IN-THE-LOOP <span style={{ color: '#00BCD4' }}>SOLUTIONS</span>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.24em',
                color: 'rgba(38,50,56,.7)',
                textTransform: 'uppercase',
              }}
            >
              AI Annotation · Training Research
            </div>
          </div>
        </div>

        {/* Middle: title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 500,
              lineHeight: 1.05,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              textShadow: '0 1px 0 rgba(38,50,56,.12)',
            }}
          >
            Where instruction becomes{' '}
            <span style={{ fontStyle: 'italic', color: '#00BCD4' }}>intelligence</span>.
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: 'rgba(38,50,56,.78)',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            A research-led practice in the craft of Golden Responses: the carefully designed examples that teach modern language models to be correct, careful and humane under pressure.
          </div>
        </div>

        {/* Bottom: 4U strap */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            paddingTop: 24,
            borderTop: '1px solid rgba(38,50,56,.22)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: '#00BCD4',
            }}
          />
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.22em',
              color: '#00BCD4',
              textTransform: 'uppercase',
            }}
          >
            4U · CORRECT / UNIFORM / USEFUL / UNDERSTANDABLE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
