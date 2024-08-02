import Container from "@/components/container";
import Card from "@/components/ui/product-card";
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
        <div className="text-gray-500 flex text-sm mb-[16px]">
          <Image src={HomeIcon} alt="img" className="mr-[3px]" />
          <a href="/" className="hover:underline mr-[3px]">
            Главная
          </a>{" "}
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <p className="text-black">Продукты</p>
        </div>
        <p className="text-[32px] font-medium mb-[42px]">Реконмендуемые продукты</p>
        <div className="flex justify-between mb-[100px]">
          <Card
            image={Boots}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
          <Card
            image={Trinajor}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
          <Card
            image={Jacket}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
          <Card
            image={Bag}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
        </div>
      </Container>
    </section>
  );
};

export default index;
