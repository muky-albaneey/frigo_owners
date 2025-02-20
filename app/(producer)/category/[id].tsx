/* eslint-disable prettier/prettier */
import React, { useRef } from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const categories = ["All", "Ankara", "Lace", "Plain Material", "Adire", "Caps"];
const products = [
  { id: "1", name: "Ankara", price: "NGN 2,000 (1 Yard)", image: require("../../../assets/ankara_prod.png") },
  { id: "2", name: "Ankara", price: "NGN 2,000 (1 Yard)", image: require("../../../assets/ankara_prod.png") },
];

export default function App() {
  const scrollRef = useRef<ScrollView>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollTo({ x: 0, animated: true });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back & Notification */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Image source={require("./assets/back.png")} style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Image source={require("./assets/notification.png")} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <Text style={styles.title}>Welcome to Da viva fashion</Text>
      <Image source={require("../../../assets/viva_icon.png")} style={styles.banner} />
      <Text style={styles.description}>
        We take immense pride in preserving tradition while embracing modern elegance...
      </Text>

      {/* Categories */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All &gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <TouchableOpacity onPress={scrollLeft} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>

        <ScrollView horizontal ref={scrollRef} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.categoryItem, index === 0 && styles.activeCategory]}>
              <Text style={[styles.categoryText, index === 0 && styles.activeText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity onPress={scrollRight} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  icon: { width: 24, height: 24, resizeMode: "contain" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  banner: { width: "100%", height: 150, resizeMode: "contain", marginBottom: 10 },
  description: { fontSize: 14, color: "#666", marginBottom: 16 },
  categoryHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  categoryTitle: { fontSize: 16, fontWeight: "bold" },
  viewAll: { fontSize: 14, color: "#f2b705", fontWeight: "bold" },
  sliderContainer: { flexDirection: "row", alignItems: "center" },
  arrowButton: { padding: 10, backgroundColor: "#ddd", borderRadius: 10 },
  arrowText: { fontSize: 18, fontWeight: "bold" },
  categoryContainer: { flexDirection: "row", gap: 8, paddingHorizontal: 8 },
  categoryItem: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: "#eee" },
  categoryText: { fontSize: 14, color: "#333" },
  activeCategory: { backgroundColor: "#000" },
  activeText: { color: "#fff" },
  productCard: { flex: 1, margin: 8, backgroundColor: "#f9f9f9", borderRadius: 10, padding: 10, alignItems: "center" },
  productImage: { width: 100, height: 100, resizeMode: "contain", borderRadius: 10, marginBottom: 8 },
  productName: { fontSize: 14, fontWeight: "bold" },
  productPrice: { fontSize: 12, color: "#555" },
});
