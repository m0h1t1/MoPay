import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Card = (props) => {

	return (
  	<View style={styles.item}>
    	<View style={styles.itemLeft}>
      	<TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <Text style={styles.xmark}>x</Text>
  	</View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#6666ff',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    maxWidth: '90%',
    fontWeight: 'bold',
  },
  xmark: {
    fontSize: 17,
    color: '#b3b3b3',
  },
})

export default Card