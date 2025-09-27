import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center text-gray-300">
            Made with React & TypeScript
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Cody Kesselring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;