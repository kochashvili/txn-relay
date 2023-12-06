import { GoogleSpreadsheet } from "google-spreadsheet";
import { jwtFromEnv } from "./jwt";

export const saveBogTxn = async (message: string) => {
  const result = parseBogMessage(message);

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SPREADSHEET_ID!,
    jwtFromEnv
  );

  await doc.loadInfo();
  const BogSheet = doc.sheetsByTitle["BOG"]!;
  await BogSheet.addRow(result);
};

const parseBogMessage = (message: string) => {
  const regex =
    /Purchase: ([A-Z]+) ([\d\.,]+) Card: \*\*\*\* (\d{4}) (.*?) Remaining balance: ([A-Z]+) ([\d\.,]+) You will get: ([\d\.,]+) MR Available MR points: ([\d\.,]+) 150 MR = 1 Gel (\d{2}\.\d{2}\.\d{4})/;
  const match = message.match(regex);
  const result: Record<string, string | number> = {};

  if (match) {
    result["Type"] = match[1];
    result.amount = +match[2].replace(",", "");
    result.cardDigits = match[3];
    result.merchant = match[4].trim();
    result.balanceCurrency = match[5];
    result.balance = +match[6].replace(",", "");
    result.collectedPoints = +match[7];
    result.totalPoints = +match[8].replace(",", "");
    result.date = match[9];
  }

  return result;
};
