"use client";

import { MapPin, Plus, X, Star, Map, List, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CreateTripForm() {
    const [locations, setLocations] = useState([
        { id: 1, label: "Enter a load Location", color: "red" }
    ]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const addLocation = () => {
        setLocations([
            ...locations,
            { id: locations.length + 1, label: "Enter an unload Location", color: "green" }
        ]);
    };

    const removeLocation = (index: number) => {
        setLocations(locations.filter((_, i) => i !== index));
        if (focusedIndex === index) {
            setFocusedIndex(null);
        }
    };

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
                    {locations.map((location, index) => (
                        <div key={location.id} className="relative">
                            <div className="relative flex items-center">
                                <div className="absolute left-3 top-3">
                                    <div className={`w-6 h-6 rounded-full border-2 border-${location.color}-600`} />
                                </div>
                                <Input
                                    className="pl-12 pr-12 h-12 w-full"
                                    placeholder={location.label}
                                    onFocus={() => setFocusedIndex(index)}
                                    onBlur={() => setTimeout(() => setFocusedIndex(null), 200)} // Delay hiding
                                />
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute right-2 top-2 text-red-500 hover:text-red-700"
                                    onClick={() => removeLocation(index)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Show buttons only when input is focused */}
                            {focusedIndex === index && (
                                <div className="flex gap-2 mt-2 bg-white p-2 shadow rounded-lg">
                                    <Button variant="outline" className="flex items-center gap-1">
                                        <Star className="h-4 w-4" />
                                        অ্যাড্রেসবুক
                                    </Button>
                                    <Button variant="outline" className="flex items-center gap-1">
                                        <Map className="h-4 w-4" />
                                        ম্যাপ
                                    </Button>
                                    <Button variant="outline" className="flex items-center gap-1">
                                        <List className="h-4 w-4" />
                                        বিভাগ
                                    </Button>
                                    <Button variant="outline" className="flex items-center gap-1">
                                        <Landmark className="h-4 w-4" />
                                        বন্দর
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    className="text-red-600 pl-0 hover:bg-red-50"
                    onClick={addLocation}
                >
                    <Plus className="h-5 w-5 mr-2" />
                    Add Stop
                </Button>
            </div>
        </div>
    );
}
