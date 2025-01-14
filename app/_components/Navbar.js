import Spinner from "@/app/_components/Spinner";
import { LogOut, Moon, User } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <header>
      <nav className="border w-full py-4 bg-white navbar flex justify-end pr-10">
        <div className="flex items-center gap-8  ">
          {/* avatar */}
          <div className="flex items-center gap-3">
            <div className="relative w-[33px] h-[33px] rounded-full overflow-hidden ">
              <Image
                src="/default-user.jpg"
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[14px]">Ridwan</p>
          </div>

          {/* icons */}
          <div className="text-color-brand-2  flex items-center gap-3.5 text-sm icons">
            <button>
              <User className="size-5" />
            </button>

            <button>
              <Moon className="size-5" />
            </button>

            <button>
              <LogOut className="size-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
