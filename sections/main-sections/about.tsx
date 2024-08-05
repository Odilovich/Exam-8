import Container from "@/components/container";
const Index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px]">
      <Container>
        <p className="font-medium text-[32px] mb-[30px]">О нас</p>
        <div className="w-full h-[367px] bg-[#000] rounded-[8px] relative">
          <p className="text-[20px] text-[#fff] w-[719px] h-[116px] leading-7 ml-[80px] pt-[70px] font-normal">
            Интернет магазин спортивных товаров{" "}
            <span className=" underline cursor-pointer">7MARKETSPORT.UZ</span>{" "}
            предлагает широкий ассортимент продукции с доставкой по Ташкенту,
            области и другим регионам Узбекистана. Ведется работа как с
            розничными покупателями, так и с оптовыми клиентами. Разнообразие
            форм оплаты заметно упрощает процесс приобретения товара. Действует
            гибкая система скидок. Разнообразие форм оплаты заметно упрощает
            процесс приобретения товара. Действует гибкая система скидок.
          </p>
          <button className=" absolute right-[100px] bottom-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="40"
              viewBox="0 0 85 40"
              fill="none"
            >
              <g opacity="0.78">
                <path
                  d="M2 19.9087H84C78.0364 20.572 66.1091 17.9189 66.1091 2"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="square"
                />
                <path
                  d="M2 20.0913H84C78.0364 19.428 66.1091 22.0811 66.1091 38"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="square"
                />
              </g>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Index;
