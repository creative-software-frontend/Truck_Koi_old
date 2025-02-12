import Banner from "@/components/home/Banner"
import Footer from "@/components/home/Footer"
import Header from "@/components/home/Header"
import HowItWorks from "@/components/home/How-it-works"
import KeyClients from "@/components/home/KeyClients"
import MobileApp from "@/components/home/MobileAppPromo"
import Testimonials from "@/components/home/Testimonials"
import WhyTruckLagbe from "@/components/home/why-truck-lagbe"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("home")
  
  return (
    <div>
      <Header />
      <Banner />
      {/* <MobileLogin/> */}

      <WhyTruckLagbe />
      <HowItWorks />
      <Testimonials />
      <KeyClients />
      <MobileApp />
      <Footer />
    </div>
  )
}

