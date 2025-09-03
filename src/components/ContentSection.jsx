import React from 'react'
import { motion } from 'framer-motion'
import { useMining } from '../contexts/MiningContext'

const ContentSection = () => {
  const { caveUnlocked } = useMining()
  
  return (
    <motion.div 
      className="p-8 h-full"
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
        <h2 className="minecraft-text text-4xl text-minecraft-grass mb-6 text-center">
          ABOUT ME
        </h2>
        
        {/* Item Frame with Profile Picture */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Item Frame */}
            <img 
              src="/itemframe.png" 
              alt="Item Frame" 
              className="w-80 h-80 object-contain"
            />
            {/* Profile Picture - cropped and centered */}
            <img 
              src="/profilepic.JPG" 
              alt="Aaditya Jadhav" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 object-cover rounded-sm"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="p-6 rounded-lg border-2 border-gray-800"
          style={{
            backgroundColor: caveUnlocked ? 'rgba(117, 117, 117, 0.7)' : '#757575',
            transition: 'background-color 1s ease-in-out'
          }}
        >
          <p className="text-lg text-white leading-relaxed">
          Hello! I’m Aaditya Jadhav, a recent graduate from the University of California, Santa Cruz, where I earned my B.S. in Computer Science. Over the past few years, I’ve gained experience through internships at Machinify and Keysight Technologies, as well as projects like EcoMind, PDFPAL, and StimStudy. My interests lie at the intersection of software engineering, artificial intelligence, and creative design—whether that means building full-stack applications, working on ML-driven systems, or crafting unique digital experiences like this Minecraft-themed portfolio.

Outside of coding, you’ll often find me in the gym, making music, snowboarding, or gaming with friends. Feel free to explore (try mining) the rest of my portfolio to learn more about my work! 
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
        <h2 className="minecraft-text text-4xl text-minecraft-grass mb-6 text-center">
          PROJECTS
        </h2>
        <div className="grid gap-6">
          {[
            { title: "EcoMind", description: "AI Research Assistant for Environmental Research Papers" },
            { title: "PDFPAL", description: "AI Chatbot Tool for Analyzing and Answering Questions for Any PDF" },
            { title: "Portfolio Website", description: "The website you are currently on" }
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
        <h2 className="minecraft-text text-4xl text-minecraft-grass mb-6 text-center">
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
              <span className="text-white">aaditya.jadhav2021@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="minecraft-text text-minecraft-grass">GitHub:</span>
              <span className="text-white">https://github.com/aadityajadhav</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="minecraft-text text-minecraft-grass">LinkedIn:</span>
              <span className="text-white">https://www.linkedin.com/in/aaditya-jadhav/</span>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default ContentSection
