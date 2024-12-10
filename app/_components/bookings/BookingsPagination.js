"use client";

import {
  getBookingsReducer,
  pageDecrease,
  pageIncrease,
} from "@/app/_lib/redux/bookingSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Math.ceil(bookinglength / 10);

function BookingsPagination({ bookingsLength, fromBooking, toBooking }) {
  const { pageCount } = useSelector(getBookingsReducer);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const numberOfPages = Math.ceil(bookingsLength / 10);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", pageCount);

    router.replace(`${pathname}?${params}`);
  }, [pathname, router, pageCount]);

  return (
    <div>
      <div className="booking-pagination px-8">
        <p className="">
          Showing <span>{fromBooking}</span> to <span>{toBooking} </span> of{" "}
          <span>{bookingsLength}</span> results
        </p>

        <div className="text-[13px] booking-pagination-control py-2 ">
          <button
            onClick={() => dispatch(pageDecrease())}
            className={`pr-2 ${
              pageCount === 1
                ? "cursor-not-allowed hover:bg-transparent"
                : "hover:bg-color-brand hover:text-white"
            }`}
          >
            <ChevronLeft className="size-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => dispatch(pageIncrease())}
            className={`pl-2 ${
              pageCount === numberOfPages
                ? "cursor-not-allowed "
                : "hover:bg-color-brand hover:text-white"
            }`}
          >
            <span>next</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingsPagination;
