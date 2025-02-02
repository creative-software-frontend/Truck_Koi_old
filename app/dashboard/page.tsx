import CreateTripPage from "@/components/dashboard/create-trip/page";
import { PromoCode } from "@/components/dashboard/promo-code";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <MainNav /> */}
      <div className="flex">
        {/* <SideNav /> */}
        <CreateTripPage />
        <PromoCode />
      </div>
    </div>
  )
}

