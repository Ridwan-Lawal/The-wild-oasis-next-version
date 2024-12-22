"use client";

import { userSignOutAction } from "@/app/_lib/action";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

function Signout() {
  const [state, formAction, isPending] = useActionState(
    userSignOutAction,
    null
  );

  useEffect(() => {
    if (state?.signOutSuccess) {
      toast.success("Bye, see you again soon :)");
      redirect("/sign-in");
    } else if (state?.signoutSuccess === false) {
      toast.error(state?.errorMsg);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button disabled={isPending}>
        {isPending ? "Lo..." : <LogOut className="size-5" />}
      </button>
    </form>
  );
}

export default Signout;
