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
  const { data } = useSWR<SalesResponse>(`/api/users/me/${kind}`);

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
