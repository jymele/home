import { supabase } from "../../supabase/init";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const householdId = url.searchParams.get("householdId");
  const date = url.searchParams.get("date");

  if (!householdId) {
    return new Response("householdId is required", { status: 400 });
  } else if (!date) {
    return new Response("date is required", { status: 400 });
  }

  const { data: meal, error } = await supabase
    .from("meal")
    .select("*")
    .eq("householdId", householdId!)
    .eq("date", date!);

  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  return new Response(JSON.stringify(meal));
}
