import logo from "@/public/logo-light.png";
import { EyeIcon } from "lucide-react";
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

      <div className="w-full max-w-[450px] mt-7">
        <form action="" className="sign-in">
          <div className="field">
            <label htmlFor="">Email address</label>
            <input type="text" name="email" id="email" className="" />
            {/* <p className="error-msg">there is an error</p> */}
          </div>

          <div className="field">
            <label htmlFor="password" className="">
              Password (min 8 characters)
            </label>
            <div>
              <div className="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-none focus:outline-none"
                />

                <span className="cursor-pointer">
                  {/* // <EyeOff className="text-gray-300 size-5" /> */}
                  <EyeIcon className="text-gray-300 size-5" />
                </span>
              </div>
            </div>
            {/* {state?.password && (
              <p className="text-[11px] italic text-color-red-dark font-normal mt-1">
                {state?.password}
              </p>
            )} */}
          </div>

          <button className="btn positive">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
