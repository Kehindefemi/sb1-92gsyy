import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, reviewer: 'John D.', business: 'Green Leaf Cafe', rating: 5, comment: 'Amazing organic food and great atmosphere!' },
  { id: 2, reviewer: 'Sarah M.', business: 'Tech Solutions Inc.', rating: 4, comment: 'Very helpful IT support team.' },
  { id: 3, reviewer: 'Mike R.', business: 'Fitness First Gym', rating: 5, comment: 'Top-notch equipment and friendly staff.' },
];

const LatestReviews: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Latest Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.reviewer}</span>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.business}</p>
            <p className="text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestReviews;