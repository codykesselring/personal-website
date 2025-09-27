import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Let's Work Together
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on projects, 
                or just having a conversation about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-orange-500 transition-colors">
                      codykesselring@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-orange-500 transition-colors">
                      +1 (907) 500-5683
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-300">Juneau, AK</p>
                    <p className="text-gray-300">Seattle, WA</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/codykesselring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-200 hover:scale-105"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/cody-kesselring/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 hover:scale-105"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-200 hover:scale-105"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;