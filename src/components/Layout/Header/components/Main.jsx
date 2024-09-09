import React, { useState } from "react";
import { IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../store/LoginSlice";

export default function Main() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="max-w-[1270px] mx-auto px-5 pt-[13px] pb-[11px] flex items-center justify-between">
        <div>
          <Link to="/" className="block">
            <img src="/Logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="flex items-center gap-20">
            {/* Katalog tugmasi */}
            <button
              className="button py-[11px] px-5 rounded-[10px] transition-colors flex items-center gap-3"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <IoClose size={18} /> : <IoMenu size={18} />}
              Katalog
            </button>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="hidden lg:flex rounded-lg"
            >
              <input
                type="text"
                placeholder="Maxsulotlarni izlash"
                className="outline-none px-5 py-3 xl:min-w-[396px] bg-White rounded-l-lg border border-Secondary max-w-[396px]"
              />
              <button className="py-[13px] px-[18px] border border-MainColor bg-MainColor border-none rounded-r-lg text-white">
                <IoSearch size={18} />
              </button>
            </form>
            <button className="p-[11px] rounded-lg text-MainColor bg-Secondary border-none hover:opacity-80">
              <FaRegHeart size={18} />
            </button>
            <button className="p-[11px] rounded-lg text-MainColor bg-Secondary border-none hover:opacity-80">
              <MdOutlineShoppingCart size={18} />
            </button>
          </div>
          <button
            onClick={() => dispatch(showModal())}
            className="button py-[11px] px-5 rounded-[10px] transition-all"
          >
            Kirish
          </button>
        </div>
      </div>

      {/* Katalog dropdown menyusi */}
      {isMenuOpen && (
        <div className="absolute top-full left-1/2 shadower rounded-lg transform -translate-x-1/2 w-3/4 bg-white shadow-lg ">
          <div className="grid grid-cols-4 gap-4">
            {/* Birinchi ustun */}
            <div className="bg-gradient-to-r rounded-s-lg shadow from-[#F7EEF5] to-[#EFEFFD] py-5  pl-9">
              <h3 className="font-bold mb-2 text-red-500">
                <span className="flex items-center gap-2">
                  <span>🔥</span> Aksiya
                </span>
              </h3>
              <ul className="gap-y-12 listik ">
                <li>Kompyuterlar va notebooklar</li>
                <li>Telefonlar</li>
                <li>Maishiy texnika</li>
                <li>Erkaklar uchun kiyim</li>
                <li>Ayollar uchun kiyimlar</li>
                <li>Bolalar uchun</li>
                <li>Avtomobil mahsulotlari</li>
                <li>Go'zallik va sog'liq</li>
                <li>Sport va o'yin-kulgi</li>
                <li>Uy hayvonlari uchun tovarlar</li>
                <li>Xobbi va ijodkorlik</li>
                <li>Kantselyariya buyumlari</li>
                <li>Maishiy kimyo</li>
                <li>Sport va o'yin-kulgi</li>
                <li>Aksessuarlar</li>
              </ul>
            </div>

            {/* Ikkinchi ustun */}
            <div className="ml-10 mb-8">
              <h3 className="font-bold mb-2">Brendlar</h3>
              <ul className="space-y-2">
                <li>Samsung</li>
                <li>Vivo</li>
                <li>Tecno</li>
                <li>Realme</li>
                <li>Xiaomi</li>
                <li>Apple</li>
                <li>Artel</li>
                <li>Nokia</li>
                <li>Infinix</li>
                <li>OnePlus</li>
                <li>Blackview</li>
                <li>Oppo</li>
                <li>Huawei</li>
                <li>Alcatel</li>
                <li>TCL</li>
                <li>Inoi</li>
              </ul>
              <p className="text-blue-600 cursor-pointer">Ko'proq</p>
            </div>

            {/* Uchinchi ustun */}
            <div>
              <h3 className="font-bold mb-2">Eng ommabop</h3>
              <ul className="space-y-2">
                <li>Samsung S seriyalar</li>
                <li>Redmi & Xiaomi A seriyalar</li>
                <li>Apple brendi Note seriyalar</li>
                <li>Eng arzonlari M seriyalar</li>
              </ul>
            </div>

            {/* To'rtinchi ustun */}
            <div>
              <h3 className="font-bold mb-2">Huawei mobile</h3>
              <ul className="space-y-2">
                <li>S seriyalar</li>
                <li>A seriyalar</li>
                <li>Note seriyalar</li>
                <li>M seriyalar</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
