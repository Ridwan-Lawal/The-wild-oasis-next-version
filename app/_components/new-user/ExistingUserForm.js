"use client";

import { userSigninAction } from "@/app/_lib/action";
import {
  getUserStates,
  toggleExistingUserPasswordVisibility,
} from "@/app/_lib/redux/userSlice";
import { EyeIcon, EyeOff } from "lucide-react";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function ExistingUserForm() {
  const [state, formAction, isPending] = useActionState(userSigninAction, null);

  const { isShowExistingUserPassword } = useSelector(getUserStates);
  const dispatch = useDispatch();

  //   password visibility
  const passwordRef = useRef(null);
  function handlePasswordVisibility() {
    const passwordField = passwordRef.current;
    dispatch(toggleExistingUserPasswordVisibility(passwordField.type));
  }

  console.log(state);

  useEffect(() => {
    if (state?.signinSuccess) {
      toast.success(state?.msg);
      redirect("/");
    }
    if (state?.signinSuccess === false) {
      toast.error(state?.msg);
    }
  }, [state]);

  return (
    <div className="w-full max-w-[500px] mt-7">
      <form action={formAction} className="sign-in">
        <div className="field">
          <label htmlFor="">Email address</label>
          <input type="text" name="email" id="email" className="" />
          {state?.email && <p className="error-msg">{state?.email?.at(0)}</p>}
        </div>

        <div className="field">
          <label htmlFor="password" className="">
            Password (min 8 characters)
          </label>
          <div>
            <div className="password">
              <input
                ref={passwordRef}
                type={isShowExistingUserPassword ? "text" : "password"}
                name="password"
                id="password"
                className="border-none focus:outline-none w-full"
              />

              <span
                className="cursor-pointer"
                onClick={handlePasswordVisibility}
              >
                {isShowExistingUserPassword ? (
                  <EyeOff className="text-gray-300 size-5" />
                ) : (
                  <EyeIcon className="text-gray-300 size-5" />
                )}
              </span>
            </div>
          </div>
          {state?.password && (
            <p className="text-[11px] italic text-red-500 font-normal mt-1">
              {state?.password.at(0)}
            </p>
          )}
        </div>

        <button
          default={isPending}
          className={`btn positive ${
            isPending ? "opacity-80" : "opacity-100"
          } `}
        >
          {isPending ? "Sign in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default ExistingUserForm;
