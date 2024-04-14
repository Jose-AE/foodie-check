import Product from "@/components/Product";
import { ExampleProducts } from "@assets/data/Products";
import { Stack } from "expo-router";
import { StyleSheet, View, Text, FlatList } from "react-native";

const exampleProduct = ExampleProducts[0];

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: `Pizza Menu` }} />

      <FlatList
        data={ExampleProducts}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }} //row gap
        columnWrapperStyle={{ gap: 10 }} //col gap
        renderItem={({ item }) => (
          <Product image={item.image} name={item.name} price={item.price} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
