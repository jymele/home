import Link from "next/link";
import { UserRound, Sandwich, House } from "lucide-react";
import styles from "./toolbar.module.css";

export default function Toolbar() {
  return (
    <div className="fixed bottom-0 left-0  w-screen bg-white">
      <div className={styles.toolbar}>
        <div>
          <Link className={styles.link} href="/">
            <House />
          </Link>
        </div>
        <div>
          <Link className={styles.link} href={"/meal"}>
            <Sandwich />
          </Link>
        </div>
        <div>
          <Link className={styles.link} href="/profile">
            <UserRound />
          </Link>
        </div>
      </div>
    </div>
  );
}
