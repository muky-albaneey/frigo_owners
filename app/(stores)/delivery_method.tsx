/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const DeliveryMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const deliveryMethods = [
    { id: '1', title: 'Dispatch Rider', description: 'One working day' },
    { id: '2', title: 'Economy', description: 'Four working days' },
    { id: '3', title: 'Regular', description: 'Two working days' },
  ];

  const handleSelectMethod = (id) => {
    setSelectedMethod(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelectMethod(item.id)}>
      <Ionicons
        name={selectedMethod === item.id ? 'radio-button-on' : 'radio-button-off'}
        size={24}
        color={selectedMethod === item.id ? '#FFC107' : '#FFC107'}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity> */}
      <Text style={styles.header}>Delivery Method</Text>
      <FlatList
        data={deliveryMethods}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <Link href="/(stores)/checkout_delivered" asChild>
      
      </Link>
      {/* <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity> */}
      <View style={{ position:'absolute', bottom:300, width:'100%', justifyContent:'center', alignItems:'center'}}>
    

        <Link href="/(stores)/checkout_delivered" asChild>
            <Pressable style={styles.continueButton}>
            <Text style={styles.continueText}>Continuee</Text>
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    marginTop: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  continueButton: {
    marginTop: 40,
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width:250
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeliveryMethodScreen;
