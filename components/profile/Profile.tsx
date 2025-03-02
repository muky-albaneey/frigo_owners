/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, MaterialIcons, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(
    'https://randomuser.me/api/portraits/women/44.jpg'
  );
  const [headerImage, setHeaderImage] = useState('https://w0.peakpx.com/wallpaper/931/845/HD-wallpaper-flowers-purple-flowers-beautiful-nature.jpg');

  // Function to pick an image for profile
  const pickProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Function to pick an image for header
  const pickHeaderImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9], // Adjust aspect ratio for a header image
      quality: 1,
    });

    if (!result.canceled) {
      setHeaderImage(result.assets[0].uri);
    }
  };

  
  const menuItems = [
    { id: '1', title: 'Personal Information', icon: <AntDesign name="user" size={20} color="#c59d82" />, route: "/(profile)/(edit)" },
    { id: '2', title: 'Sales dashboard', icon: <MaterialIcons name="dashboard" size={20} color="#c59d82" /> , route: "/(profile)/dashboard"},
    { id: '3', title: 'Add Product', icon: <Feather name="plus-square" size={20} color="#c59d82" />, route: "/(product)/" },
    // { id: '4', title: 'Wallet', icon: <FontAwesome5 name="wallet" size={20} color="#c59d82" />, route: "/(wallet)" },
    { id: '5', title: 'FAQs', icon: <Ionicons name="help-circle-outline" size={20} color="#c59d82" />, route: "/(profile)/support" },
    { id: '6', title: 'Notification', icon: <Ionicons name="notifications-outline" size={20} color="#c59d82" /> , route: "/(profile)/notification"},
    { id: '7', title: 'Switch Account', icon: <FontAwesome5 name="exchange-alt" size={20} color="#c59d82" />, route: "/(profile)/(edit)" },
    { id: '8', title: 'Order', icon: <MaterialIcons name="sell" size={24} color="#c59d82" />, route: "/(profile)/(order-history)" },
    { id: '9', title: 'Logout', icon: <AntDesign name="logout" size={20} color="#c59d82" /> },
  ];
  
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <View style={{ flex:1,height:300 }}>
      {/* <Image 
          source={{ uri: 'https://w0.peakpx.com/wallpaper/931/845/HD-wallpaper-flowers-purple-flowers-beautiful-nature.jpg' }} 
          style={styles.headerImage} /> */}
         
         <ImageBackground source={{ uri: headerImage }} style={styles.headerImage}>
          {/* Camera button for header image */}
        <TouchableOpacity onPress={pickHeaderImage} style={styles.headerCameraIcon}>
          <AntDesign name="camera" size={20} color="white" />
        </TouchableOpacity>
        </ImageBackground>

      {/* Profile Section */}
  
      <View style={styles.profileContainer}>
        <ImageBackground 
        source={require("../../assets/profile_bg.png")} // Local background image from assets folder
        style={styles.background}
       >
        <View style={{width:'100%', position:'relative', top:-65, justifyContent:'center', alignItems:'center' }}>
          <TouchableOpacity onPress={pickProfileImage} style={styles.profileImageWrapper}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
         </TouchableOpacity>
          {/* Camera button for profile image */}
          <TouchableOpacity onPress={pickProfileImage} style={styles.cameraIcon}>
              <AntDesign name="camera" size={18} color="white" />
          </TouchableOpacity>
          <Text style={styles.name}>
            Jane Doe <AntDesign name="checkcircle" size={14} color="black" />
          </Text>
        <Text style={styles.email}>janedoe@gmail.com. Lagos, Nigeria</Text>
      </View>
    </ImageBackground>
    </View> 
     
      </View>
      {/* Menu List */}
      <View style={{ flex: 1, marginTop:-220 }}>
  <FlatList
    data={menuItems}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      item.route ? (
        <Link href={item.route} style={{ textDecorationLine: "none" }} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>{item.icon}</View>
            <Text style={styles.menuText}>{item.title}</Text>
            <AntDesign name="right" size={16} color="gray" />
          </TouchableOpacity>
        </Link>
      ) : (
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout pressed")}>
          <View style={styles.menuIcon}>{item.icon}</View>
          <Text style={styles.menuText}>{item.title}</Text>
          <AntDesign name="right" size={16} color="gray" />
        </TouchableOpacity>
      )
    )}
  />
</View>

      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  headerImage: {
    width: '100%',
    height: 200,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  profileContainer: {
   flex: 1,
    height:90,
    // alignItems: 'center',
    // // marginTop: -80,
    // backgroundColor: '#F4F4F4',
    // borderTopLeftRadius: '90%', 
    // borderTopRightRadius: '90%', 
    // // height:200,
    // justifyContent:'center',
   position:'relative',
   top: -80,
    // // borderBottomRightRadius: '53%', 
    // // borderBottomLeftRadius: '47%',    
  },
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the whole view
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  profileImageWrapper: {
    // position: 'relative',
    // borderWidth: 3,
    // borderColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    // top:-140
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 150,
  },
  curvedBackground: {
    width: '100%',
    height: 300, // Adjust for proper background height
    // overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#1f0303',
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50, 
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 70,
    right: 225,
    backgroundColor: '#c59d82',
    borderRadius: 15,
    padding: 6,
    elevation: 3, // Adds a shadow effect on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerCameraIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#c59d82',
    borderRadius: 15,
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    flexDirection: 'row',
  },
  email: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 4,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  menuIcon: {
    width: 30,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },

  // profileContainer: {
  //   alignItems: "center",
  //   backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Adds a transparent white background for readability
  //   padding: 20,
  //   borderRadius: 10,
  // },
  // profileImageWrapper: {
  //   marginBottom: 10,
  // },
  // profileImage: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  // },
  // name: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  // },
  // email: {
  //   fontSize: 14,
  //   color: "gray",
  // },
});

export default ProfileScreen;
