"use client"

import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddressBook() {
  const router = useRouter()

  return (
    <div className=" mx-auto mt-20 text-center px-4 md:w-[1200px]">
        <h1>Addressbook</h1>
      {/* Illustration */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        {/* Down Arrow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-200"></div>
        {/* Box */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-gray-200 rounded-lg"></div>
        {/* Decorative Leaves */}
        <div className="absolute bottom-0 left-0 w-8 h-8 text-gray-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3C17.5 3 21 6.5 21 12C21 17.5 17.5 21 12 21C6.5 21 3 17.5 3 12C3 6.5 6.5 3 12 3Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8 text-gray-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3C17.5 3 21 6.5 21 12C21 17.5 17.5 21 12 21C6.5 21 3 17.5 3 12C3 6.5 6.5 3 12 3Z" />
          </svg>
        </div>
      </div>

      {/* Message */}
      <p className="text-gray-600 text-lg mb-8">কোনো অ্যাড্রেস যোগ করা হয় নি</p>

      {/* Add New Address Button */}
      <button
        onClick={() => router.push("/address/new")}
        className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        <Plus className="w-5 h-5" />
        নতুন অ্যাড্রেস যোগ করুন
      </button>
    </div>
  )
}

