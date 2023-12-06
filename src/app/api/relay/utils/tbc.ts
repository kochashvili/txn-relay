import { GoogleSpreadsheet } from "google-spreadsheet";
import { jwtFromEnv } from "./jwt";

export const saveTbcTxn = async (message: string) => {
  const result = parseTbcTxn(message);

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SPREADSHEET_ID!,
    jwtFromEnv
  );

  await doc.loadInfo();
  const BogSheet = doc.sheetsByTitle["BOG"]!;
  await BogSheet.addRow(result);
};

const parseTbcTxn = (message: string) => {
  const regex =
    /([\d\.,]+) ([A-Z]+) (.*) \(\*\*\*(\d{4})\) (.*) (\d{2}\/\d{2}\/\d{4}) (\d{2}:\d{2}:\d{2}) ნაშთი: ([\d\.,]+) ([A-Z]+)/;
  const match = message.match(regex);
  const result: Record<string, string | number> = {};

  console.log(message);

  if (match) {
    result["Type"] = "purchase";
    result["Currency"] = match[1];
    result["Amount"] = +match[2].replace(",", "");
    result["Card"] = match[3];
    result["Merchant"] = match[4].trim();
    result["Balance Currency"] = match[5];
    result["Remaining Balance"] = +match[6].replace(",", "");
    result["Collected MR points"] = +match[7].replace(",", "");
    result["MR Points Balance"] = +match[8].replace(",", "");
    result["Date"] = match[9];
  }

  return result;
  return {};
};
