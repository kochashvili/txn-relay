import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
   const req =  await request.body
 );

  console.log("filename", req);

  if (!filename || request.body === null) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  const blob = await put(filename, request.body, {
    access: "public",
  });

  return NextResponse.json(blob);
}
