import React from 'react'
import Hero from './components/Hero'
import BlockCrossSection from './components/BlockCrossSection'
import ContentSection from './components/ContentSection'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Minecraft Overworld Background */}
      <Hero />
      
      {/* Main Content Area with Side Cross-Sections */}
      <div className="flex">
        {/* Left Cross-Section */}
        <div className="w-1/4 min-h-screen">
          <BlockCrossSection />
        </div>
        
        {/* Main Content Column */}
        <div className="w-2/4">
          <ContentSection />
        </div>
        
        {/* Right Cross-Section */}
        <div className="w-1/4 min-h-screen">
          <BlockCrossSection />
        </div>
      </div>
    </div>
  )
}

export default App
