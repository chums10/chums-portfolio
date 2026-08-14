import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Smartphone, BatteryCharging, Volume2, Keyboard } from "lucide-react";

export function CardDataSection() {
  const products = [
    {
      id: 1,
      name: "Nokia",
      description: "Lig-on pa sa inyong relasyon",
      icon: <Smartphone className="w-5 h-5" />,
      imageSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Samsung 1",
      description: "Pero Triple A ang battery",
      icon: <BatteryCharging className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "QNet",
      description: "Pero mo shagit una ka mo-type",
      icon: <Volume2 className="w-5 h-5" />,
    },
    {
      id: 4,
      name: "QNet",
      description: "Pero mo shagit una ka mo-type",
      icon: <Keyboard className="w-5 h-5" />,
    },
  ];

  return (
    <Section className="py-12 bg-gray-50/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle icon={product.icon} imageSrc={product.imageSrc} imageFullWidth>
                {product.name}
              </CardTitle>
              <CardDescription>{product.description}</CardDescription>
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