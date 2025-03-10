import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredItems = [
  {
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
    title: "Summer Collection 2024",
    subtitle: "Discover the latest trends",
    color: "from-pink-500 to-purple-500",
    category: "Dresses",
    cta: "Shop Summer Styles"
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    title: "Luxury Essentials",
    subtitle: "Premium clothing for every occasion",
    color: "from-blue-500 to-teal-500",
    category: "Outerwear",
    cta: "Explore Luxury"
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Spring Collection",
    subtitle: "Fresh looks for the season",
    color: "from-green-500 to-yellow-500",
    category: "Sweaters",
    cta: "View Collection"
  }
];

export default function FeaturedCarousel() {
  const navigate = useNavigate();

  const handleShopNow = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="h-[600px] w-full mb-12 group"
    >
      {featuredItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-50`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold mb-4"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8"
              >
                {item.subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => handleShopNow(item.category)}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:scale-105"
              >
                {item.cta}
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}