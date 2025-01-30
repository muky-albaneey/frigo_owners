/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.businessday.ng/wp-content/uploads/2024/06/Ankara.png"
  );
  const imgArr = [
    "https://www.cartrollers.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-23-at-9.40.26-PM.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSk6mWGjCaOBvqGvdR1_2ocqe8LDXoN6WDw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8sLabi5M7hOw3ZVyYZLuHA5g1Gqf1R6BZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMFk7sFZk6qhJOyxU0K6rpf6wCVekmMWwBQ&s",
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
      </View> */}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Main Image and Thumbnails */}
        <View style={styles.imageSection}>
          <Image source={{ uri: selectedImage }} style={styles.mainImage} />
          <View style={styles.thumbnailContainer}>
            {imgArr.map((img, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedImage(img)}
                style={
                  selectedImage === img
                    ? [styles.thumbnail, styles.selectedThumbnail]
                    : styles.thumbnail
                }
              >
                <Image source={{ uri: img }} style={styles.thumbnailImage} />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Product Information */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>Bold Ankara Floral Print</Text>
          <Text style={styles.productCode}>PD11122</Text>

          <Text style={styles.label}>Category</Text>
          <Text style={styles.text}>Ankara</Text>

          <Text style={styles.label}>Description</Text>
          <Text style={styles.text}>
            This type of Ankara is made using the traditional wax-resist dyeing
            method, where both sides of the fabric are equally vibrant.
          </Text>

          <Text style={styles.label}>Price</Text>
          <Text style={styles.text}>N 12,000 per yard</Text>

          <Text style={styles.label}>Quantity</Text>
          <Text style={styles.text}>70 yards</Text>

          <Text style={styles.label}>Product Color(s)</Text>
          <Text style={styles.text}>Green, Brown, Yellow</Text>

          <Text style={styles.label}>Status</Text>
          <Text style={styles.text}>Available</Text>

          <Text style={styles.label}>Tags</Text>
          <Text style={styles.text}>Ankara, Fabric, African print, DIY</Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
       <Link href='/(stores)/edit/1' asChild>
       <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit product</Text>
        </TouchableOpacity>
       </Link>
       <Link href='/(drawer)/(product)/cov_list' asChild>
        <TouchableOpacity style={styles.backButton}>
            <Text style={styles.buttonText}>Back to product list</Text>
          </TouchableOpacity>
       </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backArrow: {
    fontSize: 20,
    color: "#000",
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollContainer: {
    padding: 16,
  },
  imageSection: {
    flexDirection: "row",
    marginBottom: 16,
  },
  mainImage: {
    width: "70%",
    height: 200,
    borderRadius: 8,
    marginRight: 16,
  },
  thumbnailContainer: {
    justifyContent: "center",
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedThumbnail: {
    borderColor: "#964B00",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productCode: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  editButton: {
    flex: 1,
    backgroundColor: "#964B00",
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
  },
  backButton: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
