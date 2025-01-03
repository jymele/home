"use server";
// import { createHousehold, assignUserToHousehold } from "@/app/api/directus";
import { auth } from "@/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { createHousehold } from "@/app/api/supabase/household";
import { assignUserToHousehold } from "@/app/api/supabase/UserHouseholdAssignment";

export async function createHouseholdAction(name: string) {
  const session: Session | null = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const household = await createHousehold(name);

  await assignUserToHousehold(household[0].id, session.user!.email as string);

  if (household) {
    redirect("/");
  }
}
