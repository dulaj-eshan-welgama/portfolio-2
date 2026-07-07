import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Dulaj Eshan Welgama | Software Engineer | React, Next.js Developer',
  description:
    'Dulaj Eshan Welgama is a Software Engineer specializing in React, Next.js and modern web development. Explore projects, experience, and portfolio.',
  keywords:
    'Dulaj Eshan Welgama, Software Engineer, React Developer, Next.js Developer, Full Stack Developer Sri Lanka',
  authors: [{ name: 'Dulaj Eshan Welgama' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
