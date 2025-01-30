/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

const PickUpScreen = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("Delivered to your place");
  const [selectedTailor, setSelectedTailor] = useState("No");
  const [selectedDispatch, setSelectedDispatch] = useState("Personal");

  const MemoizedButton = React.memo(() => (
    <Link href="/(stores)/delivery_address" asChild>
      <Pressable style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </Link>
  ));

  const renderOption = (label, selectedValue, setValue) => (
    <TouchableOpacity
      style={styles.optionRow}
      onPress={() => setValue(label)}
    >
      <View
        style={[
          styles.radioCircle,
          selectedValue === label && styles.radioCircleSelected,
        ]}
      >
        {selectedValue === label && <View style={styles.radioInnerCircle} />}
      </View>
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, {justifyContent:'center'}]}>
        {/* <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Delivery</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Delivery Section */}
        <Text style={styles.sectionTitle}>Delivery</Text>
        <Text style={styles.sectionSubtitle}>
          Select any of your choice below for delivery
        </Text>
        {renderOption("Pickup", selectedDelivery, setSelectedDelivery)}
        {renderOption("Delivered to your place", selectedDelivery, setSelectedDelivery)}

        {/* Tailor Section */}
        <Text style={styles.sectionTitle}>Tailor</Text>
        <Text style={styles.sectionSubtitle}>
          Do you need a fashion designer for your cloth?
        </Text>
        {renderOption("Yes", selectedTailor, setSelectedTailor)}
        {renderOption("No", selectedTailor, setSelectedTailor)}
        {renderOption("Next time", selectedTailor, setSelectedTailor)}

        {/* Dispatch Section */}
        <Text style={styles.sectionTitle}>Dispatch</Text>
        {renderOption("Personal", selectedDispatch, setSelectedDispatch)}
        {renderOption("Gift Someone", selectedDispatch, setSelectedDispatch)}

       
      </View>

      {/* Footer */}
      <MemoizedButton />
    
    </View>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position:'relative'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  backButton: {
    fontSize: 18,
    color: "#000000",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 20,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#A0522D",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioCircleSelected: {
    borderColor: "#A0522D",
    backgroundColor: "#A0522D",
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#A0522D",
  },
  optionLabel: {
    fontSize: 14,
    color: "#000000",
  },
  footer: {
    position: "absolute",
    bottom: 10, // Adjusted bottom spacing
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Stabilizes background
    paddingVertical: 10, // Adds consistent padding
    justifyContent: "center", // Centers content vertically
    left:14
  },
  continueButton: {
    backgroundColor: "#A0522D",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "90%", // Use percentage for consistent width
    alignSelf: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
