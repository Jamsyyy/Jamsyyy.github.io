"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./Navlink";

const sections = ["home", "projects", "about", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const atBottom =
      window.innerHeight + scrollPosition >=
      document.documentElement.scrollHeight - 5;

    if (atBottom) {
      setActiveSection("contact");
      return;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);

      if (element && scrollPosition >= element.offsetTop - 150) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-xl font-bold text-white"
        >
        Oliver W.H
        </Link>

        <div className="flex gap-6">
            <NavLink
            href="#home"
            active={activeSection === "home"}
            >
                Home
            </NavLink>

          <NavLink
            href="#projects"
            active={activeSection === "projects"}
          >
            Projects
          </NavLink>

          <NavLink
            href="#about"
            active={activeSection === "about"}
          >
            About
          </NavLink>

          <NavLink
            href="#contact"
            active={activeSection === "contact"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}