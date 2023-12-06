import { parseStringTemplate } from "string-template-parser";

export const saveBogTxn = async (message: string) => {
  const data = parseBogMessage(message);

  console.log(message);
};

const parseBogMessage = (message: string) => {
  const regexPattern =
    /Purchase: (\w+) ([\d,.]+) Card: \*\*\*\* (\d+) (.+?) Remaining balance: \w+ ([\d,.]+) You will get: ([\d,.]+) MR Available MR points: ([\d,.]+) 150 MR = 1 Gel (.+)/;

  const match = inputString.match(regexPattern);

  if (match) {
    const currency = match[1];
    const amount = match[2];
    const cardDigits = match[3];
    const merchant = match[4].trim(); // Trimming in case there's leading/trailing whitespace
    const balance = match[5];
    const collectedPoints = match[6];
    const totalPoints = match[7];
    const date = match[8];

    console.log(`Currency: ${currency}`);
    console.log(`Amount: ${amount}`);
    console.log(`Card Digits: ${cardDigits}`);
    console.log(`Merchant: ${merchant}`);
    console.log(`Remaining Balance: ${balance}`);
    console.log(`Collected Points: ${collectedPoints}`);
    console.log(`Total Points: ${totalPoints}`);
    console.log(`Date: ${date}`);
  } else {
    console.log("The string did not match the expected pattern.");
  }

  console.log(lines);

  return {};
};
