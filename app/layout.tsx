import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: '萬隆服事表',
  description: '萬隆服事表',
  manifest: '/manifest.json',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={cn('min-h-svh bg-background font-sans antialiased', inter.variable)}>
        {children}
      </body>
    </html>
  )
}
