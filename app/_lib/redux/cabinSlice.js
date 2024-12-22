import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewCabinFormOpen: false,
  cabinToEditData: {},
  isDeleteModalOpen: false,
  cabinMutationType: "",
};

const cabinSlice = createSlice({
  name: "cabin",
  initialState,
  reducers: {
    onOpenNewCabinForm(state, action) {
      state.isNewCabinFormOpen = !state.isNewCabinFormOpen;
      state.cabinMutationType = action.payload;
    },
    onEditCabin(state, action) {
      state.cabinToEditData = action.payload;
    },

    onOpenDeleteModal(state) {
      state.isDeleteModalOpen = !state.isDeleteModalOpen;
    },
  },
});

export const { onOpenNewCabinForm, onEditCabin, onOpenDeleteModal } =
  cabinSlice.actions;

export default cabinSlice.reducer;

export const getCabinStates = (store) => store.cabin;
