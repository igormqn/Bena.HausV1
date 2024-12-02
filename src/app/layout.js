"use client"; // Directive pour Next.js

import { useMenuToggle } from "@/app/hooks/usePageEffects"; // Assure-toi du bon chemin
import Link from "next/link"; 
import "./css/style.css";

export default function RootLayout({ children }) {
  const { menuOpen, toggleMenu } = useMenuToggle(); // Hook pour le toggle menu

  return (
    <html lang="en">
      <body>     
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
