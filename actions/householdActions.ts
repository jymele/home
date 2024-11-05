"use server";
import { createHousehold, assignUserToHousehold } from "@/app/api/directus";
import { auth } from "@/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export async function createHouseholdAction(formData: FormData) {
  const session: Session | null = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const household = await createHousehold(formData.get("name") as string);

  console.log("household", household);

  await assignUserToHousehold(household.id, session.user!.email as string);

  if (household) {
    redirect("/");
  }
}
