import {motion} from "framer-motion"
const items = [
  {
    year:"2024",
    title:"CA Foundation",
    subtitle:"ICAI",
    detail:"Cleared in first attempt",
    score:"301/400",
    status:"Cleared",
    statusColor:"#16a34a",
    statusBg:"#f0fdf4",
    delay:0
  },
  {
    year: "Sep 2025",
    title: "CA Intermediate",
    subtitle: "ICAI · Both Groups",
    detail: "Cleared in first attempt",
    score: "First Attempt ✓",
    status: "Cleared",
    statusColor: "#16a34a",
    statusBg: "#f0fdf4",
    delay: 0.2
  },
  {
    year: "Dec 2025",
    title: "Articleship",
    subtitle: "Ernst & Young · Mumbai",
    detail: "Currently working on statutory audits, tax compliance & financial reporting",
    score: "Big 4",
    status: "In Progress",
    statusColor: "#c9a84c",
    statusBg: "#fefce8",
    delay: 0.4
  },
]

const dotStyle=(item)=>({
  width:14,
  height:14,
  borderRadius: "50%",
  background: item.status === "In Progress" ? "#c9a84c" : "#000",
  border: "3px solid #fafaf8",
  outline: `2px solid ${item.status === "In Progress" ? "#c9a84c" : "#000"}`,
  flexShrink: 0,
})
function JourneyCard({item}) {
  return (
    <div style={{
      background: "#fff",
      border: "0.5px solid rgba(0,0,0,0.08)",
      borderRadius: 14,
      padding: "24px 20px",
      width: "90%",
      borderTop: `3px solid ${item.status === "In Progress" ? "#c9a84c" : "#000"}`
    }}>
      <p style={{
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.35)",
        marginBottom: 8
      }}>
        {item.year}
      </p>
      <h3 style={{
        fontSize: 16,
        fontWeight: 700,
        color: "#000",
        marginBottom: 4
      }}>
        {item.title}
      </h3>
      <p style={{
        fontSize: 12,
        color: "rgba(0,0,0,0.45)",
        marginBottom: 12
      }}>
        {item.subtitle}
      </p>
      <p style={{
        fontSize: 13,
        color: "rgba(0,0,0,0.6)",
        lineHeight: 1.6,
        marginBottom: 16
      }}>
        {item.detail}
      </p>
      <div style={{
        display: "inline-block",
        padding: "4px 12px",
        background: "#f5f5f3",
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 600,
        color: "#000",
        marginBottom: 12
      }}>
        {item.score}
      </div>
      <div style={{display: "block"}}>
        <span style={{
          padding: "4px 12px",
          borderRadius: 100,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          background: item.statusBg,
          color: item.statusColor
        }}>
          {item.status}
        </span>
      </div>
    </div>
  )
}
function Journey() {
  return (
    <section id="journey" style={{
      minHeight: "100vh",
      background: "#fafaf8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 80px"
    }}>
      <motion.div
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        viewport={{once: true, amount: 0.2}}
        style={{textAlign: "center", marginBottom: 80}}
      >
        <p style={{
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#c9a84c",
          marginBottom: 12
        }}>
          CA Journey
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          color: "#000",
          letterSpacing: "-0.02em",
          lineHeight: 1.2
        }}>
          Every Step, First Attempt.
        </h2>
      </motion.div>
      <div className="journey-desktop" style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 0,
        width: "100%",
        maxWidth: 900,
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 36,
          left: "calc(16.66% + 20px)",
          right: "calc(16.66% + 20px)",
          height: "1px",
          background: "rgba(201,168,76,0.3)",
          zIndex: 0
        }} />

        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: item.delay}}
            viewport={{once: true, amount: 0.2}}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 1
            }}
          >
            <div style={{...dotStyle(item), marginBottom: 24}} />
            <JourneyCard item={item} />
          </motion.div>
        ))}
      </div>
      <div className="journey-mobile" style={{
        display: "none",
        flexDirection: "column",
        width: "100%",
        maxWidth: 480,
        position: "relative",
        gap: 0
      }}>
        <div style={{
          position: "absolute",
          top: 7,
          bottom: 7,
          left: 6,
          width: "1px",
          background: "rgba(201,168,76,0.3)",
          zIndex: 0
        }} />

        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: item.delay}}
            viewport={{once: true, amount: 0.2}}
            style={{
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
              marginBottom: index < items.length - 1 ? 28 : 0,
              position: "relative",
              zIndex: 1
            }}
          >
            <div style={{...dotStyle(item), marginTop: 4}} />
            <div style={{flex: 1}}>
              <JourneyCard item={item} />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.6}}
        viewport={{once: true, amount: 0.2}}
        style={{
          marginTop: 64,
          fontSize: 14,
          color: "rgba(0,0,0,0.35)",
          letterSpacing: "0.06em",
          textAlign: "center",
          fontStyle: "italic"
        }}
      >
        "CA Final - currently in progress at EY Mumbai."
      </motion.p>

      <style>{`
        @media (max-width: 768px) {
          #journey {
            padding: 80px 24px !important;
          }
          #journey > div:nth-child(2) {
            margin-bottom: 32px !important;
          }
          .journey-desktop {
            display: none !important;
          }
          .journey-mobile {
            display: flex !important;
          }
        }
      `}</style>

    </section>
  )
}

export default Journey