import { motion } from "framer-motion"

const skills = [
  {label:"Statutory Audit",type:"core"},
     {label:"Financial Reporting",type:"core"},
  {label:"Ind AS",type:"core"},
  {label:"Tax Compliance",type:"core"},
    {label:"GST",type:"core"},
   {label:"MS Excel",type:"tool"},
     {label:"Tally",type:"tool"},
  {label:"Companies Act 2013",type:"core"},
    {label:"Attention to Detail",type:"soft"},
   {label:"Analytical Thinking",type:"soft" },
  {label:"Client Communication",type:"soft"},
]

function Skills(){
  return(
    <section id="skills" style={{
      minHeight: "60vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 80px"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        <p style={{
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#c9a84c",
          marginBottom: 12
        }}>
          Skills
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          color: "#000",
          letterSpacing: "-0.02em"
        }}>
          What I Work With
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          maxWidth: 700,
          padding: "0 8px"
        }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.06 }}
            style={{
              padding: "10px 20px",
              borderRadius: 100,
              fontSize: "clamp(11px, 2vw, 13px)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "default",
              transition: "all 0.2s ease",
              background: skill.type === "core"? "#0e0e0f": skill.type === "tool" ? "#fefce8": "#fafaf8",
              color: skill.type === "core" ? "#f0ede8": skill.type === "tool"? "#c9a84c" : "rgba(0,0,0,0.6)",
              border: skill.type === "core" ? "0.5px solid #0e0e0f" : skill.type === "tool" ? "0.5px solid #c9a84c": "0.5px solid rgba(0,0,0,0.12)"
            }}
          >
            {skill.label}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 48,
          justifyContent: "center"
        }}
      >
        {[
          { label: "Core CA Skills", color: "#0e0e0f", bg: "#0e0e0f" },
          { label: "Tools", color: "#c9a84c", bg: "#fefce8" },
          { label: "Soft Skills", color: "rgba(0,0,0,0.12)", bg: "#fafaf8" },
        ].map((item) => (
          <div key={item.label} style={{
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: item.bg,
              border: `1px solid ${item.color}`,
              flexShrink: 0
            }} />
            <span style={{
              fontSize: 11,
              color: "rgba(0,0,0,0.4)",
              letterSpacing: "0.06em"
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #skills {
            padding: 80px 24px !important;
          }
        }
      `}</style>

    </section>
  )
}

export default Skills
