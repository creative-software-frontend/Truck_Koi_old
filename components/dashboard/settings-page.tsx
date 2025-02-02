'use client'

import { ChevronRight, ExternalLink } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-medium mb-6">সেটিংস</h1>

                {/* System Settings Section */}
                <div className="mb-8">
                    <h2 className="text-lg font-medium mb-4">সিস্টেম সেটিংস</h2>

                    <div className="space-y-6">
                        {/* Language Selection */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-base font-medium mb-1">ভাষা</h3>
                                <p className="text-sm text-gray-500">আপনার পছন্দের ভাষায় এপ্লিকেশনটি চালুন</p>
                            </div>
                            <Select defaultValue="bangla">
                                <SelectTrigger className="w-[100px]">
                                    <SelectValue placeholder="ভাষা" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="bangla">বাংলা</SelectItem>
                                    <SelectItem value="english">English</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Notification Settings */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-base font-medium mb-1">নোটিফিকেশন সেটিংস</h3>
                                <p className="text-sm text-gray-500">নোটিফিকেশনের মাধ্যমে আপনার ট্রিপ এর প্রয়োজনীয় তথ্য জানুন</p>
                            </div>
                            <Switch />
                        </div>
                    </div>
                </div>

                {/* General Section */}
                <div className="space-y-1">
                    <h2 className="text-lg font-medium mb-4">সাধারণ</h2>

                    {/* Video Guide */}
                    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
                        <div>
                            <h3 className="text-base font-medium mb-1">ভিডিও গাইড</h3>
                            <p className="text-sm text-gray-500 text-left">ভিডিও দেখে ট্রিপ কীভাবে ট্রিপ প্ল্যান করে সেটা জানা যাবে</p>
                        </div>
                        <ChevronRight className="text-gray-400 group-hover:text-gray-600" />
                    </button>

                    {/* General Questions */}
                    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
                        <div>
                            <h3 className="text-base font-medium mb-1">সাধারণ জিজ্ঞাসা</h3>
                            <p className="text-sm text-gray-500 text-left">আপনার সাধারণ প্রশ্নগুলোর উত্তর</p>
                        </div>
                        <ExternalLink className="text-gray-400 group-hover:text-gray-600" />
                    </button>

                    {/* Policies Section */}
                    <div className="pt-4">
                        <h2 className="text-lg font-medium mb-4">নীতিমালা</h2>

                        {/* Terms and Conditions */}
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
                            <div>
                                <h3 className="text-base font-medium mb-1">নিয়ম ও শর্তাবলী</h3>
                                <p className="text-sm text-gray-500 text-left">নিয়ম ও শর্তাবলী পড়ে দেখুন</p>
                            </div>
                            <ExternalLink className="text-gray-400 group-hover:text-gray-600" />
                        </button>

                        {/* Privacy Policy */}
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
                            <div>
                                <h3 className="text-base font-medium mb-1">গোপনীয়তা শর্তাবলী</h3>
                                <p className="text-sm text-gray-500 text-left">গোপনীয়তা শর্তাবলী পড়ে দেখুন</p>
                            </div>
                            <ExternalLink className="text-gray-400 group-hover:text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
