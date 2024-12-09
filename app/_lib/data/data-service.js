// add the booking data from supabase and play with it

import { bookings } from "@/app/_lib/data/data-booking";
import { createClient } from "@/app/_lib/supabase/server";

export async function addBookingsOnReload() {
  const supabase = await createClient();

  const { error } = await supabase.from("Bookings").insert(bookings).select();

  if (error) return error.message;
}

export async function getBookings() {
  const supabase = await createClient();

  const { data: Bookings, error } = await supabase.from("Bookings").select("*");

  if (error) throw new Error(error.message);

  return Bookings;
}
