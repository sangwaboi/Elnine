import TrackPlayer, { Capability } from 'react-native-track-player';

export async function setupTrackPlayer() {
	try {
		await TrackPlayer.setupPlayer();
		await TrackPlayer.updateOptions({
			stopWithApp: false,
			capabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo,
			],
			compactCapabilities: [Capability.Play, Capability.Pause, Capability.SeekTo],
		});
	} catch (error) {
		// setup may be called multiple times in dev; ignore
	}
}
