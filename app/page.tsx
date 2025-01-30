import Banner from "@/components/home/Banner"
import HowItWorks from "@/components/home/How-it-works"
import KeyClients from "@/components/home/KeyClients"
import MobileApp from "@/components/home/MobileAppPromo"
import Testimonials from "@/components/home/Testimonials"
import WhyTruckLagbe from "@/components/home/why-truck-lagbe"


export default function Home() {
  return (
    <div>

      <Banner />

      <WhyTruckLagbe />
      <HowItWorks />
      <Testimonials/>
      <KeyClients/>
      <MobileApp />

    </div>
  )
}

