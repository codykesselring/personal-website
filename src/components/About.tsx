import React from 'react';
import { Code, Database, Globe, Server, FileText } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', items: ['React', 'Angular/JS', 'TypeScript', 'HTML/CSS'] },
    { icon: Server, name: 'Backend Development', items: ['C++', 'Python', 'Java', 'Spring', 'Axon Framework', 'CQRS/Event Sourcing'] },
    { icon: Database, name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'DB2', 'SQL'] },
    { icon: Globe, name: 'Tools & Technologies', items: ['Git', 'Docker', 'AWS', 'Linux', 'Kafka', 'AGILe/Scrum', 'Test-Driven Development', 'OOP', 'Azure DevOps'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Computer Science Student
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently pursuing a Bachelor's degree in Computer Science with minor in Applied Mathematics. 
                I have a strong foundation in algorithms, data structures, and software engineering principles.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm passionate about creating efficient, scalable solutions and staying up-to-date with 
                the latest technologies. I initially got into programming through software development
                and have since expanded into data science and machine learning as well.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-black text-orange-500 rounded-full text-sm font-medium">
                  Quick Learner
                </span>
              </div>
              
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <FileText size={20} className="mr-2" />
                  View Resume
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-6">Education & Experience</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-white">Bachelor of Science in Computer Science</h5>
                  <h5 className="font-semibold text-sm text-gray-300">Minor in Applied Mathematics</h5>
                  <p className="text-gray-300">Gonzaga University • Expected May 2026</p>
                  <p className="text-sm text-gray-400 mt-1">GPA: 3.66</p>
                </div>
                <div>
                  <h5 className="font-semibold text-white">Software Development Intern</h5>
                  <p className="text-gray-300">Expeditors International • Summer 2025</p>
                  <p className="text-sm text-gray-400 mt-1">Developed web applications using Angular, Java Spring, and SQL.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-700 hover:shadow-lg hover:border-orange-500 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-orange-500 mr-3" />
                  <h4 className="font-semibold text-white">{skill.name}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;