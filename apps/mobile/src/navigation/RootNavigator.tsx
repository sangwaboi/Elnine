import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
			<Tab.Screen name="Library" component={LibraryScreen} />
			<Tab.Screen name="NowPlaying" component={NowPlayingScreen} options={{ title: 'Now Playing' }} />
		</Tab.Navigator>
	);
}
