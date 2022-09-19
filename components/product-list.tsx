import { useEffect, useState } from "react";
import useSWR from "swr";
import { ProductWithCnt } from "./../pages/index";
import ItemComponent from "./item_component";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}

interface Record {
  id: number;
  product: ProductWithCnt;
}

interface SalesResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const [url, setUrl] = useState<String | null>(null);

  useEffect(() => {
    setUrl(`/api/users/me/${kind}`);
  }, [kind]);

  const { data } = useSWR<SalesResponse>(url);

  return data ? (
    <>
      {data[kind].map((sale) => (
        <ItemComponent
          key={sale.product.id}
          id={sale.product.id + ""}
          title={sale.product.name}
          subTitle={sale.product.name}
          price={sale.product.price + ""}
          commentCount={3}
          lovedCount={sale.product._count.favs}
        />
      ))}
    </>
  ) : null;
}
