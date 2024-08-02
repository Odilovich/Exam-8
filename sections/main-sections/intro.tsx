"use client";
import Image from "next/image";
import Container from "@/components/container";
import Boots from "@/assets/images/boots.png";
import Dumbbell from "@/assets/images/gantels.png";
import Bag from "@/assets/images/bag.png";
import { Carousel } from "antd";
import "./style.css";

function index() {
  return (
    <section className="bg-[#F2F2F2] pt-5 pb-[83px]">
      <Container>
        <div className="flex justify-between">
          <Carousel
            autoplay
            className="w-[819px]"
            arrows
            infinite={false}
            autoplaySpeed={3000}
          >
            <div className="w-[819px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
              <div className="pt-[82px] pl-[90px]">
                <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                  Бутсы Nike Phantom GT2 Elite FG
                </h2>
                <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                  Подробности
                </button>
              </div>
              <div>
                <Image
                  className="z-10 absolute top-[20px] right-[20px]"
                  src={Boots}
                  alt="boots"
                />
              </div>
              <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
              <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
            </div>
            <div className="w-[819px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
              <div className="pt-[82px] pl-[90px]">
                <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                  Бутсы Nike Phantom GT2 Elite FG
                </h2>
                <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                  Подробности
                </button>
              </div>
              <div>
                <Image
                  className="z-10 absolute top-[20px] right-[20px]"
                  src={Boots}
                  alt="boots"
                />
              </div>
              <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
              <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
            </div>
            <div className="w-[819px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
              <div className="pt-[82px] pl-[90px]">
                <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                  Бутсы Nike Phantom GT2 Elite FG
                </h2>
                <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                  Подробности
                </button>
              </div>
              <div>
                <Image
                  className="z-10 absolute top-[20px] right-[20px]"
                  src={Boots}
                  alt="boots"
                />
              </div>
              <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
              <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
            </div>
          </Carousel>

          <div>
            <div className="w-[397px] h-[237px] relative pt-[35px] pl-[34px] bg-[#fff] rounded-lg overflow-hidden mb-[15px]">
              <h3 className="font-medium w-[197px] mb-3">
                Adidas champions league 2021 Final
              </h3>
              <p className="text-[#1f1d1485] font-medium">220 000</p>
              <div className="flex gap-1 items-end mt-[-8px]">
                <p className="text-[#FF1313] font-bold text-[24px]">160 000</p>
                <p className="font-extrabold text-[12px] text-[#FF1313]">UZS</p>
              </div>
              <Image
                className="absolute top-[18px] right-[30px] z-10"
                src={Dumbbell}
                alt="dumbbell"
              />
              <div className="absolute w-[165px] h-[165px] bg-[#FBD029] top-[28px] right-[15px] rounded-full" />
              <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#FF1313] text-[20px] font-bold text-[#fff] rotate-[-35deg] right-[-165px] bottom-[10px] z-20">
                Акция
              </div>
            </div>
            <div className="w-[397px] h-[237px] relative pt-[35px] pl-[34px] bg-[#fff] rounded-lg overflow-hidden">
              <h3 className="font-medium w-[197px] mb-5">
                Adidas champions league 2021 Final
              </h3>
              <div className="flex gap-1 items-end mt-[-8px]">
                <p className="font-bold text-[24px]">485 000</p>
                <p className="font-extrabold text-[12px]">UZS</p>
              </div>
              <Image
                className="absolute top-[18px] right-[30px] z-10"
                src={Bag}
                alt="dumbbell"
              />
              <div className="absolute w-[165px] h-[165px] bg-[#FBD029] top-[28px] right-[15px] rounded-full" />
              <div className="absolute w-[434px] h-[58px] flex items-center justify-center text-[20px] font-bold text-[#fff] rotate-[-35deg] right-[-165px] bottom-[10px] z-20 bg-[#917BFF]">
                Новый
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default index;
