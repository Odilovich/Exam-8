"use client"
import Card from "@/components/ui/product-card";
import  Container  from "@/components/container";
import useProductStore from "@/store/products";
import { useEffect, useState } from "react";
const Index = () => {
  const {getLikedProducts, liked} = useProductStore()
  const getLiked = async () => {
    await getLikedProducts()
  }
  useEffect(()=> {
    getLiked()
  }, [])
  return (
    <>
      <section className="pt-[50px] pb-[60px]">
        <Container>
          <p className="text-[35px] font-semibold mb-5">Liked products</p>
          <div className="grid gap-x-3 justify-center grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-y-10 lg:grid-cols-4">
          {
            liked?.map((item:any, index) => {
              return <Card key={index} title={item.product_name} image={item.image_url[0]} id={item.product_id} price={item.cost} isActive={item.basket} setLike={true} />;
            })
          }
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;
