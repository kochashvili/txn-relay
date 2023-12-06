import { NextResponse } from "next/server";

interface Data {
  sender: "TBC" | "BOG" | "Liberty";
  message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.json<Data>();

  console.log(data);

  return NextResponse.json(data);
}
