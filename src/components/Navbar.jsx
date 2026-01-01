import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style/navbar.scss';

const Navbar = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.body.classList.contains('dark')
      : false
  );

  const [open, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen(prev => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img className="logo-mark" src='https://avatars.githubusercontent.com/u/243802853?s=400&u=2eaf4d028991ac26f4b381cc59449261c55ea45e&v=4' />
          <span className="logo-text">Nitin Meena</span>
        </Link>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={handleHamburgerClick}
          aria-label="Toggle navigation"
          aria-expanded={open}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDark(prev => !prev)}
        >
          <span className="theme-toggle-icon">
            {dark ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
