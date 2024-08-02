import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import AboutCard from "@/components/ui/about-card";
import Jacket from "@/assets/images/big-jacket.png";
import Trinajor from "@/assets/images/big-trenajor.png";
import Bag from "@/assets/images/big-bag.png";
import Boots from "@/assets/images/big-boots.png";
import HomeIcon from "@/assets/icons/u_home-alt.svg"
import NextMini from "@/assets/icons/right-mini.svg"
import Image from "next/image";
const index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px] pt-[20px]">
      <Container>
        <div className="text-gray-500 flex text-sm mb-4">
          <Image src={HomeIcon} alt="img" className="mr-1" />
          <a href="/" className="hover:underline mr-1">
            Главная
          </a>{" "}
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <p className="text-black">Полезные информации</p>
        </div>
        <p className="font-medium text-[32px] mb-[30px]">Полезные информации</p>
        <div className=" grid grid-cols-2 gap-[24px]  ">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
        <button className=" text-[20px] text-[#000] px-[40px] py-[15px] rounded-[5px] border-2 border-[#FBD029] mt-[30px] mb-[80px]">
          Показать ещё
        </button>
        <p className="text-[32px] font-medium mb-[42px]">Акция</p>
        <div className="flex justify-between">
          <Card
            image={Boots}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Акция"
          />
          <Card
            image={Trinajor}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Акция"
          />
          <Card
            image={Jacket}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Акция"
          />
          <Card
            image={Bag}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Акция"
          />
        </div>
      </Container>
    </section>
  );
};

export default index;
