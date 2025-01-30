/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Link, useRouter } from 'expo-router';
export default function AddProductDetails() {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [unitOfMeasurement, setUnitOfMeasurement] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productColor, setProductColor] = useState('');
  const [availableColors, setAvailableColors] = useState([]);
  const [status, setStatus] = useState('');
  const [tags, setTags] = useState('');

  const categories = ['Ankara', 'Lace', 'Plain Material', 'Chiffon', 'Aso Oke', 'Tie and Dye', 'Silk'];
  const measurements = ['Yard', 'Trouser Length', 'Meter'];
  const colors = ['Red', 'Green', 'Blue', 'Black', 'Yellow', 'White'];
  const statuses = ['Available', 'Out of stock'];
const route = useRouter();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>route.back()}>
         <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </Pressable>
       
        <Text style={styles.headerTitle}>Add Product</Text>
      </View>
      <Text style={styles.label}>Product Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Give your product a clear name"
        value={productName}
        onChangeText={setProductName}
      />
      <Text style={styles.label}>Product Code</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., P00122"
        value={productCode}
        onChangeText={setProductCode}
      />
      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Describe your product in detail"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Unit of Measurement</Text>
      <Picker
        selectedValue={unitOfMeasurement}
        onValueChange={(itemValue) => setUnitOfMeasurement(itemValue)}
        style={styles.picker}
      >
        {measurements.map((measure) => (
          <Picker.Item key={measure} label={measure} value={measure} />
        ))}
      </Picker>
      <Text style={styles.label}>Price per Unit</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., N12,000"
        keyboardType="numeric"
        value={pricePerUnit}
        onChangeText={setPricePerUnit}
      />
      <Text style={styles.label}>Quantity</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your product quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Text style={styles.label}>Product Color</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Green, Brown, Yellow"
        value={productColor}
        onChangeText={setProductColor}
      />
     
      {/* <View style={{ width: '100%' }}> */}
      <Text style={styles.label}>Available Colors</Text>
     
      <Picker
        selectedValue={availableColors}
        onValueChange={(itemValue) => setAvailableColors(itemValue)}
        style={styles.picker}
      >
        {colors.map((color) => (
          <Picker.Item key={color} label={color} value={color} />
        ))}
      </Picker>
      {/* </View>  */}
      <Text style={styles.label}>Status</Text>
      <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
        style={styles.picker}
      >
        {statuses.map((status) => (
          <Picker.Item key={status} label={status} value={status} />
        ))}
      </Picker>
      <Text style={styles.label}>Tags (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Add relevant tags to improve visibility e.g., bestseller"
        value={tags}
        onChangeText={setTags}
      />
      <View style={styles.buttonContainer}>
        <Link href='/(drawer)/(product)/draft' asChild>
            <TouchableOpacity style={styles.draftButton}>
            <Text style={styles.buttonText}>Add to Drafts</Text>
            </TouchableOpacity>
        </Link>
       
       <Link href='/(drawer)/(product)/details_success' asChild>
       <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
       </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    height: 250,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  draftButton: {
    backgroundColor: '#E5E5E5',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#C5A288',
    padding: 15,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
