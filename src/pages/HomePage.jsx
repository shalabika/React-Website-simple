import './HomePage.css';  //importing ccss

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">{/*hero*/}
        <div className="overlay">
          <h1>Design Your Dream Space</h1>
          <p>Furniture that transforms your house into a home.</p>
        </div>
      </header>

      <section className="services-section">{/*services section*/}
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <h3>Custom Furniture</h3>
            <p>Handcrafted pieces designed to match your style.</p>
          </div>
          <div className="service">
            <h3>Interior Design</h3>
            <p>Expert interior design services tailored for your home.</p>
          </div>
          <div className="service">
            <h3>Home Delivery</h3>
            <p>Fast, reliable delivery right to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
