import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  // Mock data for businesses in this category
  const businesses = [
    { id: 1, name: 'Business 1', rating: 4.5, address: '123 Main St, City', description: 'Short description of Business 1' },
    { id: 2, name: 'Business 2', rating: 4.2, address: '456 Elm St, City', description: 'Short description of Business 2' },
    { id: 3, name: 'Business 3', rating: 4.8, address: '789 Oak St, City', description: 'Short description of Business 3' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName?.replace('-', ' ')}</h1>
      <p className="mb-8">Explore top-rated businesses in the {categoryName?.replace('-', ' ')} category.</p>

      <div className="mb-8">
        {/* Add filters here */}
        <p>Filters placeholder</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div key={business.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{business.name}</h2>
            <div className="flex items-center mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1">{business.rating}</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{business.address}</span>
            </div>
            <p className="text-gray-600 mb-4">{business.description}</p>
            <Link
              to={`/business/${business.id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Add map integration here */}
      <div className="mt-8">
        <p>Map placeholder</p>
      </div>
    </div>
  );
};

export default CategoryPage;