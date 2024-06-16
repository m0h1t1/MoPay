import HomeScreen from './screens/HomeScreen'
import AddCardScreen from './screens/AddCardScreen'
import ProfileScreen from './screens/ProfileScreen'
import CardInfoScreen from './screens/CardInfoScreen'
import BestCardScreen from './screens/BestCardScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import DataUpload from './components/dataUpload'

import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Icon } from 'react-native-elements'
import { UserContext, UserProvider } from './UserContext'
import { useContext } from 'react'

//const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const MainStack = createStackNavigator()
const HomeStack = createStackNavigator()
//const ProfileStack = createStackNavigator()
//const AuthStack = createStackNavigator()


/*function HomeStacks() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Info" component={CardInfoScreen} />
			<Stack.Screen name="Best" component={BestCardScreen} />
		</Stack.Navigator>
	)
}*/

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <MainStack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
    </MainStack.Navigator>
  )
}

function MainTabNavigator() {
	return (
			<Tab.Navigator
					initialRouteName='Home'
					screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
									let iconName
									if (route.name === 'Home') {
										iconName = focused ? 'home' : 'home'
									} else if (route.name === 'Profile') {
										iconName = focused ? 'person' : 'person'
									} else if (route.name === 'Add Card') {
										iconName = focused ? 'add' : 'add'
									}
									return <Icon name={iconName} size={size} color={color} />
							},
							tabBarStyle: {
								paddingTop: 10,
								paddingBottom: 25,
							},
							tabBarLabelStyle: {
								fontSize: 12
							}
					})}
			>
					<Tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }} />
					<Tab.Screen name='Add Card' component={AddCardScreen} options={{ headerShown: false }} />
					<Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
			</Tab.Navigator>
	);
}

function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="Best" component={BestCardScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="Info" component={CardInfoScreen} options={{ headerShown: false }} />
		</HomeStack.Navigator>
	);
}
/*
function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
			<ProfileStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
		</ProfileStack.Navigator>
	)
}

function AuthNavigator() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="Login" component={ProfileScreen} options={{ headerShown: false }} />
			<AuthStack.Screen name="Register" component={LoginScreen} options={{ headerShown: false }} />
		</AuthStack.Navigator>
	)
}*/

export default function App() {
	const { user } = useContext(UserContext)

  return (
		//<DataUpload />
		<UserProvider>
			<NavigationContainer>
				{user ? <MainTabNavigator /> : <MainStackNavigator />}
			</NavigationContainer>
		</UserProvider>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: 'center',
		justifyContent: 'center',
	},
	footerIcon: {
		width: 20,
	}
})
