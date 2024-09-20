import './LocationPage.css';//css styling

//Location page functional component
function LocationPage() {
  return (
    
    <div className="location-page">
      <header className="location-hero">
        <div className="overlay">
          <h1 className="hero-title">Visit Us</h1>
          <p className="hero-subtitle">Um-kulthom  Street, Ramallah, Palestine</p>
        </div>
      </header>
      <section className="location-details">
        <div className="address">
          <h2>Our Location</h2>
          <p>We are located at Um-kulthom  Street, Ramallah, Palestine. Visit us to see our products in person.</p>
        </div>
        <div id="map-container">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3386.8707117417366!2d35.188635!3d31.910110000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzM2LjQiTiAzNcKwMTEnMTkuMSJF!5e0!3m2!1sen!2s!4v1726844047073!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default LocationPage;
