"use server";
import { createClient } from "@/app/_lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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

const ExistingUser = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters or more" })
    .max(50, { message: "Password cannot exceed 59 characters, sorry!" }),
});

const Cabin = z.object({
  name: z
    .string()
    .min(3, { message: "Cabin name must exceed 3 chaaracters or more." })
    .max(50, { message: "Cabin name cannot not exceed 50 characters" }),
  maxCapacity: z
    .number()
    .min(2, { message: "Maximum capacity must be 2 or more" }),
  regularPrice: z.number().min(50, { message: "Price must be 50$ or more" }),
  discount: z.number({
    message: "Discount cannot be more than the regular price",
  }),
  image: z.string(),
  description: z
    .string()
    .min(3, { message: "Description must not be less that 3 characters" })
    .max(1000, { message: "Description cannot exceed a thousand characters." }),
});

// come back here when you have authenticated
export async function onFilterAction(filterType) {
  // 1. Check if the user trying to call the server action is a logged in user - IMPORTANT
  //   2. check if the data the user is trying to mutate is a logged-in user - not needed
  //   3. Build the data and ensure the input are save
  //   4. mutate the data
}

// For adding new cabin

export async function addNewCabinAction(prevState, formData) {
  // 1. check if there is a current session
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return {
      status: "fail",
      msg: "You must be signed in to add a new cabin!",
    };
  }

  // 3. Building the data and ensure the input are safe
  const newCabin = Object.fromEntries(formData.entries());
  const cabinId = formData.get("cabinId");
  const cabinMutationType = formData.get("cabinMutationType");
  const newCabinsData = {
    name: newCabin.name,
    maxCapacity: +newCabin.maxCapacity,
    regularPrice: +newCabin.regularPrice,
    discount:
      +newCabin.discount < +newCabin.regularPrice || +newCabin.discount === 0
        ? +newCabin.discount
        : "Discount exceeds regular price",
    image: newCabin?.image?.name,
    description: newCabin.description,
  };

  const cabinDataValidation = Cabin.safeParse(newCabinsData);

  if (!cabinDataValidation?.success) {
    return cabinDataValidation?.error?.flatten()?.fieldErrors;
  }

  // 4. perform muataltion

  // adding image to storage
  const file = formData.get("image");
  const filename = `${uuidv4()}-${file?.name}`;

  const { data, error } = await supabase.storage
    .from("Cabins")
    .upload(filename, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw new Error(error.message);

  // Getting the public url of the image
  const { data: publicData } = supabase.storage
    .from("Cabins")
    .getPublicUrl(data?.path);
  console.log(publicData.publicUrl);

  // adding the new cabin to the cabins table with the image public url

  let query = supabase.from("Cabins");

  if (cabinMutationType === "create") {
    query = query.insert([
      { ...cabinDataValidation?.data, image: publicData?.publicUrl },
    ]);
  } else if (cabinMutationType === "edit") {
    query = query
      .update({ ...cabinDataValidation?.data, image: publicData?.publicUrl })
      //this cabinId is the cabin to edit id, that  i passed into the server action using the hidden input field
      .eq("id", cabinId);
  }

  const { error: cabinsError } = await query.select();

  if (cabinsError) {
    return {
      status: "fail",
      msg: cabinsError?.message,
    };
  }

  revalidatePath("/cabins");

  return cabinMutationType === "create"
    ? {
        status: "success",
        msg: "New cabin successfully created :)",
      }
    : {
        status: "success",
        msg: "Cabin successfully updated :)",
      };
}

export async function deleteCabinAction(prevState, formData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "fail",
      msg: "You need to be signed in to delete this cabin!",
    };
  }

  const cabinId = formData.get("cabinId");
  const cabinName = formData.get("cabinName");

  const { error } = await supabase.from("Cabins").delete().eq("id", cabinId);

  if (error) {
    return {
      status: "fail",
      msg: error.message,
    };
  }

  revalidatePath("/cabins");

  return {
    status: "success",
    msg: `Cabin "${cabinName}" successfully deleted`,
  };
}

export async function editCabinAction(cabinId) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "fail",
      msg: "You need to be signed in to edit this cabin",
    };
  }

  // Getting the cabins data
  const { data: Cabins, error: cabinsError } = await supabase
    .from("Cabins")
    .select("*")
    .eq("id", cabinId);

  if (cabinsError) {
    return {
      status: "fail",
      msg: cabinsError.message,
    };
  }

  return Cabins?.at(0);
}

// update cabin
export async function duplicateCabinAction(cabinToDuplicateData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return {
      status: "fail",
      errorMsg: "You need to be signed in to perform this mutation",
    };
  }

  const { error } = await supabase
    .from("Cabins")
    .insert([cabinToDuplicateData])
    .select();

  if (error) {
    return {
      status: "fail",
      errorMsg: error.message,
    };
  }

  revalidatePath("/cabins");

  return {
    status: "success",
    successMsg: "New cabin successfully created :)",
  };
}

// filter cabins

// export async function filterCabinsAction(filterType) {
//   // current session
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.user();

//   if (!user) {
//     return {
//       success: false,
//       error: "You need to be signed it to call this action",
//     };

//     // mutation
//   }
// }

// Authentication

export async function userSignupAction(
  prevState,
  formData,
  userRole = "admin"
) {
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
      userRole,
    },
    options: {
      autoConfirm: false,
      shouldCreateSession: false,
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

  // if account created successfully, add user to the profiles table

  const { error: userProfileError } = await supabase
    .from("profiles")
    .insert([{ user_id: data?.user?.id, user_role: userRole }])
    .select();

  if (userProfileError) {
    return {
      signupStatus: "fail",
      errors: userProfileError.message,
    };
  }

  return {
    signupStatus: "success",
    successMsg: "Account registered successfully!",
  };
}

export async function userSigninAction(prevState, formData) {
  //3. building the data and ensure the input are safe
  const userCred = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const user = ExistingUser.safeParse(userCred);

  if (!user?.success) {
    return user?.error?.flatten().fieldErrors;
  }

  //4. mutation
  const supabase = await createClient();
  const { data: signinUser, error: signinError } =
    await supabase.auth.signInWithPassword({
      email: user?.data?.email,
      password: user?.data?.password,
    });

  if (signinError) {
    return {
      signinSuccess: false,
      msg: signinError.message,
    };
  }

  console.log(signinUser);
  // revalidating the router cache
  // next 15

  // redirect
  // going to be redirecting if the signinSuccess is true in the useEffect in the form component
  return {
    signinSuccess: true,
    msg: "Login successful",
  };
}

export async function userSignOutAction() {
  const supabase = createClient();

  // Checking if there is a current session
  const session = await supabase?.auth?.getUser();

  if (session?.data?.user) {
    return {
      signoutSuccess: false,
      errorMsg: "You must be signed in, in order to sign out",
    };
  }

  // mutation (Log out)

  const result = await supabase?.auth?.signOut();

  if (result?.error) {
    return {
      signoutSuccess: false,
      errorMsg: "Unable to sign out. Try again :(",
    };
  }

  return {
    signOutSuccess: true,
  };
}
