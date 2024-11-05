import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household",
  description: "Create a household",
};

export default async function Household() {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  return <div>Household</div>;
}
