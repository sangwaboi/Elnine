import { create } from 'zustand';

interface PlayerState {
	isExpanded: boolean;
	setExpanded: (expanded: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
	isExpanded: false,
	setExpanded: (expanded: boolean) => set({ isExpanded: expanded }),
}));
