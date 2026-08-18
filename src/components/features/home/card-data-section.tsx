import { useState } from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

export function CardDataSection() {
  const [ products, setProducts ] = useState([]);

  const getAllProducts = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }

  console.log(products)

  return (
    <Section className="py-12 bg-gray-50/50">
      <Button onClick={getAllProducts}>Get All Products</Button>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle imageSrc={product.thumbnail} imageFullWidth>
                {product.title}
              </CardTitle>
              <CardDescription>
                <span className="block mb-2 font-medium text-blue-600">₱{product.price}</span>
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full justify-between group/btn">
                Click Me
                <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}