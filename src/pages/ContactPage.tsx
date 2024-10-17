import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">Have questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
              <input type="text" id="subject" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-500" />
              <span>123 Directory Lane, Anytown, USA 12345</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-blue-500" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-500" />
              <span>info@starvicbrilliant.com</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
          <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            {/* Placeholder for map */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;