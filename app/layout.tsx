import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUMN | Premium Fashion',
  description: 'Designed to illuminate individuality.',
  icons: {
    // This tells the browser to use your SVG logo in the tab
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="selection:bg-white selection:text-black">
      <body className="bg-[#050505] text-white min-h-screen flex flex-col font-sans">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}