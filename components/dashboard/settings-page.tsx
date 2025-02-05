"use client"

import { ChevronRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="w-[1200px] mx-auto p-4 space-y-6 ">
      <h1 className="text-2xl font-semibold mb-6">সেটিংস</h1>

      <div className="space-y-6">
        <h2 className="text-lg font-medium">নিজস্ব সেটিংস</h2>

        {/* Language Selection */}
        <div className="flex items-center justify-between py-4 border-b w-full">
          <div className="w-full">
            <h3 className="font-medium">ভাষা</h3>
            <p className="text-sm text-muted-foreground">আপনার পছন্দের ভাষায় অ্যাপটি ব্যবহার করুন</p>
          </div>
          <Select defaultValue="bangla">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="ভাষা নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangla">বাংলা</SelectItem>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notification Settings */}
        <div className="flex items-center justify-between py-4 border-b">
          <div>
            <h3 className="font-medium">নোটিফিকেশন সেটিংস</h3>
            <p className="text-sm text-muted-foreground">নোটিফিকেশনগুলো চালু বা বন্ধ করে দিন</p>
          </div>
          <Switch />
        </div>

        {/* Security Settings */}
        <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg px-2">
          <div>
            <h3 className="font-medium">নিরাপত্তা সেটিংস</h3>
            <p className="text-sm text-muted-foreground">নিরাপত্তা সংক্রান্ত সেটিংস দেখুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Payment Settings */}
        <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg px-2">
          <div>
            <h3 className="font-medium">পেমেন্ট সেটিংস</h3>
            <p className="text-sm text-muted-foreground">পেমেন্ট সংক্রান্ত তথ্য দেখুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Terms & Conditions */}
        <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg px-2">
          <div>
            <h3 className="font-medium">নিয়ম ও শর্তাবলী</h3>
            <p className="text-sm text-muted-foreground">নিয়ম ও শর্তাবলী পড়ুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Privacy Policy */}
        <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg px-2">
          <div>
            <h3 className="font-medium">গোপনীয়তা নীতিমালা</h3>
            <p className="text-sm text-muted-foreground">গোপনীয়তা নীতিমালা পড়ুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  )
}

