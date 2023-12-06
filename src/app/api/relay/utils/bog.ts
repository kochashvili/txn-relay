import { parseStringTemplate } from "string-template-parser";

export const saveBogTxn = async (message: string) => {
  const data = parseBogMessage(message);

  console.log(message);
};

const parseBogMessage = (message: string) => {
  const keywords = ["Purchase:", "Card:"];
  const lines = message.split("\n");

  parseStringTemplate(template, message);

  console.log(lines);

  return {};
};
