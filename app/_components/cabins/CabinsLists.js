"use client";

import CabinsCard from "@/app/_components/cabins/CabinsCard";
import { useEffect, useState } from "react";

function CabinsLists({ cabins }) {
  const [cabinOptionsId, setCabinOptionsId] = useState(null);

  useEffect(() => {
    function handleOptions(e) {
      if (!e.target.closest(".cabin-card-options")) {
        setCabinOptionsId(null);
      }
    }

    document.addEventListener("click", handleOptions);

    return () => document.removeEventListener("click", handleOptions);
  }, []);

  return (
    <div className="bg-white py-1">
      {cabins?.map((cabin, i) => (
        <div key={i}>
          <CabinsCard
            cabin={cabin}
            onClick={() => setCabinOptionsId((cur) => (cur === i ? null : i))}
            cabinOptionsId={cabinOptionsId}
            cabinId={i}
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
