"use client"
import { useLang } from "@/hooks/useLang"
import { ProductData } from "@/types/types"
import { fetchProducts } from "@/utils/api"
import { useQuery } from "@tanstack/react-query"

const HomeClient = ({
    initialData
}: {
    initialData: ProductData
}) => {
    const { lang } = useLang()
    const { data } = useQuery<ProductData>({
        queryKey: ["Product", lang],
        queryFn: fetchProducts,
        initialData: initialData,
    })
    console.log("Fetched Data:", data)
    return (
        <>
        
        </>
    )
}

export default HomeClient