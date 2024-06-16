// RegisterScreen.js
import React, { useState } from 'react'  
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'  
import { API_BASE_URL } from './config'

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

  const handleRegister = async () => {
    // Simple validation
    try {
      console.log('inside handle register try')
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
      console.log('inside handle register', username, password, email, phone)
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          phone
        }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      } 

      setUsername('')
      setPassword('')
      setConfirmPassword('')
      setEmail('')
      setPhone('')

      Alert.alert('Success', 'Registration successful. You can now log in.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ])
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  /*return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>User Registration {"\n"}</Text>
          <TextInput
              style={styles.input}
              placeholder="Name"
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
              autoCapitalize="none" 
          />
          <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoCapitalize="none" 
          />
          <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none" 
          />
          <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              autoCapitalize="none" 
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
    backgroundColor: '#e6e6ff'
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
})  */
return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Text style={styles.title}>User Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.backloginbutton}>Back to Login</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#e6e6ff',
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#492E5A'
},
inputContainer: {
  width: '80%',
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  elevation: 2,
},
input: {
  height: 40,
  borderColor: '#815E96',
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 20,
  paddingHorizontal: 10,
},
registerButton: {
  backgroundColor: '#815E96',
  borderRadius: 5,
  paddingVertical: 12,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
backloginbutton: {
  marginTop: 15,
  color: '#5886FF',
  fontWeight: 'bold'
}
});

export default RegisterScreen  