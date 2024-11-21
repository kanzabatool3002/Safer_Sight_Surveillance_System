import React from 'react';
import './front-page.css'; 
import { Link } from 'react-router-dom'; 

function FrontPage() {
  return (
    <div className="front-page">
      <header className="front-page-header">
        <h1>SAFER SIGHT</h1>
        <p>THE BLEND OF SECURITY AND ARTIFICIAL INTELLIGENCE(AI)</p>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="buttons">
        <Link to="/login" className="btn">LOGIN</Link>
        <Link to="/Signup" className="btn">SIGNUP</Link>
      </div>
      </header>
    </div>
  );
}

export default FrontPage;


