import { NextResponse } from "next/server";

export function GET(req, res) {
  return NextResponse.json({ message: "Hello from products route" });
}
