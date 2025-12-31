import React from 'react';
import '../style/techstack.scss'
import FadeIn from '../components/Fadein';
import { NavLink } from 'react-router-dom';

const TechStack = () => {
    return (
        <main className='main-box'>
            <FadeIn>

                <div className="content-box">
                    <h2 className='heading'>Tech Stack</h2>
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

export default TechStack;