import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EarningSection() {
    return (
        <section className="py-16 bg-white max-w-8xl mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left Column */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">আজই উপার্জন করুন</h2>
                        <p className="text-gray-600 mb-6">ট্রাক লাগবে ওনার অ্যাপটি ইনস্টল করুন এবং ট্রিপ পেয়ে উপার্জন করুন</p>
                        <a href="#" className="inline-block" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/placeholder.svg?height=60&width=200"
                                alt="Get it on Google Play"
                                width={200}
                                height={60}
                                className="h-[60px] w-auto"
                            />
                        </a>
                    </div>

                    {/* Middle Column */}
                    <div className="relative h-[400px] w-full">
                        <Image
                            src=""
                            alt="Truck Driver with Phone"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">ব্যবসার জন্য ট্রাক লাগবে?</h2>
                        <p className="text-gray-600 mb-6">আপনার ব্যবসার জন্য নিয়মিত ট্রাক প্রয়োজন? আমরা দিচ্ছি সেরা অফার</p>
                        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                            আরো জানুন
                        </Button>
                        <div className="relative h-[200px] w-full mt-6">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="Business Person"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

