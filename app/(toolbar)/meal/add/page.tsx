import AddMealForm from "./form";
import { auth } from "@/auth";
import { getHouseholdByUserEmail } from "@/app/api/supabase/UserHouseholdAssignment";
import { Session } from "next-auth";

export default async function Page() {
  const session: Session | null = await auth();

  const data = await getHouseholdByUserEmail(session!.user!.email as string);
  const householdId = data.household_id;

  return (
    <>
      <AddMealForm householdId={householdId} />
    </>
  );
}
