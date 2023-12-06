import { NextResponse } from "next/server";

interface Data {
  sender: "TBC" | "BOG" | "Liberty";
  message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  const data: Data = await request.json();

  if (data.sender === "TBC") await saveTbcTxn(data.message);
  if (data.sender === "BOG") await saveBogTxn(data.message);
  if (data.sender === "Liberty") await saveLibertyTxn(data.message);

  return NextResponse.json(data);
}
