/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "./Color";

const data = [
  { id: "1", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: true,   image: "https://via.placeholder.com/150" },
  { id: "2", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: false,   image: "https://via.placeholder.com/150" },
  { id: "3", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: true,   image: "https://via.placeholder.com/150" },
  { id: "4", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: false,   image: "https://via.placeholder.com/150" },
  { id: "5", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: true,   image: "https://via.placeholder.com/150" },
  { id: "6", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: false,   image: "https://via.placeholder.com/150" },
  { id: "7", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: true,   image: "https://via.placeholder.com/150" },
  { id: "8", name: "Ankara", price: "NGN 12,000 (1 yard)", stock: false,   image: "https://via.placeholder.com/150" },
];

export default function WishlistScreen() {
  const [activeTab, setActiveTab] = useState("All"); // State to track the active tab

  const renderItem = ({ item }) => (
    <Link href="/(stores)/details/1" asChild style={{ flex: 1 }}>
      <Pressable>
        <View
          style={{
            flex: 1,
            margin: 8,
            backgroundColor: "#fff",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: 100,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
          <View style={{ padding: 8 }}>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <View style={{ padding: 5, borderWidth: 1, borderRadius: 10, borderColor: COLORS.ColorHome }}>
                <Ionicons name="bag-handle" size={17} color={COLORS.ColorBrown} />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>{item.price}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.header, {textAlign:'center'}]}>Wishlist</Text>
      <View style={[styles.tabs, {backgroundColor:COLORS.ColorHome}]}>
        {["All", "Ankara", "Lace", "Plain Material", "Adire", "Caps"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={200}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tab: {
    padding: 10,
    borderRadius: 8,
    // backgroundColor: "#f4f4f4",
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: COLORS.ColorBrown,
  },
  tabText: {
    color: "#000",
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#fff",
  },
  list: {
    paddingBottom: 20,
  },
});
