import Container from "@/components/container";
import Card from '@/components/ui/catalog-card'
import TranajorImage from "@/assets/images/tranajor.png";
import Balls from "@/assets/images/balls.png";
import LittleBoot from "@/assets/images/little-boot.png";
import Jacket from "@/assets/images/jacket.png";
import HeadClothes from "@/assets/images/headclothes.png";
import Skying from "@/assets/images/skying.png";
const index = () => {
  return (
    <>
      <section className="py-4">
        <Container>
          <p className="text-[32px] font-medium mb-[30px]">Катаолог</p>
          <div className="flex justify-between">
            <Card title={'Тренажеры'} image={TranajorImage} bg="#D3E5F2"/>
            <Card title={'Мячи'} image={Balls} bg={"#E2C6BE"}/>
            <Card title={'Спротивные обуви'} image={LittleBoot} bg="#DADBE0"/>
            <Card title={'Спортивные одежды'} image={Jacket} bg="#E2EEC0"/>
            <Card title={'Водный спорт'} image={HeadClothes} bg="#C2BCE8"/>
            <Card title={'Горный спорт'} image={Skying} bg="#ABA520"/> 
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
