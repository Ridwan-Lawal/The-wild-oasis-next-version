import { ChevronLeft, ChevronRight } from "lucide-react";

function BookingsPagination() {
  return (
    <div>
      <div className="booking-pagination px-8">
        <p className="">
          Showing <span>1</span> to <span>10</span> of <span>569</span> results
        </p>

        <div className="text-[13px] booking-pagination-control py-2 ">
          <button className="pr-2">
            <ChevronLeft className="size-4" />
            <span>Previous</span>
          </button>

          <button className="pl-2">
            <span>next</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingsPagination;
