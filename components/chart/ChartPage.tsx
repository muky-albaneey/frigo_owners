/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: '1', type: 'text', content: 'Have a great working week!!', time: '09:25 AM' },
    { id: '2', type: 'audio', content: null, time: '09:25 AM', sound: null, isPlaying: false },
    { id: '3', type: 'image', content: 'https://via.placeholder.com/150', time: '09:25 AM' },
  ]);
  const [text, setText] = useState('');
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const sendMessage = (type, content) => {
    setMessages((prev) => [
      { id: Date.now().toString(), type, content, time: getTime() },
      ...prev,
    ]);
    setText('');
  };

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours < 12 ? 'AM' : 'PM';
    return `${hours}:${minutes} ${ampm}`;
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      sendMessage('image', result.assets[0].uri);
    }
  };

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      sendMessage('audio', uri);
      setRecording(null);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  const playAudio = async (uri, id) => {
    const newMessages = [...messages];
    const messageIndex = newMessages.findIndex((msg) => msg.id === id);
    const message = newMessages[messageIndex];
  
    try {
      if (message.isPlaying) {
        // Stop audio if it's currently playing
        await message.sound.stopAsync();
        await message.sound.unloadAsync();
        message.isPlaying = false;
        message.sound = null;
      } else {
        // Start playback for the selected audio
        const { sound } = await Audio.Sound.createAsync({ uri });
        message.sound = sound; // Attach the sound object
        message.isPlaying = true;
  
        // Start playback
        await sound.playAsync();
  
        // Track playback status updates
        sound.setOnPlaybackStatusUpdate(async (status) => {
          console.log("Playback Status Update:", status); // Debug log
  
          if (status.didJustFinish) {
            console.log("Playback Finished");
  
            // Cleanup and reset state
            message.isPlaying = false;
            await sound.unloadAsync();
            message.sound = null;
  
            // Update messages state
            setMessages((prevMessages) => {
              const updatedMessages = [...prevMessages];
              updatedMessages[messageIndex] = { ...message, isPlaying: false };
              return updatedMessages;
            });
          }
        });
      }
  
      // Update the messages state to reflect the changes
      setMessages([...newMessages]);
    } catch (error) {
      console.error('Error in playAudio:', error);
    }
  };
  

  const deleteMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        {item.type === 'text' && (
          <View style={styles.bubbleText}>
            <Text style={styles.messageText}>{item.content}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        {item.type === 'image' && (
          <View style={styles.bubbleImage}>
            <Image source={{ uri: item.content }} style={styles.image} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteMessage(item.id)}
            >
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        {item.type === 'audio' && (
          <View style={styles.bubbleAudio}>
            <TouchableOpacity
              onPress={() => playAudio(item.content, item.id)} // Pass the message ID
            >
              <MaterialIcons
                name={item.isPlaying ? "pause" : "play-arrow"}
                size={24}
                color="#ffffff"
              />
            </TouchableOpacity>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      </View>
    );
  };
  
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.profilePicture}
        />
        <Text style={styles.headerText}>Jhon Abraham</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="call" size={24} color="black" style={styles.icon} />
          <Ionicons name="videocam" size={24} color="black" />
        </View>
      </View>
      <View style={{ width: '100%', height: 500 }}>
        <FlashList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.chat}
          inverted
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={pickImage}>
          <Ionicons name="image" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Write your message"
          value={text}
          onChangeText={setText}
        />
        {isRecording ? (
          <TouchableOpacity onPress={stopRecording}>
            <MaterialIcons name="stop" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={startRecording}>
            <Ionicons name="mic" size={24} color="black" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => text && sendMessage('text', text)}
          style={styles.sendButton}
        >
          <Ionicons name="send" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  chat: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  bubbleText: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  bubbleImage: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 10,
    maxWidth: '80%',
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    padding: 4,
  },
  bubbleAudio: {
    backgroundColor: '#8B4513',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 20,
  },
  
});
