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
import { G, Circle, Line } from 'react-native-svg';
import * as shape from "d3-shape";
// import { Line, Svg } from "react-native-svg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../Color";

const salesData = [16000, 17000, 16000, 15000, 16000, 19000];

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
const barColors = [
  "#6781b1",
  "#e4c422"   ,  // First bar color
  "#9ceb67"   ,   // Second bar color
  "#7d5587" ,  // Third bar color
  "#155060" ,              // Fourth bar (testing a raw color)
  "#7a3c15",              // Fifth bar (testing another raw color)
             // Fifth bar (testing another raw color)
];

const filterOptions = ["Yesterday", "Today", "Weekly", "Monthly", "Yearly"];

// const formattedData = salesData.map((value, index) => ({
//   value,
//   svg: { fill: barColors[index] || "green" }, 
//   key: `bar-${index}`, // Unique key
// }));
const formattedData = [
  { label: "Mon", value: 1500, svg: { fill: "#2F5597" } },  // Blue
  { label: "Tue", value: 6000, svg: { fill: "#E6A400" } },  // Yellow
  { label: "Wed", value: 1300, svg: { fill: "#6AA84F" } },  // Green
  { label: "Thu", value: 2500, svg: { fill: "#674EA7" } },  // Purple
  { label: "Fri", value: 7500, svg: { fill: "#009688" } },  // Teal
  { label: "Sat", value: 20000, svg: { fill: "#A52A2A" } }, // Brown
];
interface LineDecoratorProps {
  x: (index: number) => number;
  y: (value: number) => number;
  data: number[];
}

// Fix: Explicitly type the decorator props
const LineDecorator: React.FC<LineDecoratorProps> = ({ x, y, data }) => (
  <G>
    {data.map((value, index) => (
      <Circle key={index} cx={x(index)} cy={y(value)} r={4} fill="green" />
    ))}
  </G>
);

const ProducerDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Weekly");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const values = formattedData.map((item) => item.value);
  const handleMenuPress = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };
  
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
        <View style={{ height: 220, flexDirection: "row", paddingHorizontal: 10 }}>
      {/* Y-Axis for values */}
      <YAxis
        data={values}
        style={{ marginBottom: 10 }}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ fontSize: 10, fill: "gray" }}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        {/* Bar Chart with LineChart Overlay */}
        <View style={{ position: "absolute", width: "100%", height: "100%" }}>
        {/* <LineChart
        style={{ height: 200, width: 300, position: 'absolute' }}
        data={values}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ stroke: 'brown', strokeWidth: 2 }}
      >
        {(props) => <LineDecorator {...props} />}
      </LineChart> */}
      <LineChart
        style={{ height: 200, width: 300, position: 'absolute' }}
        data={values}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ stroke: 'brown', strokeWidth: 2 }}
      >
        <LineDecorator />
      </LineChart>

        </View>

        <BarChart
          style={{ height: 200, width: 320 }}
          data={formattedData}
          yAccessor={({ item }) => item.value}
          contentInset={{ top: 10, bottom: 10 }}
          spacingInner={0.5}
          spacingOuter={0.3}
        />

        {/* X-Axis Labels */}
        <XAxis
          style={{ marginTop: 10 }}
          data={formattedData}
          formatLabel={(value, index) => formattedData[index]?.label}
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 12, fill: "gray" }}
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
             <View style={{width:'80%', flexDirection:'row', justifyContent:'space-between' }}>
              <View>
                  <Text style={styles.messageName}>{item.name}</Text>
                  <Text style={styles.messageText}>{item.message}</Text>
                </View>
                {/* <Feather name="message-square" size={24} color={COLORS.ColorBrown}/> */}
                <MaterialIcons name="messenger" size={24} color={COLORS.ColorBrown} />
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
              <Feather name="x" size={18} color={COLORS.ColorWhite} />
            </TouchableOpacity>
            <View>
            <TouchableOpacity
  style={[
    styles.menuItem,
    selectedMenuItem === "Personal Information" && styles.selectedMenuItem,
  ]}
  onPress={() => handleMenuPress("Personal Information")}
>
  <Feather name="user" size={20} color="black" />
  <Text style={styles.menuText}>Personal Information</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.menuItem,
    selectedMenuItem === "Message" && styles.selectedMenuItem,
  ]}
  onPress={() => handleMenuPress("Message")}
>
  <Feather name="mail" size={20} color="black" />
  <Text style={styles.menuText}>Message</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.menuItem,
    selectedMenuItem === "Sales Dashboard" && styles.selectedMenuItem,
  ]}
  onPress={() => handleMenuPress("Sales Dashboard")}
>
  <Feather name="bar-chart" size={20} color="black" />
  <Text style={styles.menuText}>Sales Dashboard</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.menuItem,
    selectedMenuItem === "Wallet" && styles.selectedMenuItem,
  ]}
  onPress={() => handleMenuPress("Wallet")}
>
  <Feather name="credit-card" size={20} color="black" />
  <Text style={styles.menuText}>Wallet</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.menuItem,
    selectedMenuItem === "FAQs" && styles.selectedMenuItem,
  ]}
  onPress={() => handleMenuPress("FAQs")}
>
  <Feather name="help-circle" size={20} color="black" />
  <Text style={styles.menuText}>FAQs</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.menuItem,
    selectedMenuItem === "Logout" && styles.selectedMenuItem,
  ]}
  onPress={() => handleMenuPress("Logout")}
>
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
  selectedMenuItem: {
    backgroundColor: "#d3a47e", // Change this to any color you prefer
  },
  
//   welcomeText: { fontSize: 18, color: "#777" },
//   brandName: { fontSize: 20, fontWeight: "bold" },
//   brandLogo: { width: 40, height: 40 },
  menuIcon: { width: 24, height: 24 },
  salesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  salesBox: { flex: 1, alignItems: "center" },
  salesValue: { fontSize: 20, fontWeight: "bold" },
  salesLabel: { fontSize: 14, color: "#777" },
  earnings: { color: "green" },
  profit: { color: "red" },
  chartContainer: { backgroundColor: "#FF8D4D0F", padding: 15, borderRadius: 10 },
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
  section: { marginTop: 10 },
  messageCard: { flexDirection: "row", alignItems: "center", padding: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  progressBar: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 5,
  },
  progressFill: { height: "100%", backgroundColor:COLORS.ColorBrown , borderRadius: 5,padding:6 },
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
    position:'relative',
    zIndex: 100,
  //  height: 500,
    // right:-50
  },
  modalContent: {
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    position:'absolute',
    top: 160,
    zIndex: 100,
    height: 400,
    right:-10
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
    backgroundColor:COLORS.ColorBrown,
    // padding: 10,
    borderRadius: 35,
    width: 28,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
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
