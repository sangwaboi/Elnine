# Elnine

Clean, scalable React Native audio streaming platform with background playback, real-time backend, and recommendation engine.

## 🏗️ Architecture Overview

### Mobile App (React Native + Expo)
- **Framework**: Expo 51 with Dev Client + TypeScript
- **Audio Engine**: `expo-av` for background/foreground audio playback
- **Navigation**: React Navigation v6 (Bottom Tabs + Stack)
- **State Management**: Zustand for lightweight state
- **Platform Support**: iOS + Android with shared codebase

### Backend (Planned)
- **Database**: Supabase (Postgres + Real-time subscriptions)
- **Auth**: Supabase Auth (Email OTP)
- **Media Storage**: AWS S3 + CloudFront CDN
- **Audio Processing**: HLS transcoding pipeline (multiple bitrates)
- **Search**: Algolia for instant search with typo tolerance
- **Analytics**: Event capture for playback metrics

### Real-time Features
- Live audio upload monitoring
- Real-time playback analytics
- Push notifications for new content
- Admin dashboard for content management

## 📱 Current Implementation

### Project Structure
```
elnine/
├── README.md
├── .gitignore
└── apps/
    └── mobile/                 # React Native Expo app
        ├── package.json        # Dependencies and scripts
        ├── app.json           # Expo configuration
        ├── babel.config.js    # Babel setup
        ├── tsconfig.json      # TypeScript config
        ├── index.js           # App entry point
        ├── service.ts         # Background service (unused with expo-av)
        ├── App.tsx            # Main app component
        ├── android/           # Generated native Android project
        └── src/
            ├── navigation/
            │   └── RootNavigator.tsx    # Bottom tab navigation
            ├── screens/
            │   ├── HomeScreen.tsx       # Welcome + sample playback
            │   ├── SearchScreen.tsx     # Search placeholder
            │   ├── LibraryScreen.tsx    # User library placeholder
            │   └── NowPlayingScreen.tsx # Full player placeholder
            ├── components/
            │   └── PlayerMini.tsx       # Mini player overlay
            ├── player/
            │   └── audio.ts            # Expo-AV audio singleton
            ├── store/
            │   └── playerStore.ts      # UI state (Zustand)
            └── shared/
                └── sample.ts           # Sample audio for testing
```

### Core Features Implemented
✅ **Bottom Tab Navigation**: Home, Search, Library, Now Playing  
✅ **Audio Playback**: Background-capable player with expo-av  
✅ **Mini Player**: Persistent bottom overlay with play/pause  
✅ **Sample Audio**: HLS demo stream for testing  
✅ **Android APK**: Debug build ready for device testing  
✅ **Clean Architecture**: Modular, scalable codebase  

### Key Components

#### Audio Player (`src/player/audio.ts`)
```typescript
- Singleton pattern with EventEmitter
- Background audio support via Audio.setAudioModeAsync
- HLS/HTTP stream support
- Play/pause/load methods
- Status tracking (position, duration, title)
```

#### Navigation (`src/navigation/RootNavigator.tsx`)
```typescript
- Bottom tabs: Home | Search | Library | Now Playing
- Header hidden for clean mobile UI
- Ready for stack navigation within tabs
```

#### Mini Player (`src/components/PlayerMini.tsx`)
```typescript
- Persistent overlay above tab bar
- Real-time status updates via audio player events
- Play/pause toggle
- Track title display
```

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- Xcode (for iOS development)
- Android Studio + SDK (for Android development)
- Java 17 (for Android builds)

### Installation
```bash
cd apps/mobile
npm install
```

### Development
```bash
# Start Metro bundler
npm start

# iOS Simulator
npm run ios

# Android (device/emulator)
npm run android

# Generate native projects
npm run prebuild
```

### Android APK Build
```bash
cd apps/mobile/android
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
./gradlew assembleDebug

# APK location: android/app/build/outputs/apk/debug/app-debug.apk
```

## 🎯 Current Status

### What Works Now
- ✅ Cross-platform mobile app (iOS + Android)
- ✅ Background audio playback with HLS streams
- ✅ Bottom tab navigation with 4 main screens
- ✅ Mini player with real-time status updates
- ✅ Sample audio streaming (Google HLS demo)
- ✅ Debug APK generation for Android testing
- ✅ TypeScript throughout with proper typing

### Architecture Decisions Made
- **expo-av over react-native-track-player**: Faster build times, fewer native dependencies
- **Expo Dev Client**: Flexibility with native modules while keeping Expo benefits
- **Zustand over Redux**: Lightweight state management for mobile
- **Bottom tabs first**: Standard mobile audio app pattern (Spotify-like)
- **Modular structure**: Easy to scale and maintain

## 🚀 Next Steps

### Phase 1: Backend Foundation
- [ ] Supabase project setup + authentication
- [ ] Audio upload API (multipart, metadata)
- [ ] Basic CRUD for audio items
- [ ] Real-time subscriptions for new uploads
- [ ] Admin dashboard for content management

### Phase 2: Core Features
- [ ] User authentication flow (email OTP)
- [ ] Audio library listing from Supabase
- [ ] Upload audio from mobile app
- [ ] Download/offline support
- [ ] Push notifications for new content

### Phase 3: Advanced Features
- [ ] HLS transcoding pipeline (AWS MediaConvert)
- [ ] CDN setup (CloudFront) for global delivery
- [ ] Search implementation (Algolia)
- [ ] Playback analytics and recommendations
- [ ] Social features (playlists, sharing)

### Phase 4: Production
- [ ] Release keystore + signed APK/AAB
- [ ] App Store + Play Store submissions
- [ ] Performance monitoring (Sentry)
- [ ] A/B testing framework
- [ ] Recommendation engine (ML pipeline)

## 🎵 Audio Pipeline (Planned)

```
Upload → S3 Storage → MediaConvert → HLS (Multi-bitrate) → CloudFront → Mobile App
                                  ↓
                               Metadata → Supabase → Real-time Updates
```

### Supported Formats
- **Input**: MP3, WAV, M4A, FLAC
- **Output**: HLS with multiple bitrates (32/64/96/128 kbps)
- **Streaming**: Adaptive bitrate based on network

## 📊 Technical Specifications

### Bundle IDs
- **iOS**: `com.elnine.audio`
- **Android**: `com.elnine.audio`

### Minimum Requirements
- **iOS**: 13.0+
- **Android**: API 21+ (Android 5.0)

### Dependencies
- Expo SDK 51
- React Native 0.74.5
- React Navigation 6
- expo-av for audio playback
- Zustand for state management

## 🔐 Security & Privacy

### Planned Security Features
- [ ] Audio file encryption at rest (S3)
- [ ] Signed URLs for temporary access
- [ ] Rate limiting on upload endpoints
- [ ] Content moderation pipeline
- [ ] GDPR compliance for EU users

## 📈 Monitoring & Analytics

### Planned Metrics
- [ ] Playback completion rates
- [ ] Popular content tracking
- [ ] User engagement metrics
- [ ] Performance monitoring (crashes, ANRs)
- [ ] Network quality analytics

---

*Built with ❤️ for scalable audio streaming*
