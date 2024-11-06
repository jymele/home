"use client";
import { useState } from "react";
import Calendar from "react-calendar";

// import "react-calendar/dist/Calendar.css";
import "@/app/calendar.css";

export default function AddMealPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div>
      <h1>Add Meal</h1>
      <Calendar value={date} onChange={(value) => setDate(value as Date)} />
    </div>
  );
}
