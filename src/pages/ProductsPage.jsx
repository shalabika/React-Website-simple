import './ProductsPage.css';  //css import

// Importing images
import sofaImage from './images/sofa.jpg';
import tableImage from './images/table.jpg';
import armchairImage from './images/armchair.jpg';
import wardrobeImage from './images/wardrobe.jpg';

function ProductsPage() {//creating products
  const products = [
    { id: 1, name: 'Luxury Sofa', description: 'Elegant, comfortable, and made with premium materials.', image: sofaImage },
    { id: 2, name: 'Dining Table', description: 'A modern dining table that fits your space perfectly.', image: tableImage },
    { id: 3, name: 'Armchair', description: 'Cozy armchair for your living room.', image: armchairImage },
    { id: 4, name: 'Wardrobe', description: 'Spacious wardrobe with a sleek design.', image: wardrobeImage },
  ];

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of furniture products, crafted with care and quality.</p>
      </header>
      
      <section className="product-grid">
        {products.map(product => (//displaying products
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductsPage;
