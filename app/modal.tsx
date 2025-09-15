import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalScreen() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0a0a0a",
  },
  counterText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
  },
});