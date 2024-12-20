//Product Structure
import { Pressable, Text } from "react-native";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

import { Heading } from "@/components/ui/heading";

import { Link } from "expo-router";

//1:18:11
export default function ProductListItem({ product }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg max-w-[360px]  flex-1">
          <Image
            source={{
              uri: product.image,
            }}
            className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
            alt={`${product.name}`}
            resizeMode="contain"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700"></Text>

          <Heading size="md" className="mb-4">
            ${product.price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
}
