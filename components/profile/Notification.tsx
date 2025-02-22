/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
} from 'react-native';


const COLORS = {
  primary: '#964B00',
  background: '#FFFFFF',
  textGray: '#666666',
  borderGray: '#CCCCCC',
  black: '#000000',
};

const NotificationSettings = () => {
  const [activeTab, setActiveTab] = useState('push');
  const [pushSettings, setPushSettings] = useState({
    orderConfirmation: true,
    shippingUpdates: false,
    orderDelivered: true,
    newSales: true,
    personalizedDiscounts: false,
    exclusiveOffers: true,
    appUpdates: true,
    termsUpdates: false,
    reviewsFeedback: true,
    loginActivity: true,
    passwordChanges: false,
  });
  const [emailSettings, setEmailSettings] = useState({ ...pushSettings });
  // const router = useRouter();
  const toggleSwitch = (key, type) => {
    if (type === 'push') {
      setPushSettings({ ...pushSettings, [key]: !pushSettings[key] });
    } else {
      setEmailSettings({ ...emailSettings, [key]: !emailSettings[key] });
    }
  };

  const settings = activeTab === 'push' ? pushSettings : emailSettings;

  return (
    <View style={styles.container}>
     

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'push' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('push')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'push' && styles.activeTabText,
            ]}
          >
            Push Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'email' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('email')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'email' && styles.activeTabText,
            ]}
          >
            Email Notifications
          </Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <ScrollView style={styles.scrollView}>
        {/* Order Updates */}
        <Text style={styles.sectionTitle}>Order Updates</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Order confirmation</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.orderConfirmation ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('orderConfirmation', activeTab)}
            value={settings.orderConfirmation}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Shipping and delivery updates</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.shippingUpdates ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('shippingUpdates', activeTab)}
            value={settings.shippingUpdates}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Order delivered</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.orderDelivered ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('orderDelivered', activeTab)}
            value={settings.orderDelivered}
          />
        </View>

        {/* Promotions */}
        <Text style={styles.sectionTitle}>Promotions</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>New sales and promotions</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.newSales ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('newSales', activeTab)}
            value={settings.newSales}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Personalized discounts</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.personalizedDiscounts ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('personalizedDiscounts', activeTab)}
            value={settings.personalizedDiscounts}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Exclusive offers for loyalty customers</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.exclusiveOffers ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('exclusiveOffers', activeTab)}
            value={settings.exclusiveOffers}
          />
        </View>

        {/* General */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>App updates</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.appUpdates ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('appUpdates', activeTab)}
            value={settings.appUpdates}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Updates to terms of service</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.termsUpdates ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('termsUpdates', activeTab)}
            value={settings.termsUpdates}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Reviews and feedback requests</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.reviewsFeedback ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('reviewsFeedback', activeTab)}
            value={settings.reviewsFeedback}
          />
        </View>

        {/* Account Activity */}
        <Text style={styles.sectionTitle}>Account Activity</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Login from a new device or location</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.loginActivity ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('loginActivity', activeTab)}
            value={settings.loginActivity}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Password change or security updates</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.primary }}
            thumbColor={settings.passwordChanges ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => toggleSwitch('passwordChanges', activeTab)}
            value={settings.passwordChanges}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#C5A2892B',
    // borderBottomWidth: 2,
    // borderBottomColor: COLORS.borderGray,
    alignItems: 'center',
    justifyContent: 'center',
    // width:'100%' ,
    height:40,
    margin:1

  },
  activeTabButton: {
    borderBottomColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 16,
  
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor:COLORS.primary,
    // padding:10,
   
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    fontSize: 14,
    color: COLORS.black,
  },
});

export default NotificationSettings;
