"use client";

import {
  ClipboardCheck,
  EllipsisVertical,
  Eye,
  MoveRight,
  Trash2,
} from "lucide-react";

function BookingCard({ bookingOptionsId, bookingId, onClick }) {
  return (
    <div className="bg-white booking-card items-center  px-6 py-3  border-t  ">
      <p className="border">001</p>

      {/* name and email */}
      <div className="space-y-1 ">
        <p className="text-sm">Lawal Ridwan</p>
        <p className="text-gray-500 font-normal text-[12.5px]">
          lawalridwan860@gmail.com
        </p>
      </div>

      {/* dates */}
      <div className="flex flex-col gap-1 ">
        <div className="text-[13.5px] flex items-center gap-1 flex-rap  ">
          <p>In almost 5 years</p>
          <MoveRight color="#263242" className="size-4" />
          <p>2 night stay</p>
        </div>

        <div className="flex items-center gap-1 text-gray-500 font-normal text-[12.5px] flex-wrap ">
          <p>Oct 31 2029</p>
          <p>-</p>
          <p>Nov 02 2029</p>
        </div>
      </div>

      {/* status */}
      <p className="text-[11px] font-semibold  uppercase bg-blue-200 text-blue-800 py-0.5 px-3 rounded-3xl w-fit ">
        unconfirmed
      </p>

      {/* price */}

      <p className="text-[13px] ">$800.00</p>

      {/* drop down */}
      <div className="justify-self-end booking-options relative booking-card-options">
        <button onClick={onClick}>
          <EllipsisVertical color="#4b5563" className="size-5" />
        </button>

        {bookingOptionsId === bookingId && (
          <ul className="absolute right-0 z-10 ">
            <li>
              <Eye className="size-4" /> <span>See details</span>
            </li>
            <li>
              <ClipboardCheck className="size-4" /> <span>Check in </span>
            </li>
            <li>
              <Trash2 className="size-4" /> <span>Delete booking</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default BookingCard;
