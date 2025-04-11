// src/app/page.jsx
import Link from 'next/link';
import Header from '@/app/components/header'
import Section1 from '@/app/components/section1'
import Section2 from '@/app/components/section2'
import Section3 from '@/app/components/section3'
import Section4 from '@/app/components/section4'
import Section5 from '@/app/components/section5'
import Section6 from '@/app/components/section6'
import Section7 from '@/app/components/section7'
import Gerenciador from '@/app/gerenciador/page'
// ...

export default function Home() {
  return (
    <>
    <Gerenciador />
      {/* <Header /> */}
      {/* <div className="p-4 mt-15">
        <Link href="/gerenciador">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Ir para o Gerenciador
          </button>
        </Link>
      </div> */}
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 /> */}
    </>
  )
}
