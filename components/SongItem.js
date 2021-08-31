import React from 'react'
import { View, Text } from 'react-native'

const SongItem = (props) => {

	const { item } = props;

	return (
		<View>
			<Text>{item.title}</Text>
			<Text>{item.artist}</Text>
		</View>
	)
}

export default SongItem
