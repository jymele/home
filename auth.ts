import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github"

// https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // GitHub
  ],
});
