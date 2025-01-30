/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Pressable, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Link, useRouter } from 'expo-router';

export default function EditProfile() {
  const [profileImage, setProfileImage] = useState<string | null>('https://via.placeholder.com/150');
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Female');
  const router = useRouter();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need access to your photos to upload an image.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const genders = ['Male', 'Female', 'Other'];

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
    setGenderModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.replace("/(drawer)/(home)")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: profileImage || 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIconContainer} onPress={pickImage}>
          <Ionicons name="camera-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>Jane Doe</Text>
        </View>

        <Link href="/(drawer)/(profile)/(edit)/phone" asChild>
          <Pressable>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Mobile Number</Text>
              <Text style={styles.value}>+234 800 000 0000</Text>
            </View>
          </Pressable>
        </Link>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>Lagos, Nigeria</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>janedoe@gmail.com</Text>
        </View>

        {/* Gender Field */}
        <Pressable onPress={() => setGenderModalVisible(true)}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>{selectedGender}</Text>
          </View>
        </Pressable>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Wallet ID</Text>
          <Text style={styles.value}>1234567289</Text>
        </View>

        <TouchableOpacity style={styles.actionRow}>
          <Text style={styles.actionText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionRow}>
          <Text style={styles.actionText}>Change Transaction PIN</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Gender Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={genderModalVisible}
        onRequestClose={() => setGenderModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            <FlatList
              data={genders}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity onPress={() => handleGenderSelection(item)}>
                    <Text style={styles.modalItem}>{item}</Text>
                  </TouchableOpacity>
                </View>
              )}              
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 5,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    color: 'gray',
  },
  value: {
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  actionText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add transparent background overlay
  },
  
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4, // Shadow for iOS
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20, // Add spacing below the title
    textAlign: 'center', // Center the title text
    color: 'black',
  },
  
  modalItem: {
    fontSize: 16,
    paddingVertical: 15, // Add vertical padding for better touch area
    textAlign: 'center', // Center-align the text
    color: 'black',
    borderBottomWidth: 1, // Add a subtle separator
    borderBottomColor: '#ddd', // Light gray color for separator
  },
  
  
});
