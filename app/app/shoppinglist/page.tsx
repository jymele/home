import Client from "./client";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { getHouseholdByUserEmail } from "@/app/api/directus";

export default async function ShoppingListPage() {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  const household = await getHouseholdByUserEmail(
    session.user?.email as string
  );

  return (
    <>
      <Client householdid={household.household_id} />
    </>
  );
}
