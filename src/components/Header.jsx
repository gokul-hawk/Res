import { useState } from "react";
import '../index.css';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-transparent-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    
        <div className="text-2xl font-bold">
            <h1 class="text-3d text-5xl font-bold text-blue-600">
  MY portfolio
</h1>
           
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <button class="bg-transparent hover:bg-gray-100 text-white-700 font-semibold py-2 px-4 border border-gray-500 rounded"><a href="#home" className="text-white-400 hover:text-blue-400 transition">Home</a></button>
          <button class="bg-transparent hover:bg-gray-100 text-white-700 font-semibold py-2 px-4 border border-gray-500 rounded"><a href="#about" className="hover:text-blue-400 transition">About</a></button>
          <button class="bg-transparent hover:bg-gray-100 text-white-700 font-semibold py-2 px-4 border border-gray-500 rounded"><a href="#projects" className="hover:text-blue-400 transition">Projects</a></button>
          <button class="bg-transparent hover:bg-gray-100 text-white-700 font-semibold py-2 px-4 border border-gray-500 rounded"><a href="#contact" className="hover:text-blue-400 transition">Contact</a></button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      
        <nav className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4 text-center">
          <a href="#home" className="block hover:text-blue-400 transition">Home</a>
          <a href="#about" className="block hover:text-blue-400 transition">About</a>
          <a href="#projects" className="block hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="block hover:text-blue-400 transition">Contact</a>
        </nav>
      
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-pink-500 shadow-[0_0_10px_#ec4899]" />
        <div className="flex-1 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
        <div className="flex-1 bg-green-400 shadow-[0_0_10px_#34d399]" />
        <div className="flex-1 bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
        <div className="flex-1 bg-purple-400 shadow-[0_0_10px_#a78bfa]" />
      </div>
    </header>
  );
}
