import React from "react";
import { ProductData } from "../../../Data";
import { SlBasket } from "react-icons/sl";
import LotSoldBtn from "./LotSoldBtn";
import { Link } from "react-router-dom";

export default function LotSold() {
  return (
    <section className=" mb-20 gap-12">
      <h1 className="text-[28px] font-semibold mb-[18px]">Eng ko'p sotilgan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {ProductData.map((i) => (
          <>
            <li
              key={i.id}
              className="p-[10px] bg-white rounded-[10px] shadow"
            >
              <div className="p-[10px] flex h-[280px] flex-col bg-white relative pt-[25px]">
                <LotSoldBtn />

                <div className="flex justify-center">
                  <img src={i.img} className="mb-3" alt="notebook" />
                </div>
                <Link to={`/${i.id}`}>
                  <h3 className="text-lg text-[#0D63F3]">{i.price}</h3>
                  <p className=" text-sm">{i.desc}</p>
                </Link>
              </div>
              <h4 className="text-sm ml-[10px] mb-8 text-start text-[#6C757D;]">
                {i.order}
              </h4>
              <div className="flex justify-around mb-3">
                <button className="text-base -ml-[10px] px-[20px] rounded-lg py-[10px] text-white font-medium bg-[#0D63F3] hover:bg-gradient-to-r from-[#F14E53] to-[#0d63f3]">
                  Sotib olish
                </button>
                <button>
                  <SlBasket size={24} className="text-[#6C757D]" />
                </button>
              </div>
            </li>
          </>
        ))}
      </div>
      <button className="bg-white py-[14px] w-full hover:outline font-semibold text-lg hover:outline-2 hover:outline-red-600 text-center rounded-[10px] mt-5">
        Ko'proq ko'rish
      </button>
    </section>
  );
}
