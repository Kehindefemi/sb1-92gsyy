import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart, Home, ShoppingBag, Film, Briefcase } from 'lucide-react';

const categories = [
  { name: 'Restaurants', icon: Utensils, link: '/category/restaurants' },
  { name: 'Health & Wellness', icon: Heart, link: '/category/health-wellness' },
  { name: 'Home Services', icon: Home, link: '/category/home-services' },
  { name: 'Shopping', icon: ShoppingBag, link: '/category/shopping' },
  { name: 'Entertainment', icon: Film, link: '/category/entertainment' },
  { name: 'Professionals', icon: Briefcase, link: '/category/professionals' },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <category.icon className="w-12 h-12 mb-2 text-blue-500" />
            <span className="text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;