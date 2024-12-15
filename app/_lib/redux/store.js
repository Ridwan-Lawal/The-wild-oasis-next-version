import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "@/app/_lib/redux/bookingSlice";
import cabinReducer from "@/app/_lib/redux/cabinSlice";
import userReducer from "@/app/_lib/redux/userSlice";

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    cabin: cabinReducer,
    user: userReducer,
  },
});

export default store;
