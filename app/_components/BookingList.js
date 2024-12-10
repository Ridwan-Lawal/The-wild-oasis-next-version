"use client";

import BookingCard from "@/app/_components/bookings/BookingCard";
import { useEffect, useState } from "react";

function BookingList({ bookings }) {
  const [bookingOptionsId, setBookingOptionsId] = useState(null);

  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest(".booking-card-options")) {
        setBookingOptionsId(null);
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      {bookings?.map((booking, i) => (
        <div key={i}>
          {/* bookings card */}
          <BookingCard
            booking={booking}
            onClick={() => setBookingOptionsId((cur) => (cur === i ? null : i))}
            bookingOptionsId={bookingOptionsId}
            bookingId={i}
          />
        </div>
      ))}
    </div>
  );
}

export default BookingList;
