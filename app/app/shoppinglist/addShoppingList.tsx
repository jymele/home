"use client";
import { createShoppingItem } from "@/app/actions/addShoppingItem";
import { Plus } from "lucide-react";

type Props = {
  householdid: string;
};

export default function AddShoppingList(props: Props) {
  const { householdid } = props;

  return (
    <>
      Shopping List
      <form className="flex gap-2 mt-4" action={createShoppingItem}>
        <input
          className="flex-1 p-2 rounded-md shadow-sm"
          name="item"
          placeholder="Shopping item..."
          required
        />

        <input name="householdid" type="hidden" value={householdid} />
        <button className="p-2 bg-slate-900 text-slate-50 rounded-md transition duration-300 ease-out hover:bg-blue-500">
          <Plus />
        </button>
      </form>
    </>
  );
}
