"use client";
import { useState } from "react";
import Calendar from "react-calendar";

// import "react-calendar/dist/Calendar.css";
import "@/app/calendar.css";

export default function AddMealPage() {
  const [date, setDate] = useState<Date>(new Date());
  const [calendar, setCalendar] = useState(false);

  function toggleCalendar(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCalendar(!calendar);
  }

  return (
    <form>
      <h1>Add Meal</h1>
      <div className="relative">
        <button className="p-4 rounded" onClick={toggleCalendar}>
          <input
            className="-z-10"
            type="text"
            value={date.toDateString()}
            disabled
            readOnly
          />
        </button>
        {calendar && (
          // <div className="absolute">
          <div>
            <Calendar
              value={date}
              onChange={(value) => setDate(value as Date)}
            />
          </div>
        )}
      </div>
      <div>
        <label>
          <input type="text" name="name" placeholder="meal" />
        </label>
      </div>
    </form>
  );
}
