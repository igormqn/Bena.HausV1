import { useEffect, useState, useLayoutEffect } from 'react';

// hooks/usePageEffects.js

export function useMenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return { menuOpen, toggleMenu };
}

// Hook pour l'effet de parallaxe sur l'image principale


export function useParallaxEffect(active) {
  useEffect(() => {
    if (!active) return;

    const image = document.querySelector(".main-picture");
    const container = document.querySelector(".main-picture-container");

    if (!image || !container) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } = image.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const moveX = (clientX - centerX) * 0.05;
      const moveY = (clientY - centerY) * 0.05;

      image.style.transform = `translate(-50%, -50%) scale(1.2) translate(${moveX}px, ${moveY}px)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);
}


// Hook pour l'effet du curseur personnalisé
export function useCustomCursor(active = true) {
  useEffect(() => {
    if (!active) return;

    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    const handleMouseEnter = () => cursor.classList.add("big");
    const handleMouseLeave = () => cursor.classList.remove("big");

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [active]);
}

// Fonction de défilement en bas de page
export function useScrollToBottom() {
  const scrollToBottom = () => {
    const bottomContainer = document.getElementById("bottom-container");
    if (bottomContainer) {
      bottomContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToBottom;
}
