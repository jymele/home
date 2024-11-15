import {
  createDirectus,
  readItems,
  rest,
  staticToken,
  createItem,
} from "@directus/sdk";
import { Household, UserHouseholdAssignment } from "@/types/household";
import { Meal } from "@/types/meal";
import { ShoppingItem } from "@/types/shoppingitem";

type DBSchema = {
  households: Household[];
  user_household_assignments: UserHouseholdAssignment[];
  meals: Meal[];
  shoppingitems: ShoppingItem[];
};

const client = createDirectus<DBSchema>(process.env.DIRECTUS_URL!)
  .with(staticToken(process.env.DIRECTUS_TOKEN!))
  .with(rest());

export async function getHouseholdByUserEmail(email: string) {
  const data = await client.request(
    readItems("user_household_assignments", {
      filter: { user_email: { _eq: email } },
    })
  );

  return data[0];
}

export async function createHousehold(name: string) {
  return await client.request(
    createItem("households", {
      name,
    })
  );
}

export async function assignUserToHousehold(
  householdId: string,
  userEmail: string
) {
  return await client.request(
    createItem("user_household_assignments", {
      household_id: householdId,
      user_email: userEmail,
    })
  );
}

export async function addShoppingItem(name: string, householdId: string) {
  const res = await client.request(
    createItem("shoppingitems", {
      name: name,
      household: householdId,
      bought: false,
    })
  );
}
