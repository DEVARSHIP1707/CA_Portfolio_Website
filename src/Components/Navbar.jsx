import { useState } from "react"
import { FiBriefcase, FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = ["about", "journey", "skills", "connect"]

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(0,0,0,0.06)",
      }}>

        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#000",
            display: "flex",
            alignItems: "center"
          }}
        >
          <FiBriefcase size={20} />
        </button>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 28 }}>
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#000"
          }}
        >
          <FiMenu size={22} strokeWidth={1.5} />
        </button>

      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 40
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 28,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#000"
              }}
            >
              <FiX size={24} strokeWidth={1.5} />
            </button>

            {/* Gold line top */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(to right, transparent, #c9a84c, transparent)"
            }} />

            {["home", ...navLinks].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                onClick={() => scrollToSection(item === "home" ? "hero" : item)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#000"
                }}
              >
                {item}
              </motion.button>
            ))}

            {/* Gold line bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(to right, transparent, #c9a84c, transparent)"
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          color: rgba(0,0,0,0.5);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: rgba(0,0,0,1);
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar