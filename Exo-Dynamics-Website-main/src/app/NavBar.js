"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { key: "Home", label: "Home", href: "/", dialog: <div className="p-6">Explore our Drones.</div> },
  { key: "Products", label: "Products", href: "/products", dialog: <div className="p-6">Learn about our drones.</div> },
  { key: "About", label: "About Us", href: "/about", dialog: <div className="p-6">About Exo Dynamics, our mission, and our team.</div> },
];

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between items-center px-8 ${scrolled ? 'py-3' : 'py-6'} bg-zinc-50 border-b border-purple-900 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]' : 'shadow-none'}`}>
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Exodynamic Logo" className={`object-contain transition-all duration-300 ${scrolled ? 'h-8 w-8' : 'h-10 w-10'}`} />
          <span className="text-2xl font-bold tracking-tight text-purple-500" style={{ fontFamily: 'Orbitron, Montserrat, Audiowide, sans-serif' }}>Exo Dynamics</span>
        </Link>
      </div>
      {/* Desktop Nav with Dialogs */}
      <ul className="hidden md:flex gap-8 text-lg relative">
        {navItems.map(item => (
          <li
            key={item.key}
            className="relative"
            onMouseEnter={() => setOpenDialog(item.key)}
            onMouseLeave={() => setOpenDialog(null)}
          >
            <Link
              href={item.href}
              className="text-[#18181b] hover:text-purple-600 transition px-2 py-1 inline-block uppercase font-medium tracking-wide font-sans"
            >
              {item.label}
            </Link>
            {/* Dialog Window */}
            {openDialog === item.key && (
              <div
                className={`absolute mt-5 w-80 bg-zinc-50/90 backdrop-blur-lg border border-purple-700 rounded-2xl shadow-2xl z-50 animate-fade-slide flex flex-col items-center ${item.key === 'Contact' ? 'right-0' : 'left-1/2 -translate-x-1/2'}`}
                style={{
                  boxShadow: '0 12px 40px 0 rgba(128,0,255,0.10), 0 2px 16px 0 rgba(0,0,0,0.10)',
                  borderImage: 'linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%) 1',
                }}
              >
                <div className="w-full text-purple-600 font-semibold border-b border-purple-700 px-6 pt-6 pb-3 text-lg tracking-wide flex items-center gap-2">
                  {item.label}
                </div>
                <div className="w-full px-6 pb-6 pt-2 text-[#18181b] text-base">
                  {item.dialog}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-7 h-0.5 bg-purple-600 mb-1.5 transition-transform duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-purple-600 mb-1.5 transition-opacity duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-purple-600 transition-transform duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Nav Drawer */}
      {navOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setNavOpen(false)}>
          <div
            className="absolute top-0 right-0 w-64 h-full bg-zinc-50 border-l border-purple-900 shadow-lg flex flex-col p-8 gap-6 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-8 text-purple-600 hover:text-purple-400 text-3xl font-bold"
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation menu"
            >
              &times;
            </button>
            {navItems.map(item => (
              <Link
                key={item.key}
                href={item.href}
                className="py-2 px-4 rounded hover:bg-purple-100/60 transition uppercase font-medium font-sans text-[#18181b]"
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 