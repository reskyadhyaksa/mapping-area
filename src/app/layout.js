import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PEMETAAN WILAYAH',
  description: 'Website Pemetaan Wilayah Cipamokolan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-end gap-20 bg-black text-white h-[7vh] items-center px-10 drop-shadow-xl">
          <div><a className='flex font-semibold' href='/'>CIPAMOKOLAN MAP</a></div>
          <div className='grow'></div>
          <a href='/'>Home</a>
          <a href='/info'>Information</a>
          <a href="/login">Login</a>
        </nav>

        {children}
      </body>
    </html>
  )
}
