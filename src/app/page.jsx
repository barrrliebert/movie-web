import Image from 'next/image'
import logo from '@/assets/logo.svg'
import ListMovie from './sections/ListMovie'

export default function Home() {
  return (
    <>
      <main className="container mx-auto mt-10 relative">
       
        <ListMovie />
      </main>
    </>
  )
}
