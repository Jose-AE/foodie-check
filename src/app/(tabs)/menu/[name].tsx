import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function ProductModal() {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: name as string }} />

      <Text>{name}</Text>
    </View>
  );
}
