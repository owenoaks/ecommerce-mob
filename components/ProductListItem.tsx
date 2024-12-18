//Product Structure
import { Text } from "react-native";
export default function ProductListItem({ product }) {
  return <Text style={{ fontSize: 100 }}>{product.name}</Text>;
}
