import client from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const database = client.db("stack");
      const collection = database.collection("stack");
      const stack = await collection.find({}).toArray();
  
      return NextResponse.json({ stack: stack });
    } catch (error) {
      console.error("Error fetching collections:", error);
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }
  