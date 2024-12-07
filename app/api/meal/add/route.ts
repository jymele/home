import { addMeal } from "@/app/api/supabase/meal";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const meal_name = url.searchParams.get("meal");
  const date = url.searchParams.get("date");
  const notes: string = url.searchParams.get("notes") || "";
  const householdId = url.searchParams.get("householdId");

  if (!meal_name) {
    return new Response("meal is required", { status: 400 });
  } else if (!date) {
    return new Response("date is required", { status: 400 });
  } else if (!householdId) {
    return new Response("householdId is required", { status: 400 });
  }

  const data = await addMeal(date!, meal_name!, notes, householdId!);

  //   console.log("Meal is", meal_name);
  return new Response(JSON.stringify(data));
}
