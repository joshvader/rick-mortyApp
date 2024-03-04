import logo from "../../../public/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="grid h-screen  relative">
        <Image
          src={logo}
          alt=""
          width={600}
          height={400}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
        />
        <div className="relative bg-gray-600 row-start-1 col-start-1 row-end-2 col-end-2 overflow-hidden">
          <Link href="/characters">
             <div className="absolute w-full h-full bg-[url('/assets/characters.jpg')] bg-cover  grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s]" ></div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[36px] font-bold">
              Personajes
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
