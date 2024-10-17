import React from 'react';
import { Star, Edit, Trash2 } from 'lucide-react';

const UserDashboard: React.FC = () => {
  // Mock data for user activity
  const userReviews = [
    { id: 1, business: 'Green Leaf Cafe', rating: 5, comment: 'Excellent food and service!' },
    { id: 2, business: 'Tech Solutions Inc.', rating: 4, comment: 'Very helpful, but a bit pricey.' },
  ];

  const userBookmarks = [
    { id: 1, name: 'Fitness First Gym' },
    { id: 2, name: 'Cozy Corner Bookstore' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Reviews</h2>
        {userReviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-semibold">{review.business}</h3>
            <div className="flex items-center my-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <div className="flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <Edit className="w-5 h-5" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Bookmarked Businesses</h2>
        <ul className="bg-white rounded-lg shadow divide-y">
          {userBookmarks.map((bookmark) => (
            <li key={bookmark.id} className="p-4 flex justify-between items-center">
              <span>{bookmark.name}</span>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserDashboard;