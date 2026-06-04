import{useRef,useState,useEffect }from "react"
import{motion,useMotionValue,useSpring,useMotionTemplate}from "framer-motion"
import{FiLinkedin,FiMail}from "react-icons/fi"

const typewriterWords=["CA Final Student","Dance Lover","Explorer"]
  const heroLines=["DIYA DOSHI","CA FINALIST"]

function useTypewriter(words,typingSpeed=50,deletingSpeed=30,pauseDuration=1500){
  const [currentText,setCurrentText]=useState("")
   const [wordIndex,setWordIndex]=useState(0)
     const [isDeleting,setIsDeleting]=useState(false)
          const [isPaused,setIsPaused]=useState(false)

  useEffect(() => {
    if (isPaused) return

    const currentWord=words[wordIndex]

    const timeout=setTimeout(()=>{
      if(!isDeleting){
        if(currentText.length<currentWord.length){
          setCurrentText(currentWord.slice(0,currentText.length+1))
        }else{
          setIsPaused(true)
          setTimeout(()=>{
            setIsPaused(false)
              setIsDeleting(true)
          },pauseDuration)
        }
      }else{
        if (currentText.length>0){
          setCurrentText(currentWord.slice(0,currentText.length-1))
        }else{
          setIsDeleting(false)
          setWordIndex((prev)=>(prev+1)%words.length)
        }
      }
    },isDeleting?deletingSpeed:typingSpeed)

    return()=>clearTimeout(timeout)
  },[currentText,isDeleting,isPaused,wordIndex,words,typingSpeed,deletingSpeed,pauseDuration])
 return currentText
}

function useHeroTypewriter(){
  const [currentText,setCurrentText]=useState("")
   const [lineIndex,setLineIndex]=useState(0)
     const [isDeleting,setIsDeleting]=useState(false)
  const [isPaused,setIsPaused]=useState(false)

  useEffect(() => {
    if (isPaused) return

    const currentLine = heroLines[lineIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentLine.length) {
          setCurrentText(currentLine.slice(0, currentText.length + 1))
        } else {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentLine.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setLineIndex((prev) => (prev + 1) % heroLines.length)
        }
      }
    }, isDeleting?25:60)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, lineIndex])

  const isGold =
    heroLines[lineIndex] === "CA FINALIST" ||
    (isDeleting && heroLines[lineIndex] === "CA FINALIST") ||
    (!isDeleting && lineIndex === 1)

  return { currentText, isGold }
}

const blinkStyle = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

const gridBackground = (color) => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `
    linear-gradient(to right, ${color} 1px, transparent 1px),
    linear-gradient(to bottom, ${color} 1px, transparent 1px)
  `,
  backgroundSize: "24px 24px",
})
function SocialLinks({ color }) {
  return (
    <div style={{ position: "absolute", bottom: 28, left: 28, display: "flex", gap: 20, alignItems: "center" }}>
      <a
        href="https://www.linkedin.com/in/diya-doshi-94b843395"
        target="_blank"
        rel="noreferrer"
        style={{ color, display: "flex" }}
      >
        <FiLinkedin size={20} strokeWidth={1.5} />
      </a>
      <a
        href="mailto:diyardoshi@gmail.com"
        style={{ color, textDecoration: "none", display: "flex" }}
      >
        <FiMail size={20} strokeWidth={1.5} />
      </a>
    </div>
  )
}

