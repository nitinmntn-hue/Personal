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

          
        </main>
    )
}

export default Home