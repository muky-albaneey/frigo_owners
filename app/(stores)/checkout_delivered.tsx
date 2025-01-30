/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '~/components/home/Color';

const CheckoutScreen = () => {
  const [selectedDelivery, setSelectedDelivery] = useState('Delivered to your place');
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'House of wear limited Ankara',
      size: 'Small',
      color: 'Blue',
      price: 12800.56,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      name: 'House of wear limited Ankara',
      size: 'Small',
      color: 'Blue',
      price: 12800.56,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
        id: '3',
        name: 'House of wear limited Ankara',
        size: 'Small',
        color: 'Blue',
        price: 12800.56,
        quantity: 1,
        image: 'https://via.placeholder.com/100',
      },
      {
        id: '4',
        name: 'House of wear limited Ankara',
        size: 'Small',
        color: 'Blue',
        price: 12800.56,
        quantity: 1,
        image: 'https://via.placeholder.com/100',
      },
      {
        id: '5',
        name: 'House of wear limited Ankara',
        size: 'Small',
        color: 'Blue',
        price: 12800.56,
        quantity: 1,
        image: 'https://via.placeholder.com/100',
      },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const deliveryFees = itemsTotal;
    const total = itemsTotal + deliveryFees;
    return { itemsTotal, deliveryFees, total };
  };

  const { itemsTotal, deliveryFees, total } = calculateTotal();

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.header, {textAlign:'center'}]}>Checkout</Text>

      <View style={[styles.section,{gap:3}]}>
        <Text style={styles.title}>Delivery Address</Text>
        <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:4}}>
            <View>
            <FontAwesome6 name="location-dot" size={20} color="black" style={{ marginRight:10 }} />
            </View>
            <Text style={styles.subTitle}>Home</Text>
            <Text style={styles.address}>56, jibowo road Lekki Lagos lagos lagos</Text>
        </View>
      </View>

      <View style={[styles.section,{gap:4}]}>
        <Text style={styles.title}>Delivery Method</Text>
        <Text style={styles.subTitle}>Dispatch Rider</Text>
        <Text>One working day</Text>

        <Text style={styles.delivery}>Delivery</Text>
        <Text>Select any of your choice below for delivery</Text>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedDelivery('Pickup')}
        >
          <MaterialIcons
            name={selectedDelivery === 'Pickup' ? 'radio-button-checked' : 'radio-button-unchecked'}
            size={20}
            color="gold"
          />
          <Text style={styles.radioText}>Pickup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedDelivery('Delivered to your place')}
        >
          <MaterialIcons
            name={selectedDelivery === 'Delivered to your place' ? 'radio-button-checked' : 'radio-button-unchecked'}
            size={20}
            color="gold"
          />
          <Text style={styles.radioText}>Delivered to your place</Text>
        </TouchableOpacity>
      </View>
        <View style={{ flex:1, height:210, backgroundColor:'transparent' }}>
        <FlashList
        data={cartItems}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={[styles.itemDetails,{gap:2.4}]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Color: {item.color}</Text>
              <Text>Size: {item.size}</Text>
              <Text style={styles.price}>NGN {item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => decreaseQuantity(item.id)}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeItem}>
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
            </View>
          </View>
        )}
      />
        </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Items</Text>
        <Text style={styles.summaryValue}>NGN {itemsTotal.toFixed(2)}</Text>

        <Text style={styles.summaryText}>Delivery fees</Text>
        <Text style={styles.summaryValue}>NGN {deliveryFees.toFixed(2)}</Text>

        <Text style={styles.summaryText}>TOTAL</Text>
        <Text style={styles.summaryValue}>NGN {total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  section: { marginBottom: 16 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#92400E' },
  subTitle: { fontSize: 14, fontWeight: 'bold' },
  address: { fontSize: 14 },
  delivery: { marginTop: 16, fontWeight: 'bold' },
  radioContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  radioText: { marginLeft: 8 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  image: { width: 50, height: 60, marginRight: 8 },
  itemDetails: { flex: 1 },
  price: { fontWeight: 'bold' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  button: { marginHorizontal: 8, padding: 4, backgroundColor: '#E5E7EB', borderRadius: 4 },
  summaryContainer: { marginTop: 16 },
  summaryText: { fontWeight: 'bold' },
  summaryValue: { fontWeight: 'bold', textAlign: 'right' },
  payButton: { marginTop: 16, padding: 16, backgroundColor: '#92400E', borderRadius: 8 },
  payText: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
  removeItem: {
    // marginLeft: 10,
    position:'absolute',
    right:20,
    top:-25,
    padding: 2,
    borderWidth:.2,
    borderRadius: 5,
    // backgroundColor: COLORS .ColorBrown,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    borderColor: COLORS.ColorBrown

  },
  removeText: {
    fontSize: 16,
    // color: "#ff0000",
  },
});

export default CheckoutScreen;
