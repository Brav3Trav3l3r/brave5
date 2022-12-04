import '../styles/globals.css'
import Drawer from './Drawer'
import Footer from './Footer'
import Navbar from './Navbar'

// import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   weight: '400',
  
// });

export default function RootLayout({ children }) {
  return (
    <html className=''>
      <head>
      </head>
      <body className=' bg-base-100 text-base-content '>
        <div className="nav fixed z-50 select-none">
          <Navbar />
        </div>
        <div className="main mt-16 lg:ml-80 select-none space-y-12 " >
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
