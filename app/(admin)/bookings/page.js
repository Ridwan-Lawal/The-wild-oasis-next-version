import Bookings from "@/app/_components/bookings/Bookings";
import SectionHeader from "@/app/_ui/SectionHeader";
import Spinner from "@/app/_ui/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "Bookings",
};

function Page() {
  return (
    <div className="space-y-8">
      <SectionHeader />

      <Suspense fallback={<Spinner />}>
        <Bookings />
      </Suspense>
    </div>
  );
}

export default Page;
