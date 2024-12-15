import NewUserForm from "@/app/_components/new-user/NewUserForm";

export const metadata = {
  title: "Users Registration",
};

function page() {
  return (
    <div>
      <h1>Create a new user</h1>
      <NewUserForm />
    </div>
  );
}

export default page;
