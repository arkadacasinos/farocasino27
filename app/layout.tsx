import type { Metadata, Viewport } from 'next'
import { Literata, Manrope } from 'next/font/google'
import './globals.css'
import './faro.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fr9k-sans',
  display: 'swap',
})

const literata = Literata({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600'],
  variable: '--font-fr9k-serif',
  display: 'swap',
})

const title = 'Faro Casino — официальный сайт, зеркало и вход, чтобы играть онлайн прямо сейчас'
const description =
  'Faro Casino официальный сайт и рабочее зеркало: как зайти, не потерять аккаунт и начать играть онлайн. Памятка для Фаро Казино — без громких обещаний, чужих ссылок и лишних кнопок на экране. Без мифа.'

export const metadata: Metadata = {
  metadataBase: new URL('https://farocasino27.vercel.app'),
  title,
  description,
  applicationName: 'Faro Casino',
  authors: [{ name: 'Faro Casino', url: 'https://farocasino27.vercel.app/' }],
  creator: 'Faro Casino',
  keywords: [
    'Faro Casino',
    'Faro Casino зеркало',
    'Faro Casino играть',
    'Faro Casino официальный',
    'Faro Casino официальный сайт',
    'Faro Казино',
    'Фаро Казино',
    'Фаро Казино зеркало',
    'Фаро Казино зеркало рабочее',
    'Фаро Казино играть',
    'Фаро Казино онлайн',
    'Фаро Казино официальный',
    'Фаро Казино официальный сайт',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://farocasino27.vercel.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://farocasino27.vercel.app/',
    siteName: 'Faro Casino',
    title,
    description,
    images: [
      {
        url: '/images/faro-box.jpg',
        width: 1200,
        height: 670,
        alt: 'Латунная коробка для фаро и закрытые карты на зелёном сукне',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/faro-box.jpg'],
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14382c',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${literata.variable} ${manrope.className} bg-background`}>
      <head>
        {/* Дополнительные пользовательские теги */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
