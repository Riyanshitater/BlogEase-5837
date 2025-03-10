import { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);
      if (isInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-md shadow-lg"
          >
            Wishlist updated!
          </motion.div>
        )}
      </AnimatePresence>
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);