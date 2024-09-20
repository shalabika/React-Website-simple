import './ContactPage.css';//css import

function ContactPage() {
  return (
    <div className="contact-page">
      <header className="hero-section">
        <div className="overlay">
          <h1>GET IN TOUCH</h1>
          <p>Send us your feedback!</p>
        </div>
      </header>
      
      <section className="contact-info">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>For any inquiries, please contact us via the details below:</p>
          <ul>
            <li>Email: Shalabikarim0@gmail.com</li>
            <li>Phone: (+972) 597317417</li>
            <li>Address: Um-kulthom Street, Ramallah, Palestine</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
