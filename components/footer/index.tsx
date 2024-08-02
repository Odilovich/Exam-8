"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/components/container";
import LogoIcon from "@/assets/icons/main-logo.svg";
import PhoneIcon from "@/assets/icons/u_phone-alt.svg";
import MailIcon from "@/assets/icons/fi_mail.svg";
import Instagram from "@/assets/icons/fi_instagram.svg";
import Facebook from "@/assets/icons/u_facebook-f.svg";
import Telegram from "@/assets/icons/u_telegram-alt.svg";
import FooterLine from "@/sections/main-sections/line";
const Index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <FooterLine />
      <footer className="bg-[#1F1D14]">
        <Container>
          <div className=" flex items-start pt-[72px] pb-[45px] justify-between border-b border-[#686868]">
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
            </div>
            <div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-[#fff] text-[18px] cursor-pointer">
                  Контакты
                </p>
                <div className="flex items-center gap-[5px]">
                  <Image src={PhoneIcon} alt="phone icon" />
                  <a href="tel:+998905658585" className="text-[#fff]">
                    +998 (90) <span className="text-[24px]">565-85-85</span>
                  </a>
                </div>
                <div className="flex items-center gap-[5px]">
                  <Image src={MailIcon} alt="phone icon" />
                  <a
                    href="https://www.info@gmail.com"
                    target="_blank"
                    className="text-[#fff] text-[20px]"
                  >
                    info@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[13px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[16px] text-[#fff] w-[235px]">
                Tashkent Sh. Chilonzor 9 kvartal 12 uy
              </p>
            </div>
            <div className=" flex flex-col items-start">
              <p className="mb-[24px] text-[18px] text-[#fff] font-bold">
                Подписатся
              </p>
              <form className=" flex flex-col items-center gap-[16px] w-[235px] mb-[50px]">
                <input
                  className="w-full h-[40px] pl-[16px] py-[8px] bg-[#fff] rounded-[5px] border border-[#9A9EA5] outline-none"
                  type="email"
                  placeholder="support@figma.com"
                />
                <button
                  className=" w-full px-[26px] py-[5px] rounded-[6px] bg-[#FBD029]"
                  type="submit"
                >
                  Отправить
                </button>
              </form>
              <div className=" flex items-center gap-[20px]">
                <Image
                  className=" cursor-pointer hover:scale-110 duration-200"
                  src={Instagram}
                  alt="Instagram-icon"
                />
                <Image
                  className=" cursor-pointer hover:scale-110 duration-200"
                  src={Facebook}
                  alt="Facebook-icon"
                />
                <Image
                  className=" cursor-pointer hover:scale-110 duration-200"
                  src={Telegram}
                  alt="Telegram-icon"
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between py-[20px]">
            <div>
              <p className="text-[12px] text-[#fff] font-light">
                © 2022 All Rights Reserved
              </p>
            </div>
            <div className=" flex items-center gap-[40px]">
              <p className="text-[14px] text-[#7B7E86]">Privacy Policy</p>
              <p className="text-[14px] text-[#7B7E86]">Terms of Use</p>
              <p className="text-[14px] text-[#7B7E86]">Sales and Refunds</p>
              <p className="text-[14px] text-[#7B7E86]">Legal</p>
              <p className="text-[14px] text-[#7B7E86]">Site Map</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Index;
