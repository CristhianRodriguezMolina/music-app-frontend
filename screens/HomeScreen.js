import React, { useEffect, useState } from 'react'

// API
import api from '../services/api';

// COMPONENTS

// React native
import { View, Text, FlatList, RefreshControl, Alert } from 'react-native'

// Song item
import SongItem from '../components/SongItem';

const HomeScreen = () => {

	const [songs, setSongs] = useState(null);
	const [refreshing, setRefreshing] = React.useState(false);

	useEffect(() => {
		if (!songs) {
			fetchSongs();
		}
	}, [songs]);

	const fetchSongs = async () => {
		try {
			const res = await api.get('/song');

			setSongs(res.data.songs);

			console.log(res.data.message);
		} catch (error) {
			if (error.response) {
				console.log(error.response.message);
			} else {
				console.log(error);
				console.log('Ha ocurrido un error obteniendo las canciones');
			}
		}
	}

	const onRefresh = React.useCallback(async () => {
		setRefreshing(true);
		await fetchSongs();
		setRefreshing(false);
	}, []);

	const renderItem = ({ item }) => {
		return <SongItem item={item} />
	}

	return (
		<View>
			<FlatList
				data={songs}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={["#fff"]}
						progressBackgroundColor="#0a3d62"
					/>
				}
			/>
		</View>
	)
}

export default HomeScreen;
