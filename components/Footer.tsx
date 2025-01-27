import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 mb-12">
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">সার্ভিস</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  শিপার
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  ব্যবসা
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  শিপিং
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  ট্রাক ওনার
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  সাধারণ জিজ্ঞাসা
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">কোম্পানি</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  ক্যারিয়ার
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  যোগাযোগ করুন
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  ট্রাকের ক্যাটাগরি
                </Link>
              </li>
            </ul>
          </div>

          {/* Rules */}
          <div>
            <h3 className="font-bold text-lg mb-4">নিয়মাল</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  সর্তাবলী - শিপার
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  সর্তাবলী - ট্রাক ওনার
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  প্রাইভেসি পলিসি
                </Link>
              </li>
            </ul>
          </div>

          {/* Parts */}
          <div>
            <h3 className="font-bold text-lg mb-4">পার্টস</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  ট্রাক পার্টস
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">যোগাযোগ</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:customercare@trucklagbe.com" className="text-gray-600 hover:text-gray-900">
                  customercare@truckkoi.com
                </a>
              </li>
              <li>
                <a href="tel:+8809638000245" className="text-gray-600 hover:text-gray-900">
                  +৮৮০ ৯৬৩৮ ০০০ ০০০
                </a>
              </li>
              <li className="flex gap-4 pt-4">
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <Twitter className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Truck Categories Section */}
        <div className="border-t border-gray-200 py-8">
          <h3 className="font-bold text-lg mb-6">ট্রাকের ক্যাটাগরি ও ভাড়াসমূহ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <h4 className="font-semibold mb-3">পিকআপ ট্রাক</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>৭ ফিট ১ টন</li>
                <li>৯ ফিট ১.৫ টন</li>
                <li>১২ ফিট ২ টন</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">মাঝারী সাইজের ট্রাক</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>১৪ ফিট ৩.৫ টন</li>
                <li>১৬ ফিট ৭.৫ টন</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">বড় সাইজের ট্রাক</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>১৮ ফিট ১৫ টন</li>
                <li>২০ ফিট ১৫ টন</li>
                <li>২০ ফিট ২০ টন</li>
                <li>২০ ফিট ২৫ টন</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">ট্রেলার ট্রাক</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>ফ্ল্যাট - বেড ট্রেলার</li>
                <li>লো - বেড ট্রেলার</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">ট্রাকের এ্যাটাচমেন্ট</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>টাটা, অশোক লেইল্যান্ড, ইসুজু, মাহিন্দ্রা, ভ্যাক্স, জেএমসি, আইচার, মিটসুবিশি, ডেকভার্ড, পিওএন-এফ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 py-4">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Truck Lagbe"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">ট্রাক কই</span>
              </Link>
              <p className="text-sm text-gray-600"> © ২০২৫ ট্রাক কই লিমিটেড । সর্বস্বত্ব সংরক্ষিত</p>
            </div>

            {/* Download Apps */}
            <div className="flex flex-col sm:flex-row gap-4">
              <p className="font-semibold">ডাউনলোড করুন ট্রাক লাগবে অ্যাপ</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <p className="text-sm mb-2">শিপার</p>
                  <Link href="#">
                    <Image
                      src="/placeholder.svg?height=40&width=135"
                      alt="Download Shipper App"
                      width={135}
                      height={40}
                      className="h-10"
                    />
                  </Link>
                </div>
                <div>
                  <p className="text-sm mb-2">ট্রাক ওনার</p>
                  <Link href="#">
                    <Image
                      src="/placeholder.svg?height=40&width=135"
                      alt="Download Truck Owner App"
                      width={135}
                      height={40}
                      className="h-10"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

