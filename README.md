# Minecraft Portfolio

A React-based portfolio website with a Minecraft theme, featuring 3D scenes, mineable blocks, and smooth animations.

## Features

- **Hero Section**: 3D Minecraft overworld with animated clouds and sky
- **Interactive Blocks**: Left and right cross-sections with mineable blocks (cobblestone, ores)
- **Content Sections**: About me, projects, and contact information
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **Responsive Design**: Tailwind CSS styling with Minecraft color palette

## Tech Stack

- **Frontend**: React 18 + Vite
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand (if needed)
- **Fonts**: Press Start 2P, VT323 (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with 3D scene
│   ├── HeroScene.jsx      # 3D scene components
│   ├── BlockCrossSection.jsx # Mineable blocks grid
│   └── ContentSection.jsx # Main content (about, projects, contact)
├── App.jsx                # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Colors
Edit `tailwind.config.js` to modify the Minecraft color palette.

### Block Types
Modify the `blockTypes` array in `BlockCrossSection.jsx` to change block appearance and rarity.

### 3D Scene
Adjust camera position, lighting, and scene elements in `HeroScene.jsx`.

## Performance Notes

- Uses instancing for repeated 3D elements
- Lazy loading for heavy assets
- Optimized animations with reduced motion support
- Efficient block rendering with React state management

## Browser Support

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (with reduced 3D features)

## License

MIT License - feel free to use this as a template for your own portfolio!
