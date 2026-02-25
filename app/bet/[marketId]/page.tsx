"use client";

import { useParams } from "next/navigation";
import BetForm from "@/components/BetForm";

export default function BetPage() {
  const params = useParams();
  const rawMarketId = (params as { marketId?: string }).marketId;
  const marketIdNumber = rawMarketId ? Number(rawMarketId) : NaN;

  if (!rawMarketId || Number.isNaN(marketIdNumber)) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Invalid market</h1>
        <p>We could not find this market. Please go back and try again.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Place Bet</h1>
      <BetForm marketId={marketIdNumber} />
    </div>
  );
}