import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const req = await request.body;

  console.log("req", req);

  if (req === null) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  const parsed = JSON.parse(req);

  return NextResponse.json(blob);
}
