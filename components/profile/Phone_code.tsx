/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, KeyboardAvoidingView, Pressable, Alert } from 'react-native';
import { COLORS } from '../home/Color';

export default function PhoneCode() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    if (otp.join('').length === 4) {
      setError(false);
      setSuccess(true);
      
    } else {
      setError(true);
    }
  };

  const handleResendCode = () => {
    setOtp(['', '', '', '']);
    setError(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{ position:'absolute', top:0, left:0, margin:5 }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
      {/* OTP Verification Screen */}
      {!success && (
        <View style={styles.verificationContainer}>
          <Text style={styles.title}>OTP VERIFICATION</Text>
          <Text style={styles.subtitle}>Enter the OTP sent to eexample@gmail.com</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={[
                  styles.otpInput,
                  error && !digit ? styles.errorBorder : null,
                ]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>
          <Text style={styles.resendText}>Resend code in 00</Text>
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.resendLink}>Didn't Receive any OTP? Resend Code</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Success Screen */}
    
       <Modal visible={success} animationType="slide" transparent={false}>
  <View style={styles.successContainer}>
    <View style={styles.successIcon}>
      <Text style={styles.checkMark}>✓</Text>
    </View>
    <Text style={styles.successTitle}>Success!</Text>
    <Text style={styles.successMessage}>
      Congratulations! You have updated your phone number!
    </Text>
    <Pressable
      style={styles.linkContainer}
      onPress={() => {
        setSuccess(false); // Close modal
        router.replace('/(drawer)/(home)'); // Navigate
      }}
    >
      <Text style={styles.linkText}>Back to Profile</Text>
    </Pressable>
  </View>
</Modal>



    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ColorWhite,
  },
  verificationContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  errorBorder: {
    borderColor: 'red',
  },
  resendText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: COLORS.ColorBrown,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  verifyButtonText: {
    color: COLORS.ColorWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendLink: {
    marginTop: 20,
    fontSize: 14,
    color: COLORS.ColorBrown,
    textDecorationLine: 'underline',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ColorWhite,
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.ColorBrown,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkMark: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  linkContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.ColorBrown,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: COLORS.ColorBrown,
  },
  linkText: {
    color: COLORS.ColorWhite,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
