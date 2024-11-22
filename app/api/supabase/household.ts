import { supabase } from "./init";

export async function createHousehold(name: string) {
  const { data, error } = await supabase
    .from("household")
    .insert([{ name }])
    .select();

  if (error) {
    throw error;
  }

  return data;
}
