/* eslint-disable prettier/prettier */
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Animated, Easing,
  Pressable,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { LineChart, PieChart, BarChart, YAxis, XAxis, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
// import { Svg } from "react-native-svg";
import { Circle, G ,Svg} from "react-native-svg";
import CustomGrid from "./CustomGrid";
import {useRouter} from 'expo-router';
import { ProgressBar } from "react-native-paper";
import { AntDesign, Entypo, Octicons } from "@expo/vector-icons";
import { COLORS } from "../home/Color";

const salesSummary = [
  {
    title: 'Total views',
    value: '40,689',
    subText: 'Up from yesterday',
    icon: require('../../assets/total_views.png'), // Replace with actual image path
    zig: require('../../assets/zig_views.png'),
    up: true,
    percent:80,
  },
  {
    title: 'Total Order',
    value: '4,329',
    subText: 'Up from last week',
    icon: require('../../assets/total_order.png'), // Replace with actual image path
    zig: require('../../assets/zig_views.png'),
    up: true,
    percent:80,
  },
  {
    title: 'Total Sales',
    value: '10,684',
    subText: 'Down from yesterday',
    icon: require('../../assets/total_sales.png'), // Replace with actual image path
    zig: require('../../assets/zig_sales.png'), // Replace with actual image path
    up: false,
    percent:80,
  },
  {
    title: 'Total Pending',
    value: '4,329',
    subText: 'Up from last week',
    icon: require('../../assets/total_pending.png'), // Replace with actual image path
    zig: require('../../assets/zig_views.png'), // Replace with actual image path
    up: true,
    percent:80,
  },
];


  const salesData1 = [0, 50000, 120000, 90000, 150000, 200000];
  const salesData2 = [0, 60000, 110000, 80000, 130000, 180000];
  const salesLabels = ["March", "April", "June", "July", "August"];

  // Function to render dots
  // const renderDots = (data, color) => ({ x, y }) =>
  //   data.map((value, index) => (
  //     <G key={index}>
  //       <Circle cx={x(index)} cy={y(value)} r={5} fill="white" stroke={color} strokeWidth={2} />
  //     </G>
  //   ));

// const salesData1 = [5000, 10000, 150000, 120000, 180000];
// const salesData2 = [4000, 12000, 130000, 110000, 170000];
// const salesLabels = ["March", "April", "June", "July", "August"];

const productData = [
  { key: 1, value: 35, svg: { fill: "#3498db" }, label: "Silk" },
  { key: 2, value: 40, svg: { fill: "#e74c3c" }, label: "Tie and die" },
  { key: 3, value: 25, svg: { fill: "#2ecc71" }, label: "Lace" },
];

const countrySales = [
  { flag: "🇺🇸", country: "United States", users: "30k", sales: 25.8, progress: 0.8 },
  { flag: "🇧🇷", country: "Brazil", users: "26k", sales: -16.2, progress: 0.6 },
  { flag: "🇮🇳", country: "India", users: "22k", sales: 12.3, progress: 0.5 },
  { flag: "🇦🇺", country: "Australia", users: "17k", sales: -11.9, progress: 0.3 },
];
const fadedProductData = productData.map(item => ({
  ...item,
  svg: { fill: item.svg.fill + '' }  // Adds transparency (40 in hex)
}));

const DashboardScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const route = useRouter();
   const dotFillAnim = useRef(new Animated.Value(0)).current;
    const dotSingleAnim = useRef(new Animated.Value(0)).current;
    
  const dotFillStyle = {
    transform: [
      {
        translateY: dotFillAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -5] // Move up by 5 units
        })
      }
    ]
  };
  
  const dotSingleStyle = {
    transform: [
      {
        translateY: dotSingleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -5] // Move up by 5 units
        })
      }
    ]
  };

    const bounceAnimation = (anim) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            easing: Easing.bounce,
            useNativeDriver: true
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 500,
            easing: Easing.bounce,
            useNativeDriver: true
          })
        ])
      ).start();
    };
      React.useEffect(() => {
    bounceAnimation(dotFillAnim);
    bounceAnimation(dotSingleAnim);
  }, []);

  return (
    <ScrollView style={styles.container}>
    

      {/* Search Bar */}
      {/* <TextInput style={styles.searchBar} placeholder="Search here" /> */}
      <View style={styles.searchBar}>
      <View style={styles.searchBarInput}>
        <Animated.View style={dotFillStyle}>
          <Octicons name="dot-fill" size={24} color="black" />
        </Animated.View>
        <Animated.View style={[dotSingleStyle, { marginTop: 12 }]}>
          <Entypo name="dot-single" size={24} color="black" />
        </Animated.View>
      </View>

        <TextInput style={[styles.searchInput,{fontWeight:'bold'}]} placeholder="Search here" placeholderTextColor={COLORS.ColorGray}/>
        {/* <Pressable
          style={{ padding: 3, borderWidth: 2, borderRadius: 5, borderColor: COLORS.ColorBrown }}
          onPress={() => setShowFilter(true)} // Open FilterScreen modal
        >
          <AntDesign name="filter" size={20} color={COLORS.ColorBrown} />
        </Pressable> */}
      </View>

      {/* Sales Summary Cards */}
      <View style={styles.salesSummaryContainer}>
      <FlashList
  data={salesSummary}
  numColumns={2}
  keyExtractor={(item, index) => item.id?.toString() || index.toString()}
  renderItem={({ item, index }) => (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical:7 }}>
        <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardValue}>{item.value}</Text>
        </View>
        {item.icon && <Image source={item.icon} style={styles.icon} />}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
        {item.zig && (
          <Image
            source={item.zig}
            style={index === 2 ? [styles.zig, { height: 38, position:'relative',left:-5, top:-10,  }] : styles.zig}

          />
        )}
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', gap:6  }}>
        <Text style={[styles.cardSubText, { color: item.up ? 'green' : 'red' , fontSize:12}]}>
            {item.percent}%
          </Text>
          <Text style={[styles.cardSubText]}>
            {item.subText}
          </Text>
      </View>
      </View>
    </View>
  )}
