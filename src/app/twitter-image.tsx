import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  const svgBase64 = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
  <defs>
    <radialGradient id="bhGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="20" cy="20" rx="19" ry="10" fill="url(#bhGlow)"/>
  <ellipse cx="20" cy="20" rx="18" ry="5.0" fill="none" stroke="#6366f1" stroke-width="0.6" opacity="0.40"/>
  <ellipse cx="20" cy="20" rx="15" ry="4.2" fill="none" stroke="#6366f1" stroke-width="0.8" opacity="0.55"/>
  <ellipse cx="20" cy="20" rx="12" ry="3.3" fill="none" stroke="#818cf8" stroke-width="1.0" opacity="0.70"/>
  <ellipse cx="20" cy="20" rx="9.8" ry="2.7" fill="none" stroke="#06b6d4" stroke-width="1.2" opacity="0.85"/>
  <circle cx="20" cy="20" r="7.8" fill="#000510" opacity="0.70"/>
  <circle cx="20" cy="20" r="6.0" fill="#000000"/>
  <ellipse cx="20" cy="20" rx="6.5" ry="1.8" fill="none" stroke="#e0f2fe" stroke-width="1.1" opacity="0.90"/>
</svg>`).toString('base64')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${svgBase64}`}
          width={240}
          height={240}
          alt=""
          style={{ display: 'block' }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 52,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            display: 'flex',
          }}
        >
          Bruno Dias
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: '#818cf8',
            display: 'flex',
          }}
        >
          Desenvolvedor Fullstack &amp; Mobile
        </div>
      </div>
    ),
    { ...size }
  )
}
