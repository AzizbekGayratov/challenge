import React from "react";
import { MdEmail } from "react-icons/md";

export default function Top() {
  return (
    <div className="max-w-[1368px] mx-auto px-2 items-center hidden sm:flex justify-end gap-[220px] py-1">
      <p className="text-Main font-[539] flex items-center gap-[10px]">
        <MdEmail />
        Aloqa uchun
      </p>
      <select className="p-0 border-none outline-none bg-transparent">
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
}
