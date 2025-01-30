/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "./Color";

const promotions = "in your cart! Click to view exclusive deals and save more!";
const cartData = [
  {
    id: "1",
    name: "House of wear limited",
    type: "Ankara (5 yards)",
    color: "Blue",
    size: "Small",
    price: "NGN 12,800.56",
    quantity: 1,
    image: "https://via.placeholder.com/150", // Replace with your image URL
  },
];

export default function CartScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemType}>{item.type}</Text>
        <View style={styles.itemSubDetails}>
          <Text style={styles.itemAttribute}>Color: {item.color}</Text>
          <Text style={styles.itemAttribute}>Size: {item.size}</Text>
        </View>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.removeItem}>
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <View style={{ marginBottom: 15 }}>
      <LinearGradient
          colors={[COLORS.ColorBrown, COLORS.ColorLightBrown]} // Gradient colors
          start={{ x: 0, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }}   // Bottom-right corner
          style={styles.promoBanner}
        >
          <Text style={styles.promoText}>
            <Text style={{ color:'#e10000cf', fontWeight:'bold' }}>3 promotions 3 promotions </Text>
            {promotions}
            </Text>
          <TouchableOpacity style={styles.viewMore}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
      <FlashList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Items</Text>
          <Text style={styles.totalValue}>NGN 80,650.99</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalValue}>NGN 83,650.99</Text>
        </View>
        {/* <Link href="/(stores)/details/1" asChild style={{  flex: 1 }}>

           <Pressable></Pressable> */}
           <View style={{ width:'100%',justifyContent:'center', alignItems:'center' }}>
           <Link href="/(stores)/pickup" asChild >
            <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy now</Text>
            </Pressable>
          </Link>
           </View>
            
        {/* <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy now</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:'center'
  },
  promoBanner: {
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  promoText: {
    fontSize: 14,
    color: COLORS.dark,
    flex: 1,
    marginRight: 10,
  },
  viewMore: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  viewMoreText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  list: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    marginBottom: 15,
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemType: {
    fontSize: 9,
    color: "#888",
    marginBottom: 5,
  },
  itemSubDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemAttribute: {
    fontSize: 9,
    color: "#555",
  },
  itemPrice: {
    fontSize: 11,
    fontWeight: "bold",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: COLORS.ColorBrown,
    padding: 5.4,
    borderRadius: 5,
    marginHorizontal: 5,
  
  },
  quantityText: {
    fontSize: 12,
    fontWeight: "bold",
    color:COLORS.ColorWhite
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
  },
  removeItem: {
    // marginLeft: 10,
    position:'absolute',
    right:33,
    top:0,
    padding: 2,
    borderWidth:.2,
    borderRadius: 5,
    // backgroundColor: COLORS.ColorBrown,
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
  footer: {
    paddingTop: 15,
    // borderTopWidth: 1,
    // borderTopColor: "#f0f0f0",
    borderColor: "#f0f0f0",
    borderWidth:1,
    position:'absolute',
    bottom:90,
    width: "97%",
    paddingHorizontal: 10,
    // paddingLeft:30,
    paddingBottom: 20,
    marginLeft:15,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
    // justifyContent:'center',
    // alignItems:'center'
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  totalLabel: {
    fontSize: 14,
    color: "#555",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buyButton: {
    backgroundColor: "#A0522D",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: "80%",
    justifyContent: "center",
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
