import ProductStore from "@/store/products"
import Image from "next/image";
import Delete from "@/assets/icons/trash.svg"
import { useState } from "react";
import { getDataFromCookie } from "@/utils/data-service";
const index = (props: any) => {
  const { cartProduct, getCartProducts } = ProductStore();
  const id = getDataFromCookie("user_id")
  const handleDelete = async () => {
    const payload = {
      productId: props.id,
    }
    try {
      await cartProduct(payload)
    } catch (err) {
      console.log(err);
    } finally{
      getCartProducts(id);
    }
  }
  return (
    <div
      className={`w-[655px] h-[150px] bg-[#F2F2F2] px-[10px] py-[15px] rounded-[8px] flex items-start justify-between`}
    >
      <div>
        <Image className="h-[120px] w-auto" src={props.image} alt="image" />
      </div>
      <div>
        <p className="text-[20px] mb-[25px] w-[292px]">{props.title}</p>
        <div className=" flex items-center gap-[40px] ">
          <div className=" flex items-center gap-[9px] ">
            <button className=" bg-white rounded-full w-[32px] h-[32px]">
              -
            </button>
            <span className=" text-[#000] text-[20px]">1</span>
            <button className=" bg-white rounded-full w-[32px] h-[32px]">
              +
            </button>
          </div>
          <p className="text-[22px] text-[#000] font-bold">
           $ {props.price.toLocaleString()}
          </p>
        </div>
      </div>
      <button onClick={handleDelete} className=" rounded-full p-[4px] bg-[#fff] ">
        <Image className="w-[24px] h-[24px]" src={Delete} alt="img"/>
      </button>
    </div>
  );
};

export default index;
