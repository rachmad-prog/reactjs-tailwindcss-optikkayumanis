import React, { useState } from "react";
import { ArrowLeft, HelpCircle, X, MessageCircle } from "lucide-react";

export default function HelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  // State untuk melacak layar mana yang aktif: 'menu' atau 'medical-checkup'
  const [currentScreen, setCurrentScreen] = useState("menu");

  const menuItems = [
    {
      id: 1,
      label: "Informasi Layanan Medical Check up",
      screen: "medical-checkup",
    },
    { id: 2, label: "Informasi layanan home visit", screen: "home-visit" },
    {
      id: 3,
      label: "Informasi kacamata, safety glass dan lensa bergaransi",
      screen: "garansi",
    },
  ];

  const handleMenuClick = (item) => {
    if (item.screen) {
      setCurrentScreen(item.screen);
    } else {
      console.log(`Menu ${item.id} diklik (Belum ada sub-menu)`);
    }
  };

  const handleBackToMenu = () => {
    setCurrentScreen("menu");
  };

  const handleCloseWidget = () => {
    setIsOpen(false);
    setCurrentScreen("menu"); // Reset ke menu utama saat ditutup
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans antialiased">
      {/* POPUP CONTAINER */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-in slide-in-from-bottom-5 duration-200">
          {/* TAMPILAN 1: MENU UTAMA */}
          {currentScreen === "menu" && (
            <>
              <h3 className="text-xl font-bold text-[#E27324] mb-5 leading-snug">
                Pilih Informasi yang Anda Butuhkan:
              </h3>

              <div className="space-y-3 mb-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                    className="w-full text-left bg-[#F8F9FA] hover:bg-[#F1F3F5] text-gray-700 font-medium px-4 py-3.5 rounded-xl border border-gray-200/60 shadow-sm transition-all duration-200 text-sm md:text-base leading-relaxed active:scale-[0.99]">
                    {item.id}. {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCloseWidget}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors">
                <ArrowLeft size={16} />
                Kembali
              </button>
            </>
          )}

          {/* TAMPILAN 2: DETAIL MEDICAL CHECK UP */}
          {currentScreen === "medical-checkup" && (
            <div className="animate-in fade-in duration-200">
              <h3 className="text-2xl font-bold text-[#E27324] mb-4">
                Informasi
              </h3>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Pelayanan medical check up untuk Perusahaan, Sekolah dan Yayasan
                yang ditangani oleh Optometris.
              </p>

              {/* Garis Pembatas */}
              <hr className="border-gray-200 my-4" />

              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Silahkan kontak kami atau hubungi kami ke nomor WA:
              </p>

              {/* Tombol WhatsApp Hijau */}
              <a
                href="https://api.whatsapp.com/send/?phone=62817160196&text=Halo%2C+saya+ingin+bertanya+lebih+lanjut+mengenai%3A+Pelayanan+medical+check+up+untuk+Perusahaan%2C+Sekolah+dan+Yayasan+yang+ditangani+oleh+Optometris.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-center text-base mb-6 active:scale-[0.99]">
                <MessageCircle size={20} fill="currentColor" />
                Hubungi Kami Via WhatsApp
              </a>

              {/* Tombol Kembali ke Menu Utama */}
              <button
                onClick={handleBackToMenu}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors">
                <ArrowLeft size={16} />
                Menu Utama
              </button>
            </div>
          )}

          {currentScreen === "home-visit" && (
            <div className="animate-in fade-in duration-200">
              <h3 className="text-2xl font-bold text-[#E27324] mb-4">
                Informasi
              </h3>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Layanan Home visit/pemeriksaan mata ke rumah.
              </p>

              {/* Garis Pembatas */}
              <hr className="border-gray-200 my-4" />

              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Silahkan kontak kami atau hubungi kami ke nomor WA:
              </p>

              {/* Tombol WhatsApp Hijau */}
              <a
                href="https://api.whatsapp.com/send/?phone=62817160196&text=Halo%2C+saya+ingin+bertanya+lebih+lanjut+mengenai%3A+Layanan+Home+visit%2Fpemeriksaan+mata+ke+rumah.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-center text-base mb-6 active:scale-[0.99]">
                <MessageCircle size={20} fill="currentColor" />
                Hubungi Kami Via WhatsApp
              </a>

              {/* Tombol Kembali ke Menu Utama */}
              <button
                onClick={handleBackToMenu}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors">
                <ArrowLeft size={16} />
                Menu Utama
              </button>
            </div>
          )}

          {currentScreen === "garansi" && (
            <div className="animate-in fade-in duration-200">
              <h3 className="text-2xl font-bold text-[#E27324] mb-4">
                Informasi
              </h3>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Produk Kacamata, Frame, Lensa bergaransi, Safety Glass serta
                Softlens.
              </p>

              {/* Garis Pembatas */}
              <hr className="border-gray-200 my-4" />

              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Silahkan kontak kami atau hubungi kami ke nomor WA:
              </p>

              {/* Tombol WhatsApp Hijau */}
              <a
                href="https://api.whatsapp.com/send/?phone=62817160196&text=Halo%2C+saya+ingin+bertanya+lebih+lanjut+mengenai%3A+Produk+Kacamata%2C+Frame%2C+Lensa+bergaransi%2C+Safety+Glass+serta+Softlens&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-center text-base mb-6 active:scale-[0.99]">
                <MessageCircle size={20} fill="currentColor" />
                Hubungi Kami Via WhatsApp
              </a>

              {/* Tombol Kembali ke Menu Utama */}
              <button
                onClick={handleBackToMenu}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors">
                <ArrowLeft size={16} />
                Menu Utama
              </button>
            </div>
          )}
        </div>
      )}

      {/* TOMBOL UTAMA (HELP BUTTON) */}
      <button
        onClick={() => (isOpen ? handleCloseWidget() : setIsOpen(true))}
        className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-gray-800 hover:bg-gray-900"
            : "bg-[#E27324] hover:bg-[#c9621b] hover:scale-105"
        }`}>
        {isOpen ? (
          <>
            <X size={20} />
            <span>Tutup</span>
          </>
        ) : (
          <>
            <HelpCircle size={20} />
            <span>Butuh Bantuan?</span>
          </>
        )}
      </button>
    </div>
  );
}
