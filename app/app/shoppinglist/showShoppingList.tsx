"use client";
import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";

type Props = {
  householdid: string;
};

type ShoppingItem = {
  id: string;
  name: string;
  bought: boolean;
};

export default function ShowShoppingList(props: Props) {
  const { householdid } = props;
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [loading, setLoading] = useState(true);

  // TODO: have the list refresh automatically when an item is added

  useEffect(() => {
    // fetch shopping list
    refreshList();
  }, []);

  function refreshList(): void {
    setShoppingList([]);
    setLoading(true);
    fetch(`/api/directus/shoppinglist?householdid=${householdid}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item: ShoppingItem) => {
          setShoppingList((prev) => [...prev, item]);
        });
      })
      .then(() => setLoading(false));
  }

  return (
    <div className="mt-6">
      <div className="flex gap-4 items-center">
        <h2 className="flex-1">The List</h2>
        <button
          className="bg-slate-900 text-slate-50 p-2 rounded-md disabled:opacity-50"
          onClick={refreshList}
          disabled={loading}
        >
          <RefreshCcw />
        </button>
      </div>

      <div className="mt-4">
        {loading && <div>Loading...</div>}
        {!loading && shoppingList.length === 0 && (
          <div>No items in the list</div>
        )}
        {!loading && (
          <ul className="grid grid-cols-3 gap-2">
            {shoppingList.map((item) => (
              <li key={item.id}>
                <div className="bg-blue-500 p-2 flex items-center justify-center text-slate-50 rounded-md min-h-24">
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
