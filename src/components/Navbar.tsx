"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Apps", href: "#apps" },
    { label: "About", href: "#about" },
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Support", href: "/support" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || menuOpen ? "rgba(248,247,244,0.95)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
      borderBottom: scrolled || menuOpen ? "1px solid #e2ddd8" : "none",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        height: 64,
      }}>
        <Link href="/" style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.2rem", fontWeight: 400,
          color: "#1a1814", letterSpacing: "-0.01em",
        }}>
          Singh Digital Group
        </Link>

        {/* Desktop links — hidden on mobile */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {links.map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontSize: "0.9rem", color: "#6b6760",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1a1814")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6b6760")}
              >{label}</a>
            ))}
            <a href="https://play.google.com/store/apps/details?id=com.singhdigitalgroup.subhvichar"
              target="_blank" rel="noopener noreferrer"
              style={{
                padding: "8px 20px", borderRadius: 100,
                background: "#1a1814", color: "white",
                fontSize: "0.85rem", fontWeight: 500,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >Get App</a>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "1.3rem", color: "#1a1814", padding: 4, lineHeight: 1,
            }}
          >{menuOpen ? "✕" : "☰"}</button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          borderTop: "1px solid #e2ddd8", padding: "16px 24px 20px",
          display: "flex", flexDirection: "column",
          background: "rgba(248,247,244,0.98)",
        }}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
              fontSize: "1rem", color: "#6b6760",
              padding: "13px 0", borderBottom: "1px solid #e2ddd8", display: "block",
            }}>{label}</a>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.singhdigitalgroup.subhvichar"
            target="_blank" rel="noopener noreferrer"
            style={{
              marginTop: 16, padding: "12px 20px", borderRadius: 100, textAlign: "center",
              background: "#1a1814", color: "white", fontSize: "0.9rem", fontWeight: 500, display: "block",
            }}
          >Get App</a>
        </div>
      )}
    </nav>
  );
}