import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='overflow-hidden h-[100vh]'>
      <Main/>
      <Navbar/>
    </main>
  )
}
