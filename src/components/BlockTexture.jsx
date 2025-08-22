import React from 'react'

const BlockTexture = ({ type, size = "w-full h-full", isMined = false, caveUnlocked = false }) => {
  const getTextureStyle = (blockType) => {
    const textures = {
      grass: {
        backgroundImage: "url('/block-textures/grassblock.png')",
        backgroundColor: '#7CB342', // Fallback color
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      dirt: {
        backgroundImage: "url('/block-textures/dirt.png')",
        backgroundColor: '#8D6E63', // Fallback color
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      cobblestone: {
        backgroundImage: "url('/block-textures/cobblestone.png')",
        backgroundColor: '#6D4C41', // Fallback color
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      coal: {
        backgroundImage: "url('/block-textures/coal-ore.png')",
        backgroundColor: '#424242',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      iron: {
        backgroundImage: "url('/block-textures/iron-ore.png')",
        backgroundColor: '#8D6E63',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      gold: {
        backgroundImage: "url('/block-textures/gold-ore.png')",
        backgroundColor: '#FFD700',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      emerald: {
        backgroundImage: "url('/block-textures/emerald-ore.png')",
        backgroundColor: '#4CAF50',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      diamond: {
        backgroundImage: "url('/block-textures/diamond-ore.png')",
        backgroundColor: '#81C784',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      redstone: {
        backgroundImage: "url('/block-textures/redstone-ore.png')",
        backgroundColor: '#E57373',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      },
      deepslate: {
        backgroundImage: "url('/block-textures/deepslate.png')",
        backgroundColor: '#2F2F2F',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      }
    }
    
    return textures[blockType] || textures.cobblestone
  }

  if (isMined) {
    if (caveUnlocked) {
      // After cave unlock: show cave background
      return (
        <div 
          className={`${size}`}
          style={{
            backgroundImage: "url('/cave.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            margin: '0',
            padding: '0',
            border: '0'
          }}
        />
      )
    } else {
      // Before cave unlock: show deepslate
      return (
        <div 
          className={`${size}`}
          style={{
            backgroundImage: "url('/block-textures/deepslate.png')",
            backgroundColor: '#2F2F2F',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            margin: '0',
            padding: '0',
            border: '0'
          }}
        />
      )
    }
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
