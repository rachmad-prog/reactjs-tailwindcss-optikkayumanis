import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-emerald-800 text-white text-sm py-2 px-4 hidden md:block">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <Phone size={14} /> +62817 1601 969
          </span>
          <span className="flex items-center gap-1">
            <Mail size={14} /> marketing.optikkayumanis@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} /> Jam Operasional: Senin - Minggu (09:00 - 20:00)
        </div>
      </div>
    </div>
  );
}
