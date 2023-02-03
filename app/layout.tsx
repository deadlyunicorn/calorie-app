import './globals.css'

import { Maven_Pro } from '@next/font/google'
const maven = Maven_Pro({
  subsets:['latin'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={maven.className}>
        {children}
      </body>
    </html>
  )
}
