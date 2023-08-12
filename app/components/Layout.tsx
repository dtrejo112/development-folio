"use client";
import { useState } from 'react';
import '../globals.css'
import { lightTheme, darkTheme } from '../theme/theme';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Nav from './Nav';
import { NavigationContextProvider } from '../context'
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export default function Layout({children} :any) {
  const [isDark, setIsDark] = useState(true);
  const switchTheme: any = () => {
    setIsDark(!isDark);
  };
  return (
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
  )
}
