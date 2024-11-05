import { signOut } from "@/auth";

export default function Logout() {
  return (
    <form
      className="p-2 absolute top-4 right-4"
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
