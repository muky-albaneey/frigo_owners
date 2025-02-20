/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, MaterialIcons, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(
    'https://randomuser.me/api/portraits/women/44.jpg'
  );

  const pickImage = async () => {
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

  const menuItems = [
    { id: '1', title: 'Personal Information', icon: <AntDesign name="user" size={20} color="#c59d82" />, route: "/(profile)/(edit)" },
    { id: '2', title: 'Sales dashboard', icon: <MaterialIcons name="dashboard" size={20} color="black" /> , route: "/(profile)/dashboard"},
    { id: '3', title: 'Add Product', icon: <Feather name="plus-square" size={20} color="black" />, route: "/(product)/" },
    { id: '4', title: 'Wallet', icon: <FontAwesome5 name="wallet" size={20} color="black" />, route: "/(wallet)" },
    { id: '5', title: 'FAQs', icon: <Ionicons name="help-circle-outline" size={20} color="black" />, route: "/(profile)/support" },
    { id: '6', title: 'Notification', icon: <Ionicons name="notifications-outline" size={20} color="black" /> , route: "/(profile)/notification"},
    { id: '7', title: 'Switch Account', icon: <FontAwesome5 name="exchange-alt" size={20} color="black" />, route: "/(profile)/(edit)" },
    { id: '8', title: 'Order', icon: <FontAwesome5 name="order" size={20} color="black" />, route: "/(profile)/(order-history)" },
    { id: '9', title: 'Logout', icon: <AntDesign name="logout" size={20} color="black" /> },
  ];
  
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <View style={styles.curvedBackground}>
      <Image 
          source={{ uri: 'https://w0.peakpx.com/wallpaper/931/845/HD-wallpaper-flowers-purple-flowers-beautiful-nature.jpg' }} style={styles.headerImage} />
         
      </View>
    

      {/* Profile Section */}
      {/* <View style={styles.curvedBackground} /> */}

      {/* Profile Section */}
      <View style={styles.profileContainer}>
      <Svg width="100%" height="100%" viewBox="0 0 200 100">
        <Path
          d="M 0 100 Q 100 -50 200 100 L 200 100 L 0 100 Z"
          fill="#F4F4F4"
        />
      </Svg>
       {/* <View style={{ position:'relative', top:-100 }}> */}
       <TouchableOpacity onPress={pickImage} style={styles.profileImageWrapper}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </TouchableOpacity>

       <View style={{ position:'relative', top:-100}}>
       <Text style={styles.name}>
          Jane Doe <AntDesign name="checkcircle" size={14} color="black" />
        </Text>
        <Text style={styles.email}>janedoe@gmail.com. Lagos, Nigeria</Text>
       </View>
       </View>
        
       
      {/* </View> */}

      {/* Menu List */}
      {/* <View style={{width:'100%', height:300, backgroundColor:'red' }}> */}
      <View style={{ flex: 1 }}>
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
    alignItems: 'center',
    marginTop: -80,
    backgroundColor: '#F4F4F4',
    borderTopLeftRadius: '90%', 
    borderTopRightRadius: '90%', 
    height:200,
    justifyContent:'center',
    alignContent: 'center'
    // borderBottomRightRadius: '53%', 
    // borderBottomLeftRadius: '47%',    
  },
  profileImageWrapper: {
    position: 'relative',
    // borderWidth: 3,
    // borderColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    top:-140
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  curvedBackground: {
    width: width,
    height: 200, // Adjust for proper background height
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#1f0303',
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 4,
    elevation: 5,
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
});

export default ProfileScreen;
