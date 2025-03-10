import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white rounded-lg shadow-md overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-sm">
            New Arrival
          </div>
        )}
        <motion.button
          onClick={handleWishlistClick}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isInWishlist(product.id)
              ? 'text-red-500'
              : 'text-gray-600 hover:text-red-500'
          } transition-colors`}
        >
          <motion.div
            animate={
              isInWishlist(product.id)
                ? {
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.3 }
                  }
                : {}
            }
          >
            <FaHeart className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 rounded-md text-sm ${
                  selectedSize === size
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-2 py-1 rounded-md text-sm ${
                  selectedColor === color
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <motion.button
            onClick={() =>
              addToCart({ ...product, size: selectedSize, color: selectedColor })
            }
            disabled={!selectedSize || !selectedColor}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-md transition-colors ${
              !selectedSize || !selectedColor
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-secondary'
            }`}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}