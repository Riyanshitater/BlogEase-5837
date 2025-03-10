import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import BestSellers from './components/BestSellers';

function App() {
  return (
    <Router>
      <WishlistProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </CartProvider>
      </WishlistProvider>
    </Router>
  );
}

export default App;