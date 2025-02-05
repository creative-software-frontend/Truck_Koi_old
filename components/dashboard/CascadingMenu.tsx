import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface District {
  name: string
  subdistricts: string[]
}

const districts: District[] = [
  {
    name: "ঢাকা বিভাগ",
    subdistricts: ["গাজীপুর", "নারায়ণগঞ্জ", "কিশোরগঞ্জ", "মানিকগঞ্জ", "মুন্সিগঞ্জ"],
  },
  {
    name: "চট্টগ্রাম বিভাগ",
    subdistricts: ["কুমিল্লা", "চাঁদপুর", "লক্ষ্মীপুর", "নোয়াখালী", "ফেনী"],
  },
  {
    name: "রাজশাহী বিভাগ",
    subdistricts: ["নাটোর", "চাঁপাইনবাবগঞ্জ", "পাবনা", "সিরাজগঞ্জ", "বগুড়া"],
  },
  // Add more districts as needed
]

interface CascadingMenuProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (location: string) => void
  position: { top: number; left: number }
}

export function CascadingMenu({ isOpen, onClose, onSelect, position }: CascadingMenuProps) {
  const [activeDistrict, setActiveDistrict] = useState<District | null>(null)

  if (!isOpen) return null

  return (
    <div
      className="fixed z-50 flex shadow-lg rounded-lg overflow-hidden"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      {/* Districts */}
      <div className="bg-white w-48">
        {districts.map((district) => (
          <div
            key={district.name}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center text-sm"
            onMouseEnter={() => setActiveDistrict(district)}
          >
            {district.name}
            <ChevronRight className="h-4 w-4" />
          </div>
        ))}
      </div>

      {/* Subdistricts */}
      {activeDistrict && (
        <div className="bg-white w-48 border-l border-gray-200">
          {activeDistrict.subdistricts.map((subdistrict) => (
            <div
              key={subdistrict}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                onSelect(`${activeDistrict.name}, ${subdistrict}`)
                onClose()
              }}
            >
              {subdistrict}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

