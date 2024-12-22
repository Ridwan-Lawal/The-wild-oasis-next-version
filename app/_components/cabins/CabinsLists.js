"use client";

import CabinsCard from "@/app/_components/cabins/CabinsCard";
import { useEffect, useOptimistic, useState, useTransition } from "react";

function CabinsLists({ cabins }) {
  const [cabinOptionsId, setCabinOptionsId] = useState(null);
  const [isPending, startTransition] = useTransition();

  const [optimisticCabins, optimisticCabinAdd] = useOptimistic(
    cabins,
    (curCabins, cabinData) => [...curCabins, cabinData]
  );

  useEffect(() => {
    function handleOptions(e) {
      if (!e.target.closest(".cabin-card-options")) {
        setCabinOptionsId(null);
      }
    }

    document.addEventListener("click", handleOptions);

    return () => document.removeEventListener("click", handleOptions);
  }, []);

  function optimisticAddCabinHandler(newCabin) {
    startTransition(() => optimisticCabinAdd(newCabin));
  }

  return (
    <div className="bg-white py-1">
      {optimisticCabins?.map((cabin, i) => (
        <div key={i}>
          <CabinsCard
            cabin={cabin}
            onClick={() =>
              setCabinOptionsId((cur) => (cur === cabin?.id ? null : cabin?.id))
            }
            cabinOptionsId={cabinOptionsId}
            cabinId={cabin?.id}
            onOptimisticAddCabin={optimisticAddCabinHandler}
          />
        </div>
      ))}
    </div>
  );
}

export default CabinsLists;

// fix the dropdown functionality of the cabin page
// create a table for cabins
// build the cabins functionality
