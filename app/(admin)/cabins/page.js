import Cabins from "@/app/_components/cabins/Cabins";
import { CABINS_FILTERS, CABINS_SORTS } from "@/app/_lib/constants";
import SectionHeader from "@/app/_ui/SectionHeader";
import Spinner from "@/app/_ui/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "Cabins",
};

function Page() {
  return (
    <div>
      <div>
        <SectionHeader
          filterTypes={CABINS_FILTERS}
          sortTypes={CABINS_SORTS}
          section="cabins"
        />

        <Suspense fallback={<Spinner />}>
          <Cabins />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
