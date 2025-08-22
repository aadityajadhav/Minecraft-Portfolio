import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import BlockTexture from './BlockTexture'

const BlockCrossSection = () => {
  const [minedBlocks, setMinedBlocks] = useState(new Set())
  
  // Grid configuration - 10x20 blocks
  const gridWidth = 10
  const gridHeight = 20
  
  // Block types with weights for randomization (reduced ore chances to 5-10%)
  const blockTypes = [
    { type: 'cobblestone', weight: 0.75 },
    { type: 'coal', weight: 0.08 },
    { type: 'iron', weight: 0.06 },
    { type: 'gold', weight: 0.04 },
    { type: 'emerald', weight: 0.03 },
    { type: 'diamond', weight: 0.02 },
    { type: 'redstone', weight: 0.02 }
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
          blockType = { type: 'grass', weight: 1 }
        } else if (row === 1) {
          // Second row: dirt blocks
          blockType = { type: 'dirt', weight: 1 }
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
    if (!minedBlocks.has(index)) {
      setMinedBlocks(prev => new Set([...prev, index]))
    }
  }
  
  return (
    <div className="h-full bg-minecraft-deepslate w-full">
      <div 
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
          gridTemplateRows: `repeat(${gridHeight}, 1fr)`,
          gap: '0px',
          width: '100%',
          height: '100%'
        }}
      >
        {blockGrid.map((block, index) => {
          const isMined = minedBlocks.has(index)
          
          return (
            <motion.div
              key={index}
              className="cursor-pointer w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                margin: '0',
                padding: '0'
              }}
              onClick={() => handleBlockClick(index)}
              whileHover={{ scale: isMined ? 1 : 1.1 }}
              whileTap={{ scale: isMined ? 1 : 0.9 }}
              initial={{ opacity: 1, scale: 1 }}
              animate={isMined ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            >
              <BlockTexture 
                type={block.type} 
                isMined={isMined}
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
