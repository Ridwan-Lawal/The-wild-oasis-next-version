"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SectionHeader({ filterTypes, sortTypes, section = "bookings" }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const filterValue = searchParams.get("filter") || "all";

  function onFilter(filter) {
    console.log(filter);
    const params = new URLSearchParams(searchParams);
    if (filter) {
      params.set("filter", filter);
    } else {
      params.delete("filter");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  function onSort(sort) {
    console.log(sort);
    const params = new URLSearchParams(searchParams);
    if (sort) {
      params.set("sortBy", sort);
    } else params.delete("sortBy");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="section-header flex items-center justify-between gap-5">
      <h1 className="">All {section}</h1>

      <div className="flex gap-5">
        {/* filters */}
        <div className="filter ">
          {filterTypes.map((filterType, i) => (
            <button
              key={i}
              onClick={() => onFilter(filterType)}
              className={`${
                filterType === filterValue ? "bg-color-brand text-white" : ""
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* sort */}
        <div className="sort">
          <select
            onChange={(e) => onSort(e.target.value)}
            name="sort"
            id="sort"
          >
            {sortTypes.map((sort, i) => (
              <option key={i} value={sort.value}>
                {sort.type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
