/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { Link, useRouter } from 'expo-router';
export default function CoverPageList() {
  const [categories, setCategories] = useState([
    { id: '1', name: 'Ankara', image: null },
    { id: '2', name: 'Lace', image: null },
    { id: '3', name: 'Plain Material', image: null },
    { id: '4', name: 'Gele', image: null },
    { id: '5', name: 'Aso Oke', image: null },
    { id: '6', name: 'Tie and Dye', image: null },
  ]);

  const pickImage = (id) => {
    // Here, add logic to pick and upload image for the category with the given id
    // For now, we'll just simulate an image being uploaded
    setCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.id === id ? { ...cat, image: 'https://via.placeholder.com/150' } : cat
      )
    );
  };
const route = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.imageContainer}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.image} />
        ) : (
          <Ionicons name="image-outline" size={40} color="#A0A0A0" />
        )}
      </TouchableOpacity>
      <Text style={styles.categoryName}>{item.name}</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(item.id)}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>route.push('/(drawer)/(home)')}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </Pressable>
       
        <Text style={styles.headerTitle}>Add cover image</Text>
      </View>
      <Text style={styles.subtitle}>
        Upload and update the cover images of your categories
      </Text>
    <View style={{  height:500 }}>
      <FlashList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
          contentContainerStyle={styles.listContainer}
        />
    </View>
      <Link href='/(drawer)/(product)/add_cov' asChild>
      <TouchableOpacity style={styles.addButton}>
        <View style={{ backgroundColor:'#C5A288' , padding:3, borderRadius:50}}>
          <Ionicons name="add" size={18} color="#FFFFFF" />
        </View>
        
        <Text style={styles.addButtonText}>Add new category</Text>
      </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save and continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
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
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  categoryName: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  uploadButton: {
    backgroundColor: '#C5A288',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#FFFFFF',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingVertical: 10,
    // backgroundColor: '#C5A288',
    borderRadius: 5,
  },
  addButtonText: {
    marginLeft: 5,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#C5A288',
    paddingVertical: 15,
    alignItems: 'center',
   
    borderRadius: 5,
    marginBottom: 10,

  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skipButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C5A288',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  skipButtonText: {
    color: '#C5A288',
    fontSize: 16,
  },
});
