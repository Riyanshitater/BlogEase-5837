import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function ReviewStars({ rating }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: star * 0.1 }}
        >
          <FaStar
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}