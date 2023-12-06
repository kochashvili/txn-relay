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
  //   await LibertySheet.addRow(result);
};

const parseLibertyTxn = (message: string) => {
  const regex =
    /საბარათე ოპერაცია: ([A-Z]+) ([\d\.,]+)\s+ქეშბექი: [A-Z]+ ([\d\.,]+) (.*?) cashback: [A-Z]+ ([\d\.,]+) ბარათი: (.*?) \/ \.\.\.\.(\d{4}) (.*?) თარიღი: (\d{2}\/\d{2}\/\d{4}) ნაშთი: ([A-Z]+) ([\d\.,]+)/;
  const match = message.match(regex);
  const result: Record<string, string | number> = {};

  console.log(match);

  if (match) {
    result["Type"] = "purchase";
    result["Currency"] = match[2];
    result["Amount"] = +match[1].replace(",", "");
    result["Card"] = match[3] + " " + match[4];
    result["Merchant"] = match[5].trim();
    result["Balance Currency"] = match[9];
    result["Remaining Balance"] = +match[8].replace(",", "");
    result["Date"] = match[6];
  }

  return result;
};
