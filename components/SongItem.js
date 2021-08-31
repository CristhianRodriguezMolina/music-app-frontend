import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const SongItem = (props) => {

	const { item } = props;

	return (
		<View>
			<Text>{item.title}</Text>
			<Text>{item.artist}</Text>
		</View>
	)
}

const styles = StyleSheet.create({

});

export default SongItem
