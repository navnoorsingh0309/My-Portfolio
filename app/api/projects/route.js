import client from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      const database = client.db("projects");
      const collection = database.collection("projects");
      const projects = await collection.find({}).toArray();
  
      return NextResponse.json({ projects: projects });
    } catch (error) {
      console.error("Error fetching collections:", error);
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }
  