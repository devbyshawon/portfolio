import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

import { siteMetadata } from './lib/seo'
import { JsonLdPerson, JsonLdWebsite } from './components/common/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ['400', '500', '600', '700'],
});

const metadata: Metadata = siteMetadata;

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} 
        antialiased bg-primary text-text-light`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}

          <JsonLdPerson />
          <JsonLdWebsite />
        </ThemeProvider>
      </body>
    </html>
  )
};

export { metadata, RootLayout };