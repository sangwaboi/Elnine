import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { SAMPLE_EPISODE } from '../shared/sample';

export default function HomeScreen() {
	const loadAndPlay = async () => {
		await TrackPlayer.reset();
		await TrackPlayer.add(SAMPLE_EPISODE);
		await TrackPlayer.play();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Elnine</Text>
			<Text style={styles.subtitle}>Clean, scalable audio experience</Text>
			<View style={{ height: 16 }} />
			<Button title="Play sample" onPress={loadAndPlay} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, justifyContent: 'center' },
	title: { fontSize: 24, fontWeight: '700' },
	subtitle: { marginTop: 8, color: '#666' },
});
