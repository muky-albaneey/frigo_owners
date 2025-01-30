/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { LineChart, PieChart, BarChart, YAxis, XAxis, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Svg } from "react-native-svg";
import CustomGrid from "./CustomGrid";
import {useRouter} from 'expo-router';

const salesSummary = [
  { title: "Sales Orders", value: "40,689", subText: "20% up yesterday" },
  { title: "Global Orders", value: "4,329", subText: "10.2% last week" },
  { title: "Sales Status", value: "10,684", subText: "Down 10% last day" },
  { title: "Failed Orders", value: "4,329", subText: "10.2% last week" },
];

const salesData1 = [5000, 10000, 150000, 120000, 180000];
const salesData2 = [4000, 12000, 130000, 110000, 170000];
const salesLabels = ["March", "April", "June", "July", "August"];

const productData = [
  { key: 1, value: 35, svg: { fill: "#3498db" }, label: "Silk" },
  { key: 2, value: 40, svg: { fill: "#e74c3c" }, label: "Tie and die" },
  { key: 3, value: 25, svg: { fill: "#2ecc71" }, label: "Lace" },
];

const countrySales = [
  { country: "United States", users: "30k", sales: "25.8%", flag: "🇺🇸" },
  { country: "Brazil", users: "26k", sales: "16.2%", flag: "🇧🇷" },
  { country: "India", users: "22k", sales: "12.3%", flag: "🇮🇳" },
  { country: "Australia", users: "17k", sales: "11.9%", flag: "🇦🇺" },
];


const DashboardScreen = () => {
  const route = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>route.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sales Dashboard</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search here" />

      {/* Sales Summary Cards */}
      <View style={styles.salesSummaryContainer}>
  {salesSummary.map((item, index) => (
    <View key={index} style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardValue}>{item.value}</Text>
      <Text style={styles.cardSubText}>{item.subText}</Text>
    </View>
  ))}
</View>


      {/* Sales Analytics */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Sales Analytics</Text>
        <View style={{ flexDirection: "row", height: 250 }}>
          {/* Y-Axis Labels */}
          <YAxis
            data={[0, 50000, 100000, 150000, 200000]}
            style={{ marginBottom: 20 }}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              fontSize: 12,
              fill: "#888",
            }}
            numberOfTicks={5}
            formatLabel={(value) => value.toLocaleString()}
          />
          {/* Line Chart */}
          <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={salesData1}
            svg={{ stroke: "#3498db", strokeWidth: 2 }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveNatural}
            >
            {({ x, y }) => (
                <>
                <CustomGrid
                    x={x}
                    y={y}
                    data={salesData1}
                    ticks={[0, 50000, 100000, 150000, 200000]}
                />
                </>
            )}
            </LineChart>


            
            <LineChart
              style={StyleSheet.absoluteFill}
              data={salesData2}
              svg={{ stroke: "#2ecc71", strokeWidth: 2 }}
              contentInset={{ top: 20, bottom: 20 }}
              curve={shape.curveNatural}
            />
            {/* X-Axis Labels */}
            <XAxis
  style={{ marginTop: 10 }}
  data={salesData1} // This should be an array of numbers or objects
  formatLabel={(index) => salesLabels[index]} // Map index to salesLabels
  contentInset={{ left: 20, right: 20 }}
  svg={{
    fontSize: 12,
    fill: "#888",
  }}
/>

          </View>
        </View>
      </View>

      {/* Most Sold Products */}
 <View style={{ width:'100%', backgroundColor:'#f4e8e1', marginTop:10 }}>

 <Text style={styles.sectionTitle}>Most Sold Products</Text>
     
     <View style={styles.mostSoldContainer}>
       <Svg width={200} height={200}>
         <PieChart
           style={{ height: 200 }}
           data={productData}
           innerRadius={40}
           padAngle={0.05}
         />
       </Svg>
       <View style={styles.legendContainer}>
         {productData.map((item) => (
           <View key={item.key} style={styles.legendItem}>
             <View
               style={[styles.legendColor, { backgroundColor: item.svg.fill }]}
             />
             <Text style={styles.legendLabel}>{item.label}</Text>
           </View>
         ))}
       </View>
     </View>
 </View>


      {/* Users in Last 11 Months */}
     <View style={{ width:'100%', backgroundColor:'#f4e8e1', marginTop:10 }}>
     <Text style={styles.sectionTitle}>Users in last 11 months</Text>
      <Text style={styles.usersValue}>16.5K</Text>
      <Text style={styles.usersSubText}>Users per minute</Text>
      <BarChart
        style={{ height: 100 }}
        data={[30, 50, 80, 40, 60, 90, 70, 100, 120, 150, 80]}
        svg={{ fill: "#3498db" }}
        contentInset={{ top: 10, bottom: 10 }}
      />

      {/* Sales by Country */}
      <Text style={styles.sectionTitle}>Sales by Country</Text>
      <FlashList
        data={countrySales}
        renderItem={({ item }) => (
          <View style={styles.countryRow}>
            <Text style={styles.flag}>{item.flag}</Text>
            <View style={styles.countryDetails}>
              <Text style={styles.countryName}>{item.country}</Text>
              <Text style={styles.usersCount}>{item.users}</Text>
            </View>
            <Text style={styles.salesValue}>{item.sales} ↑</Text>
          </View>
        )}
        estimatedItemSize={50}
      />
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  backButton: { fontSize: 20 },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  menuButton: { fontSize: 20 },
  searchBar: { backgroundColor: "#EEE", padding: 10, borderRadius: 10, marginBottom: 15 },
//   card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginRight: 10, width: 150 },
  cardTitle: { fontSize: 14, fontWeight: "bold" },
  cardValue: { fontSize: 20, fontWeight: "bold", color: "#2c3e50" },
  cardSubText: { fontSize: 12, color: "#888" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  usersValue: { fontSize: 22, fontWeight: "bold" },
  usersSubText: { fontSize: 14, color: "#888" },
  countryRow: { flexDirection: "row", alignItems: "center",  padding: 10, borderRadius: 10, marginBottom: 5 },
  flag: { fontSize: 22, marginRight: 10 },
  countryDetails: { flex: 1 },
  countryName: { fontSize: 16, fontWeight: "bold" },
  usersCount: { fontSize: 14, color: "#888" },
  salesValue: { fontSize: 14, fontWeight: "bold", color: "#2ecc71" },
  chartContainer: {
    backgroundColor: "#f4e8e1",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  mostSoldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  legendContainer: {
    marginLeft: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 14,
    color: "#333",
  },
  
  salesSummaryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#f4e8e1",
    padding: 15,
    borderRadius: 10,
    width: "47%", // Two cards per row
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
});

export default DashboardScreen;
