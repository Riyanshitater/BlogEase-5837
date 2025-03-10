import { motion, AnimatePresence } from 'framer-motion';
import ReviewStars from './ReviewStars';

export default function ProductReviews({ reviews }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
      <div className="space-y-4">
        <AnimatePresence>
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <img
                    src={review.userAvatar}
                    alt={review.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{review.userName}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <ReviewStars rating={review.rating} />
              </div>
              <p className="text-gray-700">{review.comment}</p>
              {review.images && (
                <div className="flex gap-2 mt-3">
                  {review.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Review ${index + 1}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}