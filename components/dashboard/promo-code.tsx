"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { CreatePromoModal } from "./create-promo-modal"

export function PromoCode() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePromoSubmit = (promoCode: string) => {
        console.log("Promo code submitted:", promoCode)
        // Handle the promo code submission here
      }
    return (
        <div className="flex-1 p-8 md:w-[1200px] ">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold">Promo Code</h1>
            </div>

            <div className="flex flex-col items-center justify-center max-w-md mx-auto py-12">
                <div className="w-64 h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                    {/* Placeholder for illustration */}
                    <div className="w-32 h-32 bg-gray-200 rounded-full" />
                </div>

                <h2 className="text-xl font-semibold mb-2">No Promo Code!</h2>
                <p className="text-muted-foreground text-center mb-6">Add new promo code to save money</p>

                <Button onClick={() => setIsModalOpen(true)} className="bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Plus className="h-5 w-5" />
                    Add Promo Code
                </Button>
                <CreatePromoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handlePromoSubmit} />
            </div>
        </div>
    )
}

