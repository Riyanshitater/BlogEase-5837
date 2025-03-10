import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const brands = [
  {
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sportswear"
  },
  {
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1544441893-675973e31985",
    category: "Athletic"
  },
  {
    name: "Gucci",
    logo: "https://images.unsplash.com/photo-1548169874-53e85f753f1e",
    category: "Luxury"
  },
  {
    name: "Zara",
    logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    category: "Fashion"
  }
];

export default function TrendingBrands() {
  const navigate = useNavigate();

  const handleBrandClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Trending Brands
          </span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleBrandClick(brand.category)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">View Collection</span>
                </div>
              </div>
              <p className="text-center mt-4 font-semibold">{brand.name}</p>
              <p className="text-center text-sm text-gray-500">{brand.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}