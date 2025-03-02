/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

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
  // Duplicating data for visual matching with the image
  {
    id: "3",
    name: "Babajide Daramola",
    message: "Order inquiry about...",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "4",
    name: "Babajide Daramola",
    message: "Order inquiry about...",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "5",
    name: "Osas Jejelaiye Jr",
    message: "Custom design request...",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "6",
    name: "Osas Jejelaiye Jr",
    message: "Custom design request...",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const ProducersMessages = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.brandLogo}
        />
          {/* <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.brandName}>Daviva Wears</Text> */}
        </View>
      
           <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
      </View>

      {/* Recent Messages Section */}
      <Text style={styles.sectionTitle}>Recent Messages</Text>
      <FlashList
        data={messageData}
        keyExtractor={(item) => item.id}
        estimatedItemSize={60}
        renderItem={({ item }) => (
         <Link href='/(drawer)/(message)/chart_sec/1' asChild>
          <Pressable>
          <View style={styles.messageCard}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.messageName}>{item.name}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
          </View>
          </Pressable>
         </Link>
        )}
      />

      {/* Return to Profile Button */}
      <TouchableOpacity style={styles.returnButton}>
        <Text style={styles.returnButtonText}>Return to Profile</Text>
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
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="user" size={20} color="black" />
                <Text style={styles.menuText}>Personal Information</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="mail" size={20} color="black" />
                <Text style={styles.menuText}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="bar-chart" size={20} color="black" />
                <Text style={styles.menuText}>Sales Dashboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="credit-card" size={20} color="black" />
                <Text style={styles.menuText}>Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="help-circle" size={20} color="black" />
                <Text style={styles.menuText}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Feather name="log-out" size={20} color="black" />
                <Text style={styles.menuText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop:-60
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: "#777",
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  messageText: {
    fontSize: 14,
    color: "#777",
  },
  returnButton: {
    marginTop: 20,
    backgroundColor: "#7c4d34",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  returnButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
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

});

export default ProducersMessages;
