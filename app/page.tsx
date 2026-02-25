"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Market = {
  id: number;
  name: string;
  open_time: string;
  close_time: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkets = async () => {
      try {
        const res = await fetch("/api/markets");
        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to load markets:", data?.error);
          setError(data?.error || "Failed to load markets");
          setMarkets([]);
          return;
        }

        if (Array.isArray(data)) {
          setMarkets(data);
        } else {
          console.error("Unexpected markets response:", data);
          setError("Something went wrong loading markets");
          setMarkets([]);
        }
      } catch (err) {
        console.error("Error fetching markets:", err);
        setError("Unable to load markets right now");
        setMarkets([]);
      } finally {
        setLoading(false);
      }
    };

    loadMarkets();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Markets</h1>
        <p>Loading markets...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Markets</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      {markets.length === 0 ? (
        <p>No active markets right now.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {markets.map((market) => (
            <div
              key={market.id}
              onClick={() => router.push(`/bet/${market.id}`)}
              className="p-4 bg-black text-white rounded-xl shadow-lg cursor-pointer hover:bg-gray-800"
            >
              <h2 className="text-xl font-semibold">{market.name}</h2>
              <p>
                {market.open_time} - {market.close_time}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}