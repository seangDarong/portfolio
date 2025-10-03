    import React, { useEffect, useRef } from 'react';
    import './About.css';
    import profile from '../../assets/profile.png';
    import { animate, stagger, splitText } from 'animejs';

    const About: React.FC = () => {
    const h2Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (h2Ref.current) {
        const { chars } = splitText(h2Ref.current, { words: false, chars: true });

        animate(chars, {
            opacity: { from: 0, to: 1, duration: 100 }, // each char fades in
            translateY: { from: "0.5em", to: 0, duration: 200 }, // little rise effect
            delay: stagger(80), // typewriter speed
            easing: "easeOutQuad"
        });
        }
    }, []);

    return (
        <section id="about" className="about-section">
        <div className="about-container">
            <div className="about-content">
            <div className="name-header">I'm</div>
            <h1>Seang Darong</h1>
            <h2 ref={h2Ref} className="text-xl">Software Engineering Student</h2>
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
