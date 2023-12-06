import { NextResponse } from "next/server";

import { saveBogTxn } from "./utils/bog";
import { saveLibertyTxn } from "./utils/liberty";
import { saveTbcTxn } from "./utils/tbc";

interface Data {
  sender: "TBC" | "BOG" | "Liberty";
  message: string;
  secret: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  const data: Data = await request.json();

  if (data.secret !== process.env.SECRET) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  if (data.sender === "TBC") await saveTbcTxn(data.message);
  if (data.sender === "BOG") await saveBogTxn(data.message);
  if (data.sender === "Liberty") await saveLibertyTxn(data.message);

  return NextResponse.json({ success: true });
}
