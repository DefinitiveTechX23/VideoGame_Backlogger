import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Signup from "./pages/Signup"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
           <Route path="/signup" element={<Signup />} /> 

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
