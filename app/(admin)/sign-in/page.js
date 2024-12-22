import ExistingUserForm from "@/app/_components/new-user/ExistingUserForm";
import logo from "@/public/logo-light.png";

import Image from "next/image";

export const metadata = {
  title: "Sign in",
};

function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* logo */}
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={logo}
          alt="Logo"
          quality={100}
          fill
          className="object-contain"
        />
      </div>

      <h1 className="mt-3">Sign in into your account</h1>

      <ExistingUserForm />
    </div>
  );
}

export default Page;
