/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const COLORS = {
  primary: '#964B00',
  background: '#FFFFFF',
  textGray: '#666666',
  borderGray: '#CCCCCC',
  black: '#000000',
};

const AddAddressScreen = () => {
  const router = useRouter();
  const [locationDescription, setLocationDescription] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    // Handle save logic here
    console.log('Location Description:', locationDescription);
    console.log('Address:', address);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', left: 0 }}>
          <Ionicons name="arrow-back" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Address</Text>
      </View>

      {/* Input Fields */}
      <Text style={styles.inputLabel}>Location Description</Text>
      <TextInput
        style={styles.textInput}
        placeholder='e.g. "Home"'
        placeholderTextColor={COLORS.textGray}
        value={locationDescription}
        onChangeText={setLocationDescription}
        />
      <Text style={styles.inputLabel}>Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your address"
        placeholderTextColor={COLORS.textGray}
        value={address}
        onChangeText={setAddress}
      />

      {/* Save Button */}
      <Link href="/(stores)/address_success_2" asChild>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Saved</Text>
      </TouchableOpacity>
      </Link>
      
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
  inputLabel: {
    fontSize: 14,
    color: COLORS.textGray,
    marginBottom: 10,
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: COLORS.black,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddAddressScreen;
