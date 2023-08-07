import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Label from "./components/Label";
import useCounter from "./states/useCounter";

export default function App() {
  const { add, reset } = useCounter();

  return (
    <View style={styles.container}>
      <Label />

      <Button onPress={() => add()} title="Count!" />
      <Button onPress={() => reset()} title="Reset!" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
