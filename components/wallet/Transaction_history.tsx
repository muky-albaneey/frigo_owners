/* eslint-disable prettier/prettier */
import React, { useRef, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,Platform,
  Pressable
} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Link, useRouter } from 'expo-router';
// import { Platform } from 'react-native';


export default function TransactionHistory() {
  const [selectedTab, setSelectedTab] = useState('All Transactions');
  const [showCustomRange, setShowCustomRange] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState({
    show: false,
    mode: 'from', // 'from' or 'to'
  });

  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();
  const transactions = [
    { id: '1', title: 'Cashback Promo', date: '1 Jan 2024', amount: '+₦5,000.00', type: 'income', icon: 'percent' },
    { id: '2', title: 'Cloth Delivery', date: '5 Feb 2024', amount: '-₦10,000.00', type: 'expense', icon: 'local-shipping' },
    { id: '3', title: 'Money Received', date: '9 Sep 2024', amount: '+₦25,000.00', type: 'income', icon: 'download' },
  ];

  const handleSheetChange = useCallback((index) => {
    console.log('BottomSheet index:', index);
  }, []);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      if (showDatePicker.mode === 'from') {
        setFromDate(selectedDate);
      } else {
        setToDate(selectedDate);
      }
    }
    setShowDatePicker({ show: false, mode: '' });
  };

  const renderTransaction = ({ item }) => (
    <Link href='/(drawer)/(wallet)/details/1' asChild>
        <Pressable>
        <View style={styles.transactionCard}>
      <View style={styles.iconWrapper}>
        <MaterialIcons name={item.icon} size={24} color="#8B4513" />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          { color: item.type === 'income' ? '#28A745' : '#DC3545' },
        ]}
      >
        {item.amount}
      </Text>
    </View>
        </Pressable>
    </Link>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction History</Text>
        <TouchableOpacity
          onPress={() => {
            if (bottomSheetRef.current) {
              bottomSheetRef.current.expand();
            }
          }}
        >
          <MaterialIcons name="tune" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['All Transactions', 'Income', 'Expenses'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Section */}
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.sectionTitle}>Today</Text>
            <FlatList
              data={transactions}
              renderItem={renderTransaction}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.transactionList}
            />
            <Text style={styles.sectionTitle}>Yesterday</Text>
          </>
        }
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id + '_yesterday'}
        contentContainerStyle={styles.transactionList}
      />

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        onChange={handleSheetChange}
        enableDynamicSizing
        enablePanDownToClose
        snapPoints={['45%']}
      >
       <BottomSheetView style={styles.contentContainer}>
  {showCustomRange ? (
    <>
      <Text style={styles.sheetTitle}>Custom Range</Text>
      <View style={styles.dateRangeContainer}>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowDatePicker({ show: true, mode: 'from' })}
        >
          <Text>From: {fromDate.toDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowDatePicker({ show: true, mode: 'to' })}
        >
          <Text>To: {toDate.toDateString()}</Text>
        </TouchableOpacity>
      </View>

      {/* Save Button */}
     {/* <Link href='/(drawer)/(wallet)/details/1' asChild> */}
     <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          setShowCustomRange(false); // Reset custom range state
          if (bottomSheetRef.current) {
            bottomSheetRef.current.close(); // Close the bottom sheet
          }
        }}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
     {/* </Link> */}
    </>
  ) : (
    <>
      <Text style={styles.sheetTitle}>Filter Transactions</Text>
      <TouchableOpacity style={styles.sheetOption}>
        <Text>This Week</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sheetOption}>
        <Text>This Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sheetOption}>
        <Text>Past 3 Months</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sheetOption}>
        <Text>This Year</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sheetOption}
        onPress={() => setShowCustomRange(true)}
      >
        <Text>Custom Range</Text>
      </TouchableOpacity>
    </>
  )}

  {/* Date Picker */}
  {showDatePicker.show && (
    <View style={{ width: '100%', position: 'absolute', bottom: 10, height: 400, left: 20, backgroundColor: '#fff' }}>
      <DateTimePicker
        value={showDatePicker.mode === 'from' ? fromDate : toDate}
        mode="date"
        display={Platform.OS === 'ios' ? 'inline' : 'default'}
        onChange={(event, selectedDate) => {
          if (selectedDate) {
            handleDateChange(event, selectedDate);
          }
          setShowDatePicker({ show: false, mode: '' });
        }}
      />
    </View>
  )}
</BottomSheetView>

      </BottomSheet>

      {/* Date Picker Modal */}
     


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8B4513',
    padding: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    //  backgroundColor: '#fff',
  },
  activeTab: {
    borderBottomColor: '#8B4513',
  },
  tabText: {
    fontSize: 14,
    color: '#8B4513',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  transactionList: {
    paddingHorizontal: 15,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  iconWrapper: {
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    padding: 10,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSheetContent: {
    flex: 1,
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sheetOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    // alignItems: 'center',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  dateInput: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#8B4513',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});
