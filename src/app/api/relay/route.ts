import { NextResponse } from "next/server";

interface Data {
  sender: "TBC" | "BOG" | "Liberty";
}

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.json();

  console.log(data);

  return NextResponse.json(data);
}
