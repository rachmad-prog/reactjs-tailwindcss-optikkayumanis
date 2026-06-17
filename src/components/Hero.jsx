// import React from "react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20 px-4 md:py-32">
//       <div className="max-w-4xl mx-auto text-center space-y-6">
//         <span className="bg-emerald-500/30 text-emerald-200 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
//           Promo Spesial Bulan Ini
//         </span>
//         <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
//           Periksa Mata Anda dengan Ahlinya, <br className="hidden md:inline" />
//           Desain Eksklusif Kualitas Premium
//         </h1>
//         <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">
//           Kesehatan mata Anda adalah prioritas kami. Koleksi frame kacamata kami
//           dirancang untuk menonjolkan kepribadian unik Anda dengan paduan
//           sempurna antara gaya dan fungsionalitas.
//         </p>
//         <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
//           <a
//             href="https://wa.me/628171601969"
//             className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-8 py-3 rounded-lg shadow-lg transition text-center">
//             Hubungi Kami via Chat WA
//           </a>
//           <a
//             href="#services"
//             className="border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold px-8 py-3 rounded-lg transition text-center">
//             Lihat Layanan
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
import Hero4 from "../assets/hero4.jpg";

export default function Hero() {
  // Data konten untuk setiap slide
  const slides = [
    {
      image: Hero1, // Contoh gambar toko optik/kacamata
      tag: "Promo Spesial Bulan Ini",
      title: "Periksa Mata Anda dengan Ahlinya",
      subtitle: "Desain Eksklusif Kualitas Premium",
      description:
        "Kesehatan mata Anda adalah prioritas kami. Koleksi frame kacamata kami dirancang untuk menonjolkan kepribadian unik Anda.",
    },
    {
      image: Hero2, // Contoh gambar pemeriksaan mata
      tag: "Layanan Unggulan",
      title: "Fasilitas Periksa Mata Modern",
      subtitle: "Akurat, Profesional & Berizin Resmi",
      description:
        "Ditangani langsung oleh Refraksionis Optometris berpengalaman dengan peralatan komputer terbaru demi hasil yang presisi.",
    },
    {
      image: Hero3, // Contoh gambar kacamata/lensa
      tag: "Kemudahan Pasien",
      title: "Menerima Klaim BPJS Kesehatan",
      subtitle: "Serta Berbagai Asuransi Mitra",
      description:
        "Nikmati kemudahan mendapatkan kacamata terbaik menggunakan hak perlindungan kesehatan Anda tanpa ribet di seluruh cabang kami.",
    },
    {
      image: Hero4, // Contoh gambar kacamata/lensa
      tag: "Kemudahan Pasien",
      title: "Menerima Klaim BPJS Kesehatan",
      subtitle: "Serta Berbagai Asuransi Mitra",
      description:
        "Nikmati kemudahan mendapatkan kacamata terbaik menggunakan hak perlindungan kesehatan Anda tanpa ribet di seluruh cabang kami.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi navigasi manual
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Fitur Auto-Play (Berpindah otomatis setiap 5 detik)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Bersihkan interval saat komponen tidak lagi digunakan (unmount)
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="relative w-full h-[500px] md:h-[600px] bg-gray-950 overflow-hidden group">
      {/* WRAPPER GAMBAR LATAR (BACKGROUND SLIDER) */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
        {/* Lapisan Hitam Transparan (Overlay) agar teks tetap kontras dan terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 to-gray-900/75 mix-blend-multiply" />
      </div>

      {/* KONTEN TEKS (Mengikuti slide aktif) */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 text-white animate-fade-in">
          <span className="inline-block bg-emerald-500/30 text-emerald-200 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {slides[currentIndex].tag}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            {slides[currentIndex].title} <br className="hidden md:inline" />
            <span className="text-amber-400">
              {slides[currentIndex].subtitle}
            </span>
          </h1>

          <p className="text-emerald-100 text-sm md:text-lg max-w-2xl mx-auto opacity-90 drop-shadow">
            {slides[currentIndex].description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/628171601969"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 text-center text-sm md:text-base">
              Hubungi Kami via Chat WA
            </a>
            <a
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold px-8 py-3 rounded-lg transition text-center text-sm md:text-base">
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>

      {/* TOMBOL NAVIGASI KIRI (Hanya muncul/terang saat di-hover) */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-4 md:left-8 bg-black/30 hover:bg-emerald-600 p-2 md:p-3 rounded-full text-white transition backdrop-blur-sm z-20">
        <ChevronLeft size={24} />
      </button>

      {/* TOMBOL NAVIGASI KANAN */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-4 md:right-8 bg-black/30 hover:bg-emerald-600 p-2 md:p-3 rounded-full text-white transition backdrop-blur-sm z-20">
        <ChevronRight size={24} />
      </button>

      {/* INDIKATOR BULAT (DOTS INDIKATOR) */}
      <div className="absolute bottom-16 w-full flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all rounded-full duration-300 ${
              currentIndex === index ? "w-8 bg-amber-400" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
