import Image from "next/image";
import CartIcon from "@/assets/icons/u_shopping-cart-alt.svg";
import HeartIcon from "@/assets/icons/u_heart-sign.svg";
import Link from "next/link";

const index = ({ image, title, price, content }: any) => {
  return (
    <Link href={`/products/${title.toLowerCase().split(" ").join("-")}`} className="w-[292px] h-[416px] bg-white rounded-[5px] pt-[25px] relative overflow-hidden cursor-pointer">
      <Image
        className="absolute top-[14px] right-[14px] cursor-pointer w-[25px]"
        src={HeartIcon}
        alt="heart icon"
      />
      {content === "Акция"? (
        <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#FF1313] text-[20px] font-bold text-[#fff] rotate-[-41deg] left-[-165px] top-[10px] z-20">
          Акция
        </div>
      ) : content === "Новый"? (
        <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#917BFF] text-[20px] font-bold text-[#fff] rotate-[-41deg] left-[-165px] top-[10px] z-20">
          Новый
        </div>
      ) : content === "ТОП" && (
        <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#10DE24] text-[20px] font-bold text-[#fff] rotate-[-41deg] left-[-165px] top-[10px] z-20">
          ТОП
        </div>
      )
    }
      <div className="flex justify-center items-center mb-5">
        <Image src={image} alt="image" />
      </div>
      <div className="px-5">
        <h3 className="text-[20px] mb-5">{title}</h3>
        <p className="text-[20px] font-bold">
          {price} <span className="text-[12px]">UZS</span>
        </p>
      </div>
      <button className="absolute bottom-0 bg-[#FBD029] w-full py-[13px] flex items-center gap-[6px] justify-center">
        <Image src={CartIcon} alt="cart icon" />
        <span className="text-[20px]">Корзина</span>
      </button>
    </Link>
  );
};

export default index;
