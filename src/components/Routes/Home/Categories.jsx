import React from "react";

export default function Categories() {
  return (
    <section className=" mb-10">
      <h1 className="text-[28px] font-semibold mb-[18px]">Kategoriyalar</h1>
      <div className="grid grid-cols-1  sm:grid-cols-4 lg:grid-cols-8 gap-y-5 gap-x-5">
        <div className="pt-2 pb-10 h-[200px] cursor-pointer rounded-[10px] hover:outline hover:outline-2 hover:outline-red-600 bg-white">
          <div className="flex justify-center">
            <img
              src="../.././public/iphone13.png"
              className="block w-[136px] h-[136px]"
              alt="iPhone 13"
            />
          </div>
          <p className="text-base text-center mt-[3px]">Smartfonlar</p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white">
          <div className="flex justify-center">
            <img
              src="../.././public/macbook.png"
              className="block"
              alt="mackbook"
            />
          </div>
          <p className="text-base text-center mt-[3px]">
            Kompyuterlar va <br /> notebooklar
          </p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white ">
          <div className="flex justify-center">
            <img
              src="../.././public/TV.png"
              className="block"
              alt="iPhone 13"
            />
          </div>
          <p className="text-base text-center mt-[3px]">Televizorlar</p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white">
          <div className="flex justify-center">
            <img
              src="../.././public/smartw.png"
              className="block"
              alt="Smartwatch"
            />
          </div>
          <p className="text-base text-center mt-[3px]">Aqlli soatlar</p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white">
          <div className="flex justify-center">
            <img
              src="../.././public/airpods.png"
              className="block"
              alt="airpods"
            />
          </div>
          <p className="text-base text-center mt-[3px]">Quloqchinlar</p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white ">
          <div className="flex justify-center">
            <img
              src="../.././public/dvb.png"
              className="block"
              alt="conditioner"
            />
          </div>
          <p className="text-base text-center mt-[3px]">Konditsioner</p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white">
          <div className="flex justify-center">
            <img
              src="../.././public/fridge.png"
              className="block"
              alt="fridge"
            />
          </div>
          <p className="text-base text-center mt-[3px]">Sovutgichlar</p>
        </div>
        <div className="pt-2 pb-10 h-[200px] rounded-[10px] cursor-pointer hover:outline hover:outline-2 hover:outline-red-600 bg-white">
          <div className="flex justify-center">
            <img
              src="../.././public/fvb.png"
              className="block"
              alt="Kir yuvish mashinasi"
            />
          </div>
          <p className="text-base text-center mt-[3px]">
            Kir yuvish <br /> mashinalari
          </p>
        </div>
      </div>
      <button className="bg-white py-[14px] w-full hover:outline font-semibold text-lg hover:outline-2 hover:outline-red-600 text-center rounded-[10px] mt-5">
        Batafsil
      </button>
    </section>
  );
}
