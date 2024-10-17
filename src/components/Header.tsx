import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Book className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Starvic Brilliant</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            <li><Link to="/add-business" className="hover:text-blue-200">Add Your Business</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;