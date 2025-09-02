import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Search</Text>
			<Text style={styles.subtitle}>Coming soon: Algolia-powered search</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, justifyContent: 'center' },
	title: { fontSize: 24, fontWeight: '700' },
	subtitle: { marginTop: 8, color: '#666' },
});
