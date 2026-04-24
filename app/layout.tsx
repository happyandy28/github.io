import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { AdminProvider } from '@/lib/admin-context'
import { ImageStoreProvider } from '@/lib/image-store'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: 'GP Metalware | Custom POP Display Manufacturer | 東莞展示架工廠',
    template: '%s | GP Metalware'
  },
  description: 'Professional POP display factory in Dongguan, China. 300 workers specializing in custom metal, wood, and acrylic retail display stands. OEM/ODM manufacturing for global brands. 專業定制POP展示架生產廠家，五金、木、亞克力展示架。',
  keywords: [
    'China POP display manufacturer',
    'custom retail display factory',
    'metal wood acrylic POP stand supplier',
    'Dongguan display factory',
    'OEM POP display manufacturer',
    '東莞展示架工廠',
    '定制POP展示架',
    '五金亞克力木展示架',
    '零售陳列架生產廠家'
  ],
  authors: [{ name: 'GP Metalware' }],
  creator: 'GP Metalware',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_TW',
    url: 'https://ecoddl-display.com',
    siteName: 'GP Metalware',
    title: 'GP Metalware | Custom POP Display Manufacturer',
    description: 'Professional POP display factory in Dongguan, China. 300 workers specializing in custom metal, wood, and acrylic retail display stands.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AdminProvider>
          <ImageStoreProvider>
            <LanguageProvider>
              <ClientLayout>{children}</ClientLayout>
            </LanguageProvider>
          </ImageStoreProvider>
        </AdminProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
