import {motion} from "framer-motion"
const stats=[
{label: "CA Foundation",value:"Cleared"},
{label: "CA Intermediate",value:"Cleared"},
{label: "Articleship",value:"EY Mumbai"},
{label: "Hometown",value:"Vadodara"},
]
const tags = ["Dance Enthusiast", "Travel Lover", "CA Final", "EY Mumbai", "Vadodara"]
function About() {
  return (
    <section id="about" style={{
      minHeight:"100vh",
      background:"#fff",
      display:"flex",
      alignItems:"center",
      padding:"100px 80px",
      gap:80
    }}>
      <motion.div
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.8}}
        viewport={{once:true,amount:0.2}}
        style={{flexShrink:0}}
      >
        <div style={{
          width:340,
          height:420,
          borderRadius:16,
          overflow:"hidden",
          position:"relative"
        }}>
          <img
            src="/dphoto1.png"
            alt="Diya Doshi"
            style={{width:"100%",height:"100%",objectFit:"cover"}}
            onError={(e)=>{e.target.style.display="none"}}
          />
          <div style={{
            position:"absolute",
              inset:0,
            background:"#f5f5f3",
            display:"flex",
              alignItems:"center",
            justifyContent:"center",
              fontSize:64,
               color:"#ccc",
            zIndex:-1
          }}>
            DiyaDoshi
          </div>
          <div style={{
            position:"absolute",
          inset:0,
            border:"2px solid rgba(201,168,76,0.3)",
            borderRadius:16,
           pointerEvents:"none"
          }} />
        </div>
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:12,
          marginTop:16,
          width:340
        }}>
          {stats.map((stat) =>(
            <div key={stat.label} style={{
              background:"#f9f9f7",
                border:"0.5px solid rgba(0,0,0,0.08)",
              borderRadius:10,
            padding:"14px 16px"
            }}>
              <p style={{
                  fontSize:11,
                letterSpacing:"0.08em",
                textTransform:"uppercase",
                  color:"rgba(0,0,0,0.35)",
                marginBottom:4
              }}>
                {stat.label}
              </p>
              <p style={{
                 fontSize:14,
                fontWeight:600,
                color:"#000",
                  letterSpacing:"0.02em"
              }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
         initial={{opacity:0,x:50}}
        whileInView={{opacity:1,x:0}}
          transition={{duration:0.8,delay:0.2}}
         viewport={{once:true,amount: 0.2}}
        style={{flex:1}}
      >
        <p style={{
           fontSize:11,
          letterSpacing:"0.14em",
            textTransform:"uppercase",
          color:"#c9a84c",
            marginBottom:16
        }}>
          About
        </p>

        <h2 style={{
          fontSize:"clamp(32px, 4vw, 48px)",
          fontWeight:800,
            color:"#000",
          lineHeight:1.15,
           marginBottom:28,
          letterSpacing:"-0.02em"
        }}>
          Balancing Sheets,<br/>Chasing Dreams<br />
          <span style={{color: "#c9a84c"}}>& Dancing Through Life</span>
        </h2>

        <p style={{
          fontSize:16,
            color:"rgba(0,0,0,0.6)",
          lineHeight:1.85,
           marginBottom:20,
          maxWidth:520
        }}>
          Hi, I'm Diya - a CA Final student currently doing my articleship
          at Ernst & Young, Mumbai. I come from Vadodara, Gujarat, and moved
          to Mumbai chasing bigger dreams and bigger audits.
        </p>
 <p style={{
              fontSize: 16,
          color: "rgba(0,0,0,0.6)",
           lineHeight: 1.85,
          marginBottom: 32,
          maxWidth: 520
        }}>
          Outside the balance sheets, you will find me expressing my love for dance or
          planning my next trip somewhere new. That's the kind of professional I'm becoming,
          one audit at a time.
        </p>
        <div style={{display: "flex",flexWrap:"wrap",gap: 10}}>
          {tags.map((tag)=>(
            <span key={tag} style={{
               padding:"8px 16px",
                border:"0.5px solid rgba(0,0,0,0.15)",
                  borderRadius:100,
          fontSize:12,
              letterSpacing:"0.06em",
          color:"rgba(0,0,0,0.6)",
              background:"#fafaf8"
            }}>
            {tag}
            </span>
          ))}
        </div>
      </motion.div>
      <style>{`
        @media (max-width: 768px){
          #about{
              flex-direction:column !important;
            padding:80px 24px !important;
         gap:40px !important;
            align-items:flex-start !important;
          }
           #about>div:first-child{
       width:100% !important;
             flex-shrink:unset !important;
          }
          #about>div:first-child>div:first-child {
             width:100% !important;
        height:320px !important;
          }
         #about>div:first-child > div:last-child {
            width:100% !important;
          }
        }
      `}</style>
    </section>
  )
}
export default About