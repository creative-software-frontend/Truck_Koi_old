import { CreateTripForm } from "@/components/dashboard/create-trip-form";
import { MapView } from "@/components/dashboard/map-view";


export default function CreateTripPage() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <CreateTripForm />
            <MapView />
        </div>
    )
}

