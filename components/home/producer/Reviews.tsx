import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { FontAwesome } from '@expo/vector-icons';

const reviews = [
  {
    id: '1',
    name: 'Dare Sunday',
    date: 'Jan 10, 2025',
    review: 'Exceptional quality and attention to details. The product exceeded our expectations. Great communication throughout the communication process.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Dare Sunday',
    date: 'Jan 10, 2025',
    review: 'Exceptional quality and attention to details. The product exceeded our expectations. Great communication throughout the communication process.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '3',
    name: 'Dare Sunday',
    date: 'Jan 10, 2025',
    review: 'Exceptional quality and attention to details. The product exceeded our expectations. Great communication throughout the communication process.',
    rating: 3.5,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
];

const ProducerReview = () => {
  return (
    <View style={styles.container}>
    

      <View style={styles.producerInfo}>
        <Image
          source={{ uri: 'https://yourcdn.com/logo.png' }}
          style={styles.logo}
        />
        <View>
          <Text style={styles.producerName}>Da Viva Fashion LTD</Text>
          <Text style={styles.producerSubtitle}>Wears Manufacturer</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.8</Text>
          <FontAwesome name="star" size={18} color="gold" />
        </View>
      </View>

      <View style={styles.ratingOverview}>
        <Text style={styles.sectionTitle}>Rating Overview</Text>
        <View style={styles.ratingBarContainer}>
          <Text>Quality</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '80%' }]} />
          </View>
          <Text>4.0</Text>
        </View>
        <View style={styles.ratingBarContainer}>
          <Text>Reliability</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '90%' }]} />
          </View>
          <Text>4.5</Text>
        </View>
        <View style={styles.ratingBarContainer}>
          <Text>Communication</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '92%' }]} />
          </View>
          <Text>4.6</Text>
        </View>
      </View>

      <View style={styles.reviewsSection}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <FlashList
          data={reviews}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
          renderItem={({ item }) => (
            <View style={styles.reviewCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.reviewContent}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewerName}>{item.name}</Text>
                  <Text style={styles.reviewDate}>{item.date}</Text>
                </View>
                <Text style={styles.reviewText}>{item.review}</Text>
                <View style={styles.ratingContainer}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <FontAwesome key={index} name="star" size={16} color="gold" />
                  ))}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 15 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  headerTitle: { marginLeft: 10, fontSize: 18, fontWeight: 'bold' },
  producerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  logo: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  producerName: { fontSize: 16, fontWeight: 'bold' },
  producerSubtitle: { fontSize: 14, color: '#777' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' },
  rating: { fontSize: 16, fontWeight: 'bold', marginRight: 5 },
  ratingOverview: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  ratingBarContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  progressBarFill: { height: '100%', backgroundColor: '#7c4d34', borderRadius: 5 },
  reviewsSection: { flex: 1 },
  reviewCard: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#fff', padding: 10, borderRadius: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  reviewContent: { flex: 1 },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  reviewerName: { fontWeight: 'bold', fontSize: 14 },
  reviewDate: { fontSize: 12, color: '#777' },
  reviewText: { fontSize: 14, color: '#555', marginBottom: 5 },
});

export default ProducerReview;
