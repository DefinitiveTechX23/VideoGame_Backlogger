

import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="h-screen w-screen bg-black text-white font-mono overflow-y-auto relative">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-lime-400/30" />
          ))}
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-lime-400 mb-4 tracking-wider">ABOUT SYSTEM</h1>
          <div className="text-cyan-400 text-lg">▼ MISSION BRIEFING ▼</div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-2 border-lime-400 bg-black/50 p-6">
            <h2 className="text-cyan-400 text-2xl font-bold mb-4">OBJECTIVE</h2>
            <p className="text-white text-lg leading-relaxed">
              Track, organize, and conquer your gaming backlog with retro-futuristic precision. This system helps gamers
              manage their collection, track progress, and discover new adventures.
            </p>
          </div>

          <div className="border-2 border-cyan-500 bg-black/50 p-6">
            <h2 className="text-lime-400 text-2xl font-bold mb-4">FEATURES</h2>
            <ul className="text-white text-lg space-y-2">
              <li>• Game collection management</li>
              <li>• Progress tracking system</li>
              <li>• Wishlist organization</li>
              <li>• Achievement monitoring</li>
              <li>• Time played analytics</li>
            </ul>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-12">
          <Link to="/" className="block">
            <div className="p-4 border-2 border-cyan-500 bg-black/50 hover:bg-cyan-500/20 transition-all duration-300 text-center">
              <div className="text-lime-400 text-sm mb-1">←</div>
              <div className="text-white text-lg font-bold">RETURN TO MAIN</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
