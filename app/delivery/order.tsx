
import Help from '@/components/help/Help';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';

const App = () => {
  const [showCODModal, setShowCODModal] = useState(false);
  const [deliveryDetailsVisible, setDeliveryDetailsVisible] = useState(true);
  const [itemDetailsVisible, setItemDetailsVisible] = useState(true);

  const items = [
    { id: '1', name: 'Cadbury Dairy Milk Silk', qty: 1 },
    { id: '2', name: 'Cadbury Dairy Milk Silk', qty: 1 },
    { id: '3', name: 'Cadbury Dairy Milk Silk', qty: 1 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>{'<'}</Text>
          </TouchableOpacity>
          <Help />
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/prof.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.label}>Deliver to</Text>
            <Text style={styles.name}>Rushikesh Dattaray</Text>
            <Text style={styles.contact}>#20715072782 7153</Text>
          </View>
        </View>

        {/* Delivery Details */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => setDeliveryDetailsVisible(!deliveryDetailsVisible)}
          >
            <Text style={styles.label}>Delivery Details</Text>
            <Text style={styles.arrow}>{deliveryDetailsVisible ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          {deliveryDetailsVisible && (
            <>
              <Text style={styles.address}>
                201/ Second Floor{'\n'}
                Naveena's Enclave{'\n'}
                SBI Officers Colony, Siddhi Vinayak Nagar,{'\n'}
                Madhapur, Hyderabad, Telangana 500081, India (2-58/1/171)
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.mapButton}>
                  <Text style={styles.buttonText}>Maps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  <Text style={styles.buttonText}>Call Customer</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        {/* Payment Section */}
        <View style={styles.paymentSection}>
          <Text style={styles.label}>Payment Pending</Text>
          <View style={styles.paymentButtons}>
            <TouchableOpacity
              style={styles.codButton}
              onPress={() => setShowCODModal(true)}
            >
              <Text style={styles.buttonText}>COD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upiButton}>
              <Text style={styles.buttonText}>UPI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item Details */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => setItemDetailsVisible(!itemDetailsVisible)}
          >
            <Text style={styles.label}>Item Details</Text>
            <Text style={styles.arrow}>{itemDetailsVisible ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          {itemDetailsVisible && (
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Text style={styles.item}>
                  {item.name} x {item.qty}
                </Text>
              )}
            />
          )}
        </View>

        {/* Delivery Complete */}
        <TouchableOpacity style={styles.completeButton} onPress={()=>router.push('../Tabs/home')}>
          <Text style={styles.completeText}>Delivery Complete</Text>
        </TouchableOpacity>

        {/* COD Confirmation Modal */}
        <Modal visible={showCODModal} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Payment done by COD?</Text>
              <View style={styles.modalButtonRow}>
                <Pressable
                  style={styles.modalYesButton}
                  onPress={() => setShowCODModal(false)}
                >
                  <Text style={styles.modalButtonText}>Yes</Text>
                </Pressable>
                <Pressable
                  style={styles.modalNoButton}
                  onPress={() => setShowCODModal(false)}
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArrow: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 12,
  },
  profileImage: {
    width: 20,
    height: 30,
    borderRadius: 30,
    marginBottom: 55,

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#00a99d',
    
 
  },
  contact: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  arrow: {
    fontSize: 16,
    color: '#666',
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  mapButton: {
    backgroundColor: '#00a99d',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#00a99d',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  paymentButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  codButton: {
    backgroundColor: '#00a99d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  upiButton: {
    backgroundColor: '#00a99d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    paddingVertical: 6,
    color: '#333',
  },
  completeButton: {
    marginTop: 30,
    backgroundColor: '#008080',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 30,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonRow: {
    flexDirection: 'row',
    gap: 15,
  },
  modalYesButton: {
    backgroundColor: '#00a99d',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  modalNoButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;



