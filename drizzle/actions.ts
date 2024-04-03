import { transaction } from "./schema";
import { db } from ".";

export const createTransaction = async ({
  type,
  value,
  currency,
  remainingBalance,
  collectedPoints,
  pointsBalance,
  merchant,
  card,
  message,
}: {
  type:
    | "purchase"
    | "payment"
    | "transfer"
    | "reversal"
    | "deposit"
    | "conversion"
    | "other";
  value: number;
  currency: string;
  remainingBalance: number;
  collectedPoints: number;
  pointsBalance: number;
  merchant: string;
  card: string;
  message: string;
}) => {
  await db
    .insert(transaction)
    .values({
      type,
      timestamp: new Date().toISOString(),
      value,
      currency,
      remainingBalance,
      collectedPoints,
      pointsBalance,
      merchant,
      card,
      id: Math.random().toString(36).substring(7),
      dataDump: JSON.stringify({
        message,
      }),
    })
    .execute();
};
