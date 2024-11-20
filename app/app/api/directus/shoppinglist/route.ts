import { getItemsByHousehold } from "@/app/api/directus";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const householdId = url.searchParams.get("householdid");

  if (!householdId) {
    return new Response("householdid query parameter is required", {
      status: 400,
    });
  }

  const data = await getItemsByHousehold(householdId, "shoppingitems");

  console.log("Data from server is", data);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
