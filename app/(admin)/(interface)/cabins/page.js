import Cabins from "@/app/_components/cabins/Cabins";
import { CABINS_FILTERS, CABINS_SORTS } from "@/app/_lib/constants";
import SectionHeader from "@/app/_ui/SectionHeader";
import Spinner from "@/app/_ui/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "Cabins",
};

async function Page({ searchParams }) {
  const query = await searchParams;
  console.log(query);
  const queryData = `${query?.filter}-${query?.sortBy}`;
  return (
    <div>
      <div>
        <SectionHeader
          filterTypes={CABINS_FILTERS}
          sortTypes={CABINS_SORTS}
          section="cabins"
        />

        <Suspense fallback={<Spinner />} key={queryData}>
          <Cabins filterType={query?.filter} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
