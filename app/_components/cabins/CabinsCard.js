"use client";

import CabinDeleteModal from "@/app/_components/cabins/CabinDeleteModal";
import {
  deleteCabinAction,
  duplicateCabinAction,
  editCabinAction,
} from "@/app/_lib/action";
import { formatCurrency } from "@/app/_lib/helpers";
import {
  onEditCabin,
  onOpenDeleteModal,
  onOpenNewCabinForm,
} from "@/app/_lib/redux/cabinSlice";
import { generateSkeletonDataURL } from "@/app/_lib/skeleton";
import { sono } from "@/app/_styles/font";
import {
  ClipboardCheck,
  Copy,
  EllipsisVertical,
  Eye,
  Minus,
  MoveRight,
  Pencil,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function CabinsCard({
  onClick,
  cabinOptionsId,
  cabinId,
  cabin,
  onOptimisticAddCabin,
}) {
  const skeletonURL = generateSkeletonDataURL(48, 50, "#eef2ff", "#e0e7ff");

  const dispatch = useDispatch();
  const ref = useRef(null);

  // async function handleDeleteCabin() {
  //   const result = await deleteCabinAction({ cabinId, cabinName: cabin?.name });
  //   if (result?.status === "success") {
  //     toast.success(result?.msg);
  //   } else if (result?.status === "fail") {
  //     toast.error(result?.msg);
  //   }
  // }

  function handleEditCabin() {
    dispatch(onOpenNewCabinForm("edit"));
    dispatch(onEditCabin(cabin));
  }

  async function handleDuplicateCabin() {
    const cabinData = { ...cabin, name: `${cabin.name} copy` };

    onOptimisticAddCabin(cabinData);

    delete cabinData?.id;

    const result = await duplicateCabinAction(cabinData);
    if (result?.status === "success") {
      toast.success(result?.successMsg);
    } else toast.error(result?.errorMsg);
  }

  return (
    <div className="cabins-card items-center  px-6  border-t border-gray-100  pl-0 py-0.5">
      {/* cabin image */}
      <div className="">
        <div className="relative lg:w-[90px] w-[70px] h-[50px] lg:h-[60px]">
          <Image
            src={cabin?.image}
            alt="cabin-image"
            fill
            className="object-cover "
            placeholder={skeletonURL ? "blur" : "empty"}
            blurDataURL={skeletonURL}
            priority={true}
          />
        </div>
      </div>

      {/* cabin name */}
      <p className={`text-sm ${sono.className} font-semibold`}>{cabin?.name}</p>

      {/* capacity */}
      <p className={`text-sm font-normal`}>
        {" "}
        Fits up to {cabin?.maxCapacity} guests
      </p>

      {/* price */}
      <p
        className={`text-[13.5px] font-semibold  text-gray-700 ${sono.className} `}
      >
        {formatCurrency(cabin?.regularPrice)}
      </p>

      {/* price */}
      <p
        className={`text-[13.5px] font-medium text-green-700 ${sono.className} pl-3`}
      >
        {cabin?.discount ? (
          formatCurrency(cabin?.discount)
        ) : (
          <Minus className="text-gray-800 size-5" />
        )}
      </p>

      {/* drop down */}
      <div className="justify-self-end booking-options relative cabin-card-options">
        <button onClick={onClick}>
          <EllipsisVertical color="#4b5563" className="size-5" />
        </button>

        {cabinOptionsId === cabinId && (
          <ul className="absolute right-0 z-10 options">
            <li onClick={handleDuplicateCabin}>
              <Copy className="size-4" /> <span>Duplicate</span>
            </li>
            <li onClick={handleEditCabin}>
              <Pencil className="size-4" /> <span>Edit cabin</span>
            </li>
            <li onClick={() => dispatch(onOpenDeleteModal())}>
              <Trash2 className="size-4" /> <span>Delete cabin</span>
            </li>
          </ul>
        )}
      </div>
      <CabinDeleteModal cabinId={cabinId} cabinName={cabin?.name} />
    </div>
  );
}

export default CabinsCard;
