import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-800">
            Tentang Optik Kayumanis
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Optik Kayumanis adalah optik resmi berizin yang telah berdiri sejak
            tahun **2002**. Kami didukung penuh oleh tenaga kesehatan
            profesional bernama **Optometris** yang memiliki Surat Izin Praktek
            resmi dari Dinas Kesehatan.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dalam menjalankan pelayanan, kami berkomitmen memegang teguh nilai
            utama kami:
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 font-semibold text-emerald-800 text-sm">
              Berakhlak Mulia
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 font-semibold text-emerald-800 text-sm">
              Berjiwa Satria
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 font-semibold text-emerald-800 text-sm">
              Gotong Royong
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-800 h-64 md:h-80 rounded-2xl shadow-inner flex items-center justify-center text-emerald-800 p-8 text-center border border-emerald-200">
          <div>
            <p className="text-2xl font-serif italic mb-2">
              "Kesehatan mata Anda adalah prioritas kami sejak 2002."
            </p>
            <span className="text-sm font-semibold tracking-wider block mt-4">
              - Tim Optometris Kayumanis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
