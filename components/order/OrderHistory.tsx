/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#964B00',
  background: '#fff',
  textGray: '#666',
  borderGray: '#ccc',
};

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Pending', 'Completed', 'Cancelled'];

  const orders = [
    {
      id: '1',
      title: 'House of wear limited',
      subtitle: 'Ankara (5yards)',
      color: 'Blue',
      size: 'Small',
      price: 'NGN 12,800.56',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: true,
      isPending: false,
      isComplete: false,
    },
    {
      id: '2',
      title: 'Elegant Designs Ltd',
      subtitle: 'Lace Material',
      color: 'Red',
      size: 'Medium',
      price: 'NGN 15,000.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: true,
      isComplete: false,
    },
    {
      id: '3',
      title: 'Modern Styles',
      subtitle: 'Cotton T-Shirts',
      color: 'Black',
      size: 'Large',
      price: 'NGN 5,600.75',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: false,
      isComplete: true,
    },
    {
      id: '4',
      title: 'Trendy Hub',
      subtitle: 'Denim Jacket',
      color: 'Blue',
      size: 'Medium',
      price: 'NGN 20,000.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: true,
      isPending: false,
      isComplete: false,
    },
    {
      id: '5',
      title: 'Fashion World',
      subtitle: 'Leather Bag',
      color: 'Brown',
      size: 'One Size',
      price: 'NGN 35,500.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: true,
      isComplete: false,
    },
    {
      id: '6',
      title: 'Casual Vibes',
      subtitle: 'Sneakers',
      color: 'White',
      size: '42',
      price: 'NGN 18,700.50',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: false,
      isComplete: true,
    },
    {
      id: '7',
      title: 'Classic Looks',
      subtitle: 'Suit Set',
      color: 'Grey',
      size: 'XL',
      price: 'NGN 50,000.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: true,
      isPending: false,
      isComplete: false,
    },
    {
      id: '8',
      title: 'Urban Wear',
      subtitle: 'Graphic Hoodie',
      color: 'Green',
      size: 'Large',
      price: 'NGN 22,800.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: true,
      isComplete: false,
    },
    {
      id: '9',
      title: 'Street Style',
      subtitle: 'Cargo Pants',
      color: 'Khaki',
      size: 'M',
      price: 'NGN 14,300.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: false,
      isComplete: true,
    },
    {
      id: '10',
      title: 'Premium Wear',
      subtitle: 'Formal Shirt',
      color: 'White',
      size: 'L',
      price: 'NGN 9,800.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: true,
      isComplete: false,
    },
     {
      id: '11',
      title: 'House of wear limited',
      subtitle: 'Ankara (5yards)',
      color: 'Blue',
      size: 'Small',
      price: 'NGN 12,800.56',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: true,
      isPending: false,
      isComplete: false,
    },
    {
      id: '12',
      title: 'House of wear limited',
      subtitle: 'Ankara (5yards)',
      color: 'Red',
      size: 'Medium',
      price: 'NGN 10,000.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: true,
      isComplete: false,
    },
    {
      id: '13',
      title: 'House of wear limited',
      subtitle: 'Ankara (5yards)',
      color: 'Green',
      size: 'Large',
      price: 'NGN 15,000.00',
      image: 'https://via.placeholder.com/100',
      status: {
        Pending: 'Waiting to be shipped',
        Completed: 'Leave Review',
        Cancelled: 'Re order',
      },
      isCancelled: false,
      isPending: false,
      isComplete: true,
    },
    
    ];
  
   

  const router = useRouter();

  const recommendedItems = [
    {
      id: 'r1',
      title: 'Ankara',
      price: 'NGN 12,000 (1 yard)',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 'r2',
      title: 'Ankara',
      price: 'NGN 12,000 (1 yard)',
      image: 'https://via.placeholder.com/100',
    },
    {
        id: 'r3',
        title: 'Ankara',
        price: 'NGN 12,000 (1 yard)',
        image: 'https://via.placeholder.com/100',
      },
      {
        id: 'r4',
        title: 'Ankara',
        price: 'NGN 12,000 (1 yard)',
        image: 'https://via.placeholder.com/100',
      },
  ];

  

  // Filter orders based on activeTab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === 'Pending') return order.isPending;
    if (activeTab === 'Completed') return order.isComplete;
    if (activeTab === 'Cancelled') return order.isCancelled;
    return true; // 'All' tab shows all orders
  });

  return (
    <View style={styles.container}>
        <View style={{ width:'100%' }}>

        </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/(drawer)/(home)")} style={{ position:'absolute', left:0 }}>
         <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && { backgroundColor: COLORS.primary },
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && { color: COLORS.background },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
  data={filteredOrders}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() => {
        if (item.isPending) {
          router.push('/(drawer)/(profile)/(order-history)/pending');
        } else if (item.isCancelled) {
          router.push('/(drawer)/(profile)/(order-history)/cancelled');
        } else if (item.isComplete) {
          router.push('/(drawer)/(profile)/(order-history)/complete');
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.orderImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderSubtitle}>{item.subtitle}</Text>
        <Text style={styles.orderMeta}>
          Color: {item.color} Size: {item.size}
        </Text>
        <Text style={styles.orderPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>
          {item.status[activeTab]}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )}
/>

      <View style={styles.recommendedContainer}>
        <Text style={styles.recommendedTitle}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more {'>'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recommendedList}
      >
        {recommendedItems.map((item) => (
          <View key={item.id} style={styles.recommendedItem}>
            <Image source={{ uri: item.image }} style={styles.recommendedImage} />
            <Text style={styles.recommendedItemTitle}>{item.title}</Text>
            <Text style={styles.recommendedItemPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    textAlign:'center',
    // backgroundColor:'red'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: COLORS.borderGray,
  },
  tabText: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  orderImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderSubtitle: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  orderMeta: {
    fontSize: 12,
    color: COLORS.textGray,
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    color: COLORS.background,
    fontSize: 12,
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 14,
    color: COLORS.primary,
  },
  recommendedList: {
    flexDirection: 'row',
  },
  recommendedItem: {
    width: 100,
    marginRight: 10,
    alignItems: 'center',
  },
  recommendedImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  recommendedItemTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  recommendedItemPrice: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: 'center',
  },
});

export default OrderHistory;
