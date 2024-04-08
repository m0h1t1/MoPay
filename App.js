import HomeScreen from './screens/HomeScreen'
import NewCardScreen from './screens/NewCardScreen'
import ProfileScreen from './screens/ProfileScreen'
import CardInfoScreen from './screens/CardInfoScreen'
import BestCardScreen from './screens/BestCardScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import { Text, StyleSheet, View, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Icon } from 'react-native-elements'
import { UserProvider } from './UserContext'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const MainStack = createStackNavigator()
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();


function HomeStacks() {
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
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <MainStack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
}

function MainTabNavigator() {
	return (
			<Tab.Navigator
					initialRouteName='HomeStack'
					screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
									let iconName
									if (route.name === 'HomeStack') {
											iconName = focused ? 'home' : 'home'
									} else if (route.name === 'ProfileStack') {
											iconName = focused ? 'list' : 'list'
									}
									return <Icon name={iconName} size={size} color={color} />
							},
					})}
			>
					<Tab.Screen name='HomeStack' component={HomeStackScreen} options={{ headerShown: false }} />
					<Tab.Screen name='ProfileStack' component={ProfileStackScreen} options={{ headerShown: false }} />
			</Tab.Navigator>
	);
}

function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="Best" component={BestCardScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="Info" component={CardInfoScreen} options={{ headerShown: false }} />
		</HomeStack.Navigator>
	);
}

function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
			<ProfileStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
		</ProfileStack.Navigator>
	);
}

export default function App() {
  return (
		<UserProvider>
			<NavigationContainer>
				<MainStackNavigator />
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
		width: 22,
	}
})
