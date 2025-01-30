/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons"; // For the eye icon
import { COLORS } from "../home/Color";
import { Link } from "expo-router";

export default function WalletScreen() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <View style={styles.container}>
      {/* Wallet Card */}
      <View style={styles.walletCard}>
        <View style={{ width:'100%', alignItems:'flex-end' }}>
        <View style={{ padding:10, backgroundColor:COLORS.ColorHome, borderRadius:20 }}>
        <Ionicons name="notifications-sharp" size={15} color={COLORS.ColorWhite} />
        </View>
        </View>
        <View style={styles.walletHeader}>
          <Text style={styles.balanceText}>Balance</Text>
          
        </View>
        <View style={{ width:'100%',flexDirection:'row', alignItems:'center', justifyContent:'flex-start', gap:5 }}>
            <Text style={styles.walletBalance}>
            {showBalance ? "\u20A65,000.00" : "\u25CF \u25CF \u25CF \u25CF \u25CF"}
            </Text>
            <TouchableOpacity
                onPress={() => setShowBalance(!showBalance)}
                style={[ {marginTop:10}]}
                >
                <Ionicons
                name={showBalance ? "eye-off" : "eye"}
                size={24}
                color={COLORS.ColorHome}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.walletNumber}>Wallet No</Text>
      </View>

      {/* Wallet Actions */}
      <View style={styles.actionRow}>
        {[
          { name: "Fund wallet", icon: "add-circle" },
          { name: "Tranfer", icon: "arrow-up-circle" },
          { name: "withdraw", icon: "arrow-down-circle" },
          { name: "Airtime & data", icon: "phone-portrait" },
          { name: "Utility", icon: "flash" },
        ].map((action, index) => (
          <View key={index} style={[styles.actionItem]}>
           <View  style={[{ padding:15, borderRadius:15},(index == 0 && {backgroundColor:COLORS.warning}), (index == 1 && {backgroundColor:'#8674F5'}), , (index == 2 && {backgroundColor:'#FF6854'})]}>
           <Ionicons name={action.icon}  size={20} color={index == 3 || index == 4 ? COLORS.warning: COLORS.ColorWhite} />
           
           </View>
           <Text style={styles.actionText}>{action.name}</Text>
          </View>
        ))}
      </View>

      {/* Transaction History */}
      <View style={styles.historySection}>
        <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>Transaction History</Text>
          <Link href='/(drawer)/(wallet)/wallet_history' asChild>
          <TouchableOpacity>
            <Text style={styles.seeMore}>see more</Text>
          </TouchableOpacity>
          </Link>
        </View>

        {/* Transaction List */}
        {[
          {
            title: "Cashback Promo",
            date: "1 Jan 2024",
            amount: "+\u20A65,000.00",
            color: "green",
          },
          {
            title: "Cloth Delivery",
            date: "5 Feb 2024",
            amount: "-\u20A610,000.00",
            color: "red",
          },
          {
            title: "Money Received",
            date: "9 Sep 2024",
            amount: "+\u20A625,000.00",
            color: "green",
          },
        ].map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <View style={styles.transactionDetails}>
            <FontAwesome5 name="history" size={24} color="black" />
              <View style={styles.transactionTextContainer}>
                <Text style={styles.transactionTitle}>{transaction.title}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            </View>
            <Text
              style={{
                ...styles.transactionAmount,
                color: transaction.color,
              }}
            >
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ColorWhite,
    paddingTop: 40,
  },
  walletCard: {
    backgroundColor: COLORS.ColorBrown,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  walletHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  balanceText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  walletBalance: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  walletNumber: {
    color: "white",
    marginTop: 10,
  },
  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginVertical: 0,
    gap:13,
    paddingLeft:30,
    // borderRadius
    // width:'10%'
  },
  actionItem: {
    alignItems: "center",
    marginVertical: 0,
    width:100,
    justifyContent:'center',
    borderRadius:20,
   

  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
  },
  historySection: {
    paddingHorizontal: 16,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeMore: {
    color: COLORS.ColorBrown,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionTextContainer: {
    marginLeft: 10,
  },
  transactionTitle: {
    fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 12,
    color: "gray",
  },
  transactionAmount: {
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f2f2f2",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "gray",
  },
  wishlistButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: COLORS.ColorBrown,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  wishlistText: {
    fontSize: 12,
    color: "white",
    marginTop: 4,
  },
});
