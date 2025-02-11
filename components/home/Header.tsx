"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Phone, Menu } from "lucide-react"
import Image from "next/image"
import logo from "@/assests/icon.png"
import { useState } from "react"
import bangla from "@/assests/bangla.jpg"
import english from "@/assests/english.jpg"

const Header = () => {
  const [language, setLanguage] = useState<"bangla" | "english">("bangla")
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isVerifyOpen, setIsVerifyOpen] = useState(false)
  const [otp, setOtp] = useState(["", "", "", ""])
  const [timer, setTimer] = useState(28)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "bangla" ? "english" : "bangla")
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoginOpen(false)
    setIsVerifyOpen(true)
  }

  const handleVerifyClose = () => {
    setIsVerifyOpen(false)
    setOtp(["", "", "", ""])
    setTimer(28)
  }

  return (
    <header className="bg-[#8B0000] text-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
        <div className="flex items-center gap-2 col-span-2 md:col-span-1">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo || "/placeholder.svg"} alt="Truck Lagbe" width={60} height={80} className="rounded-full" />
            <span className="md:text-xl sm:text-sm font-bold">ট্রাক কই</span>
          </Link>
        </div>

        <div className={`md:flex gap-6 ${isMenuOpen ? 'flex flex-col absolute bg-[#8B0000] w-full left-0 top-16 p-1  z-10' : 'hidden'}`}>
          <Link href="/business" className="hover:text-gray-200">ব্যবসা</Link>
          <Link href="#" className="hover:text-gray-200">শিপিং</Link>
          <Link href="#" className="hover:text-gray-200">ট্রাক ওনার</Link>
          <Link href="#" className="hover:text-gray-200">ব্লগ</Link>
        </div>

        <div className="flex items-center gap-4 justify-end col-span-1">
        <Button variant="outline" className="bg-white text-[#8B0000] hover:bg-gray-100" onClick={toggleLanguage}>
        <span className={`${language === "bangla" ? "font-bold" : ""}`}>বাংলা</span>
        <span className="mx-2 text-gray-300">|</span>
        <span className={`${language === "english" ? "font-bold" : ""}`}>English</span>
      </Button>
          <Button onClick={() => setIsLoginOpen(true)} className="bg-red-600 hover:bg-red-700 text-white">
            লগ ইন
          </Button>
        </div>
      </nav>

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="space-y-6">
            <h1 className="text-2xl font-medium">আপনার মোবাইল নাম্বার</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm text-gray-600">মোবাইল নাম্বার</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <Input type="tel" placeholder="আপনার মোবাইল নাম্বার" className="pl-10" />
                </div>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                এগিয়ে যান
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header