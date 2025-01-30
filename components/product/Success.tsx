import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../home/Color';
import { Link } from 'expo-router';

export default function SuccessProd() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle-outline" size={80} color={COLORS.success} />
      </View>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.subtitle}>Your AFRIGO store is ready!</Text>

     <Link href='/(drawer)/(product)/add_prod' asChild>
        <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Add new Product</Text>
        </TouchableOpacity>
 
     </Link>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Back to Product list</Text>
      </TouchableOpacity>
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
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#7E4D40',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 15,
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
