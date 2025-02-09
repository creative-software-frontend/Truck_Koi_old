import {
  Clock,
  Plus,
  Settings,
  Ticket,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

export function SideNav() {
  return (
    <div className="border-r w-64 h-screen ">
      <div className="flex flex-col h-full">
        <div className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            <Link
              href="/dashboard/create-trip"
              className="w-full justify-start gap-2 flex item-center "
            >
              <Plus className="h-5 w-5" />
              Create Trip
            </Link>

            <Link
              href="/dashboard/mytrip"
              className="w-full justify-start gap-2 flex "
            >
              <Clock className="h-5 w-5" />
              My Trips
            </Link>

            <Link
              href="/dashboard/kamkoreni"
              className="w-full justify-start gap-2 bg-red-50 text-red-600 flex item-center"
            >
              <Ticket className="h-5 w-5" />
              Promo Code
            </Link>

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Link
                  href="/dashboard"
                  className="w-full flex items-center gap-x-2"
                >
                  <Settings className="h-5 w-5" />
                  <span className="text-left flex-1">Settings</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-2 space-y-2 flex flex-col">
                <Link
                  href="/dashboard/settings/generalsetting"
                  className="w-full text-sm"
                >
                  General Settings
                </Link>
                <Link
                  href="/dashboard/settings/addressbook"
                  className="w-full text-sm"
                >
                  Address Book
                </Link>
                <Link
                  href="/dashboard/settings/managedriver"
                  className="w-full text-sm"
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
              <h3 className="font-medium">Get the App</h3>
              <p className="text-sm text-muted-foreground">
                Install the Truck Lagbe app for better experience.
              </p>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Smartphone className="h-5 w-5" />
              Install on Phone
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
