"use client";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showLoadingPage, setShowLoadingPage] = useState(true);

  // Fetch games
  const { data: rawData, isError } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/games");
      if (!res.ok) throw new Error("Failed to fetch games");
      const data = await res.json();

      // Artificial delay so the loading page is visible
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return data;
    },
  });

  // Hide loading page after data is ready
  useEffect(() => {
    if (rawData) setShowLoadingPage(false);
  }, [rawData]);

  // Normalize games
  const games = Array.isArray(rawData)
    ? rawData
    : rawData?.games?.map((g) => ({
        id: g.id,
        title: g.title || g.name || "Unknown Game",
        genre: g.genre || g.type || "Unknown Genre",
        hoursToBeat: g.hoursToBeat ?? g.playtime ?? 0,
        status: g.status || g.currentStatus || "Unknown",
      })) ?? [];

  if (showLoadingPage) {
    // 👈 This is the “loading page”
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black text-white font-mono">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-cyan-400 font-bold mb-4">
            Loading Games...
          </h1>
          <p className="text-cyan-300 text-lg">Please wait a moment</p>
        </div>
      </div>
    );
  }

  // Real page with games
  return (
    <div className="h-screen w-screen bg-black text-white font-mono overflow-auto relative p-8">
      <h1 className="text-4xl md:text-6xl text-cyan-400 font-bold mb-6">
        GAME BACKLOG TRACKER
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="border border-cyan-500 p-4 bg-black/70 rounded"
          >
            <h2 className="text-cyan-400 text-xl font-bold">{game.title}</h2>
            <p className="text-lime-400 text-sm">{game.genre}</p>
            <p className="text-white text-sm">⏱ {game.hoursToBeat} hrs</p>
            <p className="text-white text-sm">📊 Status: {game.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
