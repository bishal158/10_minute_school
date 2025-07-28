// utils/api.ts
import { ApiResponse } from "@/types/product";

export const fetchProductData = async (
    lang: string = "en"
): Promise<ApiResponse> => {
    const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

    const response = await fetch(url, {
        headers: {
            "X-TENMS-SOURCE-PLATFORM": "web",
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
};
