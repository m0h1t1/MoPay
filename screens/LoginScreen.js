import React, { useState, useContext } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native'
import axios from 'axios'
import { UserContext } from '../UserContext'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const {setUser} = useContext(UserContext)

  const handleLogin = async () => {
		try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      }).then((res) => {
        setUser(res.data)
        console.log('Logged in!', res.data)
        navigation.navigate('Main')
      })
    } catch (error) {
        Alert.alert('Login Failed', 'Invalid username or password') 
			  console.log(error)
    }
  } 

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 25 }}>Login {"\n"}</Text>
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
              value={password}
              secureTextEntry
              onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />
          {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
          <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    </View>
  ) 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e6e6ff'
  },
  inputContainer: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: 60,
    padding: 30,
  },
  header: {
    height: "15%",
    //backgroundColor: "#69f569",
    marginTop: 50,
  },
  headerText: {
    position: 'absolute',
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    marginTop: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 17
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
}) 

export default LoginScreen 