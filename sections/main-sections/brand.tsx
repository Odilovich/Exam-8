import Container from "@/components/container";
import Puma from "@/assets/icons/puma.svg";
import XCH from "@/assets/icons/xch.svg";
import Nike from "@/assets/icons/nike.svg";
import Adidas from "@/assets/icons/adidas.svg";
import Reebok from "@/assets/icons/reebok.svg";
import Image from "next/image";
import { Carousel } from "antd";
const index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px]">
      <Container>
        <div className="">
          <Carousel
            autoplay
            className="w-full"
            arrows
            infinite={true}
            autoplaySpeed={2000}
          >
            <div >
              <div className=" flex items-center gap-[110px] px-10 py-10">
                <Image src={Puma} alt="puma" />
                <Image src={XCH} alt="xch" />
                <Image src={Nike} alt="nike" />
                <Image src={Adidas} alt="adidas" />
                <Image src={Reebok} alt="reebok" />
                <Image src={Puma} alt="puma" />
                <Image src={XCH} alt="xch" />
              </div>
            </div>
            <div >
              <div className=" flex items-center gap-[110px] px-10 py-10">
                <Image src={XCH} alt="xch" />
                <Image src={Puma} alt="puma" />
                <Image src={Adidas} alt="adidas" />
                <Image src={Nike} alt="nike" />
                <Image src={Reebok} alt="reebok" />
                <Image src={XCH} alt="xch" />
                <Image src={Puma} alt="puma" />
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default index;
