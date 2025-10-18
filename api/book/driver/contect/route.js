import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("📨 New Contact Message:", data);
    return NextResponse.json({ success: true, message: "Message Sent Successfully!" });
  } catch (err) {
    return NextResponse.json({ error: "Error saving contact" }, { status: 500 });
  }
}
