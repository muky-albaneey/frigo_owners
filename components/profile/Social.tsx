/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import {useRouter} from 'expo-router'

export default function Social() {
  const route = useRouter();
  return (
    <View style={styles.container}>
        <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center',width:'100%'}}>
            <TouchableOpacity onPress={() => route.replace('/(drawer)/(profile)/(edit)')} style={{  }}>
              <Ionicons name="arrow-back" size={24} color="black"  />
            </TouchableOpacity>
            
            <Text style={styles.header}>Edit   Social media</Text>
      
            </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>WhatsApp</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" placeholderTextColor="#999" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Facebook</Text>
        <TextInput style={styles.input} placeholder="Enter Email Address" placeholderTextColor="#999" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Twitter</Text>
        <TextInput style={styles.input} placeholder="Enter Address" placeholderTextColor="#999" />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Instagram</Text>
        <TextInput style={styles.input} placeholder="Enter Address" placeholderTextColor="#999" />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: "#754B26",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
