import React from 'react'
import { motion } from 'framer-motion'
import { useMining } from '../contexts/MiningContext'

const MiningCounter = () => {
  const { oreCount, caveUnlocked } = useMining()
  const totalRequired = 30
  
  return (
    <motion.div
      className="fixed top-4 right-4 z-50 bg-black bg-opacity-80 text-white p-3 rounded-lg border-2 border-minecraft-grass shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="text-sm text-minecraft-grass mb-1">Mining Progress</div>
        <div className="text-2xl font-bold font-minecraft">
          {oreCount}/{totalRequired}
        </div>
        {caveUnlocked && (
          <motion.div
            className="text-xs text-green-400 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🎉 Cave Unlocked!
          </motion.div>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <motion.div
          className="bg-minecraft-grass h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((oreCount / totalRequired) * 100, 100)}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default MiningCounter
