"use client";
import { useState } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { lightTheme, darkTheme } from './theme/theme';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Nav from './components/Nav';
import { NavigationContextProvider } from './context';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(true);
  const switchTheme: any = () => {
    setIsDark(!isDark);
  };
  return (
    <html lang="en" className={roboto.className}>
        <title> Danny Trejo </title>
        <meta name="description" content="Danny Trejos developer portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dannys-dev-portfolio.vercel.app/" />
        <meta property="og:title" content="Danny Trejo" />
        <meta property="og:description" content="Dannys development portfolio showcasing various applications built with React, 
                                                 TypeScript, Next.js and Material UI" />
       <meta property="og:image" content="https://photos.google.com/share/AF1QipMxIvsiBp2LRcYHkdoOC2W00taf43M5P0dU8RMxgNt3ZojEtwmi9jSQGnq5GiAWbg/photo/AF1QipPrApTNOO6HMuE4iPg70XmY9f5bLGFxf6_d8gqH?key=MXd5WUphMGw3LTRqejVkVU84RmpnNVQ1VTctVmN3" />

       <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dannys-dev-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Danny Trejo" />
        <meta property="twitter:description" content="Dannys development portfolio showcasing various applications built with React, 
                                                 TypeScript, Next.js and Material UI" />
       <meta property="twitter:image" content="https://photos.google.com/share/AF1QipMxIvsiBp2LRcYHkdoOC2W00taf43M5P0dU8RMxgNt3ZojEtwmi9jSQGnq5GiAWbg/photo/AF1QipPrApTNOO6HMuE4iPg70XmY9f5bLGFxf6_d8gqH?key=MXd5WUphMGw3LTRqejVkVU84RmpnNVQ1VTctVmN3" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.ico" sizes='16x16'/>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}> 
      <CssBaseline />
      <body>
        <NavigationContextProvider>
          <Header switchTheme={switchTheme}/>
          <Nav />
          {children}
        </NavigationContextProvider>
      </body>
      </ThemeProvider>
    </html>
  )
}
