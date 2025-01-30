/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../home/Color';
import { Link } from 'expo-router';

export default function SuccessProdDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle-outline" size={80} color={COLORS.success} />
      </View>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.subtitle}>You have successfully added Bold Ankara Floral</Text>
      <Text style={styles.subtitle}> Print to your product list!</Text>

     <Link href='/(drawer)/(product)/add_prod' asChild>
        <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
 
     </Link>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7E4D40',
    marginBottom: 10,
  },
  primaryButton: {
    width:300,
    backgroundColor: '#7E4D40',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',

  },
  secondaryButton: {
    borderColor: '#7E4D40',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  secondaryButtonText: {
    color: '#7E4D40',
    fontSize: 16,
  },
});
