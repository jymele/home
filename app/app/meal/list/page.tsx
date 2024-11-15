"use client";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ListMealPage() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    // Fetch meals for date
  }, [date]);

  return (
    <div>
      <Calendar
        value={date as Date}
        onChange={(value) => {
          setDate(value as Date);
        }}
      />
      <div className="my-4">
        <div className="p-4 bg-slate-700 rounded">Meal display</div>
        <div>{date.toDateString()}</div>
      </div>
      <Link href="/meal/add" className="bg-blue-500 inline-block p-2 rounded">
        <Plus />
      </Link>
    </div>
  );
}
