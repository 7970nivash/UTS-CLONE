// src/HomePage.js

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo"><img src="logo.jpg" /></div>
        <ul className="navbar-links">
          <li><a href="#home" className="home">Home</a></li>
          <li><a href="#services" className="services">Services</a></li>
          <li><a href="#about" className="about">About</a></li>
          <li><a href="#career" className="career">Career</a></li>
          <li><a href="#blogs" className="blogs">Blogs</a></li>    
        </ul>
        <button className="get-in-touch" onClick={() => alert('Get in Touch clicked!')}>
        Get in Touch
      </button>
      </nav>

      {/* Slider */}
      <div className="slider">
        <div className="slider-content">
          <h1>Welcome to Marketing Group</h1>
          <p>Experience the best services with us</p>
        <a href="#contact"> <button className="slider-btn">Get Info</button></a> 
        </div>
      </div>





      {/* What Makes Digital Marketing Effective Section */}
      <section className="marketing-effective">
<div className="content-section">
      {/* Section 1 */}
      <div className="content-row">
        <div className="image-card">
          <img src="your-image-url1.jpg" alt="Marketing Illustration" />
        </div>
        <div className="text-content">
          <h2>What Makes Digital Marketing Effective?</h2>
          <p>
            Discover key strategies that make digital marketing successful, from targeting the right audience to
            leveraging data analytics, personalized content, and SEO to boost online visibility and drive results.
          </p>
         <a href="#services"> <button className="learn-more-btn">Learn More</button></a>
        </div>
      </div>

      {/* Section 2 */}
      <div className="content-row reverse">
        <div className="text-content">
          <h2>Content Matters</h2>
          <p>
            The art of creating engaging content involves telling tales that captivate readers, enlighten them, and
            motivate them to take action—converting site visitors into devoted supporters and followers.
          </p>
          <a href="#services"> <button className="learn-more-btn">Learn More</button></a>
        </div>
        <div className="image-card">
          <img src="your-image-url2.jpg" alt="Content Creation Illustration" />
        </div>
      </div>
    </div>
    <div className="content-section">
      </div>
    </section>



    

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Improve your search engine rankings with expert SEO optimization solutions.Boost your brand's reach with effective digital marketing strategies</p>
          </div>
          <div className="card">
            <h3>Web Designing</h3>
            <p>Create a user-friendly web design that elevates your online presence.</p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Boost your brand's reach with effective digital marketing strategies.</p>
          </div>
        </div>
      </section>




      {/* About Us Section */}
      <section className="about-us" id="about">
        <h2>About Us</h2>
        <p>
          At Unstop Techno Solutions, we are committed to providing innovative and result-oriented IT solutions to businesses of all sizes. Our expertise spans a wide spectrum, including digital marketing, SEO optimization, and web design.At Unstop Techno Solutions, we are committed to providing innovative and result-oriented IT solutions to businesses of all sizes. Our expertise spans web development, digital marketing, SEO optimization, and beyond. With a team of experienced professionals, we deliver customized services that meet our clients' unique needs and drive their success. We believe in the power of technology to transform businesses, and we aim to be the trusted partner that helps you achieve your goals. From startups to established enterprises, our solutions are designed to enhance growth, visibility, and efficiency. Let’s build your digital future together
        </p>
        <a href="#services"><button className="learn-more-btn">Learn More</button></a>
      </section>






      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>UNSTOP TECHNO SOLUTION</h3>
            <p>Providing innovative and result-oriented IT solutions to businesses of all sizes.</p>
          </div>
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
          <a href="https://www.google.com/maps/search/Sare+home,+Sector+-+92,+Gurgaon,+Haryana+-+122050/@28.4114723,76.9095041,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">  <p>Sector-32, Gurgaon, Haryana - 122018</p></a>
           <a href="#contact"> <p>Email: info@uts.com</p></a>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

        


