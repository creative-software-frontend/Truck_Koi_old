import Image from "next/image"
import { Rocket, ThumbsUp, Shield, User } from "lucide-react"
import enposter from "@/assests/banner/en-poster.webp"

const features = [
    {
        icon: <Rocket className="w-6 h-6 text-red-500" />,
        title: "Fast Booking",
        description: "Book your trip in just a few seconds",
    },
    {
        icon: <ThumbsUp className="w-6 h-6 text-red-500" />,
        title: "Best Rate",
        description: "Get the best fare on the market",
    },
    {
        icon: <Shield className="w-6 h-6 text-red-500" />,
        title: "Secured Delivery",
        description: "Ensure the safest delivery of your products",
    },
    {
        icon: <User className="w-6 h-6 text-red-500" />,
        title: "Verified Drivers",
        description: "Thousands of verified drivers are available",
    },
]

export default function WhyTruckLagbe() {
    return (
        <section className="container mx-auto px-4 py-16 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Why Truck Lagbe?</h2>
                <p className="text-gray-600 text-lg">The easiest way to hire your trucks</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Banner */}
                <div className="relative w-full h-[470px] rounded-2xl overflow-hidden bg-gradient-to-b from-red-600 to-red-700">

                    <Image
                        // src={enposter}
                        alt="Truck Lagbe Service"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* Right Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

