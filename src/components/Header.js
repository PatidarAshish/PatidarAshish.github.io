import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const isHome = location.pathname === '/home';

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (isHome && location.hash) {
      // If already on /home#about or any other hash, clear hash and scroll to top
      history.push('/home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (!isHome) {
      // Navigate to /home if you're on another page
      history.push('/home');
    } else {
      // Already on /home with no hash, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/images/favicon.ico`} 
          alt="Ashish Patidar Logo" 
          className="logo-img" 
        />
        <span className="logo-text">ASHISH PATIDAR</span>
      </div>
      <nav>
        <ul>
          <li><a href="/home" onClick={handleHomeClick}>Home</a></li>
          <li><a href={isHome ? "#about" : "/home#about"}>About</a></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
