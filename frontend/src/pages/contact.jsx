

"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="h-screen w-screen bg-black text-white font-mono overflow-y-auto relative">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-16 grid-rows-16 h-full w-full">
          {Array.from({ length: 256 }).map((_, i) => (
            <div key={i} className="border border-cyan-500/30" />
          ))}
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4 tracking-wider">CONTACT SYSTEM</h1>
          <div className="text-lime-400 text-lg">▼ ESTABLISH CONNECTION ▼</div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-2 border-cyan-500 bg-black/50 p-6">
              <label className="block text-lime-400 text-sm mb-2">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border-2 border-lime-400 text-white p-3 font-mono focus:border-cyan-400 focus:outline-none"
                placeholder="ENTER YOUR NAME..."
              />
            </div>

            <div className="border-2 border-cyan-500 bg-black/50 p-6">
              <label className="block text-lime-400 text-sm mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border-2 border-lime-400 text-white p-3 font-mono focus:border-cyan-400 focus:outline-none"
                placeholder="ENTER YOUR EMAIL..."
              />
            </div>

            <div className="border-2 border-cyan-500 bg-black/50 p-6">
              <label className="block text-lime-400 text-sm mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-black border-2 border-lime-400 text-white p-3 font-mono focus:border-cyan-400 focus:outline-none resize-none"
                placeholder="ENTER YOUR MESSAGE..."
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 border-2 border-lime-400 bg-black hover:bg-lime-400/20 text-white font-bold text-lg transition-all duration-300"
            >
              TRANSMIT MESSAGE
            </button>
          </form>
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
