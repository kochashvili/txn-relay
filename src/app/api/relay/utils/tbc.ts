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
