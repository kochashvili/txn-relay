export const saveBogTxn = async (message: string) => {
  const result = parseBogMessage(message);

  console.log(result);
};

const parseBogMessage = (message: string) => {
  const regex =
    /Purchase: ([A-Z]+) ([\d\.,]+) Card: \*\*\*\* (\d{4}) (.*?) Remaining balance: ([A-Z]+) ([\d\.,]+) You will get: ([\d\.,]+) MR Available MR points: ([\d\.,]+) 150 MR = 1 Gel (\d{2}\.\d{2}\.\d{4})/;
  const match = message.match(regex);
  const result: Record<string, string | number> = {};

  if (match) {
    result.currency = match[1];
    result.amount = +match[2];
    result.cardDigits = match[3];
    result.merchant = match[4].trim();
    result.balanceCurrency = match[5];
    result.balance = match[6];
    result.collectedPoints = +match[7];
    result.totalPoints = +match[8];
    result.date = match[9];
  }

  return result;
};
