/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome, Feather, FontAwesome6 } from "@expo/vector-icons";

const ContactScreen = () => {
  const [selectedTab, setSelectedTab] = useState("About Us");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
      </View> */}

      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab("About Us")}>
          <Text style={[styles.tab, selectedTab === "About Us" && styles.activeTab]}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab("Services")}>
          <Text style={[styles.tab, selectedTab === "Services" && styles.activeTab]}>Services</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {selectedTab === "About Us" ? <AboutUs /> : <Services />}
    </ScrollView>
  );
};

const AboutUs = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>About Us</Text>
      <Text style={styles.description}>
      We at Daviva create a vision to preserve the rich cultural heritage of Nigeria through fashion. Today, we are proud to offer a diverse range of native wear that reflects both the elegance of tradition and the spirit of modernity.
      </Text>

      <Text style={styles.sectionTitle}>Contact Details</Text>
      <View style={styles.contactItem}>
        <Feather name="phone" size={18} color="black" />
        <Text style={styles.contactText}>+234-465-6743-46</Text>
      </View>
      <View style={styles.contactItem}>
        <MaterialIcons name="email" size={18} color="black" />
        <Text style={styles.contactText}>hello@nativewear.com</Text>
      </View>
      <View style={styles.contactItem}>
        <FontAwesome name="map-marker" size={18} color="black" />
        <Text style={styles.contactText}>Lafenwa, Abeokuta, Ogun State</Text>
      </View>

      <Text style={styles.sectionTitle}>Connect with Us</Text>
      <View style={styles.socialIcons}>
        <FontAwesome name="facebook" size={24} color="black" />
        <FontAwesome name="instagram" size={24} color="black" />
        <FontAwesome name="twitter" size={24} color="black" />
        <FontAwesome6 name="tiktok" size={24} color="black" />      
    </View>

      <View>
        <Text style={styles.sectionTitle}>Our Operation Hours</Text>
        <View style={{ width:'100%', flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={[styles.description]}>Monday - Friday </Text>
            <Text style={[styles.description]}>09:00 - 18:00</Text>
        </View>
        <Text style={[styles.description, { color: "gray" }]}>Closed on public holidays</Text>
      </View>
      <View style={{ marginVertical:10 }}>
        <Text style={styles.sectionTitle}>Delivery modes</Text>
        <Text>We offer a variety of delivery options to meet your needs.</Text>
      </View>
      <View style={{ marginVertical:10 }}>
        <Text style={styles.sectionTitle}>Benefits for returning customersDelivery modes</Text>
        <Text>Join our loyalty program for discounts and early access to sales.</Text>
      </View>
    </View>
  );
};

const Services = () => {
  return (
    <View >
      <View style={{ width:'100%' }}>
      <Text style={[styles.sectionTitle, {textAlign:'center'}]}>Custom Tailoring</Text>
      <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Consultation:</Text> Consultation: Work with our experienced designers to create your vision.
      </Text>
      <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Fabric Selection:</Text> Choose from our extensive collection of high-quality fabrics.
      </Text>
      <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Measurement and Fitting: :</Text> Ensure a perfect fit with our professional measuring and fitting
      </Text>
      <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Design and Craftsmanship:</Text> Watch as your custom design comes to life with intricate detailing and expert craftsmanship.
      </Text>
      <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Custom Tailoring:</Text> Create your perfect outfit with our designers.
      </Text>
    </View>

      <View style={{ width:'100%' }}>
        <Text style={[styles.sectionTitle, {textAlign:'center'}]}>Ready to Wear Collection</Text>
        <Text style={styles.bulletPoint}>
                Explore our range of exquisite ready-to-wear native outfits:        
                </Text>
        <Text style={styles.bulletPoint}>
            • <Text style={styles.bold}>Agbada:</Text>  Elegant and regal, ideal for special occasions.
        </Text>
        <Text style={styles.bulletPoint}>
            • <Text style={styles.bold}> Kaftans:</Text>
            Comfortable and stylish for any event.
        </Text>
        <Text style={styles.bulletPoint}>
            • <Text style={styles.bold}>Ankara:</Text> Colorful and vibrant, showcasing traditional patterns.
        </Text>
        <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Ready-to-Wear Collection:</Text> Browse our stylish and elegant designs.
      </Text>
      </View>
      <View style={{ width:'100%' }}>
        <Text style={[styles.sectionTitle, {textAlign:'center'}]}>Coporate Services</Text>
        <Text style={styles.bulletPoint}>
        We also cater to corporate clients:    
                </Text>
        <Text style={styles.bulletPoint}>
            • <Text style={styles.bold}>Agbada:</Text>  Elegant and regal, ideal for special occasions.
        </Text>
        <Text style={styles.bulletPoint}>
            • <Text style={styles.bold}> Uniform Design: </Text>
            Custom uniforms for organizations that desire a professional yet traditional look.
        </Text>
        <Text style={styles.bulletPoint}>
            • <Text style={styles.bold}>Bulk Orders:</Text>  Large-scale production of native wear for events or retail.
        </Text>
        <Text style={styles.bulletPoint}>
        • <Text style={styles.bold}>Corporate Services:</Text> Get custom uniforms and bulk orders for events.
      </Text> 
      </View>
     
      {/* 
    
     */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerText: { fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  tabContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  tab: { fontSize: 16, marginHorizontal: 15, color: "#999", paddingBottom: 5 },
  activeTab: { fontWeight: "bold", color: "#774936", borderBottomWidth: 2, borderBottomColor: "#774936" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 20},
  description: { fontSize: 14, color: "#555", marginVertical: 5 },
  contactItem: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  contactText: { marginLeft: 10, fontSize: 14 },
  socialIcons: { flexDirection: "row", marginVertical: 10, justifyContent: "space-between", width: 120 },
  bulletPoint: { fontSize: 14, marginVertical: 5, color: "#555" },
  bold: { fontWeight: "bold" },
});

export default ContactScreen;
