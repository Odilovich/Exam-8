import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import Jacket from "@/assets/images/big-jacket.png";
import Trinajor from "@/assets/images/big-trenajor.png";
import Bag from "@/assets/images/big-bag.png";
import Boots from "@/assets/images/big-boots.png";
import HomeIcon from "@/assets/icons/u_home-alt.svg"
import NextMini from "@/assets/icons/right-mini.svg"
import Image from "next/image";
const Index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px] pt-[20px]">
      <Container>
        <div className="text-gray-500 flex text-sm mb-[16px]">
          <Image src={HomeIcon} alt="img" className="mr-[3px]" />
          <a href="/" className="hover:underline mr-[3px]">
            Главная
          </a>{" "}
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <a href="/products" className="hover:underline mr-[3px]">Продукты</a>
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <p className="text-[#000]">Оплата и Доставка</p>
        </div>
        <div className="min-h-screen bg-[#F2F2F2] flex flex-col lg:flex-row">
            <aside className="w-full lg:w-[187px] h-64 p-6 bg-white shadow-md mb-4 lg:mb-0">
              <nav className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1 h-12 bg-yellow-400 mr-2"></div>
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="block text-gray-700 font-bold hover:underline"
                    >
                      Оплата и Доставка
                    </a>
                  </div>
                </div>
              </nav>
            </aside>

            <main className="flex-1 pl-0 lg:pl-6 bg-[#F2F2F2]">
              <div className="bg-white w-full lg:w-[714px] h-auto p-10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Способы оплаты</h2>
                <p className="mb-4">
                  Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину»
                  и выбрать тот товар, который Вы хотите купить.
                </p>
                <p className="mb-6">
                  После перехода в Корзину, откроется список товаров, которые Вы
                  добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                  появится «Контактная информация» и «Способы доставки», которые
                  Вам не обходимо заполнить.
                </p>
                <p className="mb-6">
                  Вы можете выбрать более подходящий для Вас способ оплаты:
                  -Оплата на месте; -Оплата по терминалу; -Оплата через
                  платёжные системы, такие как CLICK, Payme.
                </p>
                <p className="mb-6">
                  Оплатить покупки можно наличными при получении. Убедительная
                  просьба вначале ознакомиться с товаром, убедиться в отсутствии
                  дефектов в присутствии курьера, после чего оплачивать сумму.
                </p>
                <h2 className="text-2xl font-bold mt-4 mb-4">Доставка</h2>
                <p className="mb-4">Тарифы на доставку товаров по Ташкенту:</p>
                <p className="mb-6">
                  -20.000 сум для товаров до 150.000 сум -Бесплатная доставка
                  для всех товаров от 150.000 сум
                </p>
                <p className="mb-6">
                  Тарифы на доставку товаров по всех регионов: -Платная доставка
                  для всех товаров по согласованной цене -Бесплатная установка
                  для всех тренажеров
                </p>
                
              </div>
            </main>
          </div>
        <p className="text-[32px] font-medium mb-[42px]">Акция</p>
        <div className="flex justify-between mb-[100px]">
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

export default Index;
