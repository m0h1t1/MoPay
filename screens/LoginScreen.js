import React, { useState, useContext, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import { UserContext } from '../UserContext'
import { API_BASE_URL } from './config'
import * as Keychain from 'react-native-keychain'

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    if(route.params?.resetFields) {
      setUsername('')
      setPassword('')
    }
  }, [route.params?.resetFields])

 /* useEffect(() => {
    // Check if a token exists in Keychain
    const checkToken = async () => {
      try {
        const credentials = await Keychain.getGenericPassword()
        console.log('credentials: ', credentials.password)
        if (credentials) {
          const { username, password } = credentials

          const response = await fetch(`${API_BASE_URL}/user/${username}`, {
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: {
              user
            }
          })

          const user = response.data
          console.log('LoginScreen.useEffect3 :', response.data)

          setUser(user)

          navigation.navigate('Main')
        } else {
          console.log('No credentials in Keychain')
        }
      } catch (error) {
        console.error('useEffect Token verification error:', error)
      }
    }
    checkToken()
  }, [])*/

  const handleLogin = async () => {
		try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      
      if (!response.ok) {
        throw new Error('User/Pass DNE')
      }

      //const { token, user } = response.data
      //console.log('token and user: ', token, user)
      //await Keychain.setGenericPassword(username, token)
      const { user } = await response.json()
      setUser(user)
      console.log('Logged in!', user.username)
      navigation.navigate('Main')

    } catch (error) {
        Alert.alert('Login Failed', 'Invalid username or password') 
			  console.log(error)
    }
  } 

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.title}>Welcome!</Text>
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
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
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
    height: 50,
    borderColor: '#815E96',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
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
  registerText: {
    marginTop: 20,
    color: '#5886FF',
    fontWeight: 'bold'
  },
})

export default LoginScreen 