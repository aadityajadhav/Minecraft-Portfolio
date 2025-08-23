import React from 'react'
import { motion } from 'framer-motion'
import { useMining } from '../contexts/MiningContext'

const ContentSection = () => {
  const { caveUnlocked } = useMining()
  
  return (
    <motion.div 
      className="min-h-screen p-8"
      style={{
        backgroundColor: caveUnlocked ? 'transparent' : '#2F2F2F',
        transition: 'background-color 1s ease-in-out'
      }}
    >
      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="minecraft-text text-4xl text-minecraft-grass mb-6">
          ABOUT ME
        </h2>
        <motion.div 
          className="p-6 rounded-lg border-2 border-gray-800"
          style={{
            backgroundColor: caveUnlocked ? 'rgba(117, 117, 117, 0.7)' : '#757575',
            transition: 'background-color 1s ease-in-out'
          }}
        >
          <p className="text-lg text-white leading-relaxed">
            I'm a passionate developer who loves creating interactive experiences. 
            When I'm not coding, you can find me exploring virtual worlds and 
            building pixelated adventures.
          </p>
        </motion.div>
      </motion.section>
      
      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="minecraft-text text-4xl text-minecraft-grass mb-6">
          PROJECTS
        </h2>
        <div className="grid gap-6">
          {[
            { title: "Block Adventure", description: "A 3D platformer game built with Three.js" },
            { title: "Pixel Art Creator", description: "Web-based pixel art editor with real-time collaboration" },
            { title: "Minecraft Clone", description: "Voxel-based world generator with procedural terrain" }
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg border-2 border-gray-800 cursor-pointer hover:border-minecraft-grass transition-colors"
              style={{
                backgroundColor: caveUnlocked ? 'rgba(117, 117, 117, 0.7)' : '#757575',
                transition: 'background-color 1s ease-in-out'
              }}
            >
              <h3 className="minecraft-text text-2xl text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white opacity-80">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="minecraft-text text-4xl text-minecraft-grass mb-6">
          CONTACT ME
        </h2>
        <motion.div 
          className="p-6 rounded-lg border-2 border-gray-800"
          style={{
            backgroundColor: caveUnlocked ? 'rgba(117, 117, 117, 0.7)' : '#757575',
            transition: 'background-color 1s ease-in-out'
          }}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="minecraft-text text-minecraft-grass">Email:</span>
              <span className="text-white">developer@minecraft.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="minecraft-text text-minecraft-grass">GitHub:</span>
              <span className="text-white">@minecraft-dev</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="minecraft-text text-minecraft-grass">LinkedIn:</span>
              <span className="text-white">linkedin.com/in/minecraft-dev</span>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default ContentSection
