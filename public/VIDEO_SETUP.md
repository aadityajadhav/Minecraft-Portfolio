# Video Background Setup

## Required Files
Place these video files in the `public` folder:

1. **`hero-background.webm`** (Primary - better compression)
2. **`hero-background.mp4`** (Fallback - wider browser support)

## Video Specifications
For optimal performance and quality:

- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Duration**: 10-15 seconds for seamless looping
- **Format**: 
  - WebM (VP9 codec) - Primary format
  - MP4 (H.264 codec) - Fallback format
- **Bitrate**: 
  - 1080p: 2-4 Mbps
  - 720p: 1-2 Mbps
- **Frame Rate**: 30fps (24fps also works well)
- **Audio**: None (muted background video)

## Creating the Video
1. Record or capture your Minecraft scene
2. Edit to create a 10-15 second loop
3. Export in both WebM and MP4 formats
4. Ensure the loop point is seamless

## File Size Guidelines
- **WebM**: Aim for 2-5MB for 10-15 seconds
- **MP4**: Aim for 3-7MB for 10-15 seconds

## Browser Support
- **WebM**: Chrome, Firefox, Edge (85%+ support)
- **MP4**: All modern browsers (95%+ support)

## Performance Benefits
- Hardware-accelerated playback
- Lower CPU usage than 3D rendering
- Consistent frame rate
- Better mobile performance
- Reduced bundle size
