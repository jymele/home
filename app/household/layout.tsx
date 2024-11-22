import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household",
  description: "Create a household",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-md border border-slate-500/20 bg-white shadow-sm">
        <header>
          <h1 className="text-center font-semibold mb-4">Create a Household</h1>
        </header>
        {children}
      </div>
    </div>
  );
}
