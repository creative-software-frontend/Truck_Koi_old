import Banner from "@/components/Banner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner />
      {/* <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard</h1>
        <p className="mb-6">Please log in to access your personalized dashboard.</p>
        <Link href="/login">
          <Button size="lg">Log In</Button>
        </Link>
      </div> */}
      <Footer/>
    </div>
  )
}

