"use server";
import { signIn } from "@/auth";

export default async function login() {
  await signIn("google", { redirectTo: "/" });
}
