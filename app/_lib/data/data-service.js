// add the booking data from supabase and play with it

import { bookings } from "@/app/_lib/data/data-booking";
import { createClient } from "@/app/_lib/supabase/server";

export async function addBookingsOnReload() {
  const supabase = await createClient();

  const { error } = await supabase.from("Bookings").insert(bookings).select();

  if (error) return error.message;
}

export async function getBookings({ pageCountFrUrl, NUMBEROFBOOKINGSPERPAGE }) {
  const supabase = await createClient();

  // Getting the booking length
  const { count: bookingsLength, error: bookingCountError } = await supabase
    .from("Bookings")
    .select("*", { count: "exact", head: true });

  if (bookingCountError) throw new Error(bookingCountError.message);

  //   Getting the range for fetching 10 data on a page
  const from =
    pageCountFrUrl * NUMBEROFBOOKINGSPERPAGE - NUMBEROFBOOKINGSPERPAGE + 1;

  const NumberOfPages = Math.ceil(bookingsLength / NUMBEROFBOOKINGSPERPAGE);

  let to;
  if (pageCountFrUrl < NumberOfPages) {
    to = NUMBEROFBOOKINGSPERPAGE * pageCountFrUrl;
  } else if (pageCountFrUrl === NumberOfPages) {
    const restofthedata =
      NUMBEROFBOOKINGSPERPAGE * pageCountFrUrl - bookingsLength;

    to = NUMBEROFBOOKINGSPERPAGE * pageCountFrUrl - restofthedata;
  }

  //   Fetching the data based on the calculated range

  const { data: bookingsData, error: bookingsDataError } = await supabase
    .from("Bookings")
    .select("id")
    .range(from, to);

  if (bookingsDataError) throw new Error(bookingsDataError.message);

  return { bookingsData, from, to, bookingsLength };
}

export async function getBookingsByRange() {
  const supabase = await createClient();

  const {
    data: Bookings,
    error,
    count,
  } = await supabase
    .from("Bookings")
    .select("id", { count: "exact", head: true })
    .range(1, 10);

  if (error) throw new Error(error.message);

  return { count, Bookings };
}
