import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Branches from "./components/Branches";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Bagian Atas / Topbar */}
      <TopBar />

      {/* Bagian Navigasi */}
      <Navbar />

      {/* Bagian Header Utama / Banner */}
      <Hero />

      {/* Konten Tengah */}
      <Features />
      <About />
      <Services />
      <Branches />
      <Contact />

      {/* Bagian Bawah / Footer */}
      <Footer />
    </div>
  );
}

export default App;
