"use client";

import { deleteCabinAction } from "@/app/_lib/action";
import { getCabinStates, onOpenDeleteModal } from "@/app/_lib/redux/cabinSlice";
import { useActionState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CabinDeleteModal({ cabinId, cabinName }) {
  const { isDeleteModalOpen } = useSelector(getCabinStates);
  const dispatch = useDispatch();
  const [state, formAction, isPending] = useActionState(
    deleteCabinAction,
    null
  );

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.msg);
      dispatch(onOpenDeleteModal());
    } else if (state?.status === "fail") {
      toast.error(state?.msg);
    }
  }, [state, dispatch]);

  return (
    <div
      className={`fixed w-screen bg-opacity-20 top-0 left-0 backdrop-blur-sm z-40 bg-black  flex items-center justify-center ${
        isDeleteModalOpen
          ? "h-screen opacity-100"
          : "h-0 overflow-hidden opacity-0"
      } transition-opacity`}
    >
      <div
        className={`bg-white max-w-[480px] mx-auto py-8  px-10 rounded-md ${
          isDeleteModalOpen ? "scale-100" : "scale-90"
        } transition-transform`}
      >
        <h3 className="text-xl text-gray-900">
          Delete cabin {`"${cabinName}"`}
        </h3>
        <p className="text-[13.5px] font-normal mt-2">
          Are you sure you want to delete this cabins permanently? This action
          cannot be undone.
        </p>

        <div className="mt-7 flex items-center justify-end gap-4">
          <button
            className="btn neutral"
            onClick={() => dispatch(onOpenDeleteModal())}
          >
            Cancel
          </button>

          <form action={formAction}>
            <input type="hidden" name="cabinId" value={cabinId} />
            <input type="hidden" name="cabinName" value={cabinName} />
            <button disabled={isPending} className="btn negative">
              {isPending ? "Deleting..." : "Delete"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CabinDeleteModal;

// use uptimistic for the duplicate
// the filter for the cabin and the booking
