"use client";

import { sono } from "@/app/_styles/font";
import {
  ClipboardCheck,
  EllipsisVertical,
  Eye,
  MoveRight,
  Trash2,
} from "lucide-react";
import Image from "next/image";

function CabinsCard({ onClick, cabinOptionsId, cabinId }) {
  return (
    <div className="cabins-card items-center  px-6  border-t border-gray-100  pl-0 py-0.5">
      {/* cabin image */}
      <div className="">
        <div className="relative lg:w-[90px] w-[70px] h-[50px] lg:h-[60px] ">
          <Image
            src="/unsplash.jpg"
            alt="cabin-image"
            fill
            className="object-contain "
          />
        </div>
      </div>

      {/* cabin name */}
      <p className={`text-sm ${sono.className} font-semibold`}>001</p>

      {/* capacity */}
      <p className={`text-sm font-normal`}> Fits up to 4 guests</p>

      {/* price */}
      <p
        className={`text-[13.5px] font-semibold  text-gray-700 ${sono.className} `}
      >
        $300.00
      </p>

      {/* price */}
      <p
        className={`text-[13.5px] font-medium text-green-700 ${sono.className}`}
      >
        $30.00
      </p>

      {/* drop down */}
      <div className="justify-self-end booking-options relative cabin-card-options">
        <button onClick={onClick}>
          <EllipsisVertical color="#4b5563" className="size-5" />
        </button>

        {cabinOptionsId === cabinId && (
          <ul className="absolute right-0 z-10 ">
            <li>
              <Eye className="size-4" /> <span>See details</span>
            </li>
            <li>
              <ClipboardCheck className="size-4" /> <span>Check in </span>
            </li>
            <li>
              <Trash2 className="size-4" /> <span>Delete booking</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default CabinsCard;
