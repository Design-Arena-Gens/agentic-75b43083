import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Advanced Diploma in Islamic Counseling Techniques & Skills',
  description: 'Take your knowledge in Psychology to the next level with our Advanced Diploma in Islamic Counseling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
