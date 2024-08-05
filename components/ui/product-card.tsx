"use client";
import Image from "next/image";
import CartIcon from "@/assets/icons/u_shopping-cart-alt.svg";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "next/link";
import ProductStore from "@/store/products";
import { useEffect, useState } from "react";
import { getDataFromCookie } from "@/utils/data-service";
import Notification from "@/utils/notification";

const Index = ({ image, title, price, content, id, isActive, isLiked }: any) => {
  const { cartProduct, likeProduct } = ProductStore();
  const [cart, setCart] = useState(false);
  const [liked, setLiked] = useState(false);
  const token = getDataFromCookie("access_token");
  
  const handleCart = async () => {
    if (token) {
      setCart(!cart);
      const payload = {
        productId: id,
      };
      try {
        await cartProduct(payload);
      } catch (err) {
        console.log(err);
      }
    } else {
      Notification({
        type: "error",
        title: "Вы должны войти, чтобы добавить товар в корзину",
      })
    }
  };
  useEffect(() => {
    if (isActive === true) {
      setCart(true);
    }
  }, [setCart]);

  const handleLike = async () => {
    if (token) {
      setLiked(!liked);
      const res = await likeProduct(id)
      console.log(res);
    } else {
      Notification({
        type: "error",
        title: "Вы должны войти, чтобы добавить товар в корзину",
      })
    }
  }
  // useEffect(() => {
  //   if (isLiked === true) {
  //     setLiked(true);
  //   }
  // } ,[setLiked])
  return (
    <div className="w-[292px] h-[416px] bg-white rounded-[5px] pt-[25px] relative overflow-hidden cursor-pointer">
      <div onClick={handleLike} className="absolute top-[10px] right-[14px] cursor-pointer w-[25px]">
        {liked === false ? (
          <FavoriteBorderOutlinedIcon/>
        ) : (
          <FavoriteIcon/>
        )
      }
      </div>
      <Link href={`/products/${id}`}>
        {content === "Акция" ? (
          <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#FF1313] text-[20px] font-bold text-[#fff] rotate-[-41deg] left-[-165px] top-[10px] z-20">
            Акция
          </div>
        ) : content === "Новый" ? (
          <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#917BFF] text-[20px] font-bold text-[#fff] rotate-[-41deg] left-[-165px] top-[10px] z-20">
            Новый
          </div>
        ) : (
          content === "ТОП" && (
            <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#10DE24] text-[20px] font-bold text-[#fff] rotate-[-41deg] left-[-165px] top-[10px] z-20">
              ТОП
            </div>
          )
        )}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flex justify-center items-center mt-4 mx-4 mb-5 h-[180px] bg-no-repeat bg-cover"
        >
        </div>
        <div className="px-5">
          <h3 className="text-[20px] mb-5">{title}</h3>
          <p className="text-[20px] font-bold">{price}</p>
        </div>
      </Link>
      {cart === false ? (
        <button
          onClick={handleCart}
          className="absolute bottom-0 bg-[#FBD029] w-full py-[13px] flex items-center gap-[6px] justify-center"
        >
          <Image src={CartIcon} alt="cart icon" />
          <span className="text-[20px]">Корзина</span>
        </button>
      ) : (
        <button
          onClick={handleCart}
          className="absolute bottom-0 bg-red-500 w-full py-[13px] flex items-center gap-[6px] justify-center"
        >
          <RemoveShoppingCartOutlinedIcon />
          <span className="text-[20px]">Удалить корзину</span>
        </button>
      )}
    </div>
  );
};

export default Index;
