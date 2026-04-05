import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 bg-white shadow-md z-50"
    >
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600">Samir.dev</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* HAMBURGER BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-white shadow-md pb-4"
        >
          <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="py-2">Skills</a>
          <a href="#experience" onClick={() => setOpen(false)} className="py-2">Experience</a>
          <a href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
}