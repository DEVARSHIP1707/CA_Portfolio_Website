import { useEffect } from "react"
import { motion } from "framer-motion"

const reels=[
  "https://www.instagram.com/reel/DDMQxlAzxlD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DROcJaykgYM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DPjXJjiDMDQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
]

function Reels(){
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    script.onload=()=>{
      if (window.instgrm){
        window.instgrm.Embeds.process()
      }
    }

    return ()=>{
      document.body.removeChild(script)
    }
  },[])

  return (
    <section id="reels"style={{
      background: "#fafaf8",
      padding: "100px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        <p style={{
          fontSize: 30,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#c9a84c",
          marginBottom: 12
        }}>
          My Perspective In The Process
        </p>
      </motion.div>

      <div className="reels-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        width: "100%",
        maxWidth: 960
      }}>
        {reels.map((url, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1.5px solid rgba(201,168,76,0.3)",
              background: "#fff",
              boxShadow: "0 4px 24px rgba(201,168,76,0.08)",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                margin: 0,
                width: "100%",
                minWidth: "unset",
                border: "none"
              }}
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #reels {
            padding: 80px 24px !important;
          }
          .reels-grid {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
          }
          #reels > div:first-child p {
            font-size: 20px !important;
            letter-spacing: 0.08em !important;
          }
        }
      `}</style>

    </section>
  )
}

export default Reels
