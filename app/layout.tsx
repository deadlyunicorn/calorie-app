import './globals.css'

import { Maven_Pro } from '@next/font/google'
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

        <nav className='absolute w-screen flex bg-blue-200 rounded-sm p-1 gap-x-2 overflow-hidden h-9 items-center'>
          <div>
            Hello world!
          </div>
          <div>
            What a nice day!
          </div>
        </nav>
        <div className='h-screen overflow-auto bg-gradient-to-b from-neutral-800 to-gray-900 '>
        <main className=" flex flex-col items-center px-2 py-12">
      
          <div className="bg-indigo-300 p-1 rounded-md max-h-10 overflow-hidden">
            <div className={mavenBold.className}>
              <p className="text-yellow-200 drop-shadow-lg  ">New App In Progress...</p> 
            </div>
          </div>
          <div className='max-w-md lg:max-w-lg mt-5 px-5' >
            <div className='bg-white w-full flex justify-center rounded-sm my-2 p-1'>
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
