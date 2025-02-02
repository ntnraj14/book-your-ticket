import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from './_lib/store/store-provider';

import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <PrimeReactProvider>
          <head>
            <link id="theme-link" rel="stylesheet" href="./themes/lara-light-blue/theme.css" />
          </head>
          <body className={inter.className}>
            {children}
          </body>
        </PrimeReactProvider>
      </html>
    </Providers>
  );
}
