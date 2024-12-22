export const NUMBEROFBOOKINGSPERPAGE = 10;

export const BOOKINGS_FILTERS = [
  "all",
  "checked out",
  "checked in",
  "unconfirmed",
];

export const BOOKING_SORTS = [
  { type: "Sort by date (recent first)", value: "date-recent-first" },
  { type: "Sort by date (earlier first)", value: "date-earlier-first" },
  { type: "Sort by amount (high first)", value: "amount-high-first" },
  { type: "Sort by amount (low first)", value: "amount-low-first" },
];

export const CABINS_FILTERS = ["all", "no-discount", "with-discount"];

export const CABINS_SORTS = [
  { type: "Sort by name (A-Z)", value: "name-asc" },
  { type: "Sort by name (Z-A)", value: "name-desc" },
  { type: "Sort by price (low first)", value: "price-asc" },
  { type: "Sort by price (high first)", value: "price-desc" },
  { type: "Sort by capacity (low first)", value: "capacity-asc" },
  { type: "Sort by price (high first)", value: "capacity-desc" },
];
