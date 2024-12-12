function BookingTerms({ id, label }) {
  return (
    <div className="flex items-center gap-4 py-6 px-6 bg-white border border-[#eeeeee] rounded-md">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="h-6 w-6 cursor-pointer"
      />

      <label htmlFor={id} className="text-gray-700 font-normal cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default BookingTerms;

// put the booking and checkin details in their own component
