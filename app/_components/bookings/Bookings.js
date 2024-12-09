import BookingList from "@/app/_components/BookingList";
import BookingsPagination from "@/app/_components/bookings/BookingsPagination";
import { addBookingsOnReload, getBookings } from "@/app/_lib/data/data-service";

const BOOKINGHEADINGS = ["cabins", "guest", "dates", "status", "amount", ""];

async function Bookings() {
  const bookings = await getBookings();

  return (
    <div className="rounded-md border border-gray-20 shadow-md shadow-gray-100 ">
      {/* bookings subheading */}
      <div className="booking-subheading px-6 py-4">
        {BOOKINGHEADINGS.map((heading, i) => (
          <p key={i} className="capitalize  text-[15px] ">
            {heading}
          </p>
        ))}
      </div>

      {/* bookings */}
      <BookingList bookings={bookings} />
      {/* pagination */}
      <BookingsPagination />
    </div>
  );
}

export default Bookings;

// try flex on the booking card and the booking subheading
