import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function HomePage() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/kombucha_homepage.png`} alt="ScobyBrewer Home" />
      <div style={{ marginTop: '50px' }}>
        <div style={{ marginBottom: '50px' }}>
          <Link to="/about" className="welcome-button">
            Welcome!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
