import { NUMBEROFBOOKINGSPERPAGE } from "@/app/_lib/constants";

export function usePagination(bookings) {
  const from =
    pageCountFrUrl * NUMBEROFBOOKINGSPERPAGE - NUMBEROFBOOKINGSPERPAGE + 1;

  const NumberOfPages = Math.ceil(bookings.length / NUMBEROFBOOKINGSPERPAGE);

  let to;
  if (pageCountFrUrl < NumberOfPages) {
    to = NUMBEROFBOOKINGSPERPAGE * pageCountFrUrl;
  } else if (pageCountFrUrl === NumberOfPages) {
    const restofthedata =
      NUMBEROFBOOKINGSPERPAGE * pageCountFrUrl - bookings?.length;

    to = NUMBEROFBOOKINGSPERPAGE * pageCountFrUrl - restofthedata;
  }

  return { from, to };
}
