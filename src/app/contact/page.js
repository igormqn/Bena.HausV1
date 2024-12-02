"use client";
import { useMenuToggle, useCustomCursor } from "../hooks/usePageEffects";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  // Hooks
  const [loading, setLoading] = useState(true); // Loader state
  const { menuOpen, toggleMenu } = useMenuToggle();

  // Simulation d'un délai de chargement
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Délai de 2 secondes
    return () => clearTimeout(timer);
  }, []);

  // Appliquer le curseur personnalisé après le chargement
  useCustomCursor(!loading);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add additional logic here if needed
  };

  // Render condition
  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  // Main render
  return (
    <>
      <div className="toggle-menu-container">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`toggle-menu ${menuOpen ? "open" : ""}`}>
          <div className="logo-mobile">
            <Link href="/">
              <img className="header-logo" src="./images/logo.png" alt="logo" />
            </Link>
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

      <header className="classic-menu">
        <div className="logo">
          <Link href="/">
            <img className="header-logo" src="./images/logo.png" alt="logo" />
          </Link>
        </div>
        <nav className="menu-container">
          <ul>
            <li>
              <Link className="nav-links hover-this" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-links hover-this" href="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="nav-links hover-this" href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{ backgroundColor: "black", color: "white" }}>
        <div className="contact-container">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      <div className="cursor"></div>
    </>
  );
}
