import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Reviews = () => {
  // Dummy data for reviews
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      username: 'John Doe',
      rating: 4,
      comment: 'Great experience! The flight was smooth and the service was excellent.',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      username: 'Jane Smith',
      rating: 5,
      comment: 'Fantastic airline! I had a wonderful experience.',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      username: 'Alice Johnson',
      rating: 3,
      comment: 'The flight was okay, but the food could have been better.',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
      id: 4,
      username: 'Bob Williams',
      rating: 5,
      comment: 'Best airline I have ever flown with! Highly recommended.',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
      id: 5,
      username: 'Emily Brown',
      rating: 4,
      comment: 'Overall a good experience. Friendly staff and comfortable seats.',
      profileImage: 'https://via.placeholder.com/50',
    },
    // Add more users as needed
  ];

  const toggleReview = (reviewId) => {
    setSelectedReview(selectedReview === reviewId ? null : reviewId);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative overflow-hidden bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <div
              className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer"
              onClick={() => toggleReview(review.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src={review.profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{review.username}</h2>
                  <p className="text-gray-600">Rating: {review.rating}/5</p>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                {selectedReview === review.id ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            <Transition
              show={selectedReview === review.id}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <div ref={ref} className="p-4">
                  <p className="text-gray-800">{review.comment}</p>
                </div>
              )}
            </Transition>
            <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
