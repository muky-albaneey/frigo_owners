/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Link, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { COLORS } from "~/components/home/Color";
import { Entypo } from "@expo/vector-icons";

export default function Category() {
  const products = Array(20).fill({
    name: "Ankara",
    price: "NGN 12,000",
    description: "(1 yard)",
    image: "https://via.placeholder.com/150", // Replace with actual product image URL
  });

  const { id } = useLocalSearchParams();

  // State for modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      
      {/* Products Grid */}
      <FlashList
        data={products}
        numColumns={2}
        estimatedItemSize={150}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
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
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <TouchableOpacity 
                      style={{
                        padding: 5,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: COLORS.ColorHome,
                      }}
                      onPress={() => setModalVisible(true)}
                    >
                      <Entypo name="dots-three-vertical" size={24} color={COLORS.ColorBrown} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text>{item.price}</Text>
                    <Text>{item.description}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>
        )}
      />

      {/* Modal - Centered Popup */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)", // Dark overlay
          }}
        >
          <View
            style={{
              width: 250,
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
              elevation: 5, // Adds shadow for Android
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4, // Adds shadow for iOS
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Options</Text>
            
            <Link href='/(stores)/details/1' asChild>
              <TouchableOpacity  
                style={{
                    backgroundColor: "#1c81f5", // Green color
                    padding: 3,
                    borderRadius: 8,
                    width: "100%",
                    alignItems: "center",
                    marginBottom: 8,
                  }} onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 16, paddingVertical: 8 }}>Details</Text>
              </TouchableOpacity>
            </Link>

            <Link href='/(stores)/edit/1' asChild>
              <TouchableOpacity  
                  style={{
                      backgroundColor: "#13ed67", // Red color
                      padding: 3,
                      borderRadius: 8,
                      width: "100%",
                      alignItems: "center",
                      marginBottom: 8,
                    }} onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 16, paddingVertical: 8 }}>Edit</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity style={{
                backgroundColor: "#DC3545", // Red color
                padding: 7,
                borderRadius: 8,
                width: "100%",
                alignItems: "center",
                marginBottom: 8,
              }} onPress={() => setModalVisible(false)}>
            <Text style={{ fontSize: 16, color: "#fff" }}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 10,
                padding: 7,
                backgroundColor: "#6c757d", // Gray color
                borderRadius: 8,
                alignItems: "center",
                width: "100%",
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
