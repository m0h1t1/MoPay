import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const AddCardScreen = ({ navigation }) => {
	const [currentVal, setCurrentVal] = useState("")
	const [isOpen, setIsOpen] = useState(false)
	const [comment, setComment] = useState("")
	const [data, setData] = useState([])

	useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('https://rewardscc-api.azure-api.net/sandbox/sandbox/creditcard-cardlist/?skey=f05c2a0920f54ff4a97fb912bc54d50f')
        const json = await response.json()
        const cardData = json[0].card.map(card => ({
          label: card.cardName,
          value: card.cardKey,
        }))
        setData(cardData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCardData()
  }, [])

	const handleSubmit = () => {
		navigation.navigate('Home')
	}

	return (
		<View style={styles.container}>
      	<Text style={styles.title}>Add a Card</Text>
			<View style={styles.form}>
				<DropDownPicker
					items={data}
					open={isOpen}
					setOpen={() => setIsOpen(!isOpen)}
					value={currentVal}
					setValue={(val) => setCurrentVal(val)}
				/>
				<TextInput 
					style={styles.commentBox}
					placeholder='Additional Comments...'
					multiline
					numberOfLines={4}
					value={comment}
					onChangeText={(text) => setComment(text)}
				/>
				<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
						<Text style={styles.submitText}>Submit</Text>
				</TouchableOpacity>
			</View>
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
		fontSize: 15,
		bottom: 10,
	},
  form: {
    width: '80%',
    alignItems: 'center',
  },
  commentBox: {
		top: 10,
    width: '100%',
    height: 120,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    textAlignVertical: 'top',
  },
	submitSection: {
		alignItems: 'center',
		width: '80%'
	},
	submitButton: {
		top: 20,
		padding: 10,
		borderRadius: 10,
		borderWidth: 0.5,
    backgroundColor: '#815E96',
		width: '100%',
		borderColor: 'black',
		alignItems: 'center'
	},
	submitText: {
		color: 'white',
		fontWeight: 'bold'
	}
})

export default AddCardScreen
