"use client";

import {
  getUserStates,
  togglePasswordVisibility,
} from "@/app/_lib/redux/userSlice";
import { EyeIcon, EyeOff, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function NewUserForm() {
  const passwordRef = useRef(null);
  const { isShowPassword } = useSelector(getUserStates);
  const dispatch = useDispatch();

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
  return (
    <div className="registration py-8">
      <form action="" className="modal">
        {/* cabin name */}
        <div className="field">
          <label htmlFor="fullname" className="">
            Fullname
          </label>
          <input type="text" name="fullname" id="fullname" className="" />
        </div>

        {/* Maximum capacity */}
        <div className="field">
          <label htmlFor="email-address" className="">
            Email address
          </label>
          <input type="text" name="email-address" id="email-address" />
        </div>

        {/* Regular Price */}
        <div className="field">
          <label htmlFor="password" className="">
            Password (min 8 characters)
          </label>
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
        </div>

        {/* discount */}
        <div className="field">
          <label htmlFor="repeat-password" className="">
            Repeat password
          </label>
          <div className="password">
            <input
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
        </div>

        <div className="flex gap-4 items-center justify-end ">
          <button type="reset" className="btn neutral">
            Cancel
          </button>

          <button type="submit" className="btn positive">
            Create new cabin
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;

// fix the show password
// start the authentication, (sign up, then the sign in)
