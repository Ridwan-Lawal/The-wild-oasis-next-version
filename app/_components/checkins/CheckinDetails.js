import BookingTerms from "@/app/_components/checkins/BookingTerms";
import {
  ArrowBigLeft,
  CircleCheck,
  Dot,
  HandCoins,
  MessageSquareText,
  MoveLeft,
  Users,
  Warehouse,
} from "lucide-react";

function CheckinDetails() {
  return (
    <div className="booking-details">
      {/* header and main */}
      <div className="shadow-lg shadow-gray-100 rounded-md overflow-hidden pb-4">
        <header className="space-y-6">
          {/* booking details nav */}
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1>Check in booking #0001</h1>
            </div>

            <button className="flex items-center gap-2 text-color-brand">
              <MoveLeft className="size-5" />

              <span> Back</span>
            </button>
          </nav>

          {/* booking details head */}
          <div className="bg-color-brand-2 text-lg text-[#f5f4f4] font-medium py-6 px-8 flex items-center justify-between rounded-t-md overflow-hidden">
            <div className="flex items-center gap-5">
              <Warehouse />
              <p>2 nights in cabin 001</p>
            </div>
            <p>
              <span></span>
            </p>

            <p>Wed, Oct 31 2029 (In almost 5 years) - Fri, Nov 02 2029</p>
          </div>
        </header>

        {/* booking details main */}

        <main className="mt-8 px-8 bg-white">
          {/* guest details */}

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Users className="text-color-brand-2 size-5" />

              <div className="flex items-center gap-2">
                <p>Lawal Ridwan + 1 guests</p>
                <Dot />
                <p className="email">Lawalridwan@gmail.com</p>
                <Dot />
                <p className="id">National ID: 12383882</p>
              </div>
            </div>

            {/* observations */}
            <div className="flex items-center gap-4">
              <MessageSquareText className="text-color-brand-2 size-5" />
              <p>Observations</p>
              <p className="observations">My name is Lawal Ridwan</p>
            </div>

            {/* breakfase included */}
            <div className="flex items-center gap-4">
              <CircleCheck className="text-color-brand-2 size-5" />
              <p>Breakfast included</p>
              <p className="observations">No</p>
            </div>
          </div>

          {/* booking price */}
          <div className="flex items-center justify-between bg-color-yellow-100 text-color-yellow-700 py-6 px-6 rounded-md mt-9">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <HandCoins className="size-6" />
                <p>Total price</p>
              </div>
              <p className="font-normal">$800.00</p>
            </div>

            <p className="uppercase text-sm font-semibold">
              will pay at property
            </p>
          </div>

          <p className="text-xs font-normal text-right text-gray-500 mt-6">
            Booked on friday 23, october 2024
          </p>
        </main>
      </div>

      {/* breakfast and terms */}
      <div className="flex flex-col gap-7 mt-10">
        <BookingTerms
          id="breakfast"
          label="Want to add breakfast for $60.00?"
        />
        <BookingTerms id="payment" label="Want to add breakfast for $60.00?" />
      </div>

      {/* footer */}
      <div className="flex gap-3 items-center w-full justify-end mt-10">
        <button className="btn positive">Check in booking #0001</button>

        <button className="btn neutral">Back</button>
      </div>
    </div>
  );
}

export default CheckinDetails;
