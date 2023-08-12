import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google';
import Layout from './components/Layout';
 
export const metadata: Metadata = {
  title: 'Danny Trejo',
  description: 'Danny Trejos developer portfolio',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://dannys-dev-portfolio.vercel.app'),
  openGraph: {
    title: 'Danny Trejo',
    description: 'Danny Trejos developer portfolio',
    url: 'https://dannys-dev-portfolio.vercel.app',
    siteName: 'Danny Trejo Developer Portfolio',
    images: [
      {
        url: './thumbnail.png',
        width: 800,
        height: 600,
      },
      {
        url: './thumbnail.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
 
const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
     <Layout> {children} </Layout>
    </html>
  )
}
