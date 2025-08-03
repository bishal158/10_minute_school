/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/api";
import {  ProductData } from "@/types/types";

export const fetchProducts = async (
  params?: Record<string, any>
): Promise<ProductData> => {
  // Check if running in browser environment before accessing localStorage
  let lang = "en";
  if (typeof window !== "undefined") {
    lang = localStorage.getItem("lang") || "en";
  }

  const response = await api.get("/products/ielts-course", {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
      Accept: "application/json",
    },
    params: { ...params, lang },
  });
  return response.data?.data;
};
