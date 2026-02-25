"use client";

import { useState } from "react";

export default function BetForm({ marketId }: { marketId: number }) {
  const [betType, setBetType] = useState("single");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!number || !amount) {
      setMessage("Please enter number and amount");
      return;
    }
  
    console.log("Sending:", { marketId, betType, number, amount });
  
    try {
      const res = await fetch("/api/bets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marketId,
          betType,
          number,
          amount,
        }),
      });
  
      console.log("Status:", res.status);
  
      const data = await res.json();
      console.log("Response:", data);
  
      setMessage(data.message || "Something happened");
  
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error");
    }
  };
  

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl">
      <select
        value={betType}
        onChange={(e) => setBetType(e.target.value)}
        className="mb-2 w-full p-2 text-black"
      >
        <option value="single">Single</option>
        <option value="jodi">Jodi</option>
        <option value="single_panna">Single Panna</option>
        <option value="double_panna">Double Panna</option>
        <option value="triple_panna">Triple Panna</option>
      </select>

      <input
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="mb-2 w-full p-2 text-black"
      />

      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
        className="mb-2 w-full p-2 text-black"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 px-4 py-2 rounded"
      >
        Place Bet
      </button>

      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}