import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { UserContext } from '../UserContext';

const ProfileScreen = ({ navigation }) => {
	const { user, logout } = useContext(UserContext)
	
	const handleLogout = () => {
		navigation.navigate('Login', { resetFields : true })
		logout()
	}

	return (
    <View style={styles.container}>
			<View style={styles.headerSection}>
      	<Text style={styles.title}>Profile</Text>
			</View>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{user ? user.username : ''}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user ? user.email : ''}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user ? user.phone : ''}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6ff',
    padding: 20,
		paddingLeft: 25,
		paddingRight: 25
  },
	headerSection: {
		top: 30,
		height: '15%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfoContainer: {
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
		fontSize: 15,
    marginRight: 5,
		marginBottom: 3
  },
  value: {
    flex: 1,
		fontSize: 15
  },
  logoutButton: {
    backgroundColor: '#815E96',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})


export default ProfileScreen