/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Link, useRouter } from 'expo-router';
export default function AddProduct() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

 const route= useRouter();

  const removeImage = (uri) => {
    setImages(images.filter((image) => image !== uri));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>route.back()}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </Pressable>
      
      
      </View>
      <Text style={styles.subtitle}>Upload images of your new product.</Text>
      <Text style={styles.uploadLabel}>Upload Image</Text>
      <Text style={styles.uploadDescription}>
        Choose an image that highlights your product's unique features
      </Text>
      <View style={styles.uploadBox}>
        <TouchableOpacity onPress={pickImage} style={styles.uploadIconContainer}>
          <Ionicons name="camera-outline" size={40} color="#A0A0A0" />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload New</Text>
        </TouchableOpacity>
        <Text style={styles.uploadInfo}>Accepts images, videos or 3D models</Text>
      </View>
      {images.length > 0 && (
  <View style={[styles.imageWrapper, {alignItems:'center'}]}>
    {images.map((item, index) => (
      <View key={index} style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
        <TouchableOpacity style={styles.removeIcon} onPress={() => removeImage(item)}>
          <Ionicons name="close-circle" size={24} color="red" />
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity onPress={pickImage} style={styles.addImageContainer}>
      <Ionicons name="add-outline" size={40} color="#A0A0A0" />
      <Text style={styles.addImageText}>Add</Text>
    </TouchableOpacity>
  </View>
)}

      <Link href='/(drawer)/(product)/prod_details_add' asChild>
        <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:-50
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 20,
  },
  uploadLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  uploadDescription: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 20,
  },
  uploadBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderStyle: 'dashed',
    height: 150,
    marginBottom: 10,
  },
  uploadIconContainer: {
    marginBottom: 10,
  },
  uploadButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#000',
  },
  uploadInfo: {
    color: '#A0A0A0',
    fontSize: 12,
    marginTop: 10,
  },
  imageListContainer: {
    marginBottom: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    marginRight: 10,
    marginBottom: 10,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  removeIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  addImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderStyle: 'dashed',
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
  },
  addImageText: {
    color: '#A0A0A0',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#C5A288',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop:140
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});
