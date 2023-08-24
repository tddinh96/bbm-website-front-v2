import { Urbanist, Nunito } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Big Break Marina',
  description: 'Nature inside City Center.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