function MobileHero({ typewriterText, heroText, isGold }) {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#ffffff" }}>
      <div style={gridBackground("rgba(0,0,0,0.04)")} />

      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "60px 24px 0" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{
            fontSize: "clamp(36px, 12vw, 72px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
            fontFamily: isGold ? "monospace" : "inherit",
            color: isGold ? "#c9a84c" : "#000000",
            transition: "color 0.3s ease",
            minHeight: "1.2em",
          }}>
            {heroText}
            <span style={{ animation:"blink 1s step-end infinite"}}>|</span>
          </h1>

          <div style={{ marginTop: 20, fontFamily: "monospace", fontSize: "clamp(13px, 3.5vw, 16px)" }}>
            <span style={{ color: "#555" }}>Articleship · </span>
            <span style={{ color: "#555" }}>{typewriterText}</span>
            <span style={{ color: "#000", animation: "blink 1s step-end infinite" }}>|</span>
          </div>

          <p style={{ marginTop: 24, fontSize: "clamp(11px, 3vw, 14px)", color: "rgba(0,0,0,0.4)", letterSpacing: "0.08em" }}>
            CA Foundation · CA Inter · EY Mumbai
          </p>
        </div>
      </div>

      <SocialLinks color="rgba(0,0,0,0.4)" />

      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(to right, transparent, #c9a84c, transparent)",
      }} />

      <style>{blinkStyle}</style>
    </section>
  )
}

function MainPage() {
  const heroRef = useRef(null)
  const [isClient, setIsClient] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const clipPath = useMotionTemplate`circle(200px at ${springX}px ${springY}px)`

  const typewriterText = useTypewriter(typewriterWords)
  const { currentText: heroText, isGold } = useHeroTypewriter()

  useEffect(() => {
    setIsClient(true)
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  if (isTouchDevice) {
    return <MobileHero typewriterText={typewriterText} heroText={heroText} isGold={isGold} />
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", cursor: "none" }}
    >
      <div style={{ position: "absolute", inset: 0, background: "#ffffff" }}>
        <div style={gridBackground("rgba(0,0,0,0.04)")} />

        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "0 24px" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{
              fontSize: "clamp(36px, 10vw, 96px)",
              fontWeight: 900,
              color: "#000000",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textTransform: "uppercase",
            }}>
              DIYA DOSHI
            </h1>

            <div style={{ marginTop: 20, fontFamily: "monospace", fontSize: "clamp(13px, 2vw, 16px)" }}>
              <span style={{ color: "#555" }}>Articleship · </span>
              <span style={{ color: "#555" }}>{typewriterText}</span>
              <span style={{ color: "#000", animation: "blink 1s step-end infinite" }}>|</span>
            </div>

            <p style={{ marginTop: 24, fontSize: "clamp(11px, 1.5vw, 14px)", color: "rgba(0,0,0,0.4)", letterSpacing: "0.08em" }}>
              CA Foundation · CA Inter · EY Mumbai
            </p>
          </div>
        </div>

        <SocialLinks color="rgba(0,0,0,0.4)" />
      </div>
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0e0e0f",
          clipPath: isClient ? clipPath : "circle(0px at 50% 50%)",
        }}
      >
        <div style={gridBackground("rgba(255,255,255,0.04)")} />

        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "0 24px" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{
              fontSize: "clamp(36px, 10vw, 96px)",
              fontWeight: 900,
              color: "#c9a84c",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}>
              CA FINALIST
            </h1>

            <div style={{ marginTop: 20, fontFamily: "monospace", fontSize: "clamp(13px, 2vw, 16px)" }}>
              <span style={{ color: "#c9a84c" }}>Articleship · </span>
              <span style={{ color: "#c9a84c" }}>{typewriterText}</span>
              <span style={{ color: "#c9a84c", animation: "blink 1s step-end infinite" }}>|</span>
            </div>

            <p style={{ marginTop: 24, fontSize: "clamp(11px, 1.5vw, 14px)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", fontFamily: "monospace" }}>
              CA FINALIST @ ICAI · EY Mumbai
            </p>
          </div>
        </div>

        <SocialLinks color="rgba(255,255,255,0.4)" />
      </motion.div>
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <div style={{ width: 32, height: 32, position: "relative" }}>
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid white",
            mixBlendMode: "difference",
          }} />
        </div>
      </motion.div>

      <style>{blinkStyle}</style>
    </section>
  )
}

export default MainPage