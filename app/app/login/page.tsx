import { signIn } from "@/auth";

export default function Login() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}
