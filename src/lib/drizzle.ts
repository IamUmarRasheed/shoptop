import { pgTable, varchar, integer, serial } from "drizzle-orm/pg-core";
import { InferModel,  } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  quantity: integer('quantity').notNull(),
});
 export type Cart= InferModel< typeof cart>
 export type Newcart = InferModel<typeof cart,'insert'>;
 export const db= drizzle(sql)