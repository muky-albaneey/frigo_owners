/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { COLORS } from '../Color';
import { Link } from 'expo-router';

const producers = [
    {
      id: '1',
      name: 'DA VIVA Fashion LTD',
      description: 'Celebrating indigenous heritage through unique fashion.',
      image: 'https://yourcdn.com/daviva.png',
    },
    {
      id: '2',
      name: 'United Nigerian Textiles PLC',
      description: 'Modern designs inspired by traditional craftsmanship.',
      image: 'https://yourcdn.com/untp.png',
    },
    {
      id: '3',
      name: 'African Textile Manufacturers Limited',
      description: 'Showcasing the beauty of ancestral art in fashion.',
      image: 'https://yourcdn.com/africantextile.png',
    },
  ];
  
  const highlights = [
    {
      id: '1',
      title: 'Traditional wears',
      description: 'Explore our collection of cultural wears',
      image: 'https://yourcdn.com/traditionalwears.png',
    },
    {
      id: '2',
      title: 'Deji & Kola',
      description: 'Stylish wear suitable for any season.',
      image: 'https://yourcdn.com/dejikola.png',
    },
    {
      id: '3',
      title: 'Reddi2Wear Nigeria Limited',
      description: 'Showcasing the beauty of ancestral art in fashion.',
      image: 'https://yourcdn.com/reddi2wear.png',
    },
  ];

const ProducerHomepage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Afrigora</Text>
      <TextInput style={styles.searchBar} placeholder='Search native wear...' />
      
      {/* Logos */}
      <View style={styles.logoContainer}>
        <Image source={{ uri: 'https://businesspost.ng/wp-content/uploads/2021/03/Afriex.png' }} style={styles.logo} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNffnWPSApstIU1oRVaCESJ4TL_HSYYf4jDg&s' }} style={styles.logo} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE4J460xXstegacqEkPDPJQDKFrt5rKWZLw&s' }} style={styles.logo} />
        <Image source={{ uri: 'https://lendsqrstrapi.blob.core.windows.net/d7snkiyu0q9wnkuz8rtm/assets/full_logo_kredibank_6168193c5f.png' }} style={styles.logo} />
      </View>

      {/* Featured Producers */}
      <Text style={styles.sectionTitle}>Featured Producers</Text>
      <FlashList
        data={producers}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.card}>
           
            <View>
              <View style={{ flexDirection:'row' }}>
              
              
              <View style={{ width:'60%' }}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
              <Image source={require("../../../assets/ankara_prod.png")} style={[styles.cardImage, {width:'40%'}]} />
              </View>

              <View style={styles.buttonContainer}>
              <Link href={`/(producer)/category/1`} asChild>
              <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Shop Now</Text>
              </TouchableOpacity>
              </Link>

               
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={{ color:'#ffff' }}>Contact Us</Text>
                  </TouchableOpacity>
              </View>
            </View>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
          </View>
        )}
      />

      {/* Highlights */}
      <Text style={styles.sectionTitle}>Highlights</Text>
      <FlashList
        data={highlights}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.highlightCard}>
            {/* <Image source={{ uri: item.image }} style={styles.highlightImage} /> */}
           <View style={{ flexDirection:'row', width:'100%' }}>
              <View style={{ flexWrap:'wrap', width:'60%'}}>
                <Text style={styles.highlightTitle}>{item.title}</Text>
                <View>
                <Text style={styles.highlightDescription}>{item.description}</Text>
              </View>
              </View>
              <Image source={require("../../../assets/viva_icon.png")} style={[styles.cardImage, {width:'40%'}]} />
           </View>
            <View style={styles.buttonContainer}>
            <Link href={`/(producer)/category/1`} asChild>
                <TouchableOpacity style={styles.shopButton}>
                <Text>Shop Now</Text>
                </TouchableOpacity>
            </Link>
              <TouchableOpacity style={styles.contactButton}>
                <Text style={{ color:'#fff' }}>Contact Us</Text>
                </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  searchBar: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10 },
  logoContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
  logo: { width: 80, height: 50, resizeMode: 'contain' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10 },
  cardImage: { width: 100, height: 80, borderRadius: 10, marginRight: 10 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardDescription: { fontSize: 14, color: '#777', marginBottom: 5 },
  buttonContainer: { flexDirection: 'row', marginTop: 5 },
  shopButton: { borderWidth:1,borderColor: '#f4a261', padding: 10, borderRadius: 5, marginRight: 5, justifyContent:'center' },
  contactButton: { backgroundColor: COLORS.ColorBrown, padding: 5, borderRadius: 5, justifyContent:'center' },
  highlightCard: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10 },
  highlightImage: { width: '100%', height: 120, borderRadius: 10 },
  highlightTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  highlightDescription: { fontSize: 14, color: '#777' },
});

export default ProducerHomepage;
