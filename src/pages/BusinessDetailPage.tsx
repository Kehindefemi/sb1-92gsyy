import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Globe, Clock } from 'lucide-react';

const BusinessDetailPage: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();

  // Mock data for a business
  const business = {
    id: 1,
    name: 'Green Leaf Cafe',
    rating: 4.8,
    reviewCount: 120,
    address: '123 Main St, Anytown, USA',
    phone: '(555) 123-4567',
    website: 'www.greenleafcafe.com',
    hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-7pm',
    description: 'Green Leaf Cafe is a cozy spot offering organic, locally-sourced meals and fair-trade coffee. Our mission is to provide delicious, healthy food while supporting local farmers and sustainable practices.',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
      
      <div className="flex items-center mb-4">
        <Star className="w-6 h-6 text-yellow-400 fill-current" />
        <span className="ml-2 font-semibold">{business.rating}</span>
        <span className="ml-2 text-gray-600">({business.reviewCount} reviews)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <span>{business.address}</span>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 mr-2 text-gray-600" />
            <span>{business.phone}</span>
          </div>
          <div className="flex items-center mb-2">
            <Globe className="w-5 h-5 mr-2 text-gray-600" />
            <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {business.website}
            </a>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2 text-gray-600" />
            <span>{business.hours}</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p>{business.description}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {business.images.map((image, index) => (
            <img key={index} src={image} alt={`${business.name} - Image ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {/* Add reviews component here */}
        <p>Reviews placeholder</p>
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Contact Now
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Get Directions
        </button>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default BusinessDetailPage;