import React,{ useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, resetReviewContext } from 'react-native'
import { UserContext } from '../UserContext';



const ProfileScreen = ({navigation}) => {
	const { setUser } = useContext(UserContext) 
	const { user } = useContext(UserContext); // Get user object from context
	const userId = user ? user.userId : null;

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#e6e6ff',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Text>yo this the profile screen</Text>
			<TouchableOpacity onPress={handleLogout}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	)
}

const handleLogout = () => {
	logout() // Reset user context
	navigation.navigate('Login')
}


export default ProfileScreen