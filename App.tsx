/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
//import {Ionicons} from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.profileImage}
          />
          {/* <Ionicons
            name="camera"
            size={30}
            color="black"
            style={styles.cameraIcon}
          /> */}
        </TouchableOpacity>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.subtitle}>Subtitle</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Email: johndoe@example.com</Text>
        <Text style={styles.infoText}>Phone: +123456789</Text>
        <Text style={styles.infoText}>Location: New York, USA</Text>
      </View>
      <View style={styles.utilities}>
        <TouchableOpacity>
          <Text style={styles.utilityText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.utilityText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.utilityText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  utilities: {
    alignItems: 'center',
  },
  utilityText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
