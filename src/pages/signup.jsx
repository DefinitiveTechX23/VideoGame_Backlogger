
"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup submitted:", formData)
  }

  return (
    <div className="h-screen w-screen bg-black text-white font-mono overflow-y-auto relative">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-lime-400/30" />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent bg-[length:100%_4px]" />
      </div>

      <div className="relative z-10 p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-lime-400 mb-4 tracking-wider">USER REGISTRATION</h1>
          <div className="text-cyan-400 text-lg">▼ CREATE NEW ACCOUNT ▼</div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-2 border-lime-400 bg-black/50 p-6">
              <label className="block text-cyan-400 text-sm mb-2">USERNAME</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-black border-2 border-cyan-500 text-white p-3 font-mono focus:border-lime-400 focus:outline-none"
                placeholder="ENTER USERNAME..."
              />
            </div>

            <div className="border-2 border-lime-400 bg-black/50 p-6">
              <label className="block text-cyan-400 text-sm mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border-2 border-cyan-500 text-white p-3 font-mono focus:border-lime-400 focus:outline-none"
                placeholder="ENTER EMAIL..."
              />
            </div>

            <div className="border-2 border-lime-400 bg-black/50 p-6">
              <label className="block text-cyan-400 text-sm mb-2">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-black border-2 border-cyan-500 text-white p-3 font-mono focus:border-lime-400 focus:outline-none"
                placeholder="ENTER PASSWORD..."
              />
            </div>

            <div className="border-2 border-lime-400 bg-black/50 p-6">
              <label className="block text-cyan-400 text-sm mb-2">CONFIRM PASSWORD</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-black border-2 border-cyan-500 text-white p-3 font-mono focus:border-lime-400 focus:outline-none"
                placeholder="CONFIRM PASSWORD..."
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 border-2 border-cyan-500 bg-black hover:bg-cyan-500/20 text-white font-bold text-lg transition-all duration-300"
            >
              INITIALIZE ACCOUNT
            </button>
          </form>
        </div>

        <div className="max-w-md mx-auto mt-12">
          <Link to="/" className="block">
            <div className="p-4 border-2 border-lime-400 bg-black/50 hover:bg-lime-400/20 transition-all duration-300 text-center">
              <div className="text-cyan-400 text-sm mb-1">←</div>
              <div className="text-white text-lg font-bold">RETURN TO MAIN</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
