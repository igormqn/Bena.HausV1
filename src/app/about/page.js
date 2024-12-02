"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMenuToggle, useCustomCursor } from "../hooks/usePageEffects";

export default function About() {
  const [loading, setLoading] = useState(true);
  const { menuOpen, toggleMenu } = useMenuToggle();

  // Simulation d'un délai de chargement
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Délai de 2 secondes
    return () => clearTimeout(timer);
  }, []);

  // Appliquer le curseur personnalisé après le chargement
  useCustomCursor(!loading);

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
            <a href="/">
              <img className="header-logo" src="./images/logo.png" alt="logo" />
            </a>
          </div>
          <nav className="toggle-nav">
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="classic-menu">
        <div className="logo">
          <a href="/">
            <img className="header-logo" src="./images/logo.png" alt="logo" />
          </a>
        </div>
        <nav className="menu-container">
          <ul>
            <li>
              <Link className="nav-links hover-this" href="/">HOME</Link>
            </li>
            <li>
              <Link className="nav-links hover-this" href="/about">ABOUT</Link>
            </li>
            <li>
              <Link className="nav-links hover-this" href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ backgroundColor: "black", color: "white" }}>
        <div className="about-container" style={{ textAlign: "center", padding: "50px" }}>
          <h1 className="about-quote">Our Vision: Create, Inspire, Capture</h1>
          <p>
            Welcome to Bena.Haus, a photo and video production company established in 2024. 
            We specialize in creating compelling visual stories, capturing moments that last forever, 
            and providing high-quality content for every occasion. Whether it's for weddings, corporate events, 
            or creative campaigns, we bring your vision to life.
          </p>
        </div>
      </main>

      {/* Custom Cursor */}
      <div className="cursor"></div>
    </>
  );
}
