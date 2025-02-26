import client from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      const database = client.db("carousel");
      const collection = database.collection("carousel");
      const carousel = await collection.find({}).toArray();
  
      return NextResponse.json({ carousel: carousel });
    } catch (error) {
      console.error("Error fetching collections:", error);
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }
  