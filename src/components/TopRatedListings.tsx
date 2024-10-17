import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const listings = [
  { id: 1, name: 'Green Leaf Cafe', description: 'Organic food & coffee', rating: 4.8 },
  { id: 2, name: 'Tech Solutions Inc.', description: 'IT services & support', rating: 4.7 },
  { id: 3, name: 'Fitness First Gym', description: '24/7 fitness center', rating: 4.9 },
];

const TopRatedListings: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Top-Rated Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{listing.name}</h3>
            <p className="text-gray-600 mb-4">{listing.description}</p>
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{listing.rating}</span>
            </div>
            <Link
              to={`/business/${listing.id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedListings;