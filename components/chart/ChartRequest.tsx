/* eslint-disable prettier/prettier */
// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Expo icon library
// import { Link } from 'expo-router';

// export default function ChartRequest() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.circle}>
//         <Ionicons name="checkmark" size={40} color="white" />
//       </View>
//       <Text style={styles.title}>Request accepted</Text>
//       <Text style={styles.subtitle}>You can now contact your tailor</Text>
//      <Link href='/(tailors_chart)/chart_sec/1' asChild>
//      <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Send a message</Text>
//       </TouchableOpacity>
//      </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 20,
//   },
//   circle: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#4CAF50', // Green color
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#000000',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#8B4513', // Brown color
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
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

const Messages = () => {
  return (
    <View style={styles.container}>
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
      <Link href={`/(drawer)/(home)`} asChild>
      <TouchableOpacity style={styles.returnButton}>
        <Text style={styles.returnButtonText}>Return Home</Text>
      </TouchableOpacity>
      </Link>
    
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
    marginTop:60
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
    // marginTop: -110,
    backgroundColor: "#7c4d34",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    position:'relative',
    top: -100,
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

export default Messages;
