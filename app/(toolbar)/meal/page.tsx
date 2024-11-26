import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Meal</h1>
      <Link href="/meal/add">Add a meal</Link>
    </div>
  );
}
