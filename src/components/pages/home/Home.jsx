import React from 'react'
import ParticlesBackground from '../../ParticlesBackground'

function Home() {
  return (
    <div>
    <ParticlesBackground />
    <div style={{ position: "relative", zIndex: 0 }}>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "20vh" }}>
        Welcome to Your Vite Project
      </h1>
    </div>
  </div>
  )
}

export default Home
