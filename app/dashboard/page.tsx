import { MainNav } from "@/components/dashboard/main-nav";
import { PromoCode } from "@/components/dashboard/promo-code";
import { SideNav } from "@/components/dashboard/side-nav";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <div className="flex">
        <SideNav />
        <PromoCode />
      </div>
    </div>
  )
}

