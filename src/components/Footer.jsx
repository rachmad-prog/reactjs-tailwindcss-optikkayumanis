import React from "react";
import { Clock, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-400 text-sm pt-16 pb-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg tracking-wide">
            OPTIK KAYUMANIS
          </h4>
          <p className="leading-relaxed">
            Penyedia layanan kesehatan mata terpercaya sejak tahun 2002 dengan
            izin resmi operasional dari Dinas Kesehatan.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-md">
            Jam Operasional & Bantuan
          </h4>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Senin - Minggu: 09:00 - 20:00
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +62817 1601 969
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> marketing.optikkayumanis@gmail.com
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-md">Tautan Cepat</h4>
          <div className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About Us
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a
              href="https://wa.me/628171601969"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:underline">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Optik Kayumanis. All Rights Reserved. by Rachmadinata, S.Kom
      </div>
    </footer>
  );
}
