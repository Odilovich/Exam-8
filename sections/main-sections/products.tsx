import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import Jacket from "@/assets/images/big-jacket.png";
import Trinajor from "@/assets/images/big-trenajor.png";
import Bag from "@/assets/images/big-bag.png";
import Shoe from "@/assets/images/big-shoe.png";
const index = () => {
  return (
    <section className="py-[70px] bg-[#F2F2F2]">
      <Container>
        <p className="text-[32px] font-medium mb-[42px]">Продукты</p>
        <div className="flex flex-wrap gap-[24px]">
          <Card image={Shoe} title="Бутса Nike Mercurial Superfly 8 FG" price="500 000" />
          <Card image={Jacket} title="Бутса Nike Mercurial Superfly 8 FG" price="500 000" />
          <Card image={Trinajor} title="Бутса Nike Mercurial Superfly 8 FG" price="500 000" />
          <Card image={Bag} title="Бутса Nike Mercurial Superfly 8 FG" price="500 000" />
        </div>
      </Container>
    </section>
  );
};

export default index;
