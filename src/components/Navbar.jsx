import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style/navbar.scss';

const Navbar = () => {
     const [dark, setDark] = useState(() =>
        typeof window !== 'undefined'
          ? document.body.classList.contains('dark')
          : false
      );
    
      useEffect(() => {
        if (dark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [dark]);

    return (
        <>
            <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-mark">NM</span>
          <span className="logo-text">Nitin Meena</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDark((prev) => !prev)}
        >
          <span className="theme-toggle-icon">
            {dark ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </header>

        </>
    )
}

export default Navbar