"use client"

import { useState } from "react"
import { Clock, Plus, Settings, Ticket, Smartphone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const menuItemClass = (path: string) =>
    `w-full justify-start gap-2 flex items-center p-2 rounded-md ${isActive(path) ? "bg-red-50 text-red-600" : ""}`

  return (
    <div className={`${sidebarOpen ? "w-64" : "w-20"} transition-all duration-300 border-r h-screen`}>
      <div className="flex flex-col h-full">
        {/* Sidebar toggle button */}
        <Button
          variant="ghost"
          className="lg:hidden absolute top-4 left-4"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? "Close" : "Open"}
        </Button>

        <div className="flex-1 py-2">
          <nav className="space-y-1 px-2">
          <Link href='/dashboard' className="text-lg ml-4 font-medium bg-pink-100 text-pink-600 px-2 py-0.5 rounded">
            Dashboard
          </Link>
            <Link href="/dashboard/create-trip" className={menuItemClass("/dashboard/create-trip")}>
              <Plus className="h-5 w-5" />
              {sidebarOpen && "Create Trip"}
            </Link>

            <Link href="/dashboard/mytrip" className={menuItemClass("/dashboard/mytrip")}>
              <Clock className="h-5 w-5" />
              {sidebarOpen && "My Trips"}
            </Link>

            <Link href="/dashboard/kamkoreni" className={menuItemClass("/dashboard/kamkoreni")}>
              <Ticket className="h-5 w-5" />
              {sidebarOpen && "Promo Code"}
            </Link>

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Link
                  href="/dashboard/settings"
                  className={`${menuItemClass("/dashboard/settings")} ${sidebarOpen ? "justify-between" : "justify-center"}`}
                >
                  <div className="flex items-center gap-x-2">
                    <Settings className="h-5 w-5" />
                    {sidebarOpen && <span className="text-left flex-1">Settings</span>}
                  </div>
                  {sidebarOpen && <ChevronDown className="h-4 w-4" />}
                </Link>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-2 space-y-2 flex flex-col">
                <Link
                  href="/dashboard/settings/generalsetting"
                  className={`w-full text-sm p-2 rounded-md ${isActive("/dashboard/settings/generalsetting") ? "bg-red-50 text-red-600" : ""}`}
                >
                  General Settings
                </Link>
                <Link
                  href="/dashboard/settings/addressbook"
                  className={`w-full text-sm p-2 rounded-md ${isActive("/dashboard/settings/addressbook") ? "bg-red-50 text-red-600" : ""}`}
                >
                  Address Book
                </Link>
                <Link
                  href="/dashboard/settings/managedriver"
                  className={`w-full text-sm p-2 rounded-md ${isActive("/dashboard/settings/managedriver") ? "bg-red-50 text-red-600" : ""}`}
                >
                  Manage Driver
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>

        <div className="p-2 border-t">
          <div className="space-y-1">
            <div>
              <h3 className="font-medium">{sidebarOpen && "Get the App"}</h3>
              <p className="text-sm text-muted-foreground">
                {sidebarOpen && "Install the Truck Lagbe app for a better experience."}
              </p>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Smartphone className="h-5 w-5" />
              {sidebarOpen && "Install on Phone"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

