import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/Components/Navbar/Navbar'
import { AuthProvider } from '@/utils/providerUtils/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vastram',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
