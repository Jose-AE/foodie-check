import Product from "@/components/Product";
import { ExampleProducts } from "@assets/data/Products";
import { StyleSheet, View, Text } from "react-native";

const exampleProduct = ExampleProducts[0];

export default function TabOneScreen() {
  return (
    <View>
      <Product
        image={exampleProduct.image}
        name={exampleProduct.name}
        price={exampleProduct.price}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
