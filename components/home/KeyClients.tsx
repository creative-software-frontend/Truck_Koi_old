"use client";

import Image from "next/image";
import img1 from "@/assests/keyicons/icon-1.svg";
import img2 from "@/assests/keyicons/icon-2.svg";
import img3 from "@/assests/keyicons/icon-3.svg";
import img4 from "@/assests/keyicons/icon-4.svg";
import img5 from "@/assests/keyicons/icon-5.svg";

const clients = [
    { name: "Marico", src: img1, width: 120, height: 60 },
    { name: "Panda Mart", src: img2, width: 120, height: 60 },
    { name: "Rangs", src: img3, width: 120, height: 60 },
    { name: "Square", src: img4, width: 120, height: 60 },
    { name: "Minister", src: img5, width: 150, height: 60 },
];

const KeyClients = () => {
    return (
        <div className="text-center py-10 bg-white max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold">Our Key Clients</h2>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">
                Truck Koi is the logistics backbone for a lot of Bangladeshi small and large businesses. Some of our clients are enjoying up to 17% reduction in their transportation costs.
            </p>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6 justify-items-center">
                {clients.map((client) => (
                    <div key={client.name} className="flex justify-center">
                        <Image src={client.src} alt={client.name} width={client.width} height={client.height} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyClients;
