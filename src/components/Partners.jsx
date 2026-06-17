// import React from "react";

// export default function Partners() {
//   // Data mitra dengan perbaikan URL logo ke-2
//   const insurancePartners = [
//     {
//       id: 1,
//       name: "Fullerton Health",
//       logo: "https://optikkayumanis.id/img/p1.png",
//     },
//     {
//       id: 2,
//       name: "Medika Plaza",
//       logo: "https://optikkayumanis.id/img/p2.png", // PERBAIKAN: URL dibersihkan dari query rusak
//     },
//     {
//       id: 3,
//       name: "Syntech",
//       logo: "https://optikkayumanis.id/img/p3.png",
//     },
//     {
//       id: 4,
//       name: "AdMedika",
//       logo: "https://optikkayumanis.id/img/p4.png",
//     },
//     {
//       id: 5,
//       name: "TelkoMedika",
//       logo: "https://optikkayumanis.id/img/p5.png",
//     },
//     {
//       id: 6,
//       name: "Asuransi MAG",
//       logo: "https://optikkayumanis.id/img/p6.png",
//     },
//     {
//       id: 7,
//       name: "Prudential",
//       logo: "https://optikkayumanis.id/img/p7.png",
//     },
//     {
//       id: 8,
//       name: "BNILife",
//       logo: "https://optikkayumanis.id/img/p8.png",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full py-16 md:py-20 bg-cover bg-center overflow-hidden"
//       // PERBAIKAN: Memasukkan background jabat tangan medis agar teks putih terlihat
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80')`,
//       }}>
//       {/* OVERLAY BIRU: Menggunakan bg-blue-600/85 agar background bernuansa biru & teks/logo putih terlihat kontras */}
//       <div className="absolute inset-0 bg-blue-600/85 mix-blend-multiply z-0" />

//       {/* CONTAINER KONTEN UTAMA */}
//       <div className="relative max-w-7xl mx-auto px-6 z-10">
//         {/* Teks Judul */}
//         <div className="text-center mb-12">
//           <h3 className="text-blue-100 uppercase text-xs tracking-widest font-bold opacity-80">
//             Kemitraan Kesehatan
//           </h3>
//           <p className="text-white text-2xl md:text-3xl font-bold mt-1 drop-shadow-sm">
//             Menerima Pasien Asuransi & Korporasi
//           </p>
//         </div>

//         {/* LOGO GRID/ROW */}
//         <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
//           {insurancePartners.map((partner) => (
//             <div
//               key={partner.id}
//               className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-105">
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 /* PERBAIKAN CLASS IMG:
//                    - Mengubah 'brightness-0' menjadi 'brightness-0 invert' agar logonya berubah jadi PUTIH bersih.
//                    - Menaikkan 'opacity-40' ke 'opacity-80' agar logo terlihat solid dan jelas di atas warna biru.
//                 */
//                 className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300 filter drop-shadow-sm"
//               />
//             </div>
//           ))}
//         </div>

//         {/* INDIKATOR TITIK KECIL */}
//         <div className="flex justify-center mt-12">
//           <div className="w-2.5 h-2.5 bg-white/50 rounded-full shadow-inner" />
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Partners() {
  const insurancePartners = [
    {
      id: 1,
      name: "Fullerton Health",
      logo: "https://optikkayumanis.id/img/p1.png",
    },
    {
      id: 2,
      name: "Medika Plaza",
      logo: "https://optikkayumanis.id/img/p2.png",
    },
    { id: 3, name: "Syntech", logo: "https://optikkayumanis.id/img/p3.png" },
    { id: 4, name: "AdMedika", logo: "https://optikkayumanis.id/img/p4.png" },
    {
      id: 5,
      name: "TelkoMedika",
      logo: "https://optikkayumanis.id/img/p5.png",
    },
    {
      id: 6,
      name: "Asuransi MAG",
      logo: "https://optikkayumanis.id/img/p6.png",
    },
    { id: 7, name: "Prudential", logo: "https://optikkayumanis.id/img/p7.png" },
    { id: 8, name: "BNILife", logo: "https://optikkayumanis.id/img/p8.png" },
  ];

  // Duplikasi data array agar transisi loop slider berjalan mulus tanpa jeda kosong
  const doublePartners = [...insurancePartners, ...insurancePartners];

  return (
    <section
      className="relative w-full py-16 md:py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80')`,
      }}>
      {/* OVERLAY BIRU */}
      <div className="absolute inset-0 bg-blue-300 mix-blend-multiply z-0" />

      {/* CONTAINER KONTEN UTAMA */}
      <div className="relative w-full z-10">
        {/* Teks Judul */}
        <div className="text-center mb-12 px-6">
          <h3 className="text-blue-100 uppercase text-xs tracking-widest font-bold opacity-80">
            Kemitraan Kesehatan
          </h3>
          <p className="text-white text-2xl md:text-3xl font-bold mt-1 drop-shadow-sm">
            Menerima Pasien Asuransi & Korporasi
          </p>
        </div>

        {/* CONTAINER UTAMA SLIDER/MARQUEE */}
        <div className="relative w-full flex overflow-x-hidden masks-fade">
          {/* Jalur Track Animasi Berjalan (Menggunakan class kustom 'animate-marquee') */}
          <div className="flex space-x-16 md:space-x-24 animate-marquee whitespace-nowrap min-w-full justify-around items-center pr-16 md:pr-24">
            {doublePartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300 filter drop-shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* Lapisan Gradasi Tipis di Ujung Kiri & Kanan Slider agar Terlihat Smooth Saat Masuk/Keluar Layar */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-blue-600/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-blue-600/30 to-transparent pointer-events-none" />
        </div>

        {/* INDIKATOR TITIK KECIL DI BAWAH */}
        <div className="flex justify-center mt-12">
          <div className="w-2.5 h-2.5 bg-white/50 rounded-full shadow-inner" />
        </div>
      </div>
    </section>
  );
}
