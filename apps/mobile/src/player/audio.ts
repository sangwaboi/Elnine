import { Audio, InterruptionModeAndroid } from 'expo-av';
import { EventEmitter } from 'events';

export type AudioStatus = {
	isLoaded: boolean;
	isPlaying: boolean;
	positionMillis: number;
	durationMillis?: number;
	title?: string;
};

class AudioPlayer extends EventEmitter {
	private sound: Audio.Sound | null = null;
	private currentTitle: string | undefined;

	async init() {
		await Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			staysActiveInBackground: true,
			shouldDuckAndroid: true,
			interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
			playThroughEarpieceAndroid: false,
		});
	}

	async load(uri: string, title?: string) {
		if (this.sound) {
			await this.sound.unloadAsync();
		}
		const { sound } = await Audio.Sound.createAsync(
			{ uri },
			{ shouldPlay: false },
			this.onStatusUpdate
		);
		this.sound = sound;
		this.currentTitle = title;
		this.emit('status', await this.getStatus());
	}

	play = async () => {
		if (!this.sound) return;
		await this.sound.playAsync();
	};

	pause = async () => {
		if (!this.sound) return;
		await this.sound.pauseAsync();
	};

	getStatus = async (): Promise<AudioStatus> => {
		const status = this.sound ? await this.sound.getStatusAsync() : { isLoaded: false } as any;
		if (!status.isLoaded) return { isLoaded: false, isPlaying: false, positionMillis: 0 };
		return {
			isLoaded: true,
			isPlaying: status.isPlaying ?? false,
			positionMillis: status.positionMillis ?? 0,
			durationMillis: status.durationMillis,
			title: this.currentTitle,
		};
	};

	private onStatusUpdate = (status: any) => {
		if (!status) return;
		this.emit('status', {
			isLoaded: !!status.isLoaded,
			isPlaying: !!status.isPlaying,
			positionMillis: status.positionMillis ?? 0,
			durationMillis: status.durationMillis,
			title: this.currentTitle,
		} as AudioStatus);
	};
}

export const audioPlayer = new AudioPlayer(); 