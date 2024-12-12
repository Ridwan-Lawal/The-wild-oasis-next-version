import Bookings from "@/app/_components/bookings/Bookings";
import { BOOKING_SORTS, BOOKINGS_FILTERS } from "@/app/_lib/constants";
import SectionHeader from "@/app/_ui/SectionHeader";
import Spinner from "@/app/_ui/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "Bookings",
};

async function Page({ searchParams }) {
  const query = await searchParams;

  const suspenseKey = `${query?.page}`;
  return (
    <div className="space-y-8">
      <SectionHeader sortTypes={BOOKING_SORTS} filterTypes={BOOKINGS_FILTERS} />

      <Suspense fallback={<Spinner />} key={suspenseKey}>
        <Bookings pageCountFrUrl={Number(query?.page)} />
      </Suspense>
    </div>
  );
}

export default Page;
