
"use client";
import { useState } from "react";

export default function Products() {
  const products = [
    { 
      name: "Visionary MK 1", 
      image: "/visionary.png", 
      specs: (
        <>
          <p>Size: 14inx14inx8in</p>
          <p>Weight: 3kg</p>
          <p>Fully Autonomous</p>
          <p>Range: 5km</p>
          <p>other specs...</p>
        </>
      ),  
      payload:  (
        <>
          <p>Size: 2inx2inx2in</p>
          <p>Custom Vibration Dampening</p>
          <p>Efficient Wire Routing</p>
          <p>Integrated Data Aquisition</p>
          <p>Customizable Housing and Sensor Integration</p>
          <p></p>
        </>
      )
    },
    // { 
    //   name: "Drone 2", 
    //   image: "/visionary.png", 
    //   specs: ""
    // },
    // { 
    //   name: "Ground Support Equipment", 
    //   image: "/visionary.png", 
    //   specs: ""
    // },
  ];

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-100 font-sans">
      <section className="relative w-full min-h-[60vh] h-[100vh] flex items-center justify-center overflow-hidden" style={{ height: '100vh', minHeight: '60vh' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/drone_hovering.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/drone-hovering.mp4"
          style={{ objectFit: 'cover', objectPosition: 'center', background: '#ffffffff' }}
        >
          {/* Fallback for browsers that don't support video */}
          <img src="/visionary.png" alt="Drone Hovering" className="absolute inset-0 w-full h-full object-cover " style={{ background: '#ffffffff' }} />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col text-center w-full px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">Visionary MK 1</h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-zinc-300 via-zinc-200 to-zinc-100">
        <h1 className="text-4xl font-bold text-purple-500 mb-10 border-b-2 border-purple-500 inline-block">
          Our Products
        </h1>

        <div className="flex flex-col gap-12 h-full">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-purple-900 hover:shadow-2xl transition flex flex-col md:flex-row items-center">
              <img
                src={product.image}
                alt={product.name}
                className="flex w-full md:w-8/16 h-full md:h-full object-cover rounded-l-2xl border-b md:border-b-0 md:border-r border-purple-700"
              />

              <div className="flex1 md:w-1/4 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-purple-500 ">
                  {product.name}
                </h3>
                <div className="text-2xl text-zinc-800">
                  {product.specs}
                </div>
              </div>


              <div className="flex1 md:w-1/4 text-center md:border-l md:border-purple-700">
                <h3 className="text-3xl font-semibold mb-4 text-purple-500">
                  Payload Capabilities
                </h3>
                <div className="text-2xl text-zinc-800">
                  {product.payload}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-500 bg-zinc-50 border-t border-purple-900 mt-8">
        {new Date().getFullYear()} Exo Dynamics. All rights reserved.
      </footer>
    </main>
  );
}