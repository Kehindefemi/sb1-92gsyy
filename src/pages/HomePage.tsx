import React from 'react';
import { Search, MapPin } from 'lucide-react';
import FeaturedCategories from '../components/FeaturedCategories';
import TopRatedListings from '../components/TopRatedListings';
import LatestReviews from '../components/LatestReviews';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-blue-500 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Discover Brilliant Services & Businesses Near You!</h1>
        <p className="text-xl mb-8">Explore top-rated services, connect with local businesses, and find everything you need in one place.</p>
        <div className="max-w-3xl mx-auto flex">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-4 rounded-l-lg text-gray-800"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="w-64 p-4 border-l text-gray-800"
            />
            <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-blue-700 text-white p-4 rounded-r-lg hover:bg-blue-600 transition duration-300">
            Start Exploring
          </button>
        </div>
      </section>

      <FeaturedCategories />
      <TopRatedListings />
      <LatestReviews />
      <CallToAction />
    </div>
  );
};

export default HomePage;