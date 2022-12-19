import { Inter } from '@next/font/google';

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>{children}</body>
    </html>
  )
}
