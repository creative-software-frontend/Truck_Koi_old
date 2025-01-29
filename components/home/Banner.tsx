"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import img1 from '@/assests/banner/home_banner_1.webp'
import img2 from '@/assests/banner/home_banner_2.webp'
import img3 from '@/assests/banner/home_banner_3.webp'
import Image from "next/image";

// Updated paths for public folder
const bannerSlides = [
    {
        title: "সুরক্ষিত ডেলিভারি",
        subtitle: "আপনার ডেলিভারি নিরাপদে পৌঁছে দিন",
        image: img1, // Public folder path
        buttonText: "অ্যাপ ডাউনলোড করুন",
    },
    {
        title: "দ্রুত পরিবহন",
        subtitle: "সময়মত আপনার মালামাল পৌঁছে দিন",
        image: img2, // Public folder path
        buttonText: "অ্যাপ ডাউনলোড করুন",
    },
    {
        title: "সহজ বুকিং",
        subtitle: "যেকোনো সময় ট্রাক বুক করুন",
        image: img3, // Public folder path
        buttonText: "অ্যাপ ডাউনলোড করুন",
    },
];

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    };

    return (
        <div className="relative h-[500px] overflow-hidden ">
            {bannerSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="mx-auto px-4 h-full flex items-center">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 text-white z-10">
                            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                            <p className="text-xl mb-8">{slide.subtitle}</p>
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                {slide.buttonText}
                            </Button>
                        </div>

                        {/* Right Image */}
                        <div className="hidden md:block absolute right-0 top-0 w-full h-full">
                            {/* <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div className="text-white text-opacity-20 text-[120px] font-bold transform -rotate-90">ট্রাক লাগবে</div>
                            </div> */}
                            <Image src={slide.image} alt="Banner" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    );
}
