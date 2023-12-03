import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Faris Helmi P.',
  description: 'Website ini berisi portofolio farishelmipermana pada tanggal 2 Desember 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
