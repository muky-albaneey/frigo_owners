/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

const DeliveryAddressScreen_2 = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addresses = [
    {
      id: "1",
      title: "Home",
      address: "56, Jibowo road Lekki Lagos lagos lagos lagos",
    },
    {
      id: "2",
      title: "Work",
      address: "56, Jibowo road Lekki Lagos lagos lagos lagos",
    },
    {
      id: "3",
      title: "My parent's house",
      address: "56, Jibowo road Lekki Lagos lagos lagos lagos",
    },
  ];

  const renderAddressItem = ({ item }) => (
    <TouchableOpacity
      style={styles.addressRow}
      onPress={() => setSelectedAddress(item.id)}
    >
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>📍</Text>
      </View>
      <View style={styles.addressDetails}>
        <Text style={styles.addressTitle}>{item.title}</Text>
        <Text style={styles.addressText}>{item.address}</Text>
      </View>
      <View
        style={[
          styles.radioOuterCircle,
          selectedAddress === item.id && styles.radioOuterCircleSelected,
        ]}
      >
        {selectedAddress === item.id && <View style={styles.radioInnerCircle} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, {justifyContent:'space-around'}]}>
        {/* <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Delivery Address</Text>
        <TouchableOpacity>
          <Text style={styles.editIcon}>✎</Text>
        </TouchableOpacity>
      </View>

      {/* Success Message */}
      <View style={styles.successBanner}>
        <Text style={styles.successText}>Address added successfully</Text>
      </View>

      {/* Address List */}
     <View>
     <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={renderAddressItem}
        style={styles.addressList}
      />
     </View>

      {/* Add Address Button */}
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>Add a new address</Text>
      </Pressable>
    </View>
  );
};

export default DeliveryAddressScreen_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  backButton: {
    fontSize: 18,
    color: "#000000",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  editIcon: {
    fontSize: 18,
    color: "#000000",
  },
  successBanner: {
    backgroundColor: "#FFF4E5",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  successText: {
    fontSize: 14,
    color: "#8B4513",
    fontWeight: "bold",
  },
  addressList: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 18,
    color: "#000000",
  },
  addressDetails: {
    flex: 1,
    marginLeft: 12,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  addressText: {
    fontSize: 14,
    color: "#555555",
    marginTop: 4,
  },
  radioOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterCircleSelected: {
    backgroundColor: "#FFD700",
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 100,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
