"use client"

import { MapPin, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CreateTripForm() {
    return (
        <div className="p-8 w-[480px]">
            <h1 className="text-2xl font-semibold mb-8">Create Your Trip</h1>

            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">1</div>
                    <span className="font-medium">Locations</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm">
                        2
                    </div>
                    <span className="text-gray-400">Select Truck</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm">
                        3
                    </div>
                    <span className="text-gray-400">Time</span>
                </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
                <h2 className="text-lg font-semibold">Location Details</h2>

                <div className="space-y-4">
                    <div className="relative">
                        <div className="absolute left-3 top-3">
                            <div className="w-6 h-6 rounded-full border-2 border-red-600" />
                        </div>
                        <Input className="pl-12 h-12" placeholder="Enter a load Location" />
                        <Button size="icon" variant="ghost" className="absolute right-2 top-2">
                            <MapPin className="h-5 w-5 text-gray-400" />
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="absolute left-3 top-3">
                            <div className="w-6 h-6 rounded-full border-2 border-green-600" />
                        </div>
                        <Input className="pl-12 h-12" placeholder="Enter an unload Location" />
                        <Button size="icon" variant="ghost" className="absolute right-2 top-2">
                            <MapPin className="h-5 w-5 text-gray-400" />
                        </Button>
                    </div>
                </div>

                <Button variant="ghost" className="text-red-600 pl-0 hover:bg-red-50">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Stop
                </Button>
            </div>
        </div>
    )
}

