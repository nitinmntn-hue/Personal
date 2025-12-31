import React from 'react'
import FadeIn from '../components/Fadein';
import '../style/about.scss'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <main className="main-box">
            <FadeIn>
                <div className="content-box">
                    <h2 className="heading">About Me</h2>
                    <p className="description">
                        Hi, I’m Nitin — a full‑stack web developer passionate about building visually impressive,
                        interactive web apps. I enjoy experimenting with modern UI features like glassmorphism,
                        parallax effects, and animated gradients, while keeping my code clean and scalable.
                    </p>
                </div>
            </FadeIn>

            <FadeIn>
                <div className="content-box">
                    <h2 className="heading-1">My Journey</h2>
                    <p className="description">
                        I started with frontend design and gradually expanded into backend development with Node.js,
                        Express, and Sequelize. Along the way, I’ve built college portals, sports modules, and
                        dynamic galleries — always striving for a balance between creativity and performance.
                    </p>
                </div>
            </FadeIn>

            <FadeIn>
                <div className="content-box">
                    <h2 className="heading-1">What Drives Me</h2>
                    <p className="description">
                        Curiosity and persistence. I love learning by doing, iterating quickly, and refactoring
                        for maintainability. My goal is to create projects that stand out both visually and
                        technically, while keeping user experience smooth and engaging.
                    </p>
                </div>
            </FadeIn>
        </main>

    )
}

export default About