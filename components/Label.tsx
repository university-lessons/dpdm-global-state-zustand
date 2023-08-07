import { View, Text } from "react-native";
import React from "react";

interface LabelProps {
  counter: number;
}

export default function Label({ counter }: LabelProps) {
  return (
    <View>
      <Text>Counter: {counter}</Text>
    </View>
  );
}
