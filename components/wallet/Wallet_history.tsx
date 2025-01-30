/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { COLORS } from "../home/Color";

const data = [
  {
    id: "1",
    icon: "pricetag",
    title: "Cashback Promo",
    date: "1 Jan 2024",
    amount: "+₦5,000.00",
    amountColor: "green",
  },
  {
    id: "2",
    icon: "shirt",
    title: "Cloth Delivery",
    date: "5 Feb 2024",
    amount: "-₦10,000.00",
    amountColor: "red",
  },
  {
    id: "3",
    icon: "download",
    title: "Money Received",
    date: "9 Sep 2024",
    amount: "+₦25,000.00",
    amountColor: "green",
  },
];

export default function MoneyTrackerScreen() {
    const router = useRouter();
  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={styles.transactionIcon}>
          <Ionicons name={item.icon} size={24} color="#fff" />
        </View>
        <View>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <Text style={[styles.transactionAmount, { color: item.amountColor }]}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Balance Section */}
      <TouchableOpacity onPress={() => router.replace("/(drawer)/(home)")} style={{ position:'absolute', left:0 }}>
         <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceValue}>₦100,000.00</Text>
        <View style={styles.incomeExpenseContainer}>
          <View style={styles.incomeExpenseItem}>
            <Text style={styles.incomeExpenseLabel}>Income</Text>
            <Text style={styles.incomeValue}>+₦50,000.00</Text>
          </View>
          <View style={styles.incomeExpenseItem}>
            <Text style={styles.incomeExpenseLabel}>Expenses</Text>
            <Text style={styles.expenseValue}>-₦30,000.00</Text>
          </View>
        </View>
      </View>

      {/* Money Tracker Section */}
      <View style={styles.trackerContainer}>
        <View style={styles.trackerHeader}>
          <Text style={styles.trackerTitle}>Money Tracker</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Weekly</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trackerGraph}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <View key={index} style={styles.graphBar}>
              <View style={styles.incomeBar}></View>
              <View style={styles.expenseBar}></View>
              <Text style={styles.graphLabel}>{day}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Status Section */}
      <View style={styles.statusContainer}>
        <Ionicons name="checkmark-circle" size={20} color="green" />
        <Text style={styles.statusText}>You're doing well with your money</Text>
      </View>

      {/* Transaction History */}
      <Text style={styles.transactionHeader}>Transaction History</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionList}
      />

      {/* See All Transactions Button */}
      <Link href='/(drawer)/(wallet)/wallet_tran_history' asChild>
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>See All Transaction</Text>
      </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  balanceContainer: {
    backgroundColor: "#A0522D",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  balanceLabel: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  balanceValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  incomeExpenseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  incomeExpenseItem: {
    alignItems: "center",
    flex: 1,
    backgroundColor:'#fff',
    padding: 10,
    borderRadius: 15,
    marginHorizontal:10,
    // borderRadius:12
  },
  incomeExpenseLabel: {
    // color: "#fff",
    marginBottom: 5,
    color:COLORS.ColorStoreName
  },
  incomeValue: {
    color: "green",
    fontWeight: "bold",
  },
  expenseValue: {
    color: "red",
    fontWeight: "bold",
  },
  trackerContainer: {
    marginBottom: 20,
  },
  trackerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  trackerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 14,
  },
  trackerGraph: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  graphBar: {
    alignItems: "center",
  },
  incomeBar: {
    width: 10,
    height: 50,
    backgroundColor: "#A0522D",
    marginBottom: 2,
  },
  expenseBar: {
    width: 10,
    height: 30,
    backgroundColor: "#F4A460",
    marginBottom: 5,
  },
  graphLabel: {
    fontSize: 12,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6FFED",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  statusText: {
    color: "green",
    marginLeft: 5,
    fontSize: 14,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionList: {
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionIcon: {
    backgroundColor: "#A0522D",
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 12,
    color: "#888",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#A0522D",
    alignItems: "center",
  },
  seeAllText: {
    color: "#A0522D",
    fontWeight: "bold",
  },
});
