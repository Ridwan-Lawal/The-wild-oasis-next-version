const FILTERS = ["all", "checked out", "checked in", "unconfirmed"];
const SORTS = [
  { type: "Sort by date (recent first)", value: "date-recent-first" },
  { type: "Sort by date (earlier first)", value: "date-earlier-first" },
  { type: "Sort by amount (high first)", value: "amount-high-first" },
  { type: "Sort by amount (low first)", value: "amount-low-first" },
];

function BookingsHeader() {
  return (
    <div className="section-header flex items-center justify-between gap-5">
      <h1 className="">All Bookings</h1>

      <div className="flex gap-5">
        {/* filters */}
        <div className="filter">
          {FILTERS.map((filter, i) => (
            <button key={i}>{filter}</button>
          ))}
        </div>

        {/* sort */}
        <div className="sort">
          <select name="sort" id="sort">
            {SORTS.map((sort, i) => (
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

export default BookingsHeader;
