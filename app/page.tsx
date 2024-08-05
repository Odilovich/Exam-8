import Intro from "@/sections/main-sections/intro";
import Katalog from "@/sections/main-sections/katalog";
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
      <Products />
      <Useful />
      <Advantages />
      <About />
      <Brands />
    </>
  );
}
