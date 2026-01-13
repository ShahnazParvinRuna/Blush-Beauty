import { ObjectId } from "mongodb";
import { getDB } from "@/lib/mongodb";

export async function GET(req, { params }) {
  try {
    const db = await getDB();

    const service = await db
      .collection("services")
      .findOne({ _id: new ObjectId(params.id) });

    if (!service) {
      return Response.json({ message: "Not found" }, { status: 404 });
    }

    return Response.json(service);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Invalid ID" }, { status: 400 });
  }
}
