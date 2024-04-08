import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Touchable, } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

//Card Images
const card1 = require("/Users/mobuckets/MoPay/dataset/amexplatinumCard.png")
const card2 = require("/Users/mobuckets/MoPay/dataset/discoveritCard.png")
const card3 = require("/Users/mobuckets/MoPay/dataset/chasefreedomflexCard.png")
const card4 = require("/Users/mobuckets/MoPay/dataset/wfactivecashcardCard.png")

import data from '/Users/mobuckets/MoPay/dataset/cards.json'

const HomeScreen = ({ navigation }) => {
	const [cards, setCards] = useState(data.cards)
	const [filteredCards, setFilteredCards] = useState(data.cards)

	const getimage = (id) => {
		if (id===1) return card1
		if (id===2) return card2
		if (id===3) return card3
		if (id===4) return card4
	}

	const searchCards = (search) => {
		const lowercasedSearch = search.toLowerCase()
		const result = cards.filter(card => {
			return card.company.toLowerCase().includes(lowercasedSearch)
		}) 
	
		setFilteredCards(result)
	}

	const navigateToCardDetails = (category) => {
    const bestCard = findCardWithHighestCashback(category);

    if (bestCard && bestCard.id) {
      navigation.navigate('Best', { id: bestCard.id });
    } else {
			navigation.navigate('Initial')
		}
	}

	const findCardWithHighestCashback = (category) => {
		const sortedCards = [...data.cards].sort((a, b) => b[`${category}_cashback`] - a[`${category}_cashback`]);

  	return (sortedCards[0])
	}
	

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.headerSection}>
					<Text style={styles.title}>Credit Cards</Text>
				</View>

				<View style={styles.searchSection}>
					<View style={styles.searchPallet}>
						<TextInput
							style={styles.searchInput}
							placeholder='Search a Card...'
							onChangeText={(text) => searchCards(text)}
						/>
						<View style={styles.searchIconArea}>
							<Icon name="search" color='gray' size={30} />
						</View>
					</View>
				</View>

				<View style={styles.categorySection}>
					<View style={styles.categoryWithText}>
						<TouchableOpacity onPress={() => navigateToCardDetails('dining')}>
							<Icon 
								name="local-dining" 
								color='black' 
								size={25} 
								style={styles.categoryIcons} 
								reverse 
							/>
						</TouchableOpacity>
						<Text style={styles.categoryText}>Dining</Text>
					</View>
						<View style={styles.categoryWithText}>
							<TouchableOpacity onPress={() => navigateToCardDetails('grocery')}>
								<Icon 
									name="local-grocery-store" 
									color='black' 
									size={25} 
									style={styles.categoryIcons} 
									reverse
								/>
							</TouchableOpacity>
							<Text style={styles.categoryText}>Grocery</Text>
						</View>
					<View style={styles.categoryWithText}>
						<TouchableOpacity onPress={() =>navigateToCardDetails('travel')}>
							<Icon 
								name="flight" 
								color='black' 
								size={25} 
								style={styles.categoryIcons} 
								reverse 
							/>
						</TouchableOpacity>
						<Text style={styles.categoryText}>Travel</Text>
					</View>
				</View>

				<View style={styles.categorySection}>
					<View style={styles.categoryWithText}>
						<TouchableOpacity onPress={() => navigateToCardDetails('streaming')}>
							<Icon 
								name="live-tv" 
								color='black' 
								size={25} 
								style={styles.categoryIcons} 
								reverse 
							/>
						</TouchableOpacity>
						<Text style={styles.categoryText}>Streaming</Text>
					</View>
					<View style={styles.categoryWithText}>
						<TouchableOpacity onPress={() => navigateToCardDetails('gas')}>
							<Icon 
								name="local-gas-station" 
								color='black' 
								size={25} 
								style={styles.categoryIcons} 
								reverse 
							/>
						</TouchableOpacity>
						<Text style={styles.categoryText}>Gas</Text>
					</View>
					<View style={styles.categoryWithText}>
						<TouchableOpacity onPress={() => navigateToCardDetails('drugstore')}>
							<Icon 
								name="medication" 
								color='black' 
								size={25} 
								style={styles.categoryIcons} 
								reverse 
							/>
						</TouchableOpacity>
						<Text style={styles.categoryText}>Drug Store</Text>
					</View>
				</View>
				<ScrollView style={styles.elementPallet} contentContainerStyle={styles.contentContainerStyle}>
					{
						filteredCards.map((card) => {
							return (
								<TouchableOpacity 
									style={styles.element} 
									key={card.id} 
									activeOpacity={0.7}
									onPress={() => navigation.navigate('Info', { id: card.id })}
								>
									<View style={styles.infoArea}>
										<Text style={styles.infoTitle}>{card.company}</Text>
										<Text style={styles.infoSub}>{card.type}</Text>
									</View>
									<View style={styles.imageArea}>
										<Image 
											source={getimage(card.id)} 
											resizeMode="contain" 
											style={styles.cardImage} 
										/>
									</View>
								</TouchableOpacity>	
							)
						})
					}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#e6e6ff',
	},
	container: {
		flex: 1
	},
	headerSection: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 35,
		paddingRight: 35
		
	},
	addIconStyle: {
		fontSize: 30,
	},
	title: {
		fontSize: 30,
		fontWeight: '600',
	},
	searchSection: {
		justifyContent: 'center',
		paddingLeft: 50,
		paddingRight: 50
	},
	searchPallet: {
		paddingLeft: 10,
		paddingRight: 10,
		flexDirection: 'row',
		borderRadius: 10,
		width: '100%',
		height: 40,
		backgroundColor: 'white',
	},
	searchInput: {
		width: 240,
		height: 40,
	},
	searchIconArea: {
		width: 30,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	magnifyingIconStyle: {
		width: 25,
		height: 25
	},
	headText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	categorySection: {
		top: 30,
		paddingRight: 40,
		paddingLeft: 40,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	categoryIcons: {
		
	},
	categoryWithText: {
		alignItems: 'center'
	},
	categoryText: {
		bottom: 5,
    	fontSize: 15,
    	color: 'black'
	},
	elementPallet: {
		width: '100%',
		top: 40,
		backgroundColor: '#e6e6ff',
		paddingLeft: 35,
		paddingRight: 35
	},
	element: {
		height: 120,
		padding: 13,
		borderRadius: 15,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		marginBottom: 13,
	},
	infoArea: {
		flex: 1,
	},
	infoTitle: {
		top: 10,
		marginBottom: 10,
		fontSize: 15,
		fontWeight: 'bold',
	},
	infoSub: {
		fontSize: 13,
	},
	infoCashback: {
		marginTop: 30,
	},
	infoCashbackamount: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	imageArea: {
		flex: 1,
	},
	cardImage: {
		position: 'absolute',
		width: '100%',
		left: 6,
		height: '100%',
	},
	contentContainerStyle: {
		flexGrow: 1,
		paddingBottom: 100
	}
})