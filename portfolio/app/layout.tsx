import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Arham | Full-Stack MERN Developer & AI/ML Engineer',
  description: 'Building production-grade systems that solve real problems. Currently working on ShopFlow (POS for Bangladesh retail) and Bangla Resume Parser (AI).',
  keywords: ['Developer', 'MERN', 'AI/ML', 'Full-Stack', 'Bangladesh'],
  openGraph: {
    title: 'Arham Portfolio',
    description: 'Full-Stack MERN Developer & AI/ML Engineer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arham Portfolio',
    description: 'Full-Stack Developer | AI/ML Engineer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-primary text-text-light`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}