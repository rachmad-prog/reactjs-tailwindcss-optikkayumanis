import React from "react";
import { MapPin } from "lucide-react";

export default function Branches() {
  const branches = [
    "Pasar Anyar",
    "Ciawi",
    "Cijeruk",
    "Cimahpar",
    "Cisarua",
    "Dramaga",
    "Hypermart Yasmin",
    "RS Islam Bogor",
  ];

  return (
    <>
      <section id="branches" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-emerald-800">
            Cabang Optik Kayumanis
          </h2>
          <p className="text-gray-600 text-sm">
            Temukan gerai resmi terdekat dari rumah Anda di wilayah Bogor dan
            sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition text-gray-700 font-medium">
              <div className="text-emerald-600">
                <MapPin size={18} />
              </div>
              <span>{branch}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
