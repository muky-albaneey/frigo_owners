/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FlashList } from "@shopify/flash-list";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const EditWorkingHours = () => {
  const [selectedTimes, setSelectedTimes] = useState(
    workingDays.map(() => ({ startTime: new Date(), endTime: new Date() }))
  );
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [tempTime, setTempTime] = useState(new Date());
const route = useRouter()
  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTempTime(selectedTime);  // Update the temporary time state
      console.log(selectedTime)
    }
  };

  const confirmTime = () => {
    if (selectedIndex !== null && selectedType) {
      // Create a new array to avoid mutating the original state directly
      const updatedTimes = [...selectedTimes];

      // Update either the startTime or endTime for the selected day
      updatedTimes[selectedIndex] = {
        ...updatedTimes[selectedIndex],
        [selectedType]: tempTime,  // Update the selected time type (startTime or endTime)
      };
      setSelectedTimes(updatedTimes);  // Set the updated times to the state
      console.log(updatedTimes)
    }
    setShowPicker(false);  // Close the picker modal
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ justifyContent:'center', width:'100%', flexDirection:'row' }}>
        <TouchableOpacity onPress={() => route.back()} style={{ position:'relative', left:-100 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        <Text style={styles.header}>Edit Working Hours</Text>
      </View> */}
      <FlashList
        data={workingDays}
        estimatedItemSize={70}
        renderItem={({ item, index }) => (
          <View style={styles.dayContainer}>
            <Text style={styles.dayText}>{item}</Text>
            <View style={styles.timeRow}>
              {/* Start Time Picker */}
              <TouchableOpacity
                style={styles.timePicker}
                onPress={() => {
                  setSelectedIndex(index);
                  setSelectedType("startTime");
                  setTempTime(selectedTimes[index].startTime);
                  setShowPicker(true);
                }}
              >
                <Text style={styles.timeText}>
                  {selectedTimes[index].startTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </TouchableOpacity>

              <Text style={styles.toText}>To</Text>

              {/* End Time Picker */}
              <TouchableOpacity
                style={styles.timePicker}
                onPress={() => {
                  setSelectedIndex(index);
                  setSelectedType("endTime");
                  setTempTime(selectedTimes[index].endTime);
                  setShowPicker(true);
                }}
              >
                <Text style={styles.timeText}>
                  {selectedTimes[index].endTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      {/* Modal for DateTimePicker */}
      {showPicker && (
        <Modal transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <DateTimePicker
                value={tempTime}
                mode="time"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleTimeChange}
              />
              <TouchableOpacity style={styles.confirmButton} onPress={confirmTime}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default EditWorkingHours;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timePicker: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  timeText: {
    fontSize: 16,
    color: "#333",
  },
  toText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
   position:'relative',
   top:-50

  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
