# Elnine

Clean, scalable React Native (Expo + TypeScript) app for audio/audio streaming with background playback, HLS, and lock screen controls.

## Structure
- `apps/mobile` — Expo React Native app

## Prereqs
- Node 18+
- Xcode (for iOS Simulator)

## Quickstart
```bash
cd apps/mobile
npm install
npm run prebuild
npm run ios
```

Subsequent runs:
```bash
npm start
```

## Background audio
- Uses `react-native-track-player` with a background service at `apps/mobile/service.ts`.
- iOS includes `UIBackgroundModes: ["audio"]`.

## Next
- Tabs: Home, Search, Library, Now Playing
- Supabase Auth, catalog API, downloads, analytics.
