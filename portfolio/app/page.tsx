'use client'

import { personalInfo } from './lib/constants'
import { ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="section flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-primary to-bg-subtle">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl md:text-5xl font-bold text-text-light mb-4 font-grotesk">
            Crafting Digital Solutions
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Full-stack MERN developer building production systems that solve real problems
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">
              Explore My Work
            </button>
            <button className="btn-secondary">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-12">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
              LinkedIn
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
              Twitter
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-secondary" size={32} />
        </div>
      </section>

      {/* Test Section */}
      <section className="section bg-bg-subtle">
        <h2 className="text-4xl font-bold text-center mb-8">🎉 Setup Complete!</h2>
        <p className="text-center text-text-secondary max-w-2xl mx-auto">
          Your Next.js portfolio is running. This is just a placeholder. Start building your sections!
        </p>
      </section>
    </main>
  )
}