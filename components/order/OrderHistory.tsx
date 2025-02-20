/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const ordersData = {
  pending: [
    { id: "1", name: "Customer Name - #1234", service: "Services Requested - wear Adjustment" },
    { id: "2", name: "Customer Name - #1234", service: "Services Requested - wear Adjustment" },
    { id: "3", name: "Customer Name - #1234", service: "Services Requested - wear Adjustment" },
  ],
  inProgress: [
    { id: "1", name: "Wedding Suit", client: "Steven Sunday", dueDate: "Jan 25, 2025", progress: "70% Complete" },
    { id: "2", name: "Wedding Suit", client: "Steven Sunday", dueDate: "Jan 25, 2025", progress: "70% Complete" },
    { id: "3", name: "Wedding Suit", client: "Steven Sunday", dueDate: "Jan 25, 2025", progress: "70% Complete" },
  ],
  completed: [
    { id: "1", name: "Wedding Suit", client: "Steven Sunday", dueDate: "Jan 25, 2025", progress: "100% Complete" },
    { id: "2", name: "Evening Dress", client: "Steven Sunday", dueDate: "Jan 25, 2025", progress: "100% Complete" },
    { id: "3", name: "School Uniform", client: "Steven Sunday", dueDate: "Jan 25, 2025", progress: "100% Complete" },
  ],
};

const OrderHistory = () => {
  const [selectedTab, setSelectedTab] = useState("pending");
const route = useRouter();
  const renderOrderItem = ({ item }) => {
    if (selectedTab === "pending") {
      return (
        <View style={[styles.orderContainer, {flexDirection:'column'}]}>
          <Text style={styles.customerName}>{item.name}</Text>
          <Text style={styles.service}>{item.service}</Text>
          <View style={styles.buttonRow}>
            <Link href='/(drawer)/(profile)/(order-history)/order_details' asChild>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            </Link>
           
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.orderContainer}>
         <View>
          <Text style={styles.orderTitle}>{item.name}</Text>
            <Text style={styles.clientText}>Client: {item.client}</Text>
            <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
         </View>
          <View style={styles.statusContainer}>
            <TouchableOpacity style={[styles.statusButton, selectedTab === "inProgress" ? styles.inProgress : styles.completed]}>
              <Text style={styles.statusText}>{selectedTab === "inProgress" ? "inProgress" : "Completed"}</Text>
            </TouchableOpacity>
            <Text style={{  }}>{item.progress}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
    <View style={{ flexDirection:'row' }}>
    <Pressable onPress={()=>route.back()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
      </Pressable>
    <Text style={styles.header}>Order History</Text>
    </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, selectedTab === "pending" && styles.activeTab]} onPress={() => setSelectedTab("pending")}>
          <Text style={[styles.tabText, selectedTab === "pending" && styles.activeTabText]}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, selectedTab === "inProgress" && styles.activeTab]} onPress={() => setSelectedTab("inProgress")}>
          <Text style={[styles.tabText, selectedTab === "inProgress" && styles.activeTabText]}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, selectedTab === "completed" && styles.activeTab]} onPress={() => setSelectedTab("completed")}>
          <Text style={[styles.tabText, selectedTab === "completed" && styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {ordersData[selectedTab].length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            {selectedTab === "pending"
              ? "No Pending Order"
              : selectedTab === "inProgress"
              ? "No In Progress Order"
              : "No Completed Order"} available
          </Text>

          <TouchableOpacity style={styles.returnButton} onPress={() => {/* Add navigation logic here */}}>
            <Text style={styles.returnButtonText}>Return to homepage</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList data={ordersData[selectedTab]} renderItem={renderOrderItem} keyExtractor={(item) => item.id} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
  },
  activeTab: {
    backgroundColor: "#B87C4C",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
  orderContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  backIcon: {
    marginRight: 10,
  },
  service: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  acceptButton: {
    backgroundColor: "#B87C4C",
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B87C4C",
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  clientText: {
    fontSize: 14,
    color: "#555",
  },
  dueDate: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  statusContainer: {
    
    alignItems: "flex-end",
    gap:12,
   
  },
  statusButton: {
    padding: 8,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
  },
  inProgress: {
    backgroundColor: "#B87C4C",
  },
  completed: {
    backgroundColor: "green",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  returnButton: {
    backgroundColor: "#B87C4C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  returnButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});

export default OrderHistory;
