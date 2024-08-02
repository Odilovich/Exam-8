import Intro from "@/sections/main-sections/intro";
import Katalog from "@/sections/main-sections/katalog";
import Discount from "@/sections/main-sections/discount";
import News from "@/sections/main-sections/news";
import Best from "@/sections/main-sections/best";
import Products from "@/sections/main-sections/products";
import Useful from "@/sections/main-sections/useful";
import Advantages from "@/sections/main-sections/advantages";
import About from "@/sections/main-sections/about";
import Brands from "@/sections/main-sections/brand"

export default function Home() {
  return (
    <>
      <Intro />
      <Katalog />
      <Discount />
      <News />
      <Products />
      <Best />
      <Useful />
      <Advantages />
      <About />
      <Brands />
    </>
  );
}
