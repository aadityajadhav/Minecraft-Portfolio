import React, { createContext, useContext, useState } from 'react'

const MiningContext = createContext()

export const useMining = () => {
  const context = useContext(MiningContext)
  if (!context) {
    throw new Error('useMining must be used within a MiningProvider')
  }
  return context
}

export const MiningProvider = ({ children }) => {
  const [oreCount, setOreCount] = useState(0)
  const [caveUnlocked, setCaveUnlocked] = useState(false)
  const [minedBlocks, setMinedBlocks] = useState(new Set())

  const addOre = () => {
    const newCount = oreCount + 1
    console.log(`Ore collected! Count: ${newCount}`)
    setOreCount(newCount)
    
    if (newCount >= 30) {
      console.log('Cave unlocked!')
      setCaveUnlocked(true)
      // Trigger coordinated reveal for both sides
      setTimeout(() => {
        revealCaveBackground()
      }, 500)
    }
    
    return newCount
  }

  const revealCaveBackground = () => {
    console.log('Starting coordinated cave reveal for both sides')
    
    // Get remaining blocks from both sides independently
    const remainingLeftBlocks = []
    const remainingRightBlocks = []
    
    for (let i = 0; i < 200; i++) { // 10x20 grid = 200 blocks
      if (!minedBlocks.has(`left-${i}`)) {
        remainingLeftBlocks.push(i)
      }
      if (!minedBlocks.has(`right-${i}`)) {
        remainingRightBlocks.push(i)
      }
    }
    
    // Sort both arrays by row (descending) and then by column
    const gridWidth = 10
    const sortBlocks = (blocks) => {
      return blocks.sort((a, b) => {
        const rowA = Math.floor(a / gridWidth)
        const rowB = Math.floor(b / gridWidth)
        if (rowB !== rowA) return rowB - rowA
        return (a % gridWidth) - (b % gridWidth)
      })
    }
    
    const sortedLeftBlocks = sortBlocks([...remainingLeftBlocks])
    const sortedRightBlocks = sortBlocks([...remainingRightBlocks])
    
    // Get the maximum number of blocks to remove for timing
    const maxBlocks = Math.max(sortedLeftBlocks.length, sortedRightBlocks.length)
    
    // Remove blocks from both sides with staggered timing
    for (let delayIndex = 0; delayIndex < maxBlocks; delayIndex++) {
      setTimeout(() => {
        setMinedBlocks(prev => {
          const newSet = new Set(prev)
          
          // Add left block if it exists at this delay index
          if (delayIndex < sortedLeftBlocks.length) {
            newSet.add(`left-${sortedLeftBlocks[delayIndex]}`)
          }
          
          // Add right block if it exists at this delay index
          if (delayIndex < sortedRightBlocks.length) {
            newSet.add(`right-${sortedRightBlocks[delayIndex]}`)
          }
          
          return newSet
        })
      }, delayIndex * 50) // 50ms delay between each block
    }
  }

  const resetMining = () => {
    console.log('Resetting mining progress')
    setOreCount(0)
    setCaveUnlocked(false)
    setMinedBlocks(new Set())
  }

  return (
    <MiningContext.Provider value={{
      oreCount,
      caveUnlocked,
      minedBlocks,
      setMinedBlocks,
      addOre,
      resetMining,
      revealCaveBackground
    }}>
      {children}
    </MiningContext.Provider>
  )
}