/>

    </View>


      {/* Sales Analytics */}
      <View style={styles.chartContainer}>
      {/* Title */}
      <Text style={styles.sectionTitle}>Sales Analytics</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        {["Today", "Weekly", "Monthly"].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.toggleButton,
              selectedPeriod === period && styles.activeButton,
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text
              style={[
                styles.toggleText,
                selectedPeriod === period && styles.activeText,
              ]}
            >
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Chart Container */}
      <View style={{ flexDirection: "row", height: 250 }}>
        {/* Y-Axis Labels */}
        <YAxis
          data={[0, 50000, 100000, 150000, 200000]}
          style={{ marginBottom: 20 }}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fontSize: 12, fill: "#888" }}
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
            {/* {renderDots(salesData1, "#3498db")} */}
          </LineChart>

          <LineChart
            style={StyleSheet.absoluteFill}
            data={salesData2}
            svg={{ stroke: "#2ecc71", strokeWidth: 2 }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveNatural}
          >
            {/* {renderDots(salesData2, "#2ecc71")} */}
          </LineChart>

          {/* X-Axis Labels */}
          <XAxis
            style={{ marginTop: 10 }}
            data={salesData1}
            formatLabel={(index) => salesLabels[index]}
            contentInset={{ left: 20, right: 20 }}
            svg={{ fontSize: 12, fill: "#888" }}
          />
        </View>
      </View>
    </View>

      {/* Most Sold Products */}
      <View style={{ width: '100%', backgroundColor: '#f4e8e1', marginTop: 10, padding: 20, borderRadius: 15 }}>
  <Text style={styles.sectionTitle}>Most Sold Products</Text>

  <View style={styles.mostSoldContainer}>
    <Svg width={200} height={200}>
      {/* Faded background ring */}
      <PieChart
        style={{ height: 200 }}
        data={fadedProductData}  // Faded background effect
        innerRadius={70}  // Adjust to match the image
        outerRadius={100}
        padAngle={0}  // Removes gaps between slices
      />
      {/* Foreground Pie Chart */}
      <PieChart
        style={{ height: 200, position: 'absolute' }}  // Overlays on top
        data={productData}
        innerRadius={50}  // Adjust inner radius to match
        outerRadius={90}
        padAngle={0}  // Ensures no gap
      />
    </Svg>

    {/* Legend */}
    <View style={styles.legendContainer}>
  {productData.map((item) => (
    <View key={item.key} style={styles.legendItem}>
      <View
        style={[styles.legendColor, { backgroundColor: item.svg.fill }]}
      />
      <Text style={styles.legendLabel}>
        {item.label} ({item.value}%)
      </Text>
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
              <Text style={styles.usersCount}>{item.users}</Text>
              <ProgressBar progress={item.progress} color="blue" style={styles.progressBar} />
              <Text style={styles.countryName}>{item.country}</Text>
            </View>
            <Text style={[styles.salesValue, item.sales > 0 ? styles.positive : styles.negative]}>
              {item.sales}% {item.sales > 0 ? "↑" : "↓"}
            </Text>
          </View>
        )}
        estimatedItemSize={50}
      />
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", padding: 5 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  backButton: { fontSize: 20 },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  menuButton: { fontSize: 20 },
  searchBar: { backgroundColor: "#EEE", padding: 10, borderRadius: 10, marginBottom: 15 },
//   card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginRight: 10, width: 150 },
  cardTitle: { fontSize: 14, fontWeight: "bold" },
  cardValue: { fontSize: 20, fontWeight: "bold", color: "#2c3e50" },
  cardSubText: { fontSize: 10.5, color: "#888" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  usersValue: { fontSize: 22, fontWeight: "bold" },
  usersSubText: { fontSize: 14, color: "#888" },
  countryRow: { flexDirection: "row", alignItems: "center",  padding: 10, borderRadius: 10, marginBottom: 5 },
  flag: { fontSize: 32, marginRight: 10 },
  countryDetails: { flex: 1 },
  countryName: { fontSize: 16,color:'#888' },
  usersCount: { fontSize: 14, color: "#000", fontWeight:800 },
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
    width: "95%", // Two cards per row
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    height:100
  },
  icon: {
    width: 40,
    height: 40,
  },
  zig: {
    width: 25,
    height: 15,
    marginRight:7
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: "#888",
  },
  toggleText: {
    fontSize: 14,
    color: "#333",
  },
  activeText: {
    color: "#fff",
  },
  progressBar: { height: 6, borderRadius: 3, width: "70%", marginVertical: 5 },
  // countryName: { fontSize: 14, color: "gray" },
  // salesValue: { fontSize: 16, fontWeight: "bold" },
  positive: { color: "green" },
  negative: { color: "red" },
  searchBarInput:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 9,
    zIndex:99
    // marginBottom: 5,
  },
  searchBar: { marginVertical: 10, flexDirection:'row', alignItems: 'center', justifyContent: 'center', gap:5 },
  searchInput: { backgroundColor: '#f0f0f0', borderRadius: 5, padding: 10,paddingLeft:35, width:'87%' },
});

export default DashboardScreen;
