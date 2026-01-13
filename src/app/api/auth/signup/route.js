import { getDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return Response.json({ message: "All fields required" }, { status: 400 });
    }

    const db = await getDB();

    // 🔎 check existing user
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return Response.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
    });

    return Response.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
