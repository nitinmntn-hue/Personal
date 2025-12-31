import React from 'react';
import './style/footer.scss'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-section">
                    <p className="description">
                        &copy; {new Date().getFullYear()} College Name. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer