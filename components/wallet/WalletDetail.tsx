/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { useRouter } from "expo-router";

export default function TransactionSummary() {
  
  const [pdfUri, setPdfUri] = useState(null);
  const route = useRouter();

  const handleShare = async () => {
    
    try {
      const htmlContent = `
        <html>
          <body style='font-family: Arial, sans-serif; padding: 20px;'>
            <h2>Wears & Accessories</h2>
            <p>Transaction ID: <strong>982412456</strong></p>
            <h3>₦10,000.00</h3>
            <p>Successfully sent to:</p>
            <p><strong>Mukky tailor (08066745372)</strong></p>
            <p>Date: 1 Jan 2024 15.46 PM</p>
            <p>Message: Thanks for Patronage 👌</p>
          </body>
        </html>`;

      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      setPdfUri(uri);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        Alert.alert("Sharing not available", "Unable to share the file.");
      }
    } catch (error) {
      console.error("Error generating or sharing PDF:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => route.back()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Wears & Accessories</Text>
        <Text style={styles.transactionId}>Transaction ID 982412456</Text>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="calendar-today" size={24} color="#8B4513" />
          <Text style={styles.amount}>₦10,000.00</Text>
        </View>
        <Text style={styles.subheading}>Successfully sent to</Text>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="person" size={24} color="#8B4513" />
          <View style={styles.textGroup}>
            <Text style={styles.recipientName}>Mukky tailor</Text>
            <Text style={styles.recipientDetails}>08066745372</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="notes" size={24} color="#8B4513" />
          <Text style={styles.message}>Thanks for Patronage 👌</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Share or Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4513",
    textAlign: "center",
  },
  transactionId: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginVertical: 5,
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B4513",
    marginLeft: 10,
  },
  subheading: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
  },
  textGroup: {
    marginLeft: 10,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  recipientDetails: {
    fontSize: 14,
    color: "#888",
  },
  message: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  shareButton: {
    padding: 15,
    backgroundColor: "#8B4513",
    borderRadius: 10,
    alignItems: "center",
  },
  shareButtonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
