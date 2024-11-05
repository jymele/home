import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";
import { Household, UserHouseholdAssignment } from "@/types/household";

type DBSchema = {
  households: Household[];
  user_household_assignments: UserHouseholdAssignment[];
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
