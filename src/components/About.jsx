import React from "react";
import { motion } from "framer-motion";
import '../index.css';

// This HighlightWord component should be in its own file (e.g., HighlightWord.jsx)
// and then imported into the About component.
const HighlightWord = ({ children, color }) => {
  return (
    <motion.span
      className={`inline-block cursor-grab font-semibold ${color} select-none`}
      drag
      dragConstraints={{ left: -50, right: 50, top: -20, bottom: 20 }}
      dragElastic={0.3}
      whileTap={{ scale: 5.0 }}
      whileDrag={{ scale: 1.1, rotate: 20 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.span>
  );
};

const About = () => {
  return (

    <section
      id="about"
      className="blended-background h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/H11.png')" }}
    >
      {/* All content must be inside this single parent div for proper layout */}

      <div className="max-w-4xl mx-auto text-center bg-gray-400/20" >
        <p className="text-md text-gray-400">have fun by dragging the words</p>
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
          About Me
        </h2>
        {/* Your gradient border for visual separation */}
        <div className="border-b-4 border-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-32 mx-auto mb-6"></div>
        <p className="text-md text-gray-400 leading-8 mb-6">
          Hey there! I’m a <HighlightWord color="text-yellow-400">passionate developer</HighlightWord>, <HighlightWord color="text-purple-300">tech explorer</HighlightWord>, and part-time <HighlightWord color="text-red-400">bug creator</HighlightWord> (don’t worry, I fix them too 😌). I have a strong foundation in <HighlightWord color="text-blue-400">software engineering</HighlightWord>, <HighlightWord color="text-indigo-300">AI/ML basics</HighlightWord>, and <HighlightWord color="text-green-400">full-stack development</HighlightWord>, and I love building things that make life easier—or at least look cool while failing successfully. 😄
        </p>

        <p className="text-md text-gray-400 leading-8 mb-6">
          I enjoy working with tools like <HighlightWord color="text-yellow-300">Python</HighlightWord>, <HighlightWord color="text-yellow-400">JavaScript</HighlightWord>, <HighlightWord color="text-blue-300">React</HighlightWord>, and anything that lets me turn <HighlightWord color="text-orange-400">caffeine into code</HighlightWord>. Whether it's crafting <HighlightWord color="text-purple-400">intelligent systems</HighlightWord>, automating boring tasks, or experimenting with the latest <HighlightWord color="text-pink-400">AI models</HighlightWord>, I love bringing ideas to life. 🚀🤖
        </p>

        <p className="text-md text-gray-400 leading-8 mb-6">
          � I <HighlightWord color="text-red-300">thrive on challenges</HighlightWord>—give me a problem, and I’ll happily overthink it until the solution magically appears at 3 AM. I enjoy blending <HighlightWord color="text-teal-300">creativity, logic</HighlightWord>, and just the right amount of chaos to build meaningful, efficient, and user-friendly projects.
        </p>

        <p className="text-md text-gray-400 leading-8 mb-6">
          I’m constantly exploring new technologies in <HighlightWord color="text-indigo-400">AI, automation</HighlightWord>, and intelligent systems—because who doesn’t want their code to be smarter than them one day? 🤷‍♀️💻
        </p>

        <div className="text-md text-gray-400 leading-8 mb-6 text-left inline-block">
          <p className="mb-2">When I’m not coding, you’ll probably find me:</p>
          <p className="ml-4">✈️ Dreaming about <HighlightWord color="text-green-300">traveling the world</HighlightWord>,</p>
          <p className="ml-4">📸 <HighlightWord color="text-blue-300">Exploring new places</HighlightWord> like a curious traveler, not a tourist,</p>
          <p className="ml-4">💸 And doing all of that with a wallet that strongly disagrees with my ambitions. 🥹</p>
        </div>

        <p className="text-md text-gray-400 leading-8 mb-6">
          My dream? A <HighlightWord color="text-yellow-400">career</HighlightWord> that lets me build cool things, learn endlessly, and collect memories across the globe—preferably without my bank account crying every month. 🌍😂
        </p>

        <div className="text-md text-gray-400 leading-8">
          <p>✨ <HighlightWord color="text-pink-300">Learning every day</HighlightWord></p>
          <p>✨ <HighlightWord color="text-orange-300">Building with passion</HighlightWord></p>
          <p>✨ And <HighlightWord color="text-red-400">debugging</HighlightWord> with tears and determination</p>
        </div>
      </div>

    </section>

  );
};

export default About;