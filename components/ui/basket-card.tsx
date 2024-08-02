import Image from "next/image";
import Delete from "@/assets/icons/trash.svg"
const index = (props: any) => {
  return (
    <div
      className={`w-[655px] h-[150px] bg-[#F2F2F2] px-[10px] py-[15px] rounded-[8px] flex items-start justify-between`}
    >
      <div>
        <Image className="h-[120px] w-auto" src={props.image} alt="image" />
      </div>
      <div className="">
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
            300 000{" "}
            <span className=" text-[16px] text-[#1F1D14] ml-[10px] font-normal ">
              uzs
            </span>
          </p>
        </div>
      </div>
      <button className=" rounded-full p-[4px] bg-[#fff] ">
        <Image className="w-[24px] h-[24px]" src={Delete} alt="img"/>
      </button>
    </div>
  );
};

export default index;
