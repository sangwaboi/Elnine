import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { audioPlayer, AudioStatus } from '../player/audio';

export default function PlayerMini() {
	const [status, setStatus] = useState<AudioStatus>({ isLoaded: false, isPlaying: false, positionMillis: 0 });

	useEffect(() => {
		const update = async () => setStatus(await audioPlayer.getStatus());
		update();
		const handler = (s: AudioStatus) => setStatus(s);
		audioPlayer.on('status', handler);
		return () => {
			audioPlayer.off('status', handler);
		};
	}, []);

	const toggle = async () => {
		if (status.isPlaying) await audioPlayer.pause();
		else await audioPlayer.play();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text} numberOfLines={1}>
				{status.title || 'Nothing playing'}
			</Text>
			<TouchableOpacity onPress={toggle}>
				<Text style={styles.action}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 12,
		right: 12,
		bottom: 16,
		paddingHorizontal: 12,
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: '#111',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: { color: 'white', flex: 1, marginRight: 12 },
	action: { color: '#4ade80', fontWeight: '600' },
});
