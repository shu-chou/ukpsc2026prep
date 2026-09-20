export default function manifest() {
  return {
    name: 'UKPSC 2026 Study Hub',
    short_name: 'UKPSC 2026',
    description: 'Personal UKPSC Upper PCS 2026 notes and mock tests.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f7f5',
    theme_color: '#1f4d3a',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };
}
