import Image from "next/image";
import { Check } from "lucide-react";
import poster from '@/assests/banner/poster.webp';

export default function MobileAppPromo() {
    return (
        <section className="container px-4 py-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-[#1A1A1A]">
                        Get The Most of Truck Koi
                        <br />
                        With Our Mobile App
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Download the Truck Koi mobile app for one-touch access to your trip experience. You will get access to 
                        special features and exclusive offers.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Multiple location selection option",
                            "Fixed rate pickup rental within Dhaka city",
                            "Truck hiring for the whole day",
                            "Round-trip option",
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <Image
                        src={poster}
                        alt="Truck Koi Mobile App"
                        width={400}
                        height={400}
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
