import client from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const database = client.db("blogs");
      const collection = database.collection("blogs");
      const blogs = await collection.find({}).toArray();
  
      return NextResponse.json({ blogs: blogs });
    } catch (error) {
      console.error("Error fetching collections:", error);
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }