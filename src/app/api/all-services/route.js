import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDB();
    const services = await db.collection("services").find({}).toArray();

    return NextResponse.json(services);
  } catch (error) {
    console.error("ALL SERVICES API ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
