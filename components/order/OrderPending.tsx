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
  lightGray: '#f0f0f0',
};

const OrderDetailsPending = () => {
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
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your image URL
          style={styles.productImage}
        />
        <View style={styles.orderDetails}>
          <Text style={styles.orderTitle}>House of wear limited</Text>
          <Text style={styles.orderSubtitle}>Ankara (5yards)</Text>
          <Text style={styles.orderMeta}>Color: Blue Size: Small</Text>
          <Text style={styles.orderPrice}>NGN 12,800.56</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Fashion Designer Section */}
      <View style={styles.designerSection}>
        <Text style={styles.sectionTitle}>Fashion Designer</Text>
        <View style={styles.designerDetails}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your designer's image URL
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
        <Text style={styles.deliveryLabel}>Ready to be delivered</Text>
        <Text style={styles.deliveryDate}>Sat, 7 November</Text>
        <Text style={styles.trackingLabel}>Tracking ID</Text>
        <Text style={styles.trackingId}>FRFb6790544</Text>
      </View>

      {/* Status Timeline */}
      <View style={styles.timeline}>
        <View style={styles.timelineStep}>
          <View style={styles.timelineDotActive} />
          <Text style={styles.timelineText}>Order have been received</Text>
        </View>
        <View style={styles.timelineStep}>
          <View style={styles.timelineDotActive} />
          <Text style={styles.timelineText}>Your order is been cut and measured</Text>
        </View>
        <View style={styles.timelineStep}>
          <View style={styles.timelineDotActive} />
          <Text style={styles.timelineText}>Order have been sewn and packed</Text>
        </View>
        <View style={styles.timelineStep}>
          <View style={styles.timelineDotInactive} />
          <Text style={styles.timelineText}>Ready for delivery</Text>
        </View>
        <View style={styles.timelineStep}>
          <View style={styles.timelineDotInactive} />
          <Text style={styles.timelineText}>Delivered</Text>
        </View>
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
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: 20,
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
    backgroundColor: COLORS.lightGray,
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
  deliveryLabel: {
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
    marginTop: 20,
  },
  timelineStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timelineDotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginRight: 10,
  },
  timelineDotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.borderGray,
    marginRight: 10,
  },
  timelineText: {
    fontSize: 14,
    color: COLORS.textGray,
  },
});

export default OrderDetailsPending;
