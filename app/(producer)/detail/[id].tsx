/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import useCartStore from "~/components/store/cart";

const ProductDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  // const [selectedColor, setSelectedColor] = useState(null);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { addToCart } = useCartStore();


  const proData = 
    {
      id:1,
      img : [
        "https://www.cartrollers.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-23-at-9.40.26-PM.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSk6mWGjCaOBvqGvdR1_2ocqe8LDXoN6WDw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8sLabi5M7hOw3ZVyYZLuHA5g1Gqf1R6BZQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMFk7sFZk6qhJOyxU0K6rpf6wCVekmMWwBQ&s",
      ],
      similar : [
        "https://www.cartrollers.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-23-at-9.40.26-PM.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSk6mWGjCaOBvqGvdR1_2ocqe8LDXoN6WDw&s",
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8sLabi5M7hOw3ZVyYZLuHA5g1Gqf1R6BZQ&s",
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMFk7sFZk6qhJOyxU0K6rpf6wCVekmMWwBQ&s",
      ],
      color:["yellow", "blue", "red", "green", "brown", "purple"],
      initial_cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8sLabi5M7hOw3ZVyYZLuHA5g1Gqf1R6BZQ&s",
      price: 12000000,
      deliveryTime:"8:00am - 10:00pm",
      description:"Stylish damask material available in different yards/colors. Best quality. 6k per yard.",
      address:"3b Idumota Lagos Island Nigeria",
      title:" Luxury Silky Damask Material Men's Native Wear Fabrics",
      inStock:false,
      ratings:4.5, 
    }

  ;

  const [selectedImage, setSelectedImage] = useState(proData.initial_cover);


  const handleAddToCart = () => {
    const product = {
      id: "123",
      name: "Luxury Silky Damask Material Men's Native Wear Fabrics",
      price: 12000000,
      quantity,
      color: selectedColor,
      image: selectedImage,
    };
  
    // console.log("Adding product:", product);
    
    addToCart(product);
    alert("Product added to cart!");
  };
  
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 15 }}>
    
    <Image
        source={{ uri: selectedImage }}
        style={{ width: "100%", height: 250, borderRadius: 10, marginTop: 15 }}
        resizeMode="cover"
      />
      {/* Image Thumbnails */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        {proData?.img?.map((img, index) => (
           <TouchableOpacity key={index} onPress={() => setSelectedImage(img)}>
           <Image
             source={{ uri: img }}
             style={{
               width: 70,
               height: 70,
               borderRadius: 10,
               marginRight: 10,
               borderWidth: selectedImage === img ? 2 : 1,
               borderColor: selectedImage === img ? "#8B5A2B" : "#ddd",
             }}
           />
         </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Stock Status color="green"*/}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <MaterialIcons name="check-circle" size={16} color= {proData?.inStock ? 'green' : 'red'}  />
        <Text style={[{ marginLeft: 5}, proData?.inStock ? {color: "green"} : {color: "red"}]}>{proData?.inStock ? 'In stock' : 'Out stock'}</Text>
      </View>

      {/* Product Title & Rating { , }*/}
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "#8B5A2B" }}>
       {proData?.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
        <Feather name="map-pin" size={14} color="gray" />
        <Text style={{ color: "gray", marginLeft: 5 }}>{proData?.address}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="star" size={16} color="gold" />
        <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: "bold" }}>{proData?.ratings}</Text>
      </View>

      {/* Delivery Info */}
      <Text style={{ color: "gray", marginVertical: 5 }}>Delivered worldwide</Text>
      <Text style={{ color: "gray", fontSize: 12 }}>{proData?.deliveryTime}</Text>

      {/* Price */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>NGN {proData?.price}</Text>
      <Text style={{ color: "gray" }}>Multi-color fabric</Text>

      {/* Description */}
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>Description</Text>
      <Text style={{ color: "gray" }}>
        {proData?.description}
      </Text>

      {/* Color Options */}
      <ScrollView style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>Color</Text>
      <Text style={{ color: "gray", marginBottom: 5 }}>Available colors for this fabric:</Text>
      
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {proData?.color.map((color, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedColor(color)}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                backgroundColor: color,
                marginRight: 10,
                borderWidth: selectedColor === color ? 3 : 1,
                borderColor: selectedColor === color ? "black" : "#ddd",
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

      {/* Quantity Selector */}
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Quantity</Text>
      {proData?.inStock && (<View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#8B5A2B",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="minus" size={20} color="white" />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 20, fontSize: 18, fontWeight: "bold" }}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#8B5A2B",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>)}

      {/* Buy Now Button */}
     {proData?.inStock && ( <TouchableOpacity
        onPress={handleAddToCart}
        style={{
          backgroundColor: "#8B5A2B",
          paddingVertical: 15,
          borderRadius: 8,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Buy Now / Add to Cart</Text>
      </TouchableOpacity>)}

      {/* Similar Products */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Similar Products</Text>
        <TouchableOpacity>
          <Text style={{ color: "#8B5A2B" }}>See more &gt;</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {proData.similar.map((img, index) => (
          <Image
            key={index}
            source={{ uri:img }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 10,
              marginRight: 10,
              borderWidth: 1,
              borderColor: "#ddd",
            }}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
