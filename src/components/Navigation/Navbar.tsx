    // src/components/Navbar.tsx
    import { useState, useEffect, useRef } from "react";
    import "./Navbar.css";

    const Navbar = () => {
    const [activeLink, setActiveLink] = useState("About");
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
    const navRef = useRef<HTMLUListElement>(null);
    const links = ["About", "Project", "Skills & Tools", "Contact"];

    const updateIndicator = (element: HTMLElement | null) => {
        if (!element || !navRef.current) return;
        const navLeft = navRef.current.getBoundingClientRect().left;
        const { left, width } = element.getBoundingClientRect();
        setIndicatorStyle({
            width: `${width}px`,
            left: `${left - navLeft}px`,
        });
    };

    useEffect(() => {
        const activeElement = document.querySelector('.nav-links a.active') as HTMLElement;
        updateIndicator(activeElement);
    }, [activeLink]);

    return (
        <nav className="navbar">
        <div className="navbar-container">
            {/* Logo */}
            <div className="logo">Darong Seang</div>

            {/* Nav Links inside a container bar */}
            <div className="links-bar">
            <ul className="nav-links" ref={navRef}>
                <div 
                className="sliding-indicator" 
                style={indicatorStyle}
                />
                {links.map((link) => (
                <li key={link}>
                    <a
                    href={`#${link.toLowerCase()}`}
                    className={activeLink === link ? "active" : ""}
                    onClick={(e) => {
                        setActiveLink(link);
                        updateIndicator(e.currentTarget);
                    }}
                    >
                    {link}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;
