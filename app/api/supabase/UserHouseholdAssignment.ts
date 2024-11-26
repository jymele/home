import { supabase } from "./init";

export async function getHouseholdByUserEmail(user_email: string) {
  const { data, error } = await supabase
    .from("user_household_assignment")
    .select("*")
    .eq("user_email", user_email);

  if (error) {
    throw error;
  }

  // return { data, error };
  return data[0];
}

export async function assignUserToHousehold(
  household_id: string,
  user_email: string
) {
  const { data, error } = await supabase
    .from("user_household_assignment")
    .insert([{ household_id, user_email, is_admin: true }])
    .select();

  if (error) {
    throw error;
  }

  return data;
}
