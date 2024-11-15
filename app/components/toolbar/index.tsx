import Link from "next/link";

export default function Toolbar() {
  return (
    <div className="fixed bottom-0 md:bottom-2 w-screen">
      <div className="flex gap-4 mx-auto w-fit">
        <div>
          <Link href="/">Home</Link>
        </div>
        {/* <div>
          <Link href="/household">Household</Link>
        </div> */}
        <div>
          <Link href={"/meal/list"}>Meals</Link>
        </div>
        <div>
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
}
