"use client";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [glitchText, setGlitchText] = useState("GAME BACKLOG TRACKER");
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "GAMES TRACKED", value: "1,337" },
    { label: "HOURS SAVED", value: "9,001" },
    { label: "ACHIEVEMENTS", value: "256" },
    { label: "LEVEL", value: "99" },
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const originalText = "GAME BACKLOG TRACKER";
      let glitched = "";

      for (let i = 0; i < originalText.length; i++) {
        glitched += Math.random() < 0.1
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : originalText[i];
      }

      setGlitchText(glitched);
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(statInterval);
    };
  }, []);

  // 🧠 Fetch games using React Query
  const { data: games, isLoading, isError } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch("/api/games"); // Replace with your actual endpoint
      if (!res.ok) throw new Error("Failed to fetch games");
      return res.json();
    },
  });

  return (
    <div className="h-screen w-screen bg-black text-white font-mono overflow-hidden relative">
      {/* ... existing animated grid and borders ... */}

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        {/* ... glitch title and system status ... */}

        {/* 🕹️ Game List Section */}
        <div className="mb-12 p-6 border-2 border-cyan-500 bg-black/50 backdrop-blur-sm max-w-4xl w-full">
          <div className="text-center mb-4">
            <div className="text-lime-400 text-sm">LOADED GAMES</div>
            {isLoading && <div className="text-cyan-400 mt-2">Loading games...</div>}
            {isError && <div className="text-red-400 mt-2">Error loading games.</div>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games?.map((game) => (
              <div key={game.id} className="border border-cyan-500 p-4 bg-black/70 rounded">
                <h2 className="text-cyan-400 text-xl font-bold">{game.title}</h2>
                <p className="text-lime-400 text-sm">{game.genre}</p>
                <p className="text-white text-sm">⏱ {game.hoursToBeat} hrs</p>
                <p className="text-white text-sm">📊 Status: {game.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ... navigation links and footer ... */}
      </div>
    </div>
  );
}