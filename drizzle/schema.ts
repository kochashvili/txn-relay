import { sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const transaction = sqliteTable("transaction", {
  id: text("id").primaryKey().unique(),
  type: text("type", {
    enum: [
      "purchase",
      "payment",
      "transfer",
      "reversal",
      "deposit",
      "conversion",
      "other",
    ],
  }).notNull(),
  timestamp: text("timestamp").notNull(),
  dataDump: text("data").notNull(),
  value: real("value"),
  currency: text("currency"),
  remainingBalance: real("remaining_balance"),
  collectedPoints: real("collected_points"),
  pointsBalance: real("points_balance"),
  merchant: text("merchant"),
  card: text("card"),
});
