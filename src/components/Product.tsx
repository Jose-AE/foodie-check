import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

interface IProps {
  name: string;
  price: number;
  image: string;
}

export default function Product(props: IProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: "red",
  },
  image: {
    width: 100,
    height: 100,
  },
});
