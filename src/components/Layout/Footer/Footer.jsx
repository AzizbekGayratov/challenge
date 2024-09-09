import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="px-5 bg-white hidden sm:block">
        <div className="max-w-[1270px] mx-auto pb-10 pt-[60px] flex justify-between">
          <ul className="grid grid-cols-3 gap-[74px]">
            <li>
              <ul className="flex flex-col gap-5">
                <li className="footer_list_item">Hujjatlar</li>
                <li className="footer_list_item">Umumiy shartlar</li>
                <li className="footer_list_item">Ofertalar arxivi</li>
                <li className="footer_list_item">Nizom</li>
                <li className="footer_list_item">Guvohnoma</li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-5">
                <li className="footer_list_item">Servis</li>
                <li className="footer_list_item">Do’konlar</li>
                <li className="footer_list_item">Biz haqimizda</li>
                <li className="footer_list_item">Hamkorlik uchun</li>
                <li className="footer_list_item">Qaytarish</li>
                <li className="footer_list_item">Promokodlar</li>
              </ul>
            </li>
            <li className="hidden lg:block">
              <ul className="flex flex-col gap-5">
                <li className="footer_list_item">Mahsulotlar katalogi</li>
                <li className="footer_list_item">Katalog 1</li>
                <li className="footer_list_item">Katalog 1</li>
                <li className="footer_list_item">Katalog 2</li>
                <li className="footer_list_item">Katalog 2</li>
                <li className="footer_list_item">Katalog 3</li>
                <li className="footer_list_item">Katalog 3</li>
              </ul>
            </li>
          </ul>
          <div>
            <address>
              <ul className="flex flex-col gap-5">
                <li>
                  <p className="footer_list_item">Axbarot xizmati</p>
                </li>
                <li>
                  <a
                    href="mailto:contact.@nextstore.uz"
                    className="footer_list_item"
                  >
                    contact.@nextstore.uz
                  </a>
                </li>
                <li>
                  <a href="tel:+998977129696" className="footer_list_item">
                    +998 97 712 96 96
                  </a>
                  <a href="tel:+998955030909" className="footer_list_item">
                    +998 95 503 09 09
                  </a>
                </li>
                <li>
                  <p className="footer_list_item">
                    Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston
                  </p>
                </li>
              </ul>
            </address>
            <img src="/footer.svg" alt="img" className="mt-7" />
          </div>
        </div>
        <div className="max-w-[1270px] mx-auto">
          <p className="h-[2px] footer_divider w-full"></p>
          <div className="py-[37px] flex items-center justify-between">
            <p className="footer_list_item">2022 Nextstore.com</p>
            <p className="footer_list_item">Powered by Dev_Gratuaders</p>
          </div>
        </div>
      </footer>

      <footer className="footer_mobile_bg px-5 sm:hidden">
        <div className="py-10">
          <ul className="flex flex-col gap-10 mb-10">
            <li>
              <ul className="flex flex-col gap-5">
                <li className="footer_list_item">Hujjatlar</li>
                <li className="footer_list_item">Umumiy shartlar</li>
                <li className="footer_list_item">Ofertalar arxivi</li>
                <li className="footer_list_item">Nizom</li>
                <li className="footer_list_item">Guvohnoma</li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-5">
                <li className="footer_list_item">Servis</li>
                <li className="footer_list_item">Do’konlar</li>
                <li className="footer_list_item">Biz haqimizda</li>
                <li className="footer_list_item">Hamkorlik uchun</li>
                <li className="footer_list_item">Qaytarish</li>
                <li className="footer_list_item">Promokodlar</li>
              </ul>
            </li>
          </ul>
          <address className="mb-[60px]">
            <ul className="flex flex-col gap-5">
              <li>
                <p className="footer_list_item">Axbarot xizmati</p>
              </li>
              <li>
                <a
                  href="mailto:contact.@nextstore.uz"
                  className="footer_list_item"
                >
                  contact.@nextstore.uz
                </a>
              </li>
              <li>
                <a href="tel:+998977129696" className="footer_list_item">
                  +998 97 712 96 96
                </a>
                <a href="tel:+998955030909" className="footer_list_item">
                  +998 95 503 09 09
                </a>
              </li>
              <li>
                <p className="footer_list_item">
                  Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston
                </p>
              </li>
            </ul>
          </address>
          <div className="w-[250px] mx-auto">
            <img
              src="/mobilefooter.svg"
              alt="icons"
              className="w-full text-center"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="h-[2px] footer_divider w-full"></div>
          <div className="py-5">
            <p className="text-Main font-[539]">2022 Nextstore.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
