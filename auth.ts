import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
});
