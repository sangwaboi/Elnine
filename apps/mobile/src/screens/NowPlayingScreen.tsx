import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NowPlayingScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Now Playing</Text>
			<Text style={styles.subtitle}>Full-screen player coming soon</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, justifyContent: 'center' },
	title: { fontSize: 24, fontWeight: '700' },
	subtitle: { marginTop: 8, color: '#666' },
});
