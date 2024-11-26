import { supabase } from "@/app/api/supabase/init";

export async function addMeal(
  date: string,
  mealName: string,
  notes: string,
  householdId: string
) {
  const { data, error } = await supabase
    .from("meal")
    .insert([{ date, meal_name: mealName, notes, householdId: householdId }])
    .select();

  if (error) {
    throw error;
  }

  return data;
}
