/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function FilterScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Popular");
  const [priceRange, setPriceRange] = useState({ min: 1000, max: 10000 });
  const categories = ["All", "Ankara", "Lace", "Plain Material", "Adire", "Caps"];
  const sorts = ["All", "Popular", "Latest", "Recommended"];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Filter</Text>

      {/* Categories */}
      <Text style={styles.label}>Categories</Text>
      <View style={styles.row}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[    
              styles.categoryButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Gender */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.row}>
        {["All", "Male", "Female"].map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.categoryButton,
              selectedGender === gender && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender(gender)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedGender === gender && styles.selectedText,
              ]}
            >
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sort By */}
      <Text style={styles.label}>Sort by</Text>
      <View style={styles.row}>
        {sorts.map((sort) => (
          <TouchableOpacity
            key={sort}
            style={[
              styles.categoryButton,
              selectedSort === sort && styles.selectedButton,
            ]}
            onPress={() => setSelectedSort(sort)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedSort === sort && styles.selectedText,
              ]}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Price */}
      <Text style={styles.label}>Price</Text>
      <View style={styles.sliderRow}>
        <Text style={styles.priceText}>N{priceRange.min}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={10000}
          step={500}
          value={priceRange.min}
          onValueChange={(value) =>
            setPriceRange((prev) => ({ ...prev, min: value }))
          }
          minimumTrackTintColor="#8B4513"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#8B4513"
        />
        <Text style={styles.priceText}>N{priceRange.max}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={10000}
          step={500}
          value={priceRange.max}
          onValueChange={(value) =>
            setPriceRange((prev) => ({ ...prev, max: value }))
          }
          minimumTrackTintColor="#8B4513"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#8B4513"
        />
      </View>

      {/* Rating */}
      <Text style={styles.label}>Rating</Text>
      <View>
        {[5, 4, 3, 2, 1].map((rating) => (
          <View style={styles.ratingRow} key={rating}>
            <Text style={styles.ratingText}>{rating} ★</Text>
            <View style={styles.ratingBar}>
              <View style={{ ...styles.ratingFill, width: `${rating * 20}%` }} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: "#8B4513",
    borderColor: "#8B4513",
  },
  buttonText: {
    fontSize: 14,
    color: "#000",
  },
  selectedText: {
    color: "#fff",
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  priceText: {
    width: 50,
    fontSize: 14,
    textAlign: "center",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 14,
    width: 30,
  },
  ratingBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 10,
  },
  ratingFill: {
    height: 10,
    backgroundColor: "#8B4513",
  },
});
