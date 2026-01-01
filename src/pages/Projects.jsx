import React from 'react';
import '../style/projects.scss';
import FadeIn from '../components/Fadein';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <main className='main-box'>
            <FadeIn>

                <div className="content-box">
                    <h2 className='heading'>Project</h2>
                </div>
            </FadeIn>

        </main>
    )
}

export default Projects