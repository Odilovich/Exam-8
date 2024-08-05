"use client";
import Container from "@/components/container";
import HomeIcon from "@/assets/icons/u_home-alt.svg";
import NextMini from "@/assets/icons/right-mini.svg";
import Image from "next/image";
import Cart from "@/components/ui/basket-card";
import Click from "@/assets/icons/CLICK.svg";
import Payme from "@/assets/icons/PAYME.svg";
import ProductStore from "@/store/products";
import { getDataFromCookie } from "@/utils/data-service";
import { useEffect } from "react";
const Index = () => {
  const { getCartProducts, cart } = ProductStore();
  const id = getDataFromCookie("user_id");
  const getData = async () => {
    await getCartProducts(id);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="bg-[#F2F2F2] pb-[80px] pt-[20px]">
      <Container>
        <div className="text-gray-500 flex text-sm mb-[16px]">
          <Image src={HomeIcon} alt="img" className="mr-[3px]" />
          <a href="/" className="hover:underline mr-[3px]">
            Главная
          </a>{" "}
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <p className="text-[#000]">Корзина</p>
        </div>
        <div className="flex items-start justify-between">
          <div className="bg-white px-[30px] py-[20px] rounded-lg w-[715px]">
            <div className=" flex items-center justify-between mb-[15px]">
              <h3 className=" text-[24px] text-[#000] font-medium">
                Ваша корзина
              </h3>
            </div>
            <div className=" flex flex-col gap-[10px]">
              {cart?.length > 0 ? (
                cart?.map((item: any, Index: number) => (
                  <Cart
                    key={Index}
                    image={item.image_url[0]}
                    title={item.product_name}
                    price={item.cost}
                    id={item.product_id}
                  />
                ))
              ) : (
                <div className="flex justify-center mt-10">
                  <p className="text-[32px] opacity-50">Корзина пуста</p>
                </div>
              )}
            </div>
            <p className=" text-[20px] underline text-[#06F] mt-[60px] mb-[18px]">
              Все информация о доставке
            </p>
            <p className="text-[20px] text-[#000] w-[385px]">
              Если у вас имеется вопросы позаоните по номеру:{" "}
              <span className=" text-[20px] font-medium text-[#06F]">
                <span className="text-[16px] font-normal">+998</span>{" "}
                <span className=" font-normal">(99) </span>995 55 65
              </span>
            </p>
          </div>
          <div className="bg-white p-[40px] rounded-lg w-[505px]">
            <h3 className="text-[20px] text-[#1F1D14] mb-[15px] font-medium">
              Итого
            </h3>
            <div className=" flex items-center justify-between">
              <p className="text-[20px] text-[#1F1D14] w-[153px]">
                Кол-во товаров:
              </p>
              <p className="text-[20px] text-[#1F1D14] w-[116px]">Сумма:</p>
            </div>
            <div className=" flex items-center justify-between">
              <span className="text-[24px] font-medium">4</span>
              <div>
                <span className="text-[24px] text-[#1F1D14] w-[86px] font-medium">
                  250 000
                </span>
                <span className="text-[14px] ml-[2px]">UZS</span>
              </div>
            </div>
            <h3 className="text-[20px] text-[#1F1D14] font-medium mt-[40px] mb-[24px]">
              Ваши данные
            </h3>
            <form>
              <label className="block text-[16px] mb-[8px] text-[#1F1D14]">
                Имя /Фамиля
              </label>
              <input
                className="w-[414px] ring-1 ring-black outline-none mb-[16px] h-[60px] py-[18px] pl-[25px] bg-[#F2F2F2] rounded-[5px]"
                type="text"
                placeholder="Имя /Фамиля"
              />

              <label className="block text-[16px] mb-[8px] text-[#1F1D14]">
                Ваш номер
              </label>
              <input
                className="w-[414px] ring-1 ring-black outline-none mb-[16px] h-[60px] py-[18px] pl-[25px] bg-[#F2F2F2] rounded-[5px]"
                type="number"
                placeholder="+998 __ ___ __ __"
              />

              <label className="block text-[16px] mb-[8px] text-[#1F1D14]">
                Адрес доставки
              </label>
              <input
                className="w-[414px] ring-1 ring-black outline-none mb-[16px] h-[60px] py-[18px] pl-[25px] bg-[#F2F2F2] rounded-[5px]"
                type="text"
                placeholder="Область/город/улица/дом"
              />
            </form>
            <h3 className="text-[20px] font-medium text-[#1F1D14] mb-[24px] mt-[40px]">
              Тип оплаты
            </h3>
            <div className=" flex flex-wrap gap-3">
              <div className=" px-[25px] py-[17px] bg-[#F2F2F2] rounded-[8px] w-[130px]">
                <Image src={Click} alt="img" />
              </div>
              <div className=" px-[25px] py-[17px] bg-[#F2F2F2] rounded-[8px] w-[130px]">
                <Image src={Payme} alt="img" />
              </div>
              <div className="flex items-center px-[25px] py-[17px] bg-[#F2F2F2] rounded-[8px] w-[130px]">
                <p className="text-[14px] text-[#1F1D14] font-medium">
                  Через карту
                </p>
              </div>
              <div className=" px-[25px] py-[17px] bg-[#F2F2F2] rounded-[8px] w-[130px]">
                <p className="text-[16px] text-center text-[#1F1D14] font-medium">
                  Банковский счёт
                </p>
              </div>
            </div>
            <button className="bg-[#FBD029] hover:bg-[#ddbc38] duration-150 rounded-[5px] w-full mt-[42px] py-[15px] px-[30px] text-[24px] font-medium text-[#1F1D14]">
              Купить
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
