"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[100vh] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Video */}
        <video
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          src="/drone.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/drone-hovering.mp4"
          style={{ objectFit: 'cover', objectPosition: 'center', background: '#18181b' }}
        >
          {/* Fallback for browsers that don't support video */}
          <img src="/drone-hovering.gif" alt="Drone Hovering" className="w-full h-full object-cover" style={{ background: '#18181b' }} />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60 z-10" />
        
        {/* Text Box Overlay with Animated Border */}
        <div className="absolute left-4 top-[70%] transform -translate-y-1/2 z-20 w-[calc(100%-2rem)] max-w-sm md:left-8 md:max-w-md lg:left-16 lg:max-w-lg">
          {/* Animated SVG Border */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect
              x="2" y="2" width="96" height="96" rx="8"
              fill="none"
              stroke="rgba(168, 85, 247, 0.6)"
              strokeWidth="0.5"
              strokeDasharray="200"
              strokeDashoffset={isLoaded ? "0" : "200"}
              className="transition-all duration-800 ease-out"
            />
          </svg>
          
          {/* Frosted Glass Box */}
          <div className="relative bg-white/15 backdrop-blur-[10px] p-4 rounded-2xl shadow-2xl border border-white/20">
            <h1 className={`text-3xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg text-left transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="text-purple-400">Exo</span> Dynamics
            </h1>
            <p className={`text-lg md:text-xl max-w-2xl text-white font-medium text-left transition-all duration-500 ease-out delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              A versatile drone ecosystem—hardware, software, and services built for every industry.
            </p>
          </div>
        </div>
        
        {/* Scroll Cue Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className={`animate-bounce transition-opacity duration-1000 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <svg 
              className="w-6 h-6 text-white/70" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      
      {/* Products Section */}
      <section id="products" className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-200">
        <Link href="/products">
        <h2 className="text-3xl font-bold mb-10 text-purple-500 border-b-2 border-purple-900 inline-block">Our Products</h2>
        </Link>
        <div className="flex flex-col gap-12 h-full">
            <div className="bg-white rounded-2xl shadow-xl border border-purple-900 hover:shadow-2xl transition flex flex-col md:flex-row items-center">
              <img
                src={"/visionary.png"}
                alt={"visionary"}
                className="flex w-full md:w-8/16 h-full md:h-full object-cover rounded-l-2xl border-b md:border-b-0 md:border-r border-purple-700"
              />

              <div className="flex1 md:w-1/4 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-purple-500 ">
                  Visionary MK 1
                </h3>
                <div className="text-2xl text-zinc-800">
                  Brief specs
                </div>
              </div>

              
            </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-bold mb-10 text-purple-500 border-b-2 border-purple-900 inline-block">Company Info</h2>
        <div className="max-w-3xl text-zinc-700 mx-auto text-lg">
          <p>
            Exo Dynamics is dedicated to supporting public safety agencies with advanced drone technology, expert training, and ongoing support. Our team brings years of experience in robotics, aviation, and emergency response.
          </p>
        </div>
        <br/>

        <Link href="/about" className="px-8 py-4 bg-purple-700 hover:bg-purple-800 rounded-full text-lg font-semibold transition shadow-lg text-white"> More About Us </Link>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-r from-zinc-100 via-white to-zinc-100">
        <h2 className="text-2xl font-bold mb-10 text-purple-500 border-b-2 border-purple-900 inline-block">Contact</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-xl border border-purple-200">
          <input type="text" placeholder="Your Name" className="p-4 rounded bg-zinc-50 border border-purple-200 text-zinc-900 placeholder-purple-600" />
          <input type="email" placeholder="Your Email" className="p-4 rounded bg-zinc-50 border border-purple-200 text-zinc-900 placeholder-purple-600" />
          <textarea placeholder="How can we help you?" className="p-4 rounded bg-zinc-50 border border-purple-200 text-zinc-900 placeholder-purple-600" rows={4} />
          <button type="submit" className="px-8 py-4 bg-purple-700 hover:bg-purple-800 rounded-full text-lg font-semibold transition shadow-lg text-white">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-500 bg-zinc-50 border-t border-purple-200 mt-8">
        {new Date().getFullYear()} Exo Dynamics. All rights reserved.
      </footer>
    </main>
  );
}
