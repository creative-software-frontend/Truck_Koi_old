"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="md:w-[1200px] mx-auto px-4">
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("current")}
          className={cn(
            "py-4 px-6 text-base font-medium relative",
            activeTab === "current" ? "text-red-600" : "text-gray-600"
          )}
        >
          চলতি ট্রিপ
          {activeTab === "current" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={cn(
            "py-4 px-6 text-base font-medium relative",
            activeTab === "history" ? "text-red-600" : "text-gray-600"
          )}
        >
          ট্রিপ হিস্টরি
          {activeTab === "history" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
          )}
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-64 h-64 mb-8">
          {/* <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2n1IjNSG1Bgvl8vTp32PTAXGkbiUv.png"
                        alt="Empty trips illustration"
                        className="w-full h-full object-contain"
                    /> */}
        </div>
        <h2 className="text-xl text-gray-900 mb-6">
          বর্তমানে আপনার কোনো ট্রিপ নেই
        </h2>
        <Link
          href="/dashboard/create-trip"
          className="bg-red-600 text-white px-6 py-2.5 rounded-md hover:bg-red-700 transition-colors"
        >
          নতুন ট্রিপ তৈরি করুন
        </Link>
      </div>
    </div>
  );
}
