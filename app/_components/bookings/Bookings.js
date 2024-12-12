import BookingList from "@/app/_components/bookings/BookingList";
import BookingsPagination from "@/app/_components/bookings/BookingsPagination";
import { NUMBEROFBOOKINGSPERPAGE } from "@/app/_lib/constants";
import {
  addBookingsOnReload,
  getBookings,
  getBookingsByRange,
} from "@/app/_lib/data/data-service";
import { usePagination } from "@/app/_lib/hooks/usePagination";

const BOOKINGHEADINGS = ["cabins", "guest", "dates", "status", "amount", ""];

async function Bookings({ pageCountFrUrl }) {
  const bookings = await getBookings({
    pageCountFrUrl,
    NUMBEROFBOOKINGSPERPAGE,
  });

  const { bookingsData, from, to, bookingsLength } = bookings;

  return (
    <div className="table ">
      {/* bookings subheading */}
      <div className="booking-subheading px-6 py-4">
        {BOOKINGHEADINGS.map((heading, i) => (
          <p key={i} className="capitalize  text-[15px] ">
            {heading}
          </p>
        ))}
      </div>

      {/* bookings */}
      <BookingList bookings={bookingsData} />
      {/* pagination */}
      <BookingsPagination
        bookingsLength={bookingsLength}
        fromBooking={from}
        toBooking={to}
      />
    </div>
  );
}

export default Bookings;

// try flex on the booking card and the booking subheading
