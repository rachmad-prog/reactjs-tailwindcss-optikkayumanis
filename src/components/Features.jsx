import React from "react";
import { Users, Eye, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-emerald-600 flex items-start gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
            <Users />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Pendaftaran Mudah</h3>
            <p className="text-sm text-gray-600">
              Melayani Pasien Umum, BPJS, dan berbagai Asuransi.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-emerald-600 flex items-start gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
            <Eye />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Fasilitas Terbaik</h3>
            <p className="text-sm text-gray-600">
              Menyediakan alat pemeriksaan modern untuk kenyamanan pasien.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-emerald-600 flex items-start gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
            <ShieldCheck />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Konsultasi Segera</h3>
            <p className="text-sm text-gray-600">
              Konsultasikan keluhan kesehatan mata Anda dengan optometris kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
