/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const COLORS = {
  primary: '#964B00',
  background: '#FFFFFF',
  textGray: '#666666',
  borderGray: '#CCCCCC',
  black: '#000000',
  starGold: '#FFD700',
};

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const handleRating = (value) => {
    setRating(value);
  };

  const pickImage = async () => {
    // Request permission to access the camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need permission to access your photos.');
      return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', left: 0 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review</Text>
      </View>

      {/* Thank You Text */}
      <Text style={styles.thankYouText}>Thank your for your patronage</Text>

      {/* Product Information */}
      <View style={styles.productInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>House of wear limited</Text>
          <Text style={styles.productSubtitle}>Ankara (5yards)</Text>
          <Text style={styles.productMeta}>Color: Blue Size: Small</Text>
          <Text style={styles.productPrice}>NGN 12,800.56</Text>
        </View>
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderButtonText}>Re order</Text>
        </TouchableOpacity>
      </View>

      {/* Review Form */}
      <Text style={styles.formTitle}>Let’s get started</Text>
      <Text style={styles.inputLabel}>Give us details for review</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Message"
        placeholderTextColor={COLORS.textGray}
        multiline
      />

      {/* Rating */}
      <Text style={styles.ratingTitle}>Rating</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={30}
              color={COLORS.starGold}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Add Image */}
      <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
        <Ionicons name="camera-outline" size={24} color={COLORS.textGray} />
        <Text style={styles.addImageText}>Add Image</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.selectedImage}
        />
      )}

      {/* Buy Again Button */}
      <TouchableOpacity style={styles.buyAgainButton}>
        <Text style={styles.buyAgainButtonText}>Buy Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thankYouText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  productMeta: {
    fontSize: 14,
    color: COLORS.textGray,
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  reorderButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  reorderButtonText: {
    color: COLORS.background,
    fontSize: 14,
    fontWeight: 'bold',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.textGray,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: COLORS.black,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addImageText: {
    fontSize: 14,
    color: COLORS.textGray,
    marginLeft: 10,
  },
  selectedImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  buyAgainButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyAgainButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
