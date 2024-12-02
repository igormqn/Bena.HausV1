"use client";
import { useEffect, useState } from "react";
import { useMenuToggle, useParallaxEffect, useCustomCursor, useScrollToBottom } from "./hooks/usePageEffects";
import Link from "next/link";

export default function Home() {
  // Utilisation des hooks
  const [loading, setLoading] = useState(true);
  const { menuOpen, toggleMenu } = useMenuToggle();
  const scrollToBottom = useScrollToBottom();

  const videos = [
    {
      title: "Bénédicte & Guerrick",
      src: "/images/benedictexguerrick.webp", 
      link: "https://www.youtube.com/watch?v=P3_mej4hvno&t=2s"
    },
    {
      title: "Sego and Joseph The Engagement ",
      src: "/images/segolenepic.webp", 
      link: "https://www.youtube.com/watch?v=DKYUOLvkRcw&t=1s"
    },
    {
      title: "Marielle et Eli - The Engagement ",
      src: "/images/MariellexElie.webp", 
      link: "https://www.youtube.com/watch?v=Li6lxmgG8FY"
    },
    {
      title: "Clemance + Nicolas",
      src: "/images/ClemancexNicolas.webp", 
      link: "https://www.youtube.com/watch?v=WZ7tfe7NLaI"
    },
    {
      title: "Sarah et Marius",
      src: "/images/SarahxMarius.webp", 
      link: "https://www.youtube.com/watch?v=xCHb1k2uv74"
    },
    {
      title: "Nouria et Dan",
      src: "/images/NouriaxDan.webp", 
      link: "https://www.youtube.com/watch?v=D7CfHZLOEnw"
    },
  ];
  // Simulation d'un délai de chargement
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useParallaxEffect(!loading); // Active parallaxe après le chargement
  useCustomCursor(!loading); // Active curseur après le chargement

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {/* Menu Toggle */}
      <div className="toggle-menu-container">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`toggle-menu ${menuOpen ? "open" : ""}`}>
          <div className="logo-mobile">
            <Link href="/">
              <img className="header-logo" src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <nav className="toggle-nav">
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="classic-menu">
        <div className="logo">
          <Link href="/">
            <img className="header-logo" src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <nav className="menu-container">
          <ul>
            <li><Link className="nav-links hover-this" href="/">HOME</Link></li>
            <li><Link className="nav-links hover-this" href="/about">ABOUT</Link></li>
            <li><Link className="nav-links hover-this" href="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <div className="main-picture-container">
          <img className="main-picture" src="/images/mainpicture.jpg" alt="Main visual" />
          <div className="overlay-text">BENA.HAUS</div>
          <div className="mouse-icon" onClick={scrollToBottom}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="45" viewBox="0 0 27 45" fill="none">
              <g id="cursor">
                <path
                  fill="none"
                  stroke="#f9f9f9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1.34 19.512l12.624 12.625L26.59 19.513M13.964 5.368V32.12"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        <div id="bottom-container" className="bottom-container">
          <div className="video-gallery">
            {videos.map(({ title, src, link }, index) => (
              <div className="video-card" key={index}>
                <img src={src} alt={title} className="video-thumbnail" />
                <h3 className="video-title">{title}</h3>
                <a
                  className="watch-now-button"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${title} video on YouTube`}
                >
                  Watch Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Custom Cursor */}
      <div className="cursor"></div>
    </>
  );
}
