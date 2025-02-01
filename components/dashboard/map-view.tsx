"use client"

import { Minus, Plus, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapView() {
    return (
        <div className="flex-1 relative bg-gray-100">
            {/* Map placeholder - In production, replace with actual Google Maps component */}
            <div className="absolute inset-0">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2cuImfMLndzi7iGftsHhBtBlmqWAee.png"
                    alt="Map"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Map Controls */}
            <div className="absolute right-4 top-4 flex flex-col gap-2">
                <Button size="icon" variant="secondary" className="bg-white shadow-md hover:bg-gray-50">
                    <Maximize2 className="h-4 w-4" />
                </Button>
            </div>

            <div className="absolute right-4 bottom-8 flex flex-col gap-2">
                <Button size="icon" variant="secondary" className="bg-white shadow-md hover:bg-gray-50">
                    <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-white shadow-md hover:bg-gray-50">
                    <Minus className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

