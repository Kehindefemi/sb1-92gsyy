import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Starvic Brilliant is your go-to source for finding local businesses and services. We're committed to connecting people with the best our community has to offer.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-300">Home</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-blue-300">Blog</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-300">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-300">Contact Us</Link></li>
              <li><Link to="/add-business" className="text-sm hover:text-blue-300">Add Your Business</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/restaurants" className="text-sm hover:text-blue-300">Restaurants</Link></li>
              <li><Link to="/category/health-wellness" className="text-sm hover:text-blue-300">Health & Wellness</Link></li>
              <li><Link to="/category/home-services" className="text-sm hover:text-blue-300">Home Services</Link></li>
              <li><Link to="/category/shopping" className="text-sm hover:text-blue-300">Shopping</Link></li>
              <li><Link to="/category/entertainment" className="text-sm hover:text-blue-300">Entertainment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300"><Facebook /></a>
              <a href="#" className="text-white hover:text-blue-300"><Twitter /></a>
              <a href="#" className="text-white hover:text-blue-300"><Instagram /></a>
              <a href="#" className="text-white hover:text-blue-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 Starvic Brilliant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;