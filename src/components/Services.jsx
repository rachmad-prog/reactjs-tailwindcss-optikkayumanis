import React from "react";
import { Car, Briefcase, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-emerald-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold">Layanan Unggulan Kami</h2>
          <p className="text-emerald-200 text-sm">
            Kami menawarkan berbagai layanan komprehensif untuk mendeteksi dan
            meningkatkan kualitas penglihatan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-800/60 p-8 rounded-xl border border-emerald-700 hover:border-emerald-500 transition">
            <div className="mb-4 text-amber-400">
              <Car size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Home Visit</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Jasa pemeriksaan mata langsung datang ke tempat Anda. Cocok untuk
              kebutuhan Rumah, Kantor, Sekolah, maupun Pabrik.
            </p>
          </div>
          <div className="bg-emerald-800/60 p-8 rounded-xl border border-emerald-700 hover:border-emerald-500 transition">
            <div className="mb-4 text-amber-400">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Kerjasama Korporasi</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Kami membuka opsi kemitraan pemeriksaan mata institusional
              berskala besar dan pengadaan kacamata kerja/safety.
            </p>
          </div>
          <div className="bg-emerald-800/60 p-8 rounded-xl border border-emerald-700 hover:border-emerald-500 transition">
            <div className="mb-4 text-amber-400">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Pelayanan BPJS & Asuransi
            </h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Kemudahan klaim kacamata menggunakan perlindungan kesehatan BPJS
              maupun asuransi yang bekerjasama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
