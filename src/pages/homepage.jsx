
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
  const [glitchText, setGlitchText] = useState("GAME BACKLOG TRACKER")
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { label: "GAMES TRACKED", value: "1,337" },
    { label: "HOURS SAVED", value: "9,001" },
    { label: "ACHIEVEMENTS", value: "256" },
    { label: "LEVEL", value: "99" },
  ]

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
      const originalText = "GAME BACKLOG TRACKER"
      let glitched = ""

      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += originalText[i]
        }
      }

      setGlitchText(glitched)
      setTimeout(() => setGlitchText(originalText), 100)
    }, 3000)

    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2000)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(statInterval)
    }
  }, [])

  return (
    <div className="h-screen w-screen bg-black text-white font-mono overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-500 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent bg-[length:100%_4px] animate-pulse" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        <div className="absolute top-4 left-4 text-lime-400 text-2xl">╔═══</div>
        <div className="absolute top-4 right-4 text-lime-400 text-2xl">═══╗</div>
        <div className="absolute bottom-4 left-4 text-lime-400 text-2xl">╚═══</div>
        <div className="absolute bottom-4 right-4 text-lime-400 text-2xl">═══╝</div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-cyan-400 mb-4 tracking-wider">{glitchText}</h1>
          <div className="text-lime-400 text-xl tracking-widest">▼ INITIALIZE SYSTEM ▼</div>
        </div>

        <div className="mb-12 p-6 border-2 border-cyan-500 bg-black/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-lime-400 text-sm mb-2">SYSTEM STATUS</div>
            <div className="text-cyan-400 text-3xl font-bold mb-2">{stats[currentStat].value}</div>
            <div className="text-white text-lg">{stats[currentStat].label}</div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {stats.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 border ${
                  index === currentStat ? "bg-lime-400 border-lime-400" : "border-cyan-500"
                } ${index === currentStat ? "animate-pulse" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-md w-full">
          <Link to="/home" className="group">
            <div className="p-4 border-2 border-cyan-500 bg-black/50 hover:bg-cyan-500/20 transition-all duration-300 text-center">
              <div className="text-lime-400 text-sm mb-1">01</div>
              <div className="text-white text-lg font-bold group-hover:text-cyan-400">HOME</div>
            </div>
          </Link>

          <Link to="/signup" className="group">
            <div className="p-4 border-2 border-cyan-500 bg-black/50 hover:bg-cyan-500/20 transition-all duration-300 text-center">
              <div className="text-lime-400 text-sm mb-1">02</div>
              <div className="text-white text-lg font-bold group-hover:text-cyan-400">SIGNUP</div>
            </div>
          </Link>

          <Link to="/about" className="group">
            <div className="p-4 border-2 border-cyan-500 bg-black/50 hover:bg-cyan-500/20 transition-all duration-300 text-center">
              <div className="text-lime-400 text-sm mb-1">03</div>
              <div className="text-white text-lg font-bold group-hover:text-cyan-400">ABOUT</div>
            </div>
          </Link>

          <Link to="/contact" className="group">
            <div className="p-4 border-2 border-cyan-500 bg-black/50 hover:bg-cyan-500/20 transition-all duration-300 text-center">
              <div className="text-lime-400 text-sm mb-1">04</div>
              <div className="text-white text-lg font-bold group-hover:text-cyan-400">CONTACT</div>
            </div>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lime-400 text-sm">
          ▲ READY TO LOAD ▲
        </div>
      </div>
    </div>
  )
}
