// RegisterScreen.js
import React, { useState } from 'react'  
import { View, TextInput, Button, Text, StyleSheet, Alert, ImageBackground } from 'react-native'  
import axios from 'axios'  

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')  
  const [password, setPassword] = useState('')  
  const [confirmPassword, setConfirmPassword] = useState('')  
  const [email, setEmail] = useState('')  
  const [phone, setPhone] = useState('')  

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/  
    return re.test(email)  
  }  

  const handleRegister = () => {
    // Simple validation
    if (!username || !password || !confirmPassword || !email || !phone) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email format')
      return
    }

    // Proceed with registration logic
     axios.post('http://localhost:3000/auth/register', { username, password, email, phone }, {timeout:5000})
       .then(response => {
         // Handle response
         navigation.navigate('Login')
       }) /*
       .catch(error => {
         // Handle registration error
         console.log('Registration error:', username, password, email, phone)  
       })*/
       .catch(error => {
        if (error.response) {
          // The request was made, but the server responded with an error status
          console.log('Registration failed:', error.response.status, error.response.data);
          Alert.alert('Error', 'Registration failed. Please try again later.');
        } else if (error.request) {
          // The request was made, but no response was received
          console.log('No response received:', error.request);
          Alert.alert('Error', 'No response received. Please check your internet connection.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error setting up the request:', error.message);
          Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
        }
      }) 

    console.log('Registration data:', username, password, email, phone)  
  }  

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Text style={{ fontSize: 18 }}>User Registration {"\n"}</Text>
          <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none" 
          />
          <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
          />
          <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
          />
          <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
          />
          <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
          />
          <Button title="Register" onPress={handleRegister} />
          <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    </View>

  )  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //padding: 20,
  },
  inputContainer: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: 50,
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  header: {
    height: "15%",
    //backgroundColor: "#69f569",
    marginTop: 50,
  },
  imageStyle: {
    height: 75,
    width: "100%",
  },
  headerText: {
    position: 'absolute',
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    marginTop: 5,
  },
})  

export default RegisterScreen  