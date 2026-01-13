import { getDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDB();
    const services = await db.collection("services").find().toArray();

    return Response.json(services);
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
