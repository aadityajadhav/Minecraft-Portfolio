import React from 'react'
import { motion } from 'framer-motion'

const ContentSection = () => {
  return (
    <div className="min-h-screen bg-minecraft-deepslate p-8">
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
        <div className="bg-minecraft-stone p-6 rounded-lg border-2 border-gray-800">
          <p className="text-lg text-white leading-relaxed">
            I'm a passionate developer who loves creating interactive experiences. 
            When I'm not coding, you can find me exploring virtual worlds and 
            building pixelated adventures.
          </p>
        </div>
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
              className="bg-minecraft-stone p-6 rounded-lg border-2 border-gray-800 cursor-pointer hover:border-minecraft-grass transition-colors"
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
        <div className="bg-minecraft-stone p-6 rounded-lg border-2 border-gray-800">
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
        </div>
      </motion.section>
    </div>
  )
}

export default ContentSection
