import PropTypes from 'prop-types';  // Import PropTypes

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <h1>Furniture Business</h1>
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('products')}>Products</li>
        <li onClick={() => setCurrentPage('contact')}>Contact Us</li>
        <li onClick={() => setCurrentPage('location')}>Location</li>
      </ul>
    </nav>
  );
}

// Add PropTypes validation
Navbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired, 
};

export default Navbar;
