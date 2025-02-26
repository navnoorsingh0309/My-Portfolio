import client from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const database = client.db("about");
      const collection = database.collection("about");
      const about = await collection.find({}).toArray();
  
      return NextResponse.json({ about: about });
    } catch (error) {
      console.error("Error fetching collections:", error);
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }
  