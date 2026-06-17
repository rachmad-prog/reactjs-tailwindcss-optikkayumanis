import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-800">
            Tentang Optik Kayumanis
          </h2>
          {/* PERBAIKAN: Menghapus 'justify-between' yang salah tempat di tag p */}
          <p className="text-gray-700 leading-relaxed text-justify">
            Optik Kayumanis adalah optik resmi berizin yang telah berdiri sejak
            tahun <b className="underline">2002</b>. Kami didukung penuh oleh
            tenaga kesehatan profesional bernama{" "}
            <b className="underline">Optometris</b> yang memiliki Surat Izin
            Praktek resmi dari Dinas Kesehatan.
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

        {/* SISI KANAN: PLAYER VIDEO YOUTUBE EMBED */}
        <div className="w-full aspect-video md:aspect-square xl:max-h-[450px] relative rounded-2xl overflow-hidden shadow-xl border border-emerald-100 bg-emerald-950">
          <iframe
            className="w-full h-full object-cover"
            /* PERBAIKAN URL: Mengubah /watch?v= menjadi /embed/ 
              Ditambahkan ?autoplay=1&mute=1&loop=1&playlist=0_GNZk-iZJA agar otomatis berputar, tanpa suara, dan mengulang terus.
            */
            src="https://www.youtube.com/embed/0_GNZk-iZJA?autoplay=1&mute=1&loop=1&playlist=0_GNZk-iZJA"
            title="Tentang Optik Kayumanis"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}
