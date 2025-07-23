
"use client";
import { useState } from "react";

export default function About() {
  
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 font-sans">
      
      {/* About Us Header */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          About <span className="text-purple-500">Exo Dynamics</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-zinc-300">
          write something here (a slogan maybe)
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-6 md:px-16 bg-zinc-900">
        <h2 className="text-3xl font-bold mb-10 text-purple-500 border-b-2 border-purple-900 inline-block">
          Our Mission
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-zinc-300">
          Placeholder mission statement
        </p>
      </section>

      {/* Our Team Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <h2 className="text-3xl font-bold mb-10 text-purple-500 border-b-2 border-purple-900 inline-block">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Team Member Example */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-xl border border-purple-900 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Zamil Uddin</h3>
            <p className="text-zinc-300">CEO</p>
          </div>
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-xl border border-purple-900 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Suraj Karumsi</h3>
            <p className="text-zinc-300">COO</p>
          </div>
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-xl border border-purple-900 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Daniel Ismailov</h3>
            <p className="text-zinc-300">Head of CS</p>
          </div>
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-xl border border-purple-900 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Sakirul Karim</h3>
            <p className="text-zinc-300">Head of CV</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-500 bg-zinc-950 border-t border-purple-900 mt-8">
        {new Date().getFullYear()} Exo Dynamics. All rights reserved.
      </footer>
    </main>
  );
}