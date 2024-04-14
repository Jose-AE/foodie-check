import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

interface IProps {
  name: string;
  price: number;
  image: string;
}

export default function Product({ name, price, image }: IProps) {
  return (
    <Link href={`/menu/${name}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%",
    backgroundColor: "white",
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
    borderRadius: 10,
    width: "100%",
    aspectRatio: 1,
  },
});
