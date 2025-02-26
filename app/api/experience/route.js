import client from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const database = client.db("experience");
      const collection = database.collection("experience");
      const experience = await collection.find({}).toArray();
  
      return NextResponse.json({ experience: experience });
    } catch (error) {
      console.error("Error fetching collections:", error);
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }
  