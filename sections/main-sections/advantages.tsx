import Container from "@/components/container";
import Card from "@/components/ui/advantages-card"
import Truck from "@/assets/icons/Track.svg"
import Advant from "@/assets/icons/Advant.svg"
import Discont from "@/assets/icons/discount.svg"
import Table from "@/assets/icons/table.svg"
const index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px]">
      <Container>
        <p className="font-medium text-[32px] mb-[30px]">Примущества</p>
        <div className=" flex items-center justify-between">
            <Card image={Truck} title={"Доставка по всему Узбекистану"}/>
            <Card image={Advant} title={"Доставка по всему Узбекистану"}/>
            <Card image={Discont} title={"Скидки и акции"}/>
            <Card image={Table} title={"Широкий ассортимент товаров"}/>
        </div>
      </Container>
    </section>
  );
};

export default index;
