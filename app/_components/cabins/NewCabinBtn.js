"use client";

import { onOpenNewCabinForm } from "@/app/_lib/redux/cabinSlice";
import { useDispatch } from "react-redux";

function NewCabinBtn() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(onOpenNewCabinForm())}
      className="btn positive mt-4 "
    >
      Add new cabin
    </button>
  );
}

export default NewCabinBtn;
