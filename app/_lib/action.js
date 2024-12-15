"use server";
import { createClient } from "@/app/_lib/supabase/server";
import { v4 as uuidv4 } from "uuid";
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

//
