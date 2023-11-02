import Navbar from '../components/Navbar'
import './globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeList',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${gabarito.className} bg-color-dark `} >
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
