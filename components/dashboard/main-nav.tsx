import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MainNav() {
    return (
        <header className="border-b">
            <div className="flex h-16 items-center px-4 gap-4">
                <div className="flex items-center gap-2 flex-1">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yqQ2ealeA3iitrWBBprWPIJtSTtWNq.png"
                        alt="Truck Lagbe"
                        className="h-8"
                    />
                    <span className="text-sm font-medium bg-pink-100 text-pink-600 px-2 py-0.5 rounded">BETA</span>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2">
                                <Avatar className="h-8 w-8 bg-neutral-600">
                                    <AvatarFallback>N</AvatarFallback>
                                </Avatar>
                                <span>Nurany Jannat</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <div className="flex flex-col items-center gap-2 p-4">
                                <Avatar className="h-20 w-20 bg-neutral-600">
                                    <AvatarFallback>N</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <p className="font-medium">Nurany Jannat</p>
                                    <p className="text-sm text-muted-foreground">01747335232</p>
                                </div>
                            </div>
                            <DropdownMenuItem>
                                <span>Edit Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

