import { GoogleSpreadsheet } from "google-spreadsheet";
import { jwtFromEnv } from "./jwt";

export const saveLibertyTxn = async (message: string) => {
  const result = parseLibertyTxn(message);

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SPREADSHEET_ID!,
    jwtFromEnv
  );

  await doc.loadInfo();
  const LibertySheet = doc.sheetsByTitle["Liberty"]!;
  await LibertySheet.addRow(result);
};

const parseLibertyTxn = (message: string) => {
  const regex =
    /საბარათე ოპერაცია:\s+([A-Z]+)\s+([\d\.,]+)\s+ქეშბექი:\s+([A-Z]+)\s+([\d\.,]+)\s+(.*?)\s+cashback:\s+([A-Z]+)\s+([\d\.,]+)\s+ბარათი:\s+([^\s\/]+).*?(\d{4})\s+(.*?)\s+თარიღი:\s+(\d{2}\/\d{2}\/\d{4})\s+ნაშთი:\s+([A-Z]+)\s+([\d\.,]+)/;
  const match = message.match(regex);
  const result: Record<string, string | number> = {};

  console.log(match, message);

  if (match) {
    result["Type"] = "purchase";
    result["Currency"] = match[1];
    result["Amount"] = +match[2].replace(",", "");
    result["Card"] = match[8] + " " + match[9];
    result["Merchant"] = match[10].trim();
    result["Balance Currency"] = match[12];
    result["Remaining Balance"] = +match[13].replace(",", "");
    result["Date"] = match[11];
    result["Cashback"] = +match[4] + +match[7];
  }

  return result;
};
