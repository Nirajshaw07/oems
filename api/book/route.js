import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("📦 New Ride Booked:", data);
    return NextResponse.json({ success: true, message: "Ride Booked Successfully!" });
  } catch (err) {
    return NextResponse.json({ error: "Error saving booking" }, { status: 500 });
  }
}
