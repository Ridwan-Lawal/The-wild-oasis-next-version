import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewCabinFormOpen: false,
};

const cabinSlice = createSlice({
  name: "cabin",
  initialState,
  reducers: {
    onOpenNewCabinForm(state) {
      state.isNewCabinFormOpen = !state.isNewCabinFormOpen;
    },
  },
});

export const { onOpenNewCabinForm } = cabinSlice.actions;

export default cabinSlice.reducer;

export const getCabinStates = (store) => store.cabin;
