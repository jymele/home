import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import type { Metadata } from "next";
import { createHouseholdAction } from "@/actions/householdActions";

export const metadata: Metadata = {
  title: "Household",
  description: "Create a household",
};

export default async function Household() {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      Create a Household
      <form action={createHouseholdAction}>
        <div>
          <input type="text" name="name" placeholder="Household Name" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
