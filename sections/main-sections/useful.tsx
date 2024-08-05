import Container from "@/components/container";
import Nimadir from '@/assets/images/nimadir.png'
import Image from "next/image";
const Index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px]">
      <Container>
        <p className="font-medium text-[32px] mb-[30px]">Полезное</p>
        <div className="flex gap-5">
          <div className="w-[50%] h-[417px] px-[35px] py-[38px] bg-white rounded-lg">
            <h2 className="text-[32px] w-[460px] font-medium mb-2">
              Как правильно выбрать эллиптический тренажер?
            </h2>
            <p className="w-[460px]">
              Эллиптические тренажёры популярны среди людей любого возраста и с
              разным уровнем физической подготовкb Эллиптические тренажёры
              популярны среди людей любого возраста и с разным уровнем
              физической подготовки...
            </p>
          </div>
          <div className="w-[50%]">
            <div className="bg-white rounded-lg h-[350px] mb-[15px] flex items-center justify-center">
              <Image src={Nimadir} alt="image" />
            </div>
            <div className="bg-white rounded-lg h-[52px] flex items-center justify-center cursor-pointer">Посмотрет все</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
