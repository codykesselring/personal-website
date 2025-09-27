import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cody\'s Programing Language',
      description: 'A OOP language interpreter built in Python with syntax similar to Java with all basic features and follows the compilation pipeline.',
      image: 'https://d8it4huxumps7.cloudfront.net/uploads/images/67db1398cb86c_phases_of_a_compiler_flowchart.jpg?d=2000x2000',
      technologies: ['Python', 'OOP', 'Interpreter', 'Compiler Design', 'Machine Code'],
      githubUrl: 'https://github.com/codykesselring/cody_mypl',
      liveUrl: null,
      icon: Code,
    },
    {
      title: 'Metro Card Database',
      description: 'A relational database for metro card management developed in SQL during a semester in Madrid, Spain.',
      image: 'https://memgraph.com/images/blog/graph-database-vs-relational-database/memgraph-relational-schema.png',
      technologies: ['SQL', 'Triggers', 'Python', 'Database Design'],
      githubUrl: 'https://github.com/codykesselring/MadridMetroDatabase',
      liveUrl: null,
      icon: Database,
    },
    {
      title: 'Blocks World A* Solution',
      description: 'A solution to the Blocks World problem using the A* search algorithm, implemented using python and a custom heuristic function.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/a_-search-algorithm-1.png',
      technologies: ['Machine Learning', 'Python', 'A* Search Algorithm', 'Heuristic Functions'],
      githubUrl: 'https://github.com/codykesselring/Block-World-A-Solution',
      liveUrl: null,
      icon: Code,
    },
    {
      title: 'File Parsing and Manipulation',
      description: 'The program uses a Java to take and input file and parse it to extract specific information, then manipulate the data and output it to a new file given the instructions within instructions.txt file.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'File IO', 'Data Manipulation', 'Parsing'],
      githubUrl: 'https://github.com/codykesselring/File-IO-Example',
      liveUrl: null,
      icon: Code,
    },
    {
      title: 'Connect 4 Application',
      description: 'A GUI based Connect 4 game built in Java with a simple and intuitive interface allowing two players to play against each other.',
      image: 'https://m.media-amazon.com/images/I/81ZNRHJ+cIL._UF894,1000_QL80_.jpg',
      technologies: ['Java', 'App Dev', 'GUI', 'UX', 'Event Handling'],
      githubUrl: 'https://github.com/codykesselring/Connect4-with-GUI',
      liveUrl: null,
      icon: Code,
    },
    {
      title: 'Outfit Generator',
      description: 'A GUI based outfit generator that uses a picture of me where you can cycle through picture of my clothes that are pasted onto my model to create realistic outfit.',
      image: 'https://www.moderngentlemanmagazine.com/wp-content/uploads/2024/04/Crisp-White-Shirt-and-Chinos-Casual-Outfit-650x813.jpg',
      technologies: ['Python', 'App Dev', 'GUI', 'UX'],
      githubUrl: 'https://github.com/codykesselring/Outfit-Generator',
      liveUrl: null,
      icon: Code,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 overflow-hidden hover:shadow-xl hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <project.icon className="w-6 h-6 text-orange-500 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;