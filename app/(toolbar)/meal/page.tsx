import { getHouseholdByUserEmail } from "@/app/api/supabase/UserHouseholdAssignment";
import List from "./list";
import { auth } from "@/auth";
import { Session } from "next-auth";

export default async function Page() {
  const session: Session = (await auth()) as Session;
  const household = await getHouseholdByUserEmail(
    session.user!.email as string
  );

  return (
    <>
      <List id={household.household_id} />
    </>
  );
}
