import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Putri Alifia Z.',
  description: 'Website ini berisi portofolio Putri Alifia Zahra pada tanggal 12 Maret 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
