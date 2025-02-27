/* eslint-disable prettier/prettier */
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import { COLORS } from "~/components/home/Color";

// Sample images (Replace with your actual image URLs)
const images = [
  // { id: 1, src: require('./assets/image1.png') }, // First image (Green fabric)
  // { id: 2, src: require('./assets/image2.png') }, // Purple fabric
  // { id: 3, src: require('./assets/image3.png') }, // Blue fabric
  // { id: 4, src: require('./assets/image4.png') }, // Multi-color fabric
  { id: 1, img: 'https://jaybecksstore.com/wp-content/uploads/2023/02/AdobeStock_63063995-1.jpeg'}, // First image (Green fabric)
  { id: 2, img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2Biid6nxDYvjThN9VBW5XaiSe9hnZRw2xw&s'}, // Purple fabric
  { id: 3, img: 'https://cdn.shopify.com/s/files/1/1857/1947/files/pagne_grande.jpg' }, // Blue fabric
  { id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2Biid6nxDYvjThN9VBW5XaiSe9hnZRw2xw&s' }, // Multi-color fabric
];

const categories = ["All", "Ankara", "Lace", "Plain Material", "Adire", "Caps"];
const products = [
  { id: "1", name: "Ankara", price: "NGN 12,000 (1 yard)", image: require("../../../assets/ankara_prod.png") },
  { id: "2", name: "Ankara", price: "NGN 12,000 (1 yard)", image: require("../../../assets/ankara_prod.png") },
];
const { width } = Dimensions.get('window'); // Get device width

export default function ProducerWelcomePage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
   

      {/* Welcome Section */}
      <Text style={styles.title}>Welcome to Da viva fashion</Text>
      <Image source={require("../../../assets/viva_icon.png")} style={styles.banner} />
      <Text style={styles.description}>
        We take immense pride in preserving tradition while embracing modern elegance. Our native wear collection is a celebration of rich cultural heritage, craftsmanship, and style. Every piece is meticulously designed and crafted by our skilled artisans, ensuring that you receive only the finest quality garments.
      </Text>

      {/* Categories */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All &gt;</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
  {categories.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.categoryItem,
        selectedCategory === index && styles.activeCategory, // Apply active style based on selection
      ]}
      onPress={() => setSelectedCategory(index)} // Update state on press
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === index && styles.activeText, // Apply active text style
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>

      {/* Products */}
      <FlashList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          // <View style={styles.productCard}>
          //   <Image source={item.image} style={styles.productImage} />
          //   <Text style={styles.productName}>{item.name}</Text>
          //   <Text style={styles.productPrice}>{item.price}</Text>
          // </View>
          <Link href='/(producer)/detail/1' asChild>
              <TouchableOpacity>
            <View style={{ padding: 8, backgroundColor:COLORS.ColorLightBrown, margin:1, borderRadius:12 }}>
            <Image source={item.image} style={styles.productImage} />
          <View style={{  width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <View style={{ padding:5, borderWidth:1, borderRadius:30, borderColor:COLORS.ColorHome}}>
            <FontAwesome name="shopping-bag" size={15} color={COLORS.ColorHome} />          
            </View>
          </View>
          
          <View style={{  flexDirection:'row'}}>
            <Text>{item?.price}</Text>
            {/* <Text>{item?.description}</Text> */}
          </View>
        </View>
          </TouchableOpacity>
          </Link>
        )}
      />

      <View>
     
{/* Image List */}
    <FlashList
        // ref={flatListRef}
        data={images}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        onScroll={handleScroll}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleSelect(index)}>
            <Image
              source={{ uri: item.img }}
              style={[
                styles.image,
                activeIndex === index && styles.selectedImage, // Add border when selected
              ]}
            />
          </TouchableOpacity>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
      <AnimatedDotsCarousel
          length={images?.length ?? 0} // Ensure images is always an array
          currentIndex={activeIndex}
          setIndex={setActiveIndex} // Ensure this is passed
          scrollableDotsConfig={{
            setIndex: setActiveIndex, // Ensure this is included
            onNewIndex: (newIndex) => {
              if (flatListRef?.current?.scrollToIndex) {
                flatListRef.current.scrollToIndex({
                  index: newIndex,
                  animated: true,
                });
              }
            },
          containerBackgroundColor: 'transparent',
          container: {
            alignItems: 'center',
            borderRadius: 10,
            height: 20,
            justifyContent: 'center',
            paddingHorizontal: 5,
    },
  }}
  maxIndicators={3}
  interpolateOpacityAndColor
  activeIndicatorConfig={{
    color: '#8B5A2B',
    margin: 3,
    opacity: 1,
    size: 18,
    // width: 20,
    // borderRadius: 4,
  }}
  inactiveIndicatorConfig={{
    color: '#D3D3D3',
    margin: 3,
    opacity: 0.5,
    size: 6,
    // width: 6,
    // borderRadius: 3,
  }}
  decreasingDots={[ // Ensure this is included to avoid "reduce of undefined" error
    {
      config: { color: '#D3D3D3', margin: 2, opacity: 0.4, size: 5 },
      quantity: 1,
    },
    {
      config: { color: '#D3D3D3', margin: 2, opacity: 0.3, size: 3 },
      quantity: 1,
    },
  ]}
/>


      </View>
      {/* Pagination Dots */}
     </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create(
  {
    container: { flex: 1, backgroundColor: "#fff", padding: 16 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    iconButton: { width: 40, height: 40, backgroundColor: "#E8D0B3", borderRadius: 10, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
    banner: { width: "100%", height: 200, resizeMode: "cover", marginBottom: 10 },
    description: { fontSize: 16, color: "#666", textAlign: "justify", marginBottom: 16, fontWeight:600, lineHeight:25 },
    categoryHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
    categoryTitle: { fontSize: 16, fontWeight: "bold" },
    viewAll: { fontSize: 14, color: "#f2b705", fontWeight: "bold" },
    categoryContainer: { flexDirection: "row", paddingVertical: 0, backgroundColor:COLORS.ColorHome },
    categoryItem: { paddingVertical: 11, paddingHorizontal: 12, marginRight: 8 },
    categoryText: { fontSize: 14, color: "#333" },
    activeCategory: { backgroundColor: "#8B5A2B" },
    activeText: { color: "#fff" },
    productCard: { flex: 1, margin: 8, backgroundColor: "#E8D0B3", borderRadius: 10, padding: 10, alignItems: "center", elevation: 3 },
    productImage: { width: "95%", height: 110, resizeMode: "cover", borderRadius: 10, marginBottom: 8 },
    productName: { fontSize: 14, fontWeight: "bold" },
    productPrice: { fontSize: 12, color: "#555" },
    image: {
      width: 90,
      height: 50,
      borderRadius: 15,
      marginHorizontal: 5,
    },
    selectedImage: {
      borderWidth: 2,
      borderColor: '#4A90E2', // Light blue border for selected image
    },
    paginationContainer: {
      margin:'auto',
      flexDirection: 'row',
      marginTop: 20,
    },
    dots: {
      marginHorizontal: 3,
    },
  }
);
