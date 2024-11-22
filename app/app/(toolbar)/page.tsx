import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { supabase } from "@/app/api/supabase/init";
import { getHouseholdByUserEmail } from "@/app/api/supabase/UserHouseholdAssignment";
import { get } from "http";

export default async function Home() {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  const { data, error } = await getHouseholdByUserEmail(
    session.user?.email as string
  );

  console.log("Here is the data", data);

  if (data?.length === 0) {
    redirect("/household");
  }

  return (
    <div>
      <h1>Hi {session.user?.name}</h1>
    </div>
  );
}
