import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HYVE®',
  description: 'welcome to the hyve.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}