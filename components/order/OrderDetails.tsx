/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { FlashList } from '@shopify/flash-list';

const OrderDetailsScreen = () => {
  const router = useRouter();

  // State for Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [orderStatus, setOrderStatus] = useState('');

  const handleOrderAction = (status:any) => {
    setOrderStatus(status);
    setModalVisible(true);
  };

  // Sample data array
  const data = [
    {
      id: '1',
      customerName: 'Jagbaban, Babaljebu',
      customerAddress: 'Alausa, Ikeja Lagos',
      contact: '08165812056',
      orderNumber: '#AKK101234',
      orderDate: '25th Jan, 2025',
      deliveryDate: '7th Feb, 2025',
      paymentMethod: 'MasterCard',
      orderStatus: 'Received'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 12 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Pending Orders</Text>
      </View>

      {/* Product Image */}
      <View style={{ paddingHorizontal:20 }}>
      <Text style={styles.sectionTitle}>Product</Text>
      <Image 
        source={{ uri: 'https://www.allthingsankara.com/wp-content/uploads/2014/09/balogun_market_ankara_fabric.jpg' }} 
        style={styles.productImage} 
      />

      {/* Style Images */}
      <Text style={styles.sectionTitle}>Style</Text>
      <View style={styles.styleContainer}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUjxSyIYwDT2jnTP8GGnuaDFAgZztpcVWwSZ-vggc21i0sKt-dG0MJjeNGqoDAqNPKLw&usqp=CAU' }} 
          style={styles.styleImage} 
        />
        <Image 
          source={{ uri: 'https://www.allthingsankara.com/wp-content/uploads/2014/09/balogun_market_ankara_fabric.jpg' }} 
          style={styles.styleImage} 
        />
      </View>
      </View>

      {/* Order Details */}
     <View style={{ width:'100%', height:300}}>
     <FlashList
        data={data}
        // numColumns={2}
        estimatedItemSize={150}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.detailsContainer}>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Customer Name:</Text> 
              <Text>{item.customerName}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Customer Address:</Text> 
              <Text>{item.customerAddress}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Contact:</Text> 
              <Text>{item.contact}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Order Number:</Text> 
              <Text>{item.orderNumber}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Order Date:</Text> 
              <Text>{item.orderDate}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Delivery Date:</Text> 
              <Text>{item.deliveryDate}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Payment Method:</Text> 
              <Text>{item.paymentMethod}</Text>
            </View> 
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Order Status:</Text> 
              <Text>{item.orderStatus}</Text>
            </View>
          </View>
        )}
      />
     </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={() => handleOrderAction('accepted')}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => handleOrderAction('cancelled')}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Order Status</Text>
            <View style={[
              styles.statusIcon,
              { backgroundColor: orderStatus === 'accepted' ? '#D4EDDA' : '#F8D7DA' }
            ]}>
              <Ionicons
                name={orderStatus === 'accepted' ? 'checkmark' : 'close'}
                size={40}
                color={orderStatus === 'accepted' ? 'green' : 'red'}
              />
            </View>
            <Text style={[
              styles.orderStatusText,
              { color: '#8B5E3B' }
            ]}>
              {orderStatus === 'accepted' ? 'order accepted' : 'order cancelled'}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  styleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  styleImage: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  buttonContainer: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginVertical: 60,
    borderTopWidth:0.5,
    borderTopColor:'#8B5E3B',
    borderRadius:20,
    paddingVertical:10,
  },
  acceptButton: {
    backgroundColor: '#8B5E3B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  cancelButton: {
    borderColor: '#8B5E3B',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#8B5E3B',
    fontWeight: 'bold',
  },
  detailsContainer: {
   width:'90%',
    // backgroundColor: '#F7F7F7',
    padding: 15,
    borderRadius: 10,
    gap:15,
    paddingHorizontal:50,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: '#8B5E3B',
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statusIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderStatusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderDetailsScreen;
