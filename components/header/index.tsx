"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import LogoIcon from "@/assets/icons/main-logo.svg";
import PhoneIcon from "@/assets/icons/u_phone-alt.svg";
import MailIcon from "@/assets/icons/fi_mail.svg";
import KatalogIcon from "@/assets/icons/fi_layers.svg";
import SearchIcon from "@/assets/icons/u_search.svg";
import UserIcon from "@/assets/icons/u_user.svg";
import HeartIcon from "@/assets/icons/u_heart-sign.svg";
import CartIcon from "@/assets/icons/u_shopping-cart-alt.svg";
const Index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const data = [
    { title: "Продукты", path: "/products" },
    { title: "Контакты", path: "/contacts" },
    { title: "Оплата и Доставка", path: "/payments" },
    { title: "Новости", path: "/news" },
    { title: "О нас", path: "/abouts" },
  ];
  return (
    <header className="bg-[#000]">
      <nav>
        <Container>
          <div className="h-[79px] flex items-center justify-between">
            <div className="flex items-center gap-x-5">
              <div
                onClick={handleClick}
                className="flex items-center leading-7 gap-[11px] cursor-pointer"
              >
                <Image src={LogoIcon} alt="logo" />
                <span className="w-[100px] font-semibold text-[24px] text-[#fff]">
                  Sport Market
                </span>
              </div>
              <div className="flex gap-[15px]">
              {data.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path} className="text-white hover:text-yellow-400 duration-200">
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex items-center gap-[5px]">
                <Image src={PhoneIcon} alt="phone icon" />
                <a href="tel:+998905658585" className="text-[#fff]">
                  +998 (90) 565-85-85
                </a>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image src={MailIcon} alt="phone icon" />
                <a
                  href="https://www.info@gmail.com"
                  target="_blank"
                  className="text-[#fff]"
                >
                  info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-[#fff]">
          <Container>
            <div className="h-[85px] flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <button className="flex items-center gap-[10px] bg-[#1F1D14] px-9 py-[12px] rounded-[5px]">
                  <Image src={KatalogIcon} alt="icon" />
                  <span className="text-[20px] text-[#fff]">Каталог</span>
                </button>
                <div className="w-[502px] relative">
                  <input
                    className="h-[53px] bg-[#F2F2F2] pl-5 pr-12 rounded-[5px] w-full duration-200 outline-none ring-[#1F1D14] focus:ring-1"
                    type="text"
                    placeholder="Поиск"
                  />
                  <Image
                    className="absolute right-5 top-[18px]"
                    src={SearchIcon}
                    alt="search icon"
                  />
                </div>
              </div>
              <div className="flex gap-x-[25px] items-end">
                <div className="flex items-center gap-x-[13px]">
                  <button onClick={()=>router.push("/signin")} className="w-[45px] h-[45px] bg-[#F2F2F2] rounded-[3px] flex items-center justify-center cursor-pointer">
                    <Image src={UserIcon} alt="user icon" />
                  </button>
                  <button className="w-[45px] h-[45px] bg-[#F2F2F2] rounded-[3px] flex items-center justify-center cursor-pointer">
                    <Image src={HeartIcon} alt="heart icon" />
                  </button>
                </div>
                <button className="flex items-center gap-[5px] bg-[#F2F2F2] px-[30px] py-[12px]">
                  <Image src={CartIcon} alt="cart icon" />
                  <span className="text-[20px]">Корзина</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Index;
