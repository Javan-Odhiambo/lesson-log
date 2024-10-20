import {createTheme, MantineProvider} from '@mantine/core';
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import React from "react";
import {Toaster} from 'sonner'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const theme = createTheme({
  /** Your theme override here */
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <MantineProvider theme={theme}>
      <Toaster richColors closeButton visibleToasts={5}/>
      {children}
    </MantineProvider>
    </body>
    </html>
  );
}
