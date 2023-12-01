import Image from 'next/image'
import logo from '@/assets/logo.svg'
import ListMovie from './sections/page'

export default function Home() {
  return (
    <>
      <main className="container mx-auto  relative">
       
        <ListMovie />
      </main>
    </>
  )
}
