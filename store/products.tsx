import { create } from "zustand";
import { ProductStore } from "@/interface/products";
import Products from "@/service/products";
const useProductStore = create<ProductStore>((set) => ({
  cart: [],
  totalCount: 3,
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
      return response;
    } catch (error) {
      console.error(error);
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
