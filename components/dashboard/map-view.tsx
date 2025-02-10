"use client";

import { Minus, Plus, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapView() {
  return (
    <div className="flex-1 relative bg-gray-100 w-full min-h-[300px] sm:min-h-[500px]">
      {/* Embedded Google Map */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14475.259566651797!2d91.88062475!3d24.90429495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1738833668532!5m2!1sen!2sbd"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      {/* Map Controls */}
      <div className="absolute right-2 top-2 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="bg-white shadow-md hover:bg-gray-50"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute right-2 bottom-4 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="bg-white shadow-md hover:bg-gray-50"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="bg-white shadow-md hover:bg-gray-50"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
