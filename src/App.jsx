import { useState } from 'react';  // Import useState
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // define useState

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'contact':
        return <ContactPage />;
      case 'location':
        return <LocationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
