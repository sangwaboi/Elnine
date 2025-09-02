import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { setupTrackPlayer } from './src/player/trackPlayerSetup';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import PlayerMini from './src/components/PlayerMini';

export default function App() {
	useEffect(() => {
		setupTrackPlayer();
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
