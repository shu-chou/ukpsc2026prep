import './globals.css';

export const metadata = {
  title: 'UKPSC 2026 Study Hub',
  description: 'Personal UKPSC Upper PCS 2026 preparation notes, revision and PYQs.',
  icons: { icon: '/icons/icon-192.png', apple: '/icons/apple-touch-icon.png' },
  appleWebApp: { capable: true, title: 'UKPSC 2026', statusBarStyle: 'default' }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1f4d3a'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
