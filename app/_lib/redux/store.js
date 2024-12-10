import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "@/app/_lib/redux/bookingSlice";

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});

export default store;
