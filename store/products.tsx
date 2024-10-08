import { create } from "zustand";
import { ProductStore } from "@/interface/products";
import Products from "@/service/products";
const useProductStore = create<ProductStore>((set) => ({
  cart: [],
  liked: [],
  totalCount: 0,
  likeCount: 0,
  getProducts: async (params) => {
    try {
      const response = await Products.get_products(params);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  getProduct: async (id) => {
    try {
      const response = await Products.get_product(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  likeProduct: async (id) => {
    try {
      const response = await Products.like_product(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  getLikedProducts: async () => {
    try {
      const response = await Products.get_liked_products();
      set({ liked: response?.data?.products });
      set({ likeCount: response?.data?.total_count });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  cartProduct: async (id) => {
    try {
      const response = await Products.cart_product(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  getCartProducts: async (data) => {
    try {
      const response = await Products.get_cart_products(data);
      set({ cart: response.data });
      set({ totalCount: response.data.length });
      console.log(response);
      
      return response;
    } catch (error) {
      console.error(error);
      set({ totalCount: 0 });
    }
  },
  getCommentsProduct: async (params) => {
    try {
      const response = await Products.get_comments_product(params);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  commentProduct: async (id) => {
    try {
      const response = await Products.comment_product(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useProductStore;
