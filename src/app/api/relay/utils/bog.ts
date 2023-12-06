export const saveBogTxn = async (message: string) => {
  const data = parseBogMessage(message);

  console.log(message);
};

const parseBogMessage = (message: string) => {
  const lines = message.split("\n");
  return {};
};
