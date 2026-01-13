import { getDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const db = await getDB();

    const booking = {
      ...body,
      createdAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(booking);

    return Response.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Booking failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const db = await getDB();
  const bookings = await db
    .collection("bookings")
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json(bookings);
}
