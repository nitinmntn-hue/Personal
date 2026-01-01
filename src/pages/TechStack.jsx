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

        </main>
    )
}

export default TechStack;