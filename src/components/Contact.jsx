import React from 'react';

/**
 * ContactSection Component
 * A modern, dark-themed section showing direct contact details and a resume download link.
 */
const ContactSection = () => {
  // Resume placeholder URL - UPDATE THIS! When a user clicks this link, their browser 
  // will attempt to download the file specified by this URL.
  const RESUME_URL = "/path/to/your/resume.pdf"; 
  
  return (
    <section id="contact" className="min-h-screen bg-[#0f0f1f] text-white py-20 px-4 flex items-center justify-center font-sans">
      {/* Custom CSS for Neon effect on text and focus states */}
      <style>{`
        .neon-text {
          text-shadow: 0 0 5px #00f2fe, 0 0 10px #00f2fe;
        }
        .social-icon:hover {
            text-shadow: 0 0 10px #00f2fe;
        }
        .cta-btn {
            transition: all 0.5s ease-in-out;
        }
        .cta-btn:hover {
            box-shadow: 0 0 20px #00f2fe; /* Stronger neon glow on hover */
            transform: scale(1.05); /* Enhanced hover effect */
        }
      `}</style>
      
      <div className="max-w-lg w-full mx-auto p-8 rounded-xl bg-[#1a1a2e] shadow-2xl border border-[#3f3f5a] text-center">
        
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-4 text-cyan-400 neon-text tracking-wider">
          Let's Connect
        </h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          Find me on social platforms or download my latest resume below.
        </p>
        
        {/* --- Social Links Section --- */}
        <div className="pt-4 mb-12">
            <h3 className="text-2xl font-semibold text-center text-cyan-400 mb-6">Contact Details</h3>
            
            <div className="flex justify-center space-x-12">
                
                {/* 1. Gmail/Email Link */}
                <a 
                    href="mailto:gokulaudhayannv@gmail@gmail.com" 
                    className="flex flex-col items-center group text-gray-300 hover:text-cyan-400 transition social-icon transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 transition-transform">
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span className="text-base font-medium">Gmail</span>
                    <span className="text-sm text-gray-500">gokulaudhayannv@gmail.com</span>
                </a>

                {/* 2. GitHub Link */}
                <a 
                    href="https://github.com/gokul-hawk" 
                    className="flex flex-col items-center group text-gray-300 hover:text-cyan-400 transition social-icon transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 transition-transform">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-1 6-2.5 6-5.5.08-1.25-.27-2.44-.78-3.5l.44-1.55a.7.7 0 0 0-.25-.65c-.75-.54-1.85-.92-3.03-1.07-1.3-.35-2.65-.13-3.87.5-1.42-.58-3.3-1-4.87-.5-1.18.15-2.28.53-3.03 1.07a.7.7 0 0 0-.25.65L4 8c-.5.85-.75 2.5-.75 3.5 0 3 3 4.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"></path>
                    </svg>
                    <span className="text-base font-medium">GitHub:</span>
                    <span className="text-sm text-gray-500">gokul-hawk</span>
                </a>

                {/* 3. LinkedIn Link */}
                <a 
                    href="https://www.linkedin.com/in/gokula-udhayan/" 
                    className="flex flex-col items-center group text-gray-300 hover:text-cyan-400 transition social-icon transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 transition-transform">
                        <path d="M16 8a6 6 0 0 0-6 6v7H6v-7a6 6 0 0 1 6-6h2a2 2 0 0 1 2 2v1"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="text-base font-medium">LinkedIn</span>
                    <span className="text-sm text-gray-500">gokula-udhayan</span>
                </a>
            </div>
        </div>
        
        {/* --- Resume Downloader Button --- */}
        <div className="pt-6 border-t border-gray-700/50 mt-8">
            <h3 className="text-2xl font-semibold text-center text-cyan-400 mb-6">Want to see my full history?</h3>
            <a
                href="./Professional_Resume.pdf"
                download="My_Professional_Resume.pdf" 
                className="cta-btn inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-xl font-bold 
                           shadow-lg shadow-cyan-500/50"
            >
                {/* Download Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
                Download Resume
            </a>
           
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
