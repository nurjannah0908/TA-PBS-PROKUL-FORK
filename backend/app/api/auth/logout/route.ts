import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export async function POST() {
  deleteSession();
  return NextResponse.json({ message: "Logout berhasil" });
}
