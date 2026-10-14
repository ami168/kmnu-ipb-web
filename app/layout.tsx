import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#075844',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kmnu.ipb.ac.id'),
  title: {
    default: 'KMNU IPB — Keluarga Mahasiswa Nahdlatul Ulama IPB University',
    template: '%s | KMNU IPB University',
  },
  description:
    'Wadah kaderisasi, keilmuan, keislaman, dan khidmah Ahlussunnah wal Jama\'ah An-Nahdliyyah di lingkungan kampus IPB University, Bogor.',
  keywords: [
    'KMNU IPB',
    'Nahdlatul Ulama',
    'IPB University',
    'Mahasiswa NU',
    'Aswaja',
    'Bogor',
    'Kaderisasi',
    'Islam Moderat',
    'Santri Mahasiswa',
  ],
  authors: [{ name: 'KMNU IPB University' }],
  creator: 'KMNU IPB',
  publisher: 'KMNU IPB University',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kmnu.ipb.ac.id',
    siteName: 'KMNU IPB University',
    title: 'KMNU IPB — Merawat Tradisi, Mengembangkan Ilmu',
    description:
      'Wadah bertemunya tradisi keilmuan pesantren, kehidupan akademik, dan khidmah mahasiswa Nahdlatul Ulama di IPB University.',
    images: [
      {
        url: '/assets/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Logo Resmi KMNU IPB University',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'KMNU IPB — Merawat Tradisi, Mengembangkan Ilmu',
    description:
      'Ruang bertemunya tradisi pesantren dan kehidupan akademik di IPB University.',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <a href="#main-content" className="skipLink">
          Loncat ke konten utama
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
