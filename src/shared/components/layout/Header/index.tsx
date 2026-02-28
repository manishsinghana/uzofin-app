"use client";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { NavMenu } from "./NavMenu";
import { menuItems } from "./menuData";

import { useClickOutside } from "./useClickOutside";

import { Button } from "../../ui/Button";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainNavRef = useRef<HTMLElement | null>(null);

  const handleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };


  // Hide Mobile Sidebar on click outside of navigation
  useClickOutside(mainNavRef, () => setIsMobileNavOpen(false));

   // Scroll effect
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header className={`header ${isMobileNavOpen ? "mobile-menu--open" : ""} ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <Link className="brand-logo" to="/">
          <img src="/images/brand-logo.png" alt="" />
        </Link>

        <nav className="main-navigation" ref={mainNavRef}>
          <NavMenu items={menuItems} className="nav-menu" />
        </nav>

        <div className="header-right">
          <Button variant="primary">Start Building</Button>
          <div className="mobile-nav-toggle" onClick={handleClick}>
              <img src="/images/icons/hamburger.svg" alt="hamburger ICon" />
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
