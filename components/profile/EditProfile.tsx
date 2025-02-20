  /* eslint-disable prettier/prettier */
  import React, { useState } from "react";
  import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";
  import * as ImagePicker from "expo-image-picker";
  import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
  import { Link, useRouter } from "expo-router";

  const OwnerProfile = () => {
    const router = useRouter();

    const [profileImage, setProfileImage] = useState("https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg");

    const pickImage = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert("Permission Denied", "You need to enable permissions to access images.");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    };

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
           <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Drew Enterprise</Text>
        </View>

        {/* Profile Picture */}
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          </TouchableOpacity>
        </View>

        {/* Merchant Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            We specialize in bespoke tailoring for both men's and women's fashion, focusing on traditional African designs and custom Ankara creations.
          </Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Sections */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Working Hours */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Working Hours</Text>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <FontAwesome name="clock-o" size={20} color="black" />
                <Text style={styles.rowText}>10:00 am - 6:00 pm</Text>
              </View>
            <Link href='/(drawer)/(profile)/(edit)/time' asChild>
            <TouchableOpacity>
                <MaterialIcons name="edit" size={20} color="black" />
              </TouchableOpacity>
            </Link>
            </View>
          </View>

          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <MaterialIcons name="email" size={20} color="black" />
                <Text style={styles.rowText}>mariokando@gmail.com</Text>
              </View>
              <Link href='/(drawer)/(profile)/(edit)/address'>
              <MaterialIcons name="edit" size={20} color="black" />
              </Link>
            
            </View>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <FontAwesome name="phone" size={20} color="black" />
                <Text style={styles.rowText}>+1 (415) 505-0100</Text>
              </View>
              <Link href='/(drawer)/(profile)/(edit)/address'>
              <MaterialIcons name="edit" size={20} color="black" />
              </Link>
              
            </View>
          </View>

          {/* Social Media */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Social Media</Text>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <FontAwesome name="twitter" size={20} color="black" />
                <Text style={styles.rowText}>@mariokando</Text>
              </View>
              <Link href='/(drawer)/(profile)/(edit)/social'>
                <MaterialIcons name="edit" size={20} color="black" />
              </Link>
            </View>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <FontAwesome name="instagram" size={20} color="black" />
                <Text style={styles.rowText}>@mariokando</Text>
              </View>
              <Link href='/(drawer)/(profile)/(edit)/social'>
                <MaterialIcons name="edit" size={20} color="black" />
              </Link>
              
            </View>
          </View>
        </ScrollView>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      padding: 16,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    headerText: {
      fontSize: 18,
      fontWeight: "600",
      marginLeft: 12,
    },
    profileImageContainer: {
      alignItems: "center",
      marginBottom: 16,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    infoCard: {
      backgroundColor: "#FFFFFF",
      padding: 16,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      marginBottom: 16,
    },
    infoText: {
      color: "#555",
    },
    editButton: {
      backgroundColor: "#7c4d34",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 6,
      alignSelf: "flex-start",
      marginTop: 8,
    },
    editButtonText: {
      color: "white",
      fontSize: 14,
    },
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 8,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      padding: 12,
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      marginBottom: 8,
    },
    rowLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    rowText: {
      marginLeft: 8,
      color: "#555",
    },
    saveButton: {
      backgroundColor: "#7c4d34",
      paddingVertical: 12,
      borderRadius: 8,
      marginTop: 16,
      alignItems: "center",
    },
    saveButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },
  });

  export default OwnerProfile;
