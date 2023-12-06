export const saveBogTxn = async (message: string) => {
  const data = parseBogMessage(message);

  console.log(message);
};

const parseBogMessage = (message: string) => {
  const regexPattern =
    /Purchase: (\w+) ([\d,.]+) Card: \*\*\*\* (\d+) (.+?) Remaining balance: \w+ ([\d,.]+) You will get: ([\d,.]+) MR Available MR points: ([\d,.]+) 150 MR = 1 Gel (.+)/;
  const match = message.match(regexPattern);
  const result: Record<string, string | number> = {};

  if (match) {
    result.currency = match[1];
    result.amount = +match[2];
    result.cardDigits = match[3];
    result.merchant = match[4].trim();
    result.balance = +match[5];
    result.collectedPoints = +match[6];
    result.totalPoints = +match[7];
    result.date = match[8];
  } else {
    console.log("The string did not match the expected pattern.");
  }

  return result;
};
