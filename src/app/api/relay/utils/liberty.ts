export const saveLibertyTxn = async (message: string) => {
  console.log(message);
};

const parseLibertyTxn = (message: string) => {
  const regex =
    /([\d\.,]+) ([A-Z]+) (.*) \(\*\*\*(\d{4})\) (.*) (\d{2}\/\d{2}\/\d{4}) (\d{2}:\d{2}:\d{2}) ნაშთი: ([\d\.,]+) ([A-Z]+)/;
  const match = message.match(regex);
  const result: Record<string, string | number> = {};

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
