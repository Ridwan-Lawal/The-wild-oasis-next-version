"use client";

import { userSignupAction } from "@/app/_lib/action";
import {
  getUserStates,
  togglePasswordVisibility,
} from "@/app/_lib/redux/userSlice";
import { EyeIcon, EyeOff, XIcon } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function NewUserForm() {
  const passwordRef = useRef(null);
  const { isShowPassword } = useSelector(getUserStates);
  const dispatch = useDispatch();
  const [state, formAction, isPending] = useActionState(userSignupAction, null);

  console.log(state, state?.errors);

  function handleShowPassword() {
    const passwordInputField = passwordRef.current;

    console.log(passwordInputField.type);
    if (passwordInputField.type === "password") {
      dispatch(togglePasswordVisibility("password"));
    }
    if (passwordInputField.type === "text") {
      dispatch(togglePasswordVisibility("text"));
    }

    console.log(passwordInputField.type, "after");
    console.log(isShowPassword);
  }

  useEffect(() => {
    if (state?.signupStatus === "success") {
      toast.success(state?.successMsg);
    } else if (state?.signupStatus === "fail") {
      toast.error(state?.errors);
    }
  }, [state]);

  return (
    <div className="registration py-8">
      <form action={formAction} className="modal">
        {/* cabin name */}
        <div className="field">
          <label htmlFor="fullname" className="">
            Fullname
          </label>
          <div>
            <input type="text" name="fullname" id="fullname" className="" />
            {state?.fullname && (
              <p className="text-[11px] italic text-color-red-dark font-normal mt-1">
                {state?.fullname}
              </p>
            )}
          </div>
        </div>

        {/* Maximum capacity */}
        <div className="field">
          <label htmlFor="email-address" className="">
            Email address
          </label>
          <div>
            <input type="text" name="email-address" id="email-address" />
            {state?.email && (
              <p className="text-[11px] italic text-color-red-dark font-normal mt-1">
                {state?.email}
              </p>
            )}
          </div>
        </div>

        {/* Regular Price */}
        <div className="field">
          <label htmlFor="password" className="">
            Password (min 8 characters)
          </label>
          <div>
            <div className="password">
              <input
                ref={passwordRef}
                type={isShowPassword ? "text" : "password"}
                name="password"
                id="password"
                className="border-none focus:outline-none"
              />

              <span className="cursor-pointer" onClick={handleShowPassword}>
                {isShowPassword ? (
                  <EyeOff className="text-gray-300 size-5" />
                ) : (
                  <EyeIcon className="text-gray-300 size-5" />
                )}
              </span>
            </div>
            {state?.password && (
              <p className="text-[11px] italic text-color-red-dark font-normal mt-1">
                {state?.password}
              </p>
            )}
          </div>
        </div>

        {/* discount */}
        <div className="field">
          <label htmlFor="repeat-password" className="">
            Repeat password
          </label>
          <div>
            <div className="password">
              <input
                type={isShowPassword ? "text" : "password"}
                name="repeat-password"
                id="repeat-password"
                className="border-none focus:outline-none"
              />
              <span className="cursor-pointer" onClick={handleShowPassword}>
                {isShowPassword ? (
                  <EyeOff className="text-gray-300 size-5" />
                ) : (
                  <EyeIcon className="text-gray-300 size-5" />
                )}
              </span>
            </div>
            {state?.repeatPassword && (
              <p className="text-[11px] italic text-color-red-dark font-normal mt-1">
                {state?.repeatPassword}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 items-center justify-end ">
          <button type="reset" className="btn neutral">
            Cancel
          </button>

          <button
            disabled={isPending}
            type="submit"
            className={`btn positive ${
              isPending ? "opacity-80" : "opacity-100"
            } `}
          >
            {isPending ? "Creating account..." : "Create new account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;

// fix the show password
// start the authentication, (sign up, then the sign in)
