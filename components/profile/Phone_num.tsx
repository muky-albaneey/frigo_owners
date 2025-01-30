/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { COLORS } from "../home/Color";

export default function PhoneNum() {
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Albania",
    code: "+355",
    flag: "https://flagcdn.com/w320/al.png", // Replace with a proper URL
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const countries = [
    {
      name: "Nigeria",
      code: "+234",
      flag: "https://flagcdn.com/w320/ng.png",
    },
    {
      name: "United States",
      code: "+1",
      flag: "https://flagcdn.com/w320/us.png",
    },
    {
      name: "United Kingdom",
      code: "+44",
      flag: "https://flagcdn.com/w320/gb.png",
    },
    {
      name: "India",
      code: "+91",
      flag: "https://flagcdn.com/w320/in.png",
    },
    {
      name: "Albania",
      code: "+355",
      flag: "https://flagcdn.com/w320/al.png",
    },
  ];

  const toggleCountryModal = () => {
    setCountryModalVisible(!countryModalVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setCountryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
             <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Change Number</Text>
      </View>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        We’ll send a 4-digit verification code to this number.
      </Text>

      {/* Phone Input */}
      <View style={styles.phoneInputContainer}>
        <TouchableOpacity
          style={styles.countryCodeContainer}
          onPress={toggleCountryModal}
        >
          <Image
            source={{ uri: selectedCountry.flag }}
            style={styles.countryFlag}
          />
          <Text style={styles.countryCodeText}>{selectedCountry.code}</Text>
          <Ionicons name="chevron-down" size={16} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="800 000 0000"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      {/* Submit Button */}
      {/* <Link href="" asChild> */}
      <TouchableOpacity style={styles.submitButton} onPress={()=>{router.replace("/(drawer)/(profile)/(edit)/phone_code")}}>
        <Text style={styles.submitButtonText}>Send Code</Text>
      </TouchableOpacity>
      {/* </Link> */}
      

      {/* Country Code Modal */}
      <Modal
        visible={countryModalVisible}
        animationType="slide"
        onRequestClose={toggleCountryModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a country</Text>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryOption}
                onPress={() => selectCountry(item)}
              >
                <Image source={{ uri: item.flag }} style={styles.modalFlag} />
                <Text style={styles.countryName}>
                  {item.name} ({item.code})
                </Text>
              </TouchableOpacity>
            )}
          />
            <TouchableOpacity style={styles.modalCloseButton} onPress={toggleCountryModal} >
                <Text style={styles.modalCloseButtonText}>Continue</Text>
            </TouchableOpacity>
           {/* </Link> */}
          
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  COLORS.ColorWhite,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  instructionText: {
    marginTop: 20,
    fontSize: 14,
    color: "gray",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#f8f8f8",
  },
  countryFlag: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCodeText: {
    fontSize: 16,
    marginRight: 5,
  },
  phoneNumberInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: COLORS.ColorBrown,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: COLORS.ColorWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countryOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalFlag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryName: {
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: COLORS.ColorBrown,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
