"use server";
import { createClient } from "@/app/_lib/supabase/server";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const User = z.object({
  fullname: z
    .string()
    .min(4, { message: "Name must be more that 4 characters " })
    .max(50, { message: "Name must not exceed 50 characters " }),

  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string({ message: "Please enter a password" })
    .min(8, { message: "Password must be 8 characters or more" }),

  repeatPassword: z.boolean({ message: "Password doesn't match!" }),
});

// come back here when you have authenticated
export async function onFilterAction(filterType) {
  // 1. Check if the user trying to call the server action is a logged in user - IMPORTANT
  //   2. check if the data the user is trying to mutate is a logged-in user - not needed
  //   3. Build the data and ensure the input are save
  //   4. mutate the data
}

// For adding new cabin

export async function addNewCabinAction(formData) {
  // console.log(formData.get("cabin-photo"));
  const file = formData.get("cabin-photo");
  const filename = `${uuidv4()}-${file.name}`;

  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from("Cabins")
    .upload(filename, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw new Error(error.message);

  console.log(data);

  const { data: publicData } = supabase.storage
    .from("Cabins")
    .getPublicUrl(data?.path);
  console.log(publicData);

  // Add the public data, which is the image stored in the storage url
}

// Authentication

export async function userSignupAction(prevState, formData) {
  // 3
  // Build the data
  const usersFormCredential = {
    fullname: formData.get("fullname"),
    email: formData.get("email-address"),
    password: formData.get("password"),
    repeatPassword:
      formData.get("password") === formData.get("repeat-password")
        ? true
        : "not-true",
  };

  // Ensuring the input are safe
  const usersData = User.safeParse(usersFormCredential);

  if (!usersData?.success) {
    return usersData?.error?.flatten()?.fieldErrors;
  }

  //4. Mutation
  const supabase = await createClient();

  const { data, error: signupError } = await supabase.auth.signUp({
    email: usersData?.data?.email,
    password: usersData?.data?.fullname,
    data: {
      first_name: usersData?.data?.fullname?.split(" ")?.[0],
    },
  });

  if (!data?.user?.role) {
    return {
      signupStatus: "fail",
      errors: "User already exists!",
    };
  }

  if (signupError) {
    return {
      signupStatus: "fail",
      errors: signupError.message,
    };
  }

  return {
    signupStatus: "success",
    successMsg: "Account registered successfully!",
  };
}
