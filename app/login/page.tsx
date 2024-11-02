export default function Login() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4">
        Login
        <div>
          <input name="username" placeholder="Username" />
        </div>
        <div>
          <input name="password" placeholder="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
