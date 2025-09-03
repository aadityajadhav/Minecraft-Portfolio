import React from 'react'

const BlockTexture = ({ type, size = "w-full h-full", isMined = false, caveUnlocked = false }) => {
  const getTextureStyle = (blockType) => {
    const textures = {
      grass: {
        backgroundImage: "url('/block-textures/grassblock.png')",
        backgroundColor: '#7CB342', // Fallback color
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      dirt: {
        backgroundImage: "url('/block-textures/dirt.png')",
        backgroundColor: '#8D6E63', // Fallback color
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      cobblestone: {
        backgroundImage: "url('/block-textures/cobblestone.png')",
        backgroundColor: '#6D4C41', // Fallback color
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      coal: {
        backgroundImage: "url('/block-textures/coal-ore.png')",
        backgroundColor: '#424242',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      iron: {
        backgroundImage: "url('/block-textures/iron-ore.png')",
        backgroundColor: '#8D6E63',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      gold: {
        backgroundImage: "url('/block-textures/gold-ore.png')",
        backgroundColor: '#FFD700',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      emerald: {
        backgroundImage: "url('/block-textures/emerald-ore.png')",
        backgroundColor: '#4CAF50',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      diamond: {
        backgroundImage: "url('/block-textures/diamond-ore.png')",
        backgroundColor: '#81C784',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      redstone: {
        backgroundImage: "url('/block-textures/redstone-ore.png')",
        backgroundColor: '#E57373',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      deepslate: {
        backgroundImage: "url('/block-textures/deepslate.png')",
        backgroundColor: '#2F2F2F',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }
    }
    
    return textures[blockType] || textures.cobblestone
  }

  if (isMined) {
    // When mined, show nothing (transparent)
    return null
  }

  return (
    <div 
      className={`${size}`}
      style={{
        ...getTextureStyle(type),
        margin: '0',
        padding: '0',
        border: '0'
      }}
    />
  )
}

export default BlockTexture
