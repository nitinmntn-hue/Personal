import React from 'react';
import FadeIn from '../components/Fadein';
import '../style/home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <main className='main-box'>
            <FadeIn>

                <div className="content-box">
                    <h2 className="heading">Home</h2>
                    <p className="description">Welcome to my portfolio site. Explore projects and skills below.</p>
                </div>

            </FadeIn>

            <FadeIn>
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
            </FadeIn>

          
        </main>
    )
}

export default Home