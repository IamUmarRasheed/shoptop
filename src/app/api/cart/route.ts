import { cart } from "@/lib/drizzle";
import { db } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cart);
    return NextResponse.json({ res });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();
  const setCookies = cookies();
  const user_id = cookies().get("user_id")?.value;
  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db.insert(cart).values({
      product_id: req.user_id,
      quantity: 1,
      user_id: user_id as string,
    });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};
