import { motion } from "framer-motion"
import { FiLinkedin, FiMail, FiInstagram } from "react-icons/fi"

function ContactCard({ item }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        padding: "28px 32px",
        minWidth: 160,
        textAlign: "center",
        transition: "all 0.3s ease",
        cursor: item.href ? "pointer" : "default"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(201,168,76,0.08)"
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)"
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
      }}
    >
      <div style={{ color: "#c9a84c", marginBottom: 12, display: "flex", justifyContent: "center" }}>
        {item.icon}
      </div>
      <p style={{
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.3)",
        marginBottom: 6
      }}>
        {item.label}
      </p>
    </div>
  )
}
function Connect() {
  const contacts = [
    {
      icon: <FiLinkedin size={22} strokeWidth={1.5} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diya-doshi-94b843395",
      target: "_blank"
    },
    {
      icon: <FiMail size={22} strokeWidth={1.5} />,
      label: "Email",
      href: "mailto:diyardoshi17@gmail.com",
      target: "_self"
    },
    {
      icon: <FiInstagram size={22} strokeWidth={1.5} />,
      label: "Instagram",
      href: "https://www.instagram.com/diya__17/",
      target: "_blank"
    },
  ]

  return (
    <section id="connect" style={{
      minHeight: "100vh",
      background: "#0e0e0f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px 80px",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px"
      }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ textAlign: "center", marginBottom: 64, zIndex: 1 }}
      >
        <p style={{
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#c9a84c",
          marginBottom: 12
        }}>
          Connect
        </p>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 800,
          color: "#f0ede8",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginBottom: 16
        }}>
          Let's Get in Touch.
        </h2>
        <p style={{
          fontSize: "clamp(13px, 2vw, 15px)",
          color: "rgba(255,255,255,0.4)",
          maxWidth: 420,
          lineHeight: 1.7,
          margin: "0 auto",
          padding: "0 16px"
        }}>
          Whether it's about opportunities, or just a conversation -
          I'm always open to connecting.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: "flex",
          gap: 16,
          zIndex: 1,
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 48,
          padding: "0 16px"
        }}
      >
        {contacts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.target}
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <ContactCard item={item} />
              </a>
            ) : (
              <ContactCard item={item} />
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          width: "100%",
          maxWidth: 500,
          height: "0.5px",
          background: "rgba(255,255,255,0.08)",
          marginBottom: 32,
          zIndex: 1
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ textAlign: "center", zIndex: 1, padding: "0 16px" }}
      >
        <p style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.08em"
        }}>
          © 2025 · Diya Doshi · All rights reserved
        </p>
      </motion.div>
      <style>{`
        @media (max-width: 768px) {
          #connect {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
export default Connect
