import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import data from '/Users/mobuckets/MoPay/dataset/cards.json'

const card1 = require("/Users/mobuckets/MoPay/dataset/amexplatinumCard.png")
const card2 = require("/Users/mobuckets/MoPay/dataset/discoveritCard.png")
const card3 = require("/Users/mobuckets/MoPay/dataset/chasefreedomflexCard.png")
const card4 = require("/Users/mobuckets/MoPay/dataset/wfactivecashcardCard.png")

const CardInfoScreen = ({ route }) => {

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
					<Text style={styles.headerText}>Card Details</Text>
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
					<Text style={styles.cardNotes}>Notes: </Text>
					<View style={styles.element}></View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default CardInfoScreen

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
		fontSize: 17,
		marginBottom: 7
	},
	cardType: {
		fontSize: 17,
		marginBottom: 7
	},
	travelCB: {
		fontSize: 17,
		marginBottom: 7
	},
	groceryCB: {
		fontSize: 17,
		marginBottom: 7
	},
	diningCB: {
		fontSize: 17,
		marginBottom: 7
	},
	gasCB: {
		fontSize: 17,
		marginBottom: 7
	},
	streamingCB: {
		fontSize: 17,
		marginBottom: 7
	},
	drugstoreCB: {
		fontSize: 17,
		marginBottom: 7
	},
	cardNotes: {
		marginTop: 15,
		fontSize: 15
	},
	element: {
		height: 120,
		padding: 13,
		marginTop: 10,
		borderRadius: 15,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		marginBottom: 13,
		opacity: 1
	},
})
