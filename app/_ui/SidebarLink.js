"use client";

import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarLink({ nav }) {
  const pathname = usePathname();

  const linkIsActive = pathname === nav.link;

  return (
    <Link href={nav.link}>
      <li
        className={` px-6 py-3 rounded-md ${
          linkIsActive && "bg-[#f9fdfd]"
        } hover:bg-[#f8fafc] transition-colors duration-300 group`}
      >
        <span
          className={`${
            linkIsActive ? "text-[#4f46e5]" : "text-[#9c9c9c]"
          } group-hover:text-[#4f46e5] duration-300 transition-colors`}
        >
          {nav.icon}
        </span>
        <span
          className={`capitalize ${
            linkIsActive && ["text-[#333c4b]"]
          } hover:text-[#333c4b]`}
        >
          {nav.name}
        </span>
      </li>
    </Link>
  );
}

export default SidebarLink;
