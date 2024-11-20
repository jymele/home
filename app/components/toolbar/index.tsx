import Link from "next/link";
import { UserRound, Sandwich, ShoppingCart, House } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="fixed bottom-0 left-0  w-screen bg-slate-50">
      <div className="flex gap-4 mx-auto w-fit p-2">
        <div>
          <Link className="toolbar-link" href="/">
            <House />
          </Link>
        </div>
        <div>
          <Link className="toolbar-link" href={"/meal/list"}>
            <Sandwich />
          </Link>
        </div>
        <div>
          <Link className="toolbar-link" href="/shoppinglist">
            <ShoppingCart />
          </Link>
        </div>
        <div>
          <Link className="toolbar-link" href="/profile">
            <UserRound />
          </Link>
        </div>
      </div>
    </div>
  );
}
