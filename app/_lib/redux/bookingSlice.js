const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pageCount: 1,
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    pageIncrease(state) {
      state.pageCount = state.pageCount + 1;
    },
    pageDecrease(state) {
      state.pageCount = state.pageCount - 1;
    },
  },
});

export const { pageIncrease, pageDecrease } = bookingsSlice.actions;

export default bookingsSlice.reducer;

export const getBookingsReducer = (store) => store.bookings;
