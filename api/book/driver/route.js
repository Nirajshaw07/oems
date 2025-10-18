import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("🚘 New Driver Registered:", data);
    return NextResponse.json({ success: true, message: "Driver Registered Successfully!" });
  } catch (err) {
    return NextResponse.json({ error: "Error saving driver data" }, { status: 500 });
  }
}

