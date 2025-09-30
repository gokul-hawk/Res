import React, { useState } from 'react';

// Project data as provided by the user
const initialProjects = [
  {
    title: 'AI Tutor',
    description: 'An adaptive AI-based tutoring system that identifies conceptual gaps and offers learning suggestions. [under construction]',
    Explanation: "A Python Tutor system which provides the student the knowledge on the topic they needed by understanding their understanding of their previous topics through adaptive quiz and knowledge graph and teach them using very hand-picked technique suitable for the concept. It makes them code and debug for apply-and-analyze phases and then create a small project with the learnt topic. It also helps visualize algorithms or problems effectively, providing greater understanding.",
    components: ['React', 'Tailwind CSS', 'Neo4j','Django','Langchain','Gemini','Huggingface'],
  },
  {
    title: 'Movie Ticket Agent',
    description: 'A MongoDB-backed chat agent system for smart seat selection and theater bookings.',
    Explanation: "An AI-powered ticket booking system where users interact with a chat agent that fetches real-time seat availability, recommends the best seats, and manages booking. It is powered by MongoDB for data management and integrated with a conversational interface for a natural booking experience.",
    components: ['React', 'Tailwind CSS', 'MongoDB', 'Django', 'LangChain', 'Gemini'],
  },
  {
    title: 'SportsConnect',
    description: 'A social platform for athletes to connect, share achievements, and organize matches.',
    Explanation: "A platform built to connect sports enthusiasts and athletes. It allows users to showcase their achievements, find partners for practice or matches, and organize local tournaments. Features include activity feeds, achievements board, and group event planning.",
    components: ['React-Native', 'Tailwind CSS', 'Django', 'mongoDB'],
  },
  {
    title: 'Wedding Planner',
    description: 'A website for planners and customers to connect, share ideas, and plan weddings.',
    Explanation: "This project provides a collaboration space for wedding planners and customers. Users can share ideas, browse inspirations, book planners, and manage tasks with timelines. The goal is to make wedding planning more organized and visually engaging.",
    components: ['HTML', 'CSS', 'Php', 'MySQL'],
  },
  {
    title: 'Calculator',
    description: 'My hello world project using HTML, CSS, and JavaScript.',
    Explanation: "A beginner-level project built as the very first step in programming. It is a simple calculator with basic operations (addition, subtraction, multiplication, division) made using only HTML, CSS, and JavaScript to practice UI and event handling.",
    components: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Lora Fine-Tuned Llama for Device Suggestion',
    description: 'A fine-tuned LoRA model for personalized device suggestions using Llama and Django.',
    Explanation: "An AI model fine-tuned with Low-Rank Adaptation (LoRA) on top of LLaMA. It analyzes user preferences and suggests devices like mobiles or laptops. Integrated with a Django backend to serve recommendations as an API for real-time decision-making.",
    components: ['LoRA', 'LLaMA', 'Django', 'Huggingface Transformers'],
  },
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce website with product retrieval and ranking. [under renovation based on ONDC]',
    Explanation: "This project aggregates products from different sites and displays them in a user-friendly interface. Products are ranked based on ratings and user reviews. Currently being updated to integrate with ONDC (Open Network for Digital Commerce).",
    components: ['React', 'Tailwind CSS', 'Django', 'PostgreSQL', 'ONDC APIs'],
  },
  {
    title: 'Folder Allocator',
    description: 'An AI agent-based tool to allocate folders based on user preferences and file types.',
    Explanation: "This project automates file organization by categorizing files based on type and user-defined rules. The AI agent intelligently places files into their respective folders, reducing manual effort and improving productivity.",
    components: ['Python', 'LangChain', 'Huggingface'],
  },
  {
    title: 'My Published Paper',
    description: 'Advancement of ML in Smart Houses, published in *Integrating Metaheuristics in Computer Vision* [Scopus Indexed].',
    Explanation: "A research contribution focusing on how Machine Learning can optimize smart house systems, integrated as a book chapter. Published in *Integrating Metaheuristics in Computer Vision* (indexed in Scopus) by Elsevier. This work highlights innovative applications of ML for real-world optimization in smart environments.",
    components: ['Research', 'Machine Learning', 'Metaheuristics'],
  },
];

// Helper function to shuffle the array
const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Main Project Card Component
const ProjectCard = ({ project, handleCardClick }) => (
  <div
    key={project.title}
    onClick={handleCardClick}
    className="group relative h-36 rounded-xl overflow-hidden cursor-pointer
               transition-all duration-500 ease-in-out bg-[#1a1a2e] p-6 shadow-xl border border-[#3f3f5a]
               hover:shadow-[0_0_40px_#00f2fe] hover:border-cyan-400 hover:h-[38rem]
               md:h-40 md:hover:h-[33rem]
              "
  >
    <div className="z-10 relative">
      <h3 className="text-2xl font-bold mb-2 neon-text transition-colors duration-300 group-hover:text-cyan-400">
        {project.title}
      </h3>
      <p className="text-sm text-gray-300 transition-opacity duration-300 mb-4">
        {project.description}
      </p>
    </div>

    <div className="pt-4 mt-4 border-t border-gray-700/50">
        <h4 className="text-lg font-semibold mb-2 text-cyan-400">Detailed Explanation:</h4>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {project.Explanation}
        </p>

        <h4 className="text-md font-semibold mb-2 text-cyan-400">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
            {project.components.map((comp, i) => (
                <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-800/40 text-cyan-200 border border-cyan-700/50 shadow-inner"
                >
                    {comp}
                </span>
            ))}
        </div>
    </div>

    <div className="absolute top-4 right-4 text-cyan-400 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transform transition-transform duration-500 group-hover:rotate-180">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    </div>
  </div>
);

// Main Section Component
const ProjectSection = () => {
  const [projects, setProjects] = useState(initialProjects);

  const handleCardClick = () => {
    const shuffled = shuffleArray(initialProjects);
    setProjects(shuffled);
  };

  return (
    <section 
      id="projects" 
      className="blended-background h-screen bg-cover bg-center flex items-center justify-center font-sans text-white py-16 px-4"
      style={{ backgroundImage: "url('/H12.png')"}}
    >
      <style>{`
        .neon-text {
          text-shadow: 0 0 5px #00f2fe, 0 0 10px #00f2fe;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-cyan-400 neon-text tracking-wider">
          Featured Projects
        </h2>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              handleCardClick={handleCardClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;