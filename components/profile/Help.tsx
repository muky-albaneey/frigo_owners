/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HelpSupport() {
  const [activeTab, setActiveTab] = useState('FAQ'); // 'FAQ' or 'Contact Us'
  const [expandedFAQ, setExpandedFAQ] = useState(null); // Tracks which FAQ item is expanded
  const router = useRouter();

  const faqData = [
    { question: 'Is there a return policy?', answer: 'Yes, we offer a 30-day return policy.' },
    { question: 'Can I track my order?', answer: 'You can track your order in the Orders section.' },
    { question: 'How do I become a seller?', answer: 'Sign up as a seller in the Seller Portal.' },
    { question: 'Do you ship internationally?', answer: 'Yes, we ship to select international destinations.' },
    { question: 'Can I cancel or modify my order?', answer: 'Orders can be canceled or modified within 24 hours.' },
    { question: 'Do I need an account to order?', answer: 'Yes, creating an account helps track your orders.' },
    { question: 'Is my personal information secure?', answer: 'We prioritize your data security with encryption.' },
  ];

  const handleFAQToggle = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const renderFAQ = () => (
    <ScrollView>
      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => handleFAQToggle(index)} style={styles.faqQuestionContainer}>
            <Text style={styles.faqQuestion}>{item.question}</Text>
            <Ionicons
              name={expandedFAQ === index ? 'remove-circle' : 'add-circle'}
              size={24}
              color="#964B00"
            />
          </TouchableOpacity>
          {expandedFAQ === index && <Text style={styles.faqAnswer}>{item.answer}</Text>}
        </View>
      ))}
    </ScrollView>
  );

  const renderContactUs = () => (
    <View style={styles.contactContainer}>
      <Text style={styles.sectionTitle}>Customer Support</Text>
      <View style={styles.contactItem}>
        <Ionicons name="call" size={20} color="#964B00" style={styles.contactIcon} />
        <Text style={styles.contactText}>+234 900 700 8000</Text>
      </View>
      <View style={styles.contactItem}>
        <Ionicons name="mail" size={20} color="#964B00" style={styles.contactIcon} />
        <Text style={styles.contactText}>afrigoldsupport@gmail.com</Text>
      </View>

      <Text style={styles.sectionTitle}>Our Social Media</Text>
      <View style={styles.socialMediaContainer}>
        {['WhatsApp', 'Instagram', 'Facebook', 'Twitter'].map((platform, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(`https://${platform.toLowerCase()}.com`)}
          >
            <Text style={styles.socialMediaText}>{platform}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/(drawer)/(profile)")}>
             <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'FAQ' ? styles.activeTab : null,
          ]}
          onPress={() => setActiveTab('FAQ')}
        >
          <Text style={activeTab === 'FAQ' ? styles.activeTabText : styles.tabText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Contact Us' ? styles.activeTab : null,
          ]}
          onPress={() => setActiveTab('Contact Us')}
        >
          <Text style={activeTab === 'Contact Us' ? styles.activeTabText : styles.tabText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'FAQ' ? renderFAQ() : renderContactUs()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#964B00',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#964B00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  faqItem: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#964B00',
    borderRadius: 5,
    padding: 10,
  },
  faqQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqAnswer: {
    marginTop: 10,
    color: '#666',
  },
  contactContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#964B00',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialMediaText: {
    fontSize: 16,
    color: '#964B00',
  },
});
