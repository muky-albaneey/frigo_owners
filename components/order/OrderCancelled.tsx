import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const COLORS = {
  primary: '#964B00',
  background: '#fff',
  textGray: '#666',
  borderGray: '#ccc',
  black: '#000',
};

const OrderDetails = () => {
    const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={{ position:'absolute', left:0 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
      </View>

      {/* Order Information */}
      <View style={styles.orderInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.productImage}
        />
        <View style={styles.orderDetails}>
          <Text style={styles.orderTitle}>House of wear limited</Text>
          <Text style={styles.orderSubtitle}>Ankara (5yards)</Text>
          <Text style={styles.orderMeta}>Color: Blue Size: Small</Text>
          <Text style={styles.orderPrice}>NGN 12,800.56</Text>
        </View>
      </View>

      {/* Action Button */}
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Re order</Text>
      </TouchableOpacity>

      {/* Fashion Designer Section */}
      <View style={styles.designerSection}>
        <Text style={styles.sectionTitle}>Fashion Designer</Text>
        <View style={styles.designerDetails}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.designerImage}
          />
          <View>
            <Text style={styles.designerName}>Justitia Fedu</Text>
            <Text style={styles.designerCompany}>Glamour tales</Text>
            <Text style={styles.designerContact}>+2349088000000</Text>
          </View>
          <View style={styles.contactIcons}>
            <TouchableOpacity style={styles.icon}>
              <Text style={styles.iconText}>💬</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Text style={styles.iconText}>📞</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryText}>Ready to be delivered</Text>
        <Text style={styles.deliveryDate}>Sat, 7 November</Text>
        <Text style={styles.trackingLabel}>Tracking ID</Text>
        <Text style={styles.trackingId}>FRFb6790544</Text>
      </View>

      {/* Status Timeline */}
      <View style={styles.timeline}>
        <Text style={styles.timelineStep}>Order have been received</Text>
        <Text style={styles.timelineStep}>Your order is been cut and measured</Text>
        <Text style={styles.timelineStep}>Order have been sewn and packed</Text>
        <Text style={styles.timelineStep}>Ready for delivery</Text>
        <Text style={styles.timelineStep}>Delivered</Text>
      </View>
    </ScrollView>
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
    justifyContent:'center'
  },
  backButton: {
    fontSize: 18,
    color: COLORS.primary,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderSubtitle: {
    fontSize: 14,
    color: COLORS.textGray,
    marginBottom: 5,
  },
  orderMeta: {
    fontSize: 14,
    color: COLORS.textGray,
    marginBottom: 5,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  designerSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  designerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  designerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  designerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  designerCompany: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  designerContact: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  contactIcons: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: COLORS.borderGray,
    borderRadius: 25,
    padding: 10,
    marginLeft: 5,
  },
  iconText: {
    fontSize: 16,
    color: COLORS.black,
  },
  deliveryInfo: {
    marginBottom: 20,
  },
  deliveryText: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  deliveryDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trackingLabel: {
    fontSize: 14,
    color: COLORS.textGray,
    marginTop: 10,
  },
  trackingId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeline: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.borderGray,
    paddingLeft: 10,
  },
  timelineStep: {
    fontSize: 14,
    marginBottom: 15,
    color: COLORS.textGray,
  },
});

export default OrderDetails;
