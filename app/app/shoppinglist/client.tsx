"use client";
import { useState } from "react";
import { createShoppingItem } from "@/app/actions/addShoppingItem";

type Props = {
  householdid: string;
};

export default function Client(props: Props) {
  const { householdid } = props;

  return (
    <>
      Shopping List
      <form className="flex gap-2" action={createShoppingItem}>
        <input name="item" placeholder="Shopping item..." />
        <input name="householdid" type="hidden" value={householdid} />
        <button>Add</button>
      </form>
    </>
  );
}
