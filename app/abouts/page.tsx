import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import Jacket from "@/assets/images/big-jacket.png";
import Trinajor from "@/assets/images/big-trenajor.png";
import Bag from "@/assets/images/big-bag.png";
import Boots from "@/assets/images/big-boots.png";
import HomeIcon from "@/assets/icons/u_home-alt.svg";
import NextMini from "@/assets/icons/right-mini.svg";
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
          <a href="/products" className="hover:underline mr-[3px]">
            Продукты
          </a>
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <p className="text-[#000]">О нас</p>
        </div>
        <div className=" bg-[#F2F2F2] flex flex-col lg:flex-row">
          <aside className="w-full lg:w-[187px] h-64 p-6 bg-white shadow-md mb-4 lg:mb-0">
            <nav className="space-y-4">
              <div className="flex items-center">
                <div className="w-1 h-12 bg-yellow-400 mr-2"></div>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="block text-gray-700 font-bold hover:underline"
                  >
                    О нас
                  </a>
                  <a
                    href="#"
                    className="block text-gray-700 font-bold hover:underline"
                  >
                    Вканансия
                  </a>
                </div>
              </div>
            </nav>
          </aside>

          <main className="flex-1 pl-0 lg:pl-6 bg-[#F2F2F2] mb-[120px]">
            <div className="bg-white w-full lg:w-[714px] h-auto p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-[17px]">7 SPORT MARKET</h2>
              <p className="mb-[29px]">
                В составе томатов в большом количестве содержатся сахар,
                клетчатка, пектины, бета-каротин, витамины B1, B2, B5, B6, B9,
                C, K, H и PP, а также нужные организму человека.
              </p>
              <p className="mb-[35px]">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <p className="mb-[29px]">
                В составе томатов в большом количестве содержатся сахар,
                клетчатка, пектины, бета-каротин, витамины B1, B2, B5, B6, B9,
                C, K, H и PP, а также нужные организму человека.
              </p>
              <p className="mb-[62px]">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <div className="flex items-center mt-4 justify-end">
                <div className="flex items-center gap-[32px] ">
                  <div className=" flex items-center gap-[5px] ">
                    <a href="#" className="text-black ">
                      Распечатать:
                    </a>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2_815)">
                          <path
                            d="M3.50033 10.5H2.33366C2.02424 10.5 1.72749 10.3771 1.5087 10.1583C1.28991 9.9395 1.16699 9.64275 1.16699 9.33333V6.41667C1.16699 6.10725 1.28991 5.8105 1.5087 5.59171C1.72749 5.37292 2.02424 5.25 2.33366 5.25H11.667C11.9764 5.25 12.2732 5.37292 12.4919 5.59171C12.7107 5.8105 12.8337 6.10725 12.8337 6.41667V9.33333C12.8337 9.64275 12.7107 9.9395 12.4919 10.1583C12.2732 10.3771 11.9764 10.5 11.667 10.5H10.5003"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 8.1665H3.5V12.8332H10.5V8.1665Z"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 5.24984V1.1665H10.5V5.24984"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_815">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <div className=" flex items-center gap-[5px] ">
                    <a href="#" className="text-black bold ">
                      Поделиться:
                    </a>
                    <span className="bi bi-printer ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M10.5002 8.16681C10.1556 8.16909 9.8157 8.24769 9.50505 8.39697C9.19439 8.54624 8.92067 8.76248 8.70354 9.03015L5.72854 7.65931C5.86842 7.231 5.86842 6.76929 5.72854 6.34098L8.70354 4.97015C9.05449 5.39363 9.54374 5.67953 10.085 5.77739C10.6262 5.87525 11.1846 5.77878 11.6616 5.50501C12.1386 5.23124 12.5036 4.79776 12.6921 4.28108C12.8806 3.7644 12.8806 3.19774 12.692 2.68109C12.5034 2.16445 12.1383 1.73104 11.6612 1.45735C11.1842 1.18367 10.6258 1.0873 10.0845 1.18526C9.54334 1.28322 9.05414 1.56921 8.70327 1.99275C8.35241 2.4163 8.16243 2.95017 8.16688 3.50015C8.16863 3.63912 8.18229 3.77768 8.20771 3.91431L5.12771 5.33181C4.79934 5.01074 4.38352 4.7937 3.93235 4.7079C3.48117 4.6221 3.01471 4.67135 2.59141 4.84948C2.1681 5.0276 1.80677 5.32669 1.55269 5.70927C1.29862 6.09184 1.16309 6.54089 1.16309 7.00015C1.16309 7.45941 1.29862 7.90845 1.55269 8.29103C1.80677 8.6736 2.1681 8.97269 2.59141 9.15082C3.01471 9.32895 3.48117 9.3782 3.93235 9.2924C4.38352 9.2066 4.79934 8.98956 5.12771 8.66848L8.20771 10.086C8.18229 10.2226 8.16863 10.3612 8.16688 10.5001C8.16688 10.9616 8.30372 11.4128 8.56011 11.7965C8.8165 12.1802 9.18092 12.4793 9.60728 12.6559C10.0336 12.8325 10.5028 12.8787 10.9554 12.7886C11.408 12.6986 11.8238 12.4764 12.1501 12.1501C12.4764 11.8237 12.6987 11.408 12.7887 10.9554C12.8787 10.5027 12.8325 10.0336 12.6559 9.60722C12.4793 9.18086 12.1803 8.81644 11.7965 8.56005C11.4128 8.30366 10.9617 8.16681 10.5002 8.16681ZM10.5002 2.33348C10.731 2.33348 10.9565 2.40191 11.1484 2.5301C11.3402 2.6583 11.4898 2.8405 11.5781 3.05368C11.6664 3.26686 11.6895 3.50144 11.6445 3.72775C11.5994 3.95406 11.4883 4.16194 11.3252 4.32511C11.162 4.48827 10.9541 4.59938 10.7278 4.6444C10.5015 4.68941 10.2669 4.66631 10.0537 4.57801C9.84057 4.48971 9.65836 4.34017 9.53016 4.14831C9.40197 3.95646 9.33354 3.73089 9.33354 3.50015C9.33354 3.19073 9.45646 2.89398 9.67525 2.67519C9.89404 2.4564 10.1908 2.33348 10.5002 2.33348ZM3.50021 8.16681C3.26946 8.16681 3.0439 8.09839 2.85204 7.9702C2.66019 7.842 2.51065 7.65979 2.42235 7.44661C2.33405 7.23343 2.31094 6.99885 2.35596 6.77254C2.40098 6.54623 2.51209 6.33835 2.67525 6.17519C2.83841 6.01203 3.04629 5.90091 3.2726 5.8559C3.49892 5.81088 3.73349 5.83399 3.94667 5.92229C4.15985 6.01059 4.34206 6.16013 4.47026 6.35198C4.59845 6.54384 4.66688 6.7694 4.66688 7.00015C4.66688 7.30957 4.54396 7.60631 4.32517 7.82511C4.10638 8.0439 3.80963 8.16681 3.50021 8.16681ZM10.5002 11.6668C10.2695 11.6668 10.0439 11.5984 9.85205 11.4702C9.66019 11.342 9.51065 11.1598 9.42235 10.9466C9.33405 10.7334 9.31094 10.4989 9.35596 10.2725C9.40098 10.0462 9.51209 9.83835 9.67525 9.67519C9.83841 9.51203 10.0463 9.40091 10.2726 9.3559C10.4989 9.31088 10.7335 9.33399 10.9467 9.42229C11.1599 9.51059 11.3421 9.66012 11.4703 9.85198C11.5985 10.0438 11.6669 10.2694 11.6669 10.5001C11.6669 10.8096 11.544 11.1063 11.3252 11.3251C11.1064 11.5439 10.8096 11.6668 10.5002 11.6668Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
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

export default index;
