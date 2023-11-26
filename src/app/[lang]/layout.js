import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'MCH CV',
  description: 'Personal website and portfolio',
  icons: {
    icon: [
      '/icon.ico',
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
