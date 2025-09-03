import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import BlockTexture from './BlockTexture'
import { useMining } from '../contexts/MiningContext'

const BlockCrossSection = ({ side = 'left' }) => {
  const { oreCount, caveUnlocked, addOre, minedBlocks, setMinedBlocks } = useMining()
  
  // Grid configuration - 10x35 blocks (increased height to reach bottom of longer pages)
  const gridWidth = 10
  const gridHeight = 35
  
  // Block types with weights for randomization (reduced ore chances to 5-10%)
  const blockTypes = [
    { type: 'cobblestone', weight: 0.75, isOre: false },
    { type: 'coal', weight: 0.08, isOre: true },
    { type: 'iron', weight: 0.06, isOre: true },
    { type: 'gold', weight: 0.04, isOre: true },
    { type: 'emerald', weight: 0.03, isOre: true },
    { type: 'diamond', weight: 0.02, isOre: true },
    { type: 'redstone', weight: 0.02, isOre: true }
  ]
  
  // Generate random block types for the grid - ONLY ONCE on page load
  const blockGrid = useMemo(() => {
    const grid = []
    for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
        const index = row * gridWidth + col
        
        let blockType
        
        if (row === 0) {
          // Top row: grass blocks
          blockType = { type: 'grass', weight: 1, isOre: false }
        } else if (row === 1) {
          // Second row: dirt blocks
          blockType = { type: 'dirt', weight: 1, isOre: false }
        } else {
          // All other rows: random blocks based on weights
          const rand = Math.random()
          let cumulative = 0
          let selectedBlock = blockTypes[0] // fallback to cobblestone
          
          for (const block of blockTypes) {
            cumulative += block.weight
            if (rand <= cumulative) {
              selectedBlock = block
              break
            }
          }
          blockType = selectedBlock
        }
        
        grid.push(blockType)
      }
    }
    return grid
  }, []) // Empty dependency array means this only runs once
  
  const handleBlockClick = (index) => {
    if (caveUnlocked || minedBlocks.has(`${side}-${index}`)) return
    
    const block = blockGrid[index]
    const newMinedBlocks = new Set([...minedBlocks, `${side}-${index}`])
    setMinedBlocks(newMinedBlocks)
    
    // Count ores - cave unlock is now handled centrally in MiningContext
    if (block.isOre) {
      addOre()
    }
  }
  
  // If cave is unlocked and all blocks are mined, show nothing
  if (caveUnlocked && Array.from(minedBlocks).filter(block => block.startsWith(`${side}-`)).length === gridWidth * gridHeight) {
    return <div className="h-full w-full" />
  }
  
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      {/* Bottom Layer - Deepslate blocks (always visible until cave unlock) */}
      <div 
        className="grid absolute inset-0 pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
          gridTemplateRows: `repeat(${gridHeight}, 1fr)`,
          gap: '0px',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          aspectRatio: `${gridWidth}/${gridHeight}`
        }}
      >
        {Array.from({ length: gridWidth * gridHeight }, (_, index) => {
          const isTopLayerMined = minedBlocks.has(`${side}-${index}`)
          const shouldShowDeepslate = !caveUnlocked && isTopLayerMined
          
          return (
            <div
              key={`deepslate-${index}`}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                margin: '0',
                padding: '0',
                opacity: shouldShowDeepslate ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                overflow: 'hidden',
                boxSizing: 'border-box',
                filter: 'brightness(0.6) contrast(1.1) saturate(0.9)',
                transform: 'translateZ(-1px)'
              }}
            >
              <BlockTexture 
                type="deepslate" 
                isMined={false}
                caveUnlocked={caveUnlocked}
                size="w-full h-full"
              />
            </div>
          )
        })}
      </div>
      
      {/* Top Layer - Regular blocks */}
      <div 
        className="grid relative z-10"
        style={{
          gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
          gridTemplateRows: `repeat(${gridHeight}, 1fr)`,
          gap: '0px',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          aspectRatio: `${gridWidth}/${gridHeight}`
        }}
      >
        {blockGrid.map((block, index) => {
          const isMined = minedBlocks.has(`${side}-${index}`)
          
          return (
            <motion.div
              key={index}
              className="cursor-pointer w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                margin: '0',
                padding: '0',
                overflow: 'hidden',
                boxSizing: 'border-box'
              }}
              onClick={() => handleBlockClick(index)}
              whileHover={{ scale: isMined ? 1 : 1.05 }}
              whileTap={{ scale: isMined ? 1 : 0.95 }}
              initial={{ opacity: 1, scale: 1 }}
              animate={isMined ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            >
              <BlockTexture 
                type={block.type} 
                isMined={isMined}
                caveUnlocked={caveUnlocked}
                size="w-full h-full"
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default BlockCrossSection
