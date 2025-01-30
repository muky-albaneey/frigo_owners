import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { Link, useRouter } from 'expo-router';

export default function DraftList() {
  const [categories, setCategories] = useState([
    { id: '1', name: 'Bold Ankara Floral Print', image: null, timestamp: 'Created just now' },
    { id: '2', name: 'House of wear limited Ankara', image: null, timestamp: 'Edited 4 hours ago' },
    { id: '3', name: 'House of wear limited Ankara', image: null, timestamp: 'Edited on 26 Oct 2024' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRouter();

  const handleSaveDraft = () => {
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image || 'https://via.placeholder.com/150' }} style={styles.image} />
      <View style={styles.itemContent}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => route.back()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </Pressable>
        <Text style={styles.headerTitle}>Drafts</Text>
        <Ionicons name="close" size={24} color="black" style={styles.closeIcon} />
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="alert-circle" size={20} color="#A0A0A0" />
        <Text style={styles.infoText}>
          If you uninstall the Afrigo app, all of your drafts will be lost
        </Text>
      </View>
      <View style={{ height: 500 }}>
        <FlashList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveDraft}>
        <Text style={styles.saveButtonText}>Save and continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={40} color="#C5A288" />
            <Text style={styles.modalText}>Bold Ankara Floral Print has been saved to drafts</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Continue editing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Back to products</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  closeIcon: {
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#A0A0A0',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  timestamp: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    fontSize: 12,
    color: '#000',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5A288',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addIcon: {
    marginRight: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#C5A288',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skipButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C5A288',
    borderRadius: 5,
    paddingVertical: 10,
  },
  skipButtonText: {
    color: '#C5A288',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#000',
  },
});
