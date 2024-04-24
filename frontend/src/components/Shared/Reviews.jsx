import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Dummy review data
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
    }
  ];

  const toggleReview = (reviewId) => {
    setSelectedReview(selectedReview === reviewId ? null : reviewId);
  };

  useEffect(() => {
    console.log("currentReviewIndex:", currentReviewIndex);
    const timer = setTimeout(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change card every 5 seconds
  
    return () => clearTimeout(timer);
  }, [currentReviewIndex, reviews.length]);
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Customer reviews container */}
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Write a Review</h2>
            <textarea className="w-full h-32 p-2 rounded-md resize-none focus:outline-none" placeholder="Write your review here..."></textarea>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">Submit Review</button>
          </div>
        </div>
        {/* Trending reviews container */}
        <div className="flex-1 w-[60%] mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Trending Reviews</h2>
          <div className="overflow-hidden rounded-lg shadow-xl h-[80%]">
            <div className="w-screen h-[100%]  flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentReviewIndex * 250 / reviews.length}%)` }}>
              {reviews.map((review) => (
                <div key={review.id} className="w-full md:w-full">
                  <div className="bg-white p-4 h-full w-full rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img src={review.profileImage} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">{review.username}</h2>
                        <p className="text-gray-600">Rating: {review.rating}/5</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleReview(review.id)}
                      className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      {selectedReview === review.id ? 'Hide Details' : 'View Details'}
                    </button>
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
                        <div ref={ref} className="mt-2">
                          <p className="text-gray-800">{review.comment}</p>
                        </div>
                      )}
                    </Transition>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
