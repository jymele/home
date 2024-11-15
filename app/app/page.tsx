import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { getHouseholdByUserEmail } from "./api/directus";

export default async function Home() {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  /**
   * Check in the database if the user session.user?.email is assigned to any room.
   * If he is not assigned to any room, redirect to /rooms to create a new room.
   */
  const userHouseholdAssignment = await getHouseholdByUserEmail(
    session.user?.email as string
  );
  if (!userHouseholdAssignment) {
    redirect("/household");
  }

  return (
    <div>
      <h1>Hi {session.user?.name}</h1>
    </div>
  );
}
