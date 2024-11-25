import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { getHouseholdByUserEmail } from "@/app/api/supabase/UserHouseholdAssignment";

export default async function Home() {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  const { data, error } = await getHouseholdByUserEmail(
    session.user?.email as string
  );

  // console.log("Here is the data", data);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data?.length === 0) {
    redirect("/household");
  }

  return (
    <div>
      {/* <h1>Hi {session.user?.name}</h1> */}
      <h1>New Test</h1>
    </div>
  );
}
