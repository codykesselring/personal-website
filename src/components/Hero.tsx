import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img
              src="./public/headshot.jpg"
              alt="Cody Kesselring"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-orange-500 transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-orange-500/30 opacity-90 hover:opacity-100"            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-orange-500">Cody Kesselring</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
            Computer Science Student
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about building innovative solutions and exploring the latest technologies. 
            I love turning complex problems into elegant, user-friendly applications.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
            <a
              href="https://github.com/codykesselring"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:codykesselring@gmail.com"
              className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-200 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-500 hover:text-orange-500 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;