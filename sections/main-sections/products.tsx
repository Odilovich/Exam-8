"use client";
import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import ProductStore from "@/store/products";
import { useEffect, useState } from "react";
const index = () => {
  const [data, setData] = useState([]);
  const [params] = useState({
    page: 1,
    limit: 8,
  });
  const { getProducts } = ProductStore();
  const products = async () => {
    try {
      const response: any = await getProducts(params);
      setData(response?.data?.products);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    products();
  }, []);
  return (
    <section className="py-[70px] bg-[#F2F2F2]">
      <Container>
        <p className="text-[32px] font-medium mb-[42px]">Продукты</p>
        <div className="flex flex-wrap gap-[24px]">
          {data?.map((item: any) => (
            <Card
              image={item.image_url[0]}
              title={item.product_name}
              price={`$ ${item.cost}`}
              id={item.product_id}
              isActive={item.basket}
              isLiked={item.liked}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default index;
