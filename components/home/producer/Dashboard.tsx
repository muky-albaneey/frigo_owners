/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {
  LineChart,
  PieChart,
  BarChart,
  YAxis,
  XAxis,
  Grid,
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Line, Svg } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

const salesData = [5000, 15000, 3000, 12000, 8000, 18000];

// Custom Grid Component
const CustomGrid = ({ y, ticks }: { y: (value: number) => number; ticks: number[] }) => (
  <>
    {ticks.map((tick) => (
      <Line
        key={tick}
        x1="0%"
        x2="100%"
        y1={y(tick)}
        y2={y(tick)}
        stroke="rgba(0,0,0,0.2)"
      />
    ))}
  </>
);

const messageData = [
  {
    id: "1",
    name: "Babajide Daramola",
    message: "Order inquiry about...",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Osas Jejelaiye Jr",
    message: "Custom design request...",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const filterOptions = ["Yesterday", "Today", "Weekly", "Monthly", "Yearly"];

const ProducerDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Weekly");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.brandName}>Daviva Wears</Text>
      </View>

      <View style={styles.headerRight}>
        <Image
          source={{ uri: "https://yourcdn.com/viva_logo.png" }}
          style={styles.brandLogo}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>

      {/* Sales Overview */}
      <View style={styles.salesContainer}>
        <View style={styles.salesBox}>
          <Text style={styles.salesValue}>4,526</Text>
          <Text style={styles.salesLabel}>Total Sales</Text>
        </View>
        <View style={styles.salesBox}>
          <Text style={[styles.salesValue, styles.earnings]}>$12.5k</Text>
          <Text style={styles.salesLabel}>Earnings</Text>
        </View>
        <View style={styles.salesBox}>
          <Text style={[styles.salesValue, styles.profit]}>+24%</Text>
          <Text style={styles.salesLabel}>Profit</Text>
        </View>
      </View>

      {/* Sales Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Sales Overview</Text>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Text style={styles.filterText}>{selectedFilter} ▼</Text>
        </TouchableOpacity>

        {/* Dropdown */}
        {dropdownVisible && (
          <View style={styles.dropdown}>
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.dropdownItem,
                  selectedFilter === option && styles.dropdownActive,
                ]}
                onPress={() => {
                  setSelectedFilter(option);
                  setDropdownVisible(false);
                }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Bar Chart */}
        <View style={{ height: 200, flexDirection: "row" }}>
          <YAxis
            data={salesData}
            style={{ marginBottom: 20 }}
            contentInset={{ top: 10, bottom: 10 }}
            svg={{ fontSize: 10, fill: "black" }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* <BarChart
              style={{ height: 200 }}
              data={salesData}
              svg={{ fill: "#7c4d34" }}
              contentInset={{ top: 10, bottom: 10 }}
              spacingInner={0.2}
            >
              <Grid />
            </BarChart> */}
            <BarChart
              style={{ height: 200 }}
              data={salesData}
              svg={{ fill: "#7c4d34" }}
              contentInset={{ top: 10, bottom: 10 }}
              spacingInner={0.2}
            >
              {/* Replace Grid with a Custom Grid */}

             <CustomGrid y={(value) => value} ticks={[5000, 10000, 15000, 20000]} />
            </BarChart>

            <XAxis
              style={{ marginTop: 10 }}
              data={salesData}
              formatLabel={(value, index) =>
                ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]
              }
              contentInset={{ left: 20, right: 20 }}
              svg={{ fontSize: 10, fill: "black" }}
            />
          </View>
        </View>
      </View>

      {/* Recent Messages */}
      <View style={styles.section}>
       <View style={{ flexDirection:'row',  justifyContent:'space-between' }}>
       <Text style={styles.sectionTitle}>Recent Messages</Text>
       <Link href='/(producer)/home_message' asChild>
              <Pressable><Text style={[styles.sectionTitle, {color:'#d3a47e'}]}>See all</Text></Pressable>
       </Link>
       </View>
        <FlashList
          data={messageData}
          keyExtractor={(item) => item.id}
          estimatedItemSize={80}
          renderItem={({ item }) => (
            <View style={styles.messageCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.messageName}>{item.name}</Text>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Factory Popularity */}
      <View style={styles.section}>
     <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
        <Text style={styles.sectionTitle}>Factory Popularity</Text>
        <Link href='/(producer)/reviews' asChild>
        <Pressable><Text style={[styles.sectionTitle, {color:'#d3a47e'}]}>See Reviews</Text></Pressable>
        </Link>
     </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "85%" }]} />
        </View>
        <Text style={styles.ratingText}>4.8/5.0 (256 reviews)</Text>
      </View>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Upload New Product</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="user" size={20} color="black" />
                <Text style={styles.menuText}>Personal Information</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="mail" size={20} color="black" />
                <Text style={styles.menuText}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="bar-chart" size={20} color="black" />
                <Text style={styles.menuText}>Sales Dashboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="credit-card" size={20} color="black" />
                <Text style={styles.menuText}>Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="help-circle" size={20} color="black" />
                <Text style={styles.menuText}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="log-out" size={20} color="black" />
                <Text style={styles.menuText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 15 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  headerLeft: {
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
//   welcomeText: { fontSize: 18, color: "#777" },
//   brandName: { fontSize: 20, fontWeight: "bold" },
//   brandLogo: { width: 40, height: 40 },
  menuIcon: { width: 24, height: 24 },
  salesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  salesBox: { flex: 1, alignItems: "center" },
  salesValue: { fontSize: 20, fontWeight: "bold" },
  salesLabel: { fontSize: 14, color: "#777" },
  earnings: { color: "green" },
  profit: { color: "red" },
  chartContainer: { backgroundColor: "#fff", padding: 15, borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  filterText: { textAlign: "right", color: "#777" },
  dropdown: {
    backgroundColor: "#fff",
    padding: 10,
    position: "absolute",
    right: 10,
    top: 30,
    zIndex: 1,
  },
  dropdownItem: { paddingVertical: 5 },
  dropdownActive: { backgroundColor: "#d3a47e" },
  section: { marginTop: 20 },
  messageCard: { flexDirection: "row", alignItems: "center", padding: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 5,
  },
  progressFill: { height: "100%", backgroundColor: "#d3a47e", borderRadius: 5 },
  ratingText: { textAlign: "center", color: "#777" },
  uploadButton: {
    backgroundColor: "#7c4d34",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  uploadText: { color: "#fff", fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  messagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#000",
//   },
  viewAll: {
    fontSize: 14,
    color: "#A86A3D",
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  messageText: {
    fontSize: 14,
    color: "#555",
  },
});

export default ProducerDashboard;
