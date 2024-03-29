import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export type Pageable<T> = {
  totalCount: number,
  data: T
}

export type Product = {
  id: number;
  name?: string;
  price?: number;
  reference?: string;
  image?: string;
};

type WynikiProps = {
  products: Product[];
};

function Wyniki({ products }: WynikiProps) {
 return (
    <>
    
    <div className="grid grid-cols-4 gap-2">
      {products.map((product) => (
        <div key={product.id}>
          <a href={`https://ceneo.pl${product.reference}`}>
          <Card className="h-full ">
          <div>
            <AspectRatio ratio={1/1}>
          <img className="inline"  src={product.image} />
          </AspectRatio>
          </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>
                <div className="text-orange-500 text-lg">{product.price} zł</div>
              </CardDescription>
            </CardHeader>
          </Card>
          </a>
        </div>
        
      ))}
    </div>
    </>

    
  );
}

export default Wyniki;
