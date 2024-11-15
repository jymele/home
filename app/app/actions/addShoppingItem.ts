"use server";
import { addShoppingItem } from "@/app/api/directus";

export async function createShoppingItem(formData: FormData) {
  const item = formData.get("item");
  const householdid = formData.get("householdid");

  addShoppingItem(item as string, householdid as string);
}
