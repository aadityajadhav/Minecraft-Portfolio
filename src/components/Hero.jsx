import React, { useState, useRef } from 'react'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            style={{ backgroundColor: '#000' }}
          >
            <source src="/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      {/* Fallback background if video fails to load */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-green-400" />
      )}
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="minecraft-text text-6xl text-white mb-4 text-center drop-shadow-2xl">
          Aaditya Jadhav
        </h1>
        <p className="minecraft-text text-xl text-minecraft-grass text-center max-w-2xl px-4 drop-shadow-lg mt-8">
          Creator. Coder. Builder.
        </p>
      </div>
    </div>
  )
}

export default Hero
