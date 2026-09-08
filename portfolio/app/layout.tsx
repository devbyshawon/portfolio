import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { siteMetadata } from './lib/seo';
import { JsonLdPerson, JsonLdWebsite } from './components/common/JsonLd';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

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
    <html lang='en' suppressHydrationWarning>
      <head>
        <JsonLdPerson />
        <JsonLdWebsite />
      </head>

      <body
        className={`${inter.variable} ${spaceGrotesk.variable} 
        antialiased bg-primary text-text-light`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Navbar />

          <main className='min-h-screen'>
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
};

export { metadata };
export default RootLayout;