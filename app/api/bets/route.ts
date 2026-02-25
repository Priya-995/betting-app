import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // IMPORTANT
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { marketId, betType, number, amount } = body;

    // ⚡ Hardcoded test user (since no auth tonight)
    const userId = "cb570135-4f03-4e3f-a5a3-cffd3c2a2632";

    const { error } = await supabase.rpc("place_bet", {
      p_user_id: userId,
      p_market_id: marketId,
      p_bet_type: betType,
      p_number: number,
      p_amount: amount,
    });

    if (error) {
      console.error("SUPABASE ERROR:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Bet placed successfully 🚀",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}