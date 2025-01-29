import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "@/assests/footer/truck-lagbe-dark.svg"


const Header = () => {
  return (
    <header className="bg-[#8B0000] text-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Truck Lagbe"
            width={200}
            height={80}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ট্রাক কই</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-gray-200">
            ব্যবসা
          </Link>
          <Link href="#" className="hover:text-gray-200">
            শিপিং
          </Link>
          <Link href="#" className="hover:text-gray-200">
            ট্রাক ওনার
          </Link>
          <Link href="#" className="hover:text-gray-200">
            ব্লগ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="bg-white text-[#8B0000] hover:bg-gray-100">
            <Image src="/placeholder.svg?height=20&width=30" alt="Bangladesh" width={30} height={20} className="mr-2" />
            বাংলা
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white">লগ ইন</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header

