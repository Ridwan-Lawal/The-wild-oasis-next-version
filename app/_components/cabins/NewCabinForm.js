"use client";

import { addNewCabinAction } from "@/app/_lib/action";
import {
  getCabinStates,
  onOpenNewCabinForm,
} from "@/app/_lib/redux/cabinSlice";

import { XIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function NewCabinForm() {
  const { isNewCabinFormOpen } = useSelector(getCabinStates);
  const dispatch = useDispatch();

  return (
    <div
      className={`overlay absolute backdrop-blur-[7px] h-screen w-screen top-0 flex right-0 z-50  items-center justify-center border-2 border-purple-800 ${
        isNewCabinFormOpen ? "h-full" : "h-0 overflow-hidden"
      } `}
    >
      {/* modal */}
      <form
        action={addNewCabinAction}
        className={`modal ${
          isNewCabinFormOpen ? "scale-100" : "scale-90"
        } transition-all ease-in-out scale-120`}
      >
        <p className="flex justify-end text-gray-400 cursor-pointer">
          <XIcon />
        </p>
        {/* cabin name */}
        <div className="field">
          <label htmlFor="cabin-name" className="">
            Cabin name
          </label>
          <input type="text" name="cabin-name" id="cabin-name" className="" />
        </div>

        {/* Maximum capacity */}
        <div className="field">
          <label htmlFor="maximum-capacity" className="">
            Maximum capacity
          </label>
          <input type="number" name="maximum-capacity" id="maximum-capacity" />
        </div>

        {/* Regular Price */}
        <div className="field">
          <label htmlFor="regular-price" className="">
            Regular price
          </label>
          <input type="number" name="regular-price" id="regular-price" />
        </div>

        {/* discount */}
        <div className="field">
          <label htmlFor="discount" className="">
            Discount
          </label>
          <input type="number" name="discount" id="discount" />
        </div>

        {/* description */}

        <div className="field">
          <label htmlFor="description" className="">
            Description for website
          </label>

          <textarea
            rows={3}
            cols={15}
            name="description"
            id="description"
          ></textarea>
        </div>

        {/* cabin photo */}

        <div className="field ">
          <label htmlFor="cabin-photo" className="">
            Cabin photo
          </label>

          <input
            type="file"
            name="cabin-photo"
            id="cabin-photo"
            className="file"
          />
        </div>

        <div className="flex gap-4 items-center justify-end">
          <button
            type="reset"
            className="btn neutral"
            onClick={() => dispatch(onOpenNewCabinForm())}
          >
            Cancel
          </button>

          <button type="submit" className="btn positive">
            Create new cabin
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCabinForm;
