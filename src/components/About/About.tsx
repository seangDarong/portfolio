    import React from 'react';
    import './About.css';
    import profile from '../../assets/profile.png';


    const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
        <div className="about-container">
            <div className="about-content">
            <div className="name-header">I'm</div>
            <h1>Seang Darong</h1>
            <h2>Software Engineering Student</h2>
            <div className="cta-buttons">
                <button className="hire-me">Hire Me</button>
                <button className="contact-me">Contact Me</button>
            </div>
            </div>
            <div className="about-image">
            <img src={profile} alt="Developer Illustration" />
            </div>
        </div>
        </section>
    );
    };

    export default About;