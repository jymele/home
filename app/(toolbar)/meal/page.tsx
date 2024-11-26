"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <h1>Meal</h1>
      <Link href="/meal/add">Add a meal</Link>

      <Calendar selected={date} onSelect={setDate} className="" />
    </div>
  );
}
