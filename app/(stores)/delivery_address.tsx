/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

const DeliveryAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState(0);

  const addresses = [
    { id: 0, label: 'Home', address: '56, jibowo road Lekki Lagos lagos lagos' },
    { id: 1, label: 'Work', address: '56, jibowo road Lekki Lagos lagos lagos' },
    { id: 2, label: 'My parent\'s house', address: '56, jibowo road Lekki Lagos lagos lagos' },
  ];

  const handleSelect = (id) => {
    setSelectedAddress(id);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity> */}
     {/* <View style={{ position:'absolute', top:-30, zIndex:99}}>
     <Text style={styles.header}>Delivery Address</Text>

     </View> */}
     <View>
     <FlatList
        data={addresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.addressContainer} onPress={() => handleSelect(item.id)}>
            <Ionicons name="location" size={24} color="black" style={styles.icon} />
            <View style={styles.addressTextContainer}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>
            <Ionicons
              name={selectedAddress === item.id ? 'checkmark-circle' : 'ellipse-outline'}
              size={24}
              color={selectedAddress === item.id ? 'gold' : 'gold'}
            />
          </TouchableOpacity>
        )}
      />
     </View>

      <View style={{  width:'100%', justifyContent:'center', alignItems:'center', marginTop:50}}>
        <Link href="/(stores)/add_address_2" asChild>
        <TouchableOpacity style={styles.addContainer}>
              <Ionicons name="add-circle" size={24} color="black" />
              <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>

        </Link>
       
        <Link href="/(stores)/delivery_method" asChild>
            <Pressable style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
            </Pressable>
          </Link> 
        {/* <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 12,
  },
  addressTextContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: 'gray',
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    width:'100%',
    justifyContent:'center'
  },
  addText: {
    marginLeft: 8,
    fontSize: 16,
  },
  continueButton: {
    marginTop: 32,
    backgroundColor: '#8B4513',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width:250,
    marginLeft:30
  },
  continueText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DeliveryAddress;
