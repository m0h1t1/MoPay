import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import data from '/Users/mobuckets/MoPay/dataset/cards.json'

const card1 = require("/Users/mobuckets/MoPay/dataset/amexplatinumCard.png")
const card2 = require("/Users/mobuckets/MoPay/dataset/discoveritCard.png")
const card3 = require("/Users/mobuckets/MoPay/dataset/chasefreedomflexCard.png")
const card4 = require("/Users/mobuckets/MoPay/dataset/wfactivecashcardCard.png")

const BestCardScreen = ({ route }) => {

	const card = data.cards.filter(element => element.id == route.params.id)[0]

	const navigation = useNavigation()

	const handleBackPress = () => {
        navigation.goBack()
	}

	const getimage = (id) => {
		if (id===1) return card1
		if (id===2) return card2
		if (id===3) return card3
		if (id===4) return card4
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={handleBackPress}>
						<Icon 
							name='arrow-back-ios' 
							color='black' 
							size={25} 
							style={styles.backIconStyle}
						/>
					</TouchableOpacity>
					<Text style={styles.headerText}>Best Card Available</Text>
					<Icon 
						name='more-vert' 
						color='black' 
						size={25} 
						style={styles.moreIconStyle}
					/>
				</View>

				<View style={styles.imageSection}>
					<Image 
						source={getimage(card.id)}
						resizeMode='contain'
						style={styles.cardImage}
					/>
				</View>
				<View style={styles.descSection}>
					<Text style={styles.cardCompany}>Company: {card.company}</Text>
					<Text style={styles.cardType}>Type: {card.type}</Text>
					<Text style={styles.travelCB}>Travel Cashback: {card.travel_cashback}%</Text>
					<Text style={styles.groceryCB}>Grocery Cashback: {card.grocery_cashback}%</Text>
					<Text style={styles.diningCB}>Dining Cashback: {card.dining_cashback}%</Text>
					<Text style={styles.gasCB}>Gas Cashback: {card.gas_cashback}%</Text>
					<Text style={styles.streamingCB}>Streaming Cashback: {card.streaming_cashback}%</Text>
					<Text style={styles.drugstoreCB}>Drug Store Cashback: {card.drugstore_cashback}%</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default BestCardScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#e6e6ff',
	},
	container: {
		flex: 1,
		paddingLeft: 35,
		paddingRight: 35,
	},
	headerSection: {
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		fontSize: 25,
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: '500'
	},
	imageSection: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 250,
	},
	cardImage: {
		width: 300,
		height: 300,
	},
	descSection: {
		width: '100%',
		height: 375,
	},
	cardCompany: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	cardType: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	travelCB: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	groceryCB: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	diningCB: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	gasCB: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	streamingCB: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
	drugstoreCB: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: '300',
		paddingLeft: 10
	},
})
