"use client";
import { createHouseholdAction } from "@/actions/householdActions";
import { useState } from "react";

export default function Household() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [householdName, setHouseholdName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await createHouseholdAction(householdName);
    setIsSubmitting(false);
    setHouseholdName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Household Name"
            className="rounded-md border border-slate-500/20 w-full p-2 text-xs"
            value={householdName}
            onChange={(e) => setHouseholdName(e.target.value)}
          />
        </div>
        <button
          className="bg-slate-950 text-slate-50 mt-4 w-full py-1 text-sm transition duration-300 active:scale-95 disabled:bg-slate-950/40 hover:bg-slate-700 rounded-md"
          type="submit"
          disabled={isSubmitting}
        >
          Create
        </button>
      </form>
    </>
  );
}
