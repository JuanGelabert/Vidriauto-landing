import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vidriauto - Vidrios para Autos | Reparación y Reemplazo',
  description: 'Vidriauto ofrece servicios profesionales de reparación y reemplazo de vidrios para autos. Calidad garantizada, atención rápida y precios competitivos. Contactanos por WhatsApp.',
  keywords: 'vidrios autos, parabrisas, reparación vidrios, reemplazo vidrios, vidriauto, auto glass, parabrisas reparación',
  authors: [{ name: 'Vidriauto' }],
  creator: 'Vidriauto',
  publisher: 'Vidriauto',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vidriauto.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vidriauto - Vidrios para Autos | Reparación y Reemplazo',
    description: 'Servicios profesionales de reparación y reemplazo de vidrios para autos. Calidad garantizada y atención rápida.',
    url: 'https://vidriauto.com.ar',
    siteName: 'Vidriauto',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidriauto - Vidrios para Autos',
    description: 'Servicios profesionales de reparación y reemplazo de vidrios para autos.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar código de verificación de Google Search Console si lo tienes
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vidriauto.com.ar" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

