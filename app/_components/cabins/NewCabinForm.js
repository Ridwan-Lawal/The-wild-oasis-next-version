"use client";

import CabinFormbtn from "@/app/_components/cabins/CabinFormbtn";
import { addNewCabinAction, editCabinAction } from "@/app/_lib/action";
import {
  getCabinStates,
  onEditCabin,
  onOpenNewCabinForm,
} from "@/app/_lib/redux/cabinSlice";

import { XIcon } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function NewCabinForm() {
  const { isNewCabinFormOpen, cabinToEditData, cabinMutationType } =
    useSelector(getCabinStates);
  const dispatch = useDispatch();
  const [state, formAction, isPending] = useActionState(
    addNewCabinAction,
    null
  );
  const ref = useRef(null);

  console.log(state, state?.status === "success");

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.msg);
      dispatch(onOpenNewCabinForm(""));
      dispatch(onEditCabin({}));
    } else if (state?.status === "fail") {
      toast.error(state.msg);
    }
  }, [state, dispatch]);

  return (
    <div
      className={`overlay fixed left-0 backdrop-blur-[7px] h-screen  top-0 flex  z-50  items-center justify-center border-2 border-purple-800 ${
        isNewCabinFormOpen ? "w-screen" : "w-0 overflow-hidden"
      } `}
    >
      {/* modal */}
      <form
        action={formAction}
        className={`modal ${
          isNewCabinFormOpen ? "scale-100 w-full" : "scale-90 w-0"
        } transition-all ease-in-out `}
      >
        <p className="flex justify-end text-gray-400 cursor-pointer">
          <XIcon />
        </p>

        {/* cabinId */}
        <input
          type="hidden"
          name="cabinId"
          id="cabinId"
          value={cabinToEditData?.id}
        />

        {/* cabinMutationType('create', 'edit') */}
        <input
          type="hidden"
          name="cabinMutationType"
          id="cabinMutationType"
          value={cabinMutationType}
        />

        {/* cabin name */}
        <div className="field">
          <label htmlFor="name" className="">
            Cabin name
          </label>
          <div>
            <input
              defaultValue={cabinToEditData?.name || ""}
              type="text"
              name="name"
              id="name"
              className=""
            />
            {state?.name?.at(0) && (
              <p className="text-[12px] text-red-500 italic mt-1.5">
                {state?.name?.at(0)}
              </p>
            )}
          </div>
        </div>

        {/* Maximum capacity */}
        <div className="field">
          <label htmlFor="maxCapacity" className="">
            Maximum capacity
          </label>
          <div>
            <input
              type="number"
              name="maxCapacity"
              id="maxCapacity"
              defaultValue={cabinToEditData?.maxCapacity || 0}
            />

            {state?.maxCapacity?.at(0) && (
              <p className="text-[12px] text-red-500 italic mt-1.5">
                {state?.maxCapacity?.at(0)}
              </p>
            )}
          </div>
        </div>

        {/* Regular Price */}
        <div className="field">
          <label htmlFor="regularPrice" className="">
            Regular price
          </label>
          <div>
            <input
              type="number"
              name="regularPrice"
              id="regularPrice"
              defaultValue={cabinToEditData?.regularPrice || 0}
            />
            {state?.regularPrice?.at(0) && (
              <p className="text-[12px] text-red-500 italic mt-1.5">
                {state?.regularPrice?.at(0)}
              </p>
            )}
          </div>
        </div>

        {/* discount */}
        <div className="field">
          <label htmlFor="discount" className="">
            Discount
          </label>
          <div>
            <input
              type="number"
              name="discount"
              id="discount"
              defaultValue={cabinToEditData?.discount || 0}
            />
            {state?.discount?.at(0) && (
              <p className="text-[12px] text-red-500 italic mt-1.5">
                {state?.discount?.at(0)}
              </p>
            )}
          </div>
        </div>

        {/* description */}

        <div className="field">
          <label htmlFor="description" className="">
            Description for website
          </label>

          <div>
            <textarea
              rows={3}
              cols={15}
              name="description"
              id="description"
              defaultValue={cabinToEditData?.description || ""}
            ></textarea>

            {state?.description?.at(0) && (
              <p className="text-[12px] text-red-500 italic mt-1.5">
                {state?.description?.at(0)}
              </p>
            )}
          </div>
        </div>

        {/* cabin photo */}

        <div className="field ">
          <label htmlFor="image" className="">
            Cabin photo
          </label>

          <div>
            <input type="file" name="image" id="image" className="file" />
            {state?.image?.at(0) && (
              <p className="text-[12px] text-red-500 italic mt-1.5">
                {state?.image?.at(0)}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 items-center justify-end">
          <button
            disabled={isPending}
            type="reset"
            className="btn neutral"
            onClick={() => dispatch(onOpenNewCabinForm())}
          >
            Cancel
          </button>

          {cabinMutationType === "create" ? (
            <CabinFormbtn isPending={isPending}>
              {isPending ? "Creating cabin..." : "Create new cabin"}
            </CabinFormbtn>
          ) : (
            <CabinFormbtn isPending={isPending}>
              {isPending ? "Editing cabin..." : "Edit cabin"}
            </CabinFormbtn>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewCabinForm;
// continue to add the cabin
// also do the discount validation, the discount must be less than the regular price
