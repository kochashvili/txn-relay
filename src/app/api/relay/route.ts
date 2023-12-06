import { NextResponse } from "next/server";

interface Data {
  sender: "TBC" | "BOG" | "Liberty";
  message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  const data: Data = await request.json();

  if (data.sender === "TBC") saveTbcTxn(data);
  if (data.sender === "BOG") saveBogTxn(data);
  if (data.sender === "Liberty") saveLibertyTxn(data);

  console.log(data);

  return NextResponse.json(data);
}
