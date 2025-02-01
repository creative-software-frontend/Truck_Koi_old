import { Clock, Plus, Settings, Ticket, Smartphone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function SideNav() {
    return (
        <div className="border-r w-64 h-screen">
            <div className="flex flex-col h-full">
                <div className="flex-1 py-2">
                    <nav className="space-y-1 px-2">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Plus className="h-5 w-5" />
                            Create Trip
                        </Button>

                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Clock className="h-5 w-5" />
                            My Trips
                        </Button>

                        <Button variant="ghost" className="w-full justify-start gap-2 bg-red-50 text-red-600">
                            <Ticket className="h-5 w-5" />
                            Promo Code
                        </Button>

                        <Collapsible>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" className="w-full justify-start gap-2">
                                    <Settings className="h-5 w-5" />
                                    <span className="flex-1 text-left">Settings</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 py-2 space-y-2">
                                <Button variant="ghost" className="w-full justify-start text-sm">
                                    General Settings
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-sm">
                                    Address Book
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-sm">
                                    Manage Driver
                                </Button>
                            </CollapsibleContent>
                        </Collapsible>
                    </nav>
                </div>

                <div className="p-4 border-t">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Get the App</h3>
                            <p className="text-sm text-muted-foreground">Install the Truck Lagbe app for better experience.</p>
                        </div>
                        <Button variant="outline" className="w-full gap-2">
                            <Smartphone className="h-5 w-5" />
                            Install on Phone
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

