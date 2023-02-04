import './globals.css'

import { Maven_Pro } from '@next/font/google'
import { Figtree } from '@next/font/google'

const figtree = Figtree({
  subsets:['latin']
})
const maven = Maven_Pro({
  subsets:['latin'],
  weight:['400'],
})
const mavenBold = Maven_Pro({
  subsets:['latin'],
  weight:['500'],
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
        <nav className='fixed w-screen flex bg-gradient-to-b from-indigo-600 to-purple-900 rounded-sm p-1 gap-x-2 overflow-hidden h-9 items-center text-pink-100 font-semibold z-20' >
          <div>
            Hello world!
          </div>
          <div>
            What a nice day!
          </div>
        </nav>
        <div className='h-screen overflow-auto bg-gradient-to-b from-purple-800 to-blue-900 '>
        <main className=" flex flex-col items-center px-2 py-12">
      
          <div className="bg-gradient-to-l from-amber-500 via-red-600 to-amber-500 p-1 rounded-md max-h-10 overflow-hidden ">
            <div className={figtree.className}>
              <p className="text-white drop-shadow-[-1px_1.3px_1px_rgba(0,0,255,1)] px-1 font-semibold text-lg   ">New App In Progress...</p> 
            </div>
          </div>
          <div className='max-w-md lg:max-w-lg mt-5 px-5' >
            <div className='bg-white w-full flex justify-center rounded-lg my-2 p-1 bg-gradient-to-b from-purple-600 to-purple-700 text-white'>
              <p>Down below is the relevant information for each page</p>
            </div>

            <div>
              {children}
            </div>
          </div>
          
        </main>
        </div>
 
      </body>
    </html>
  )
}
