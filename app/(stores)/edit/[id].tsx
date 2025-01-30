/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Link,useRouter } from "expo-router";

const EditProductScreen = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/9203/9203764.png"); // Initial Image Placeholder
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([
    { label: "Traditional Wears", value: "traditional_wears" },
    { label: "Native Caps", value: "native_caps" },
    { label: "Handcraft & Accessories", value: "handcraft_accessories" },
  ]);

  // Image Picker Handler
  const route = useRouter()


  // Image Picker Handler
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to allow access to your photos.");
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log("Image Picker Result:", result);
  
    if (!result.canceled) {
      setImage(result.assets[0].uri); // Ensure Image Updates Immediately
    }
  };

  // Handle Save
  const handleSave = () => {
    Alert.alert("Changes Saved", "Product details have been updated.");
    route.push('/(stores)/saved');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Edit Product Details</Text>

        {/* Product Image */}
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>Tap to upload image</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Form Fields */}
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Product Description"
          value={productDescription}
          onChangeText={setProductDescription}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        {/* Dropdown Fix */}
        <DropDownPicker
          open={open}
          value={category}
          items={categories}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setCategories}
          placeholder="Select"
          style={styles.dropdown}
          containerStyle={{ width: "100%" }}
          dropDownContainerStyle={{ backgroundColor: "#fff" }}
          listMode="SCROLLVIEW" // ✅ FIXED
          nestedScrollEnabled={true} // ✅ FIXED
        />

        <TextInput
          style={styles.input}
          placeholder="Stock Quantity"
          value={stock}
          onChangeText={setStock}
          keyboardType="numeric"
        />

        {/* Buttons */}
        {/* <Link href='/' asChild> */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        {/* </Link> */}

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Make sure to review your changes before saving
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageText: {
    color: "#888",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  dropdown: {
    width: "100%",
    borderColor: "#ccc",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#D3B8A0",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelText: {
    color: "#4A3F35",
    fontWeight: "bold",
  },
  note: {
    marginTop: 10,
    color: "#555",
    fontSize: 12,
    textAlign: "center",
  },
});

export default EditProductScreen;
