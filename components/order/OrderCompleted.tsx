/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const COLORS = {
  primary: '#964B00',
  background: '#fff',
  textGray: '#666',
  borderGray: '#ccc',
  black: '#000',
  orange: '#FF9F43',
};

const OrderDetails = () => {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
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
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewButtonText}>Leave Review</Text>
        </TouchableOpacity>
      </View>

      {/* Leave a Review and Buy Again /(drawer)/(profile)/(order-history)/pending */}
      <Link href='/(drawer)/(profile)/(order-history)/review' asChild>
        <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Leave a Review</Text>
        </TouchableOpacity>
      </Link>
      
      <TouchableOpacity style={[styles.primaryButton, { backgroundColor: COLORS.orange }]}>
        <Text style={styles.primaryButtonText}>Buy Again</Text>
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
              <Ionicons name="chatbubble-ellipses-outline" size={20} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="call-outline" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryStatus}>Delivered</Text>
        <Text style={styles.deliveryDate}>Sat, 7 November</Text>
        <Text style={styles.trackingLabel}>Tracking ID</Text>
        <Text style={styles.trackingId}>FRFb6790544</Text>
      </View>

      {/* Status Timeline */}
      <View style={styles.timeline}>
        {[
          'Order have been received',
          'Your order is been cut and measured',
          'Order have been sewn and packed',
          'Ready for delivery',
          'Delivered',
        ].map((step, index) => (
          <View style={styles.timelineStep} key={index}>
            <View
              style={[
                styles.timelineDot,
                index === 4 && styles.timelineDotActive, // Highlight the last step
              ]}
            />
            <Text
              style={[
                styles.timelineText,
                index === 4 && styles.timelineTextActive, // Highlight the last step
              ]}
            >
              {step}
            </Text>
          </View>
        ))}
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  orderInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
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
  },
  orderMeta: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  reviewButton: {
    backgroundColor: COLORS.orange,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  reviewButtonText: {
    color: COLORS.background,
    fontSize: 14,
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
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
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
  },
  deliveryInfo: {
    marginBottom: 20,
  },
  deliveryStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  deliveryDate: {
    fontSize: 14,
    color: COLORS.textGray,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  timelineDot: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.borderGray,
    borderRadius: 5,
    marginRight: 10,
  },
  timelineDotActive: {
    backgroundColor: COLORS.primary,
  },
  timelineText: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  timelineTextActive: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default OrderDetails;
