import React from 'react'
import FadeInSection from '../components/Fadein';
import '../style/notfound.scss'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='main-box'>
      <FadeInSection>

        <div className="notfound">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="btn-box">
            <Link to="/" className="back-home-btn">
              Go Back Home
            </Link>
          </div>

        </div>
      </FadeInSection>
    </main>
  )
}

export default NotFound;