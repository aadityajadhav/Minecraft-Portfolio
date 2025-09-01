import React from 'react'
import Hero from './components/Hero'
import BlockCrossSection from './components/BlockCrossSection'
import ContentSection from './components/ContentSection'
import MiningCounter from './components/MiningCounter'
import { MiningProvider, useMining } from './contexts/MiningContext'

const AppContent = () => {
  const { caveUnlocked } = useMining()
  
  return (
    <div className="min-h-screen bg-black">
      {/* Mining Counter - Fixed position top-right */}
      <MiningCounter />
      
      {/* Hero Section with Minecraft Overworld Background */}
      <Hero />
      
      {/* Main Content Area with Side Cross-Sections */}
      <div className="flex relative min-h-screen">
        {/* Cave Background Image - Only appears after unlock and positioned behind block columns */}
        {caveUnlocked && (
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "url('/cave.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.8
            }}
          />
        )}
        
        {/* Left Cross-Section */}
        <div className="w-1/4 min-h-screen relative z-10">
          <BlockCrossSection side="left" />
        </div>
        
        {/* Main Content Column */}
        <div className="w-2/4 min-h-screen relative z-10">
          <ContentSection />
        </div>
        
        {/* Right Cross-Section */}
        <div className="w-1/4 min-h-screen relative z-10">
          <BlockCrossSection side="right" />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <MiningProvider>
      <AppContent />
    </MiningProvider>
  )
}

export default App
