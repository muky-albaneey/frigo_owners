/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
export default function AddCov() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const route = useRouter()
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setSuccessMessage('Image uploaded successfully!');
    }
  };

  const handleSave = () => {
    if (selectedImage && categoryName) {
      setSuccessMessage('Category saved successfully!');
      route.push('/(drawer)/(product)/success')
    }
  };


  return (
    <View style={styles.container}>
        <Pressable onPress={()=>route.back()}>
            <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
            <Text style={styles.headerTitle}>Add category</Text>
      </View>
        </Pressable>
      

      <View style={styles.uploadSection}>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBox}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
          ) : (
            <Ionicons name="camera-outline" size={40} color="#000" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload New</Text>
        </TouchableOpacity>
        <Text style={styles.uploadInfo}>Accepts images, videos or 3D models</Text>
        {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}
      </View>

      <Text style={styles.inputLabel}>Category Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Give your category a clear name"
        placeholderTextColor="#A0A0A0"
        value={categoryName}
        onChangeText={setCategoryName}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  uploadBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  uploadButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    marginBottom: 5,
  },
  uploadButtonText: {
    color: '#000',
  },
  uploadInfo: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#C5A288',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
