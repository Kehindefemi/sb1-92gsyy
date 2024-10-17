import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Restaurants in Town',
    snippet: 'Discover the best dining experiences our city has to offer...',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Food & Dining'
  },
  {
    id: 2,
    title: 'How to Choose the Right Home Service Provider',
    snippet: 'Tips for finding reliable professionals for your home maintenance needs...',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Home Services'
  },
  {
    id: 3,
    title: 'Upcoming Local Events This Summer',
    snippet: 'Mark your calendars for these exciting community gatherings...',
    image: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Events'
  },
];

const BlogPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Starvic Brilliant Blog</h1>
      <p className="mb-8">Stay updated with the latest news, tips, and insights about local businesses and services.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-semibold">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.snippet}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/blog/category/food-dining" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition duration-300">
            Food & Dining
          </Link>
          <Link to="/blog/category/home-services" className="bg-green-100 text-green-700 px-4 py-2 rounded-full hover:bg-green-200 transition duration-300">
            Home Services
          </Link>
          <Link to="/blog/category/events" className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full hover:bg-purple-200 transition duration-300">
            Events
          </Link>
          <Link to="/blog/category/business-tips" className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full hover:bg-yellow-200 transition duration-300">
            Business Tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;