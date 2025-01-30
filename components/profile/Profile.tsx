/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, MaterialIcons, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

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
    { id: '1', title: 'Personal Information', icon: <AntDesign name="user" size={20} color="#c59d82" />, route: "/(drawer)/(profile)/(edit)" },
    { id: '2', title: 'Sales dashboard', icon: <MaterialIcons name="dashboard" size={20} color="black" /> , route: "/(drawer)/(profile)/dashboaard"},
    { id: '3', title: 'Add Product', icon: <Feather name="plus-square" size={20} color="black" />, route: "/(drawer)/(profile)/(edit)" },
    { id: '4', title: 'Wallet', icon: <FontAwesome5 name="wallet" size={20} color="black" />, route: "/(drawer)/(wallet)" },
    { id: '5', title: 'FAQs', icon: <Ionicons name="help-circle-outline" size={20} color="black" />, route: "/(drawer)/(profile)/support" },
    { id: '6', title: 'Notification', icon: <Ionicons name="notifications-outline" size={20} color="black" /> , route: "/(drawer)/(profile)/notification"},
    { id: '7', title: 'Switch Account', icon: <FontAwesome5 name="exchange-alt" size={20} color="black" />, route: "/(drawer)/(profile)/(edit)" },
    { id: '8', title: 'Logout', icon: <AntDesign name="logout" size={20} color="black" /> },
  ];

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={{ uri: 'https://source.unsplash.com/600x300/?flowers' }} style={styles.headerImage} />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.profileImageWrapper}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <View style={styles.cameraIcon}>
            <AntDesign name="camera" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>Jane Doe <AntDesign name="checkcircle" size={14} color="black" /></Text>
        <Text style={styles.email}>janedoe@gmail.com. Lagos, Nigeria</Text>
      </View>

      {/* Menu List */}
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profileImageWrapper: {
    position: 'relative',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
