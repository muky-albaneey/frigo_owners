/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Pressable} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { COLORS } from "~/components/home/Color";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const originalItems = Array(26).fill({
    name: "Ankara",
    price: "NGN 12,000",
    description: "(1 yard)",
    image: "https://via.placeholder.com/150", // Replace this URL with the correct one
  });

  // Add "Exclusive Offers" marker after every 7 items
  const items = [];
  originalItems.forEach((item, index) => {
    items.push(item);
    if ((index + 1) % 4 === 0) {
      items.push({ type: "exclusive-offers" });
    }
  });

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 5 }}>
      
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>House of wears</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Text>🛒</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Search and Filter */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          marginBottom: 16,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search here"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 16,
            height: 40,
          }}
        />
        <TouchableOpacity
          style={{
            marginLeft: 8,
            backgroundColor: "#ccc",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View
        style={{
          height: 100,
          backgroundColor: "#f2e0d0",
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Traditional wears
          </Text>
          <Text>Explore our collection of cultural wears</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#964B00",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff" }}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 16 }}>
          Categories
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 8, backgroundColor: COLORS.ColorLightHome }}>
          {["All", "Ankara", "Lace", "Plain Material", "Adire", "Caps"].map(
            (category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategory(category)}  // Set selected category
                style={{
                  marginRight: 8,
                  backgroundColor: selectedCategory === category ? COLORS.ColorBrown : "#f2f2f2", // Change background color based on selection
                  padding: 8,
                  borderRadius: 16
                }}
              >
                <Text
                  style={{
                    color: selectedCategory === category ? "#fff" : "#000", // Change text color based on selection
                    fontWeight: selectedCategory === category ? "bold" : 400, // Change text color based on selection
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>

      {/* FlashList with "Exclusive Offers" */}
      <FlashList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({ item }) => {
          if (item.type === "exclusive-offers") {
            // Render the "Exclusive Offers" banner
            return (
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#f2e0d0",
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 16,
                  marginTop: 16,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Exclusive Offers
                  </Text>
                  <Text>Get your special sales up to 20%</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#964B00",
                    padding: 8,
                    borderRadius: 8,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            );
          }
          // Render the product item
          return (
            <Link href="/(stores)/category/1" asChild style={{ flex: 1 }}>
              <Pressable>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    margin: 8,
                    borderRadius: 8,
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 100, width: "100%" }}
                    resizeMode="cover"
                  />
                  <View style={{ padding: 8 }}>
                    <View style={{  width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                      <View style={{ padding:5, borderWidth:1, borderRadius:10, borderColor:COLORS.ColorHome}}>
                        <Ionicons name="bag-handle" size={17} color={COLORS.ColorBrown} />
                      </View>
                    </View>
                    
                    <View style={{  flexDirection:'row'}}>
                      <Text>{item.price}</Text>
                      <Text>{item.description}</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </Link>
          );
        }}
      />
    </View>
  );
}
