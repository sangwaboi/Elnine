import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import PlayerMini from './src/components/PlayerMini';
import { audioPlayer } from './src/player/audio';

export default function App() {
	useEffect(() => {
		audioPlayer.init();
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<View style={{ flex: 1 }}>
					<RootNavigator />
					<PlayerMini />
				</View>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
