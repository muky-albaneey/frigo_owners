/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { Animated, Easing, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions, Pressable, Modal } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo, EvilIcons, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { COLORS } from './Color';
import { Link } from 'expo-router';
// import { Animated, Easing } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FilterScreen from './FilterScreen';



const banners = [
  { id: '1', title: 'Traditional wears', text: 'Explore our collection of cultural wears', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuVD--eh6E7O2OKu7WsJZLrimSo_xxj8pLA&s' },
  { id: '2', title: 'Modern wears', text: 'Explore our latest fashion styles', image: 'https://c8.alamy.com/comp/2A15MRK/exterior-of-clothes-shop-selling-traditional-indian-clothing-southall-west-london-england-uk-2A15MRK.jpg' },
  { id: '3', title: 'Native wears', text: 'Explore our latest fashion styles', image: 'https://c8.alamy.com/comp/2A15MRK/exterior-of-clothes-shop-selling-traditional-indian-clothing-southall-west-london-england-uk-2A15MRK.jpg' },
];

const products = Array(20).fill({
    name: "Ankara",
    price: "NGN 12,000",
    description: "(1 yard)",
    image: "https://c8.alamy.com/comp/2A15MRK/exterior-of-clothes-shop-selling-traditional-indian-clothing-southall-west-london-england-uk-2A15MRK.jpg", // Replace with actual product image URL
  });

  const tailorinfo = Array(20).fill({
    name: "Ankara",
    price: "NGN 12,000",
    description: "(1 yard)",
    image: "https://i.pinimg.com/236x/c9/39/44/c93944f272118adecfaed613484d4747.jpg", // Replace with actual product image URL
  });

const categories = ["All", "Ankara", "Lace", "Plain Material"];
const screenWidth = Dimensions.get('window').width;

//Loading...
const BothHomePageUser = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const bannerRef = useRef(null);
  const dotFillAnim = useRef(new Animated.Value(0)).current;
  const dotSingleAnim = useRef(new Animated.Value(0)).current;
  const [activeCategory, setActiveCategory] = useState("All"); // State to track active category
  const [showFilter, setShowFilter] = useState(false); 
  const [data, setData] = useState([]);
  const [tailor, setTailor] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

    React.useEffect(() => {
      // Fetch your data here
      fetchProducts();
      fetchTailor();
    }, []);
    
    const fetchProducts = async () => {
      try {
        // Simulating a data fetch
        const response1 = products; //  products // Replace with API call
        setData(response1);
    
        if (response1.length === 0) {
          setModalVisible(true);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchTailor = async () => {
        try {
          // Simulating a data fetch
          const response2 = tailorinfo; //  tailor // Replace with API call
          setTailor(response2);
      
          if (response2.length === 0) {
            setModalVisible(true);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  const handleCategoryPress = (category) => {
    setActiveCategory(category); // Update the active category
  };

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

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveBanner(index);
  };

  const renderBanner = ({ item }) => (
    <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>{item.title}</Text>
      <Text style={styles.bannerText}>{item.text}</Text>
      <TouchableOpacity style={styles.bannerButton}>
        <Text style={styles.bannerButtonText}>Shop Now</Text>
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.bannerImage} />
    </View>
  );



  return (
    <View style={styles.container}>
      <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={styles.header}>Welcome to Afrigora</Text>
        <View style={{ flexDirection:'row' }}>
          <MaterialIcons name="shopping-cart" size={14} color="black" />
          <Ionicons name="notifications-outline" size={14} color="black" />
        </View>
      </View>
      <Text style={styles.subHeader}>We're excited to have you on board, showcase</Text>
      <Text style={styles.subHeader}> your unique products and services</Text>

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
        <Pressable
          style={{ padding: 3, borderWidth: 2, borderRadius: 5, borderColor: COLORS.ColorBrown }}
          onPress={() => setShowFilter(true)} // Open FilterScreen modal
        >
          <AntDesign name="filter" size={20} color={COLORS.ColorBrown} />
        </Pressable>
      </View>

      <View>
       
         <View style={[styles.categories, { }]}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(category)}
            style={[
              styles.category,
              activeCategory === category && { backgroundColor: COLORS.ColorBrown }, // Dynamic background
            ]}
          >
            <Text
              style={[
                activeCategory === category
                  ? { color: "#fff", fontWeight: "bold" } // Active text color
                  : { color: "#666" }, // Inactive text color
                  {padding:5, borderRadius:100}
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>

      <View style={styles.bannerContainer}>
        <FlatList
          data={banners}
          renderItem={renderBanner}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onScroll={handleScroll}
          ref={bannerRef}
        />
        <View style={styles.dotContainer}>
          {banners.map((_, index) => (
            <View key={index} style={[styles.dot, activeBanner === index && styles.activeDot]} />
          ))}
        </View>
      </View>

      

     <View style={{ flex:1, height:450, position:'relative', top:-65 }}>
     <Text style={styles.sectionHeader}>Products</Text>
     {
        data.length !== 0 ?(
            <FlashList
            data={data}
            numColumns={2} 
            estimatedItemSize={150}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Link href="/(stores)/category/1" asChild style={{ flex: 1 }} >
                <Pressable>
                  <View
                    style={{
                      flex: 1,
                      margin: 8,
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: "#ccc",
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: "100%",
                        height: 60,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    />
                      <View style={{ padding: 8 }}>
                        <View style={{  width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                          <View style={{ padding:5, borderWidth:1, borderRadius:10, borderColor:COLORS.ColorHome}}>
                          {/* <Entypo name="dots-three-vertical" size={24} color={COLORS.ColorBrown} /> */}
                          <MaterialIcons name="category" size={24} color={COLORS.ColorBrown} />
                          </View>
                        </View>
                        
                        <View style={{  flexDirection:'row'}}>
                          <Text>{item?.price}</Text>
                          <Text>{item?.description}</Text>
                        </View>
                      </View>
                  </View>
                </Pressable>
              </Link>
            )}
          />
        ):(
            <View style={styles.containerNoDta}>
            <TouchableOpacity style={styles.circleButton}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.text}>No products added yet. Please upload your first product</Text>
          </View>
        )
     }
    
     </View>
     <View style={{ flex:1, height:300, position:'relative', top:-50 }}>
     <Text style={styles.sectionHeader}>Tailor</Text>
    { tailor.length !== 0 ?( 
      <FlashList
        data={tailor}
        numColumns={2}
        estimatedItemSize={150}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Link href="/(stores)/category/1" asChild style={{ flex: 1 }} >
            <Pressable>
              <View
                style={{
                  flex: 1,
                  margin: 8,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#ccc",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: 60,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
                  <View style={{ padding: 8 }}>
                    <View style={{  width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                      <View style={{ padding:5, borderWidth:1, borderRadius:10, borderColor:COLORS.ColorHome}}>
                      {/* <Entypo name="dots-three-vertical" size={24} color={COLORS.ColorBrown} /> */}
                      <MaterialIcons name="category" size={24} color={COLORS.ColorBrown} />
                      </View>
                    </View>
                    
                    <View style={{  flexDirection:'row'}}>
                      <Text>{item.price}</Text>
                      <Text>{item.description}</Text>
                    </View>
                  </View>
              </View>
            </Pressable>
          </Link>
        )}
      />):(
        <View style={styles.containerNoDta}>
        <TouchableOpacity style={styles.circleButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>No Design added yet. Please upload your first desiggn</Text>
      </View>
      )}
     </View>
       {/* FilterScreen Modal */}
       <Modal visible={showFilter} animationType="slide" onRequestClose={() => setShowFilter(false)}>
        <View style={{ flex: 1, backgroundColor: "#fff", marginTop:50 }}>
          {/* Close Button */}
          <TouchableOpacity
            style={{ padding: 10, alignSelf: "flex-end" }}
            onPress={() => setShowFilter(false)} // Close the modal
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          {/* Render FilterScreen */}
          <FilterScreen />
        </View>
      </Modal>


        {/* Modal for empty data */}
                  <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>No products available.</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setModalVisible(false);
                      // navigation.navigate("AddProductScreen"); // Navigate to Add Product screen
                    }}
                  >
                    <Text style={{  }}>X</Text>
      
                    <Text style={styles.buttonText}>Add Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff'},
  header: { fontSize: 20, fontWeight: 'bold' },
  subHeader: { color: '#666' },
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
  categories: { flexDirection: 'row', marginBottom: 10,padding:5, backgroundColor: COLORS.ColorLightHome },
  category: { marginRight: 10, color: '#666' },
  categoryActive: { marginRight: 10, fontWeight: 'bold' },
  bannerContainer: { height: 170},
  bannerContent: { width: screenWidth, padding: 7, backgroundColor:COLORS.ColorHome, borderRadius: 9, height:90},
  bannerTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 12},
  bannerText: { color: '#666', marginTop: 2.5},
  bannerButton: { backgroundColor: COLORS.ColorBrown, padding: 7, borderRadius: 4,  width:'20%', marginTop: 7 },
  bannerButtonText: { color: '#fff' },
  bannerImage: { width: '30%', height: 60, position: 'absolute', right: 10, top: 9 , borderRadius:10},
  dotContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: -2,  position:'relative', top:-50 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ccc', margin: 5 },
  activeDot: { backgroundColor: COLORS.ColorBrown},
  sectionHeader: { fontSize: 16, fontWeight: 'bold', marginVertical: 0, marginBottom:2 },
  card: { marginBottom: 10, padding: 10, borderRadius: 5, backgroundColor: COLORS.ColorLightHome, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  cardImage: { width: '100%', height: 100, borderRadius: 5 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color:COLORS.ColorStoreName },
    cardLocation: { color: COLORS.ColorGray },
  cardRating: { marginTop: 5 },
  prodCenter:{ flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around' },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  containerNoDta: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAE1DF', // Match the background color in your image
    padding: 20,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7E4D40', // Match the brown color of the button in your image
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: '#000',
  },
});

export default BothHomePageUser;
