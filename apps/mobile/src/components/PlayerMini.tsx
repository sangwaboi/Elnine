import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';

export default function PlayerMini() {
	const playback = usePlaybackState();
	const [title, setTitle] = useState<string>('');

	useEffect(() => {
		(async () => {
			const trackId = await TrackPlayer.getCurrentTrack();
			if (trackId != null) {
				const track = await TrackPlayer.getTrack(trackId);
				setTitle(track?.title ?? '');
			}
		})();
	}, [playback?.state]);

	const toggle = async () => {
		const state = await TrackPlayer.getState();
		if (state === State.Playing) await TrackPlayer.pause();
		else await TrackPlayer.play();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text} numberOfLines={1}>
				{title || 'Nothing playing'}
			</Text>
			<TouchableOpacity onPress={toggle}>
				<Text style={styles.action}>{playback?.state === State.Playing ? 'Pause' : 'Play'}</Text>
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
