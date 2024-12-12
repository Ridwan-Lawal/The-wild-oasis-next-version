import Image from "next/image";
import logoLight from "@/public/logo-light.png";
import { Bolt, Calendar, House, Users, Warehouse } from "lucide-react";
import SidebarLink from "@/app/_ui/SidebarLink";
import Home from "@/app/(admin)/page";

const SIDEBARNAV = [
  { name: "home", link: "/", icon: <House /> },
  { name: "bookings", link: "/bookings", icon: <Calendar /> },
  { name: "cabins", link: "/cabins", icon: <Warehouse /> },
  { name: "users", link: "/users-signup", icon: <Users /> },
  { name: "settings", link: "/settings", icon: <Bolt /> },
];

function Sidebar() {
  return (
    <div className="border border-black h-screen w-[280px] bg-white sidebar flex flex-col items-center justify-start  px-8 py-8 gap-12  z-20">
      {/* logo */}

      <div className="relative h-[108px] w-[200px] ">
        <Image
          src={logoLight}
          alt="logo"
          quality={100}
          fill
          className="object-contain"
        />
      </div>

      <ul className="flex flex-col gap-3 w-full">
        {SIDEBARNAV.map((nav) => (
          <SidebarLink key={nav.name} nav={nav} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
