/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Changes Saved</Text>
      <Text style={styles.subtitle}>Successfully!</Text>

      <Text style={styles.description}>
        Your product details have been updated!
      </Text>

      <Text style={styles.detailsTitle}>Here are the updated details:</Text>
      <Text style={styles.productName}>Brown ankara 200 Yards</Text>
      <Text style={styles.price}>$5000</Text>
      <Text style={styles.productDescription}>
        Vibrant color for elegance, with over 100 materials in stock
      </Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        // onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={styles.buttonText}>Back to Product List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        // onPress={() => navigation.navigate("EditProduct")}
      >
        <Text style={styles.buttonText}>Edit Another Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 15,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5D4037", // Dark brown
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  productDescription: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: "#6D4C41", // Dark brown
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonSecondary: {
    backgroundColor: "#A67C52", // Light brown
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SavedScreen;
