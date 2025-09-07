"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Globe, ChevronLeft, ChevronRight, MapPin, GraduationCap, Code, Sparkles } from "lucide-react";

// ---- DATA ----

interface CardData {
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  details: { icon: React.ElementType; text: string }[];
  socials: { icon: React.ElementType; link: string }[];
  cvUrl: string;
  qrCodeValue: string;
  contactInfo: { label: string; value: string }[];
  skills: string[];
}

const cardData: CardData = {
  name: "Obayd",
  title: "Full Stack Developer",
  avatarUrl: "/me.png",
  bio: "Passionate about building deep systems, exploring AI & crafting digital experiences.",
  details: [
    { icon: MapPin, text: "Tunisia" },
    { icon: GraduationCap, text: "2nd Year License" },
    { icon: Code, text: "Web & Systems" },
    { icon: Sparkles, text: "Since 2020" },
  ],
  socials: [
    { icon: Github, link: "https://github.com/Obaydz" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/oubeidallah-zmander-945185306/" },
    { icon: Mail, link: "mailto:oubeidallahzmander@gamil.com" },
    { icon: Globe, link: "https://obayd.medal-team.com" },
  ],
  cvUrl: "/cv.pdf",
  qrCodeValue: "https://your-identity-hub.vercel.app",
  contactInfo: [
    { label: "Email", value: "oubeidallahzmander@gmail.com" },
    { label: "Phone", value: "+216 24 301 793" },
    { label: "Availability", value: "Open to work" },
  ],
  skills: ["React", "Node.js", "Python", "AI/ML", "Next.js", "TailwindCSS", "Framer Motion"],
};

// ---- MOTION CONFIG ----
const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ---- FRONT ----
const CardFront: React.FC<{ data: CardData }> = ({ data }) => (
  <motion.div
    className="absolute w-full h-full bg-gradient-to-br from-purple-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-between p-4 md:p-6 overflow-hidden backface-hidden"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl" />

    {/* Left */}
    <motion.div className="flex flex-col items-center justify-center w-[40%] h-full z-10" variants={fadeUp}>
      <motion.div
        whileHover={{ scale: 1.1, rotateZ: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/80 shadow-lg"
      >
        <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
      </motion.div>
      <h1 className="mt-2 md:mt-4 text-center text-lg md:text-2xl font-bold text-white">{data.name}</h1>
      <p className="text-center text-xs md:text-sm text-purple-200">{data.title}</p>
    </motion.div>

    {/* Right */}
    <div className="flex flex-col justify-around w-[55%] h-full z-10">
      <motion.p variants={fadeUp} className="text-gray-200 text-xs md:text-sm leading-relaxed">
        {data.bio}
      </motion.p>
      <motion.div className="grid grid-cols-2 gap-1.5 md:gap-2 text-[10px] md:text-xs text-gray-100">
        {data.details.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            className="bg-white/10 backdrop-blur-md rounded-md p-1.5 md:p-2 flex items-center gap-2 mb-1"
          >
            <item.icon size={14} className="text-purple-300 flex-shrink-0" />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center">
        <div className="flex gap-2">
          {data.socials.map((item, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.2, y: -4 }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white transition-colors"
            >
              <item.icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>

    {/* Hint */}
    <motion.div variants={fadeUp} className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex items-center text-purple-300 text-xs opacity-70">
      <span className="hidden md:inline mr-1">Flip</span> <ChevronRight size={16} />
    </motion.div>
  </motion.div>
);

// ---- BACK ----
const CardBack: React.FC<{ data: CardData }> = ({ data }) => (
  <motion.div
    className="absolute w-full h-full bg-gradient-to-br from-gray-900 to-purple-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center backface-hidden overflow-hidden p-4 md:p-6"
    style={{ transform: "rotateY(180deg)" }}
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 blur-xl" />
    
    {/* This inner div allows content to scroll if it's too long */}
    <div className="relative w-full h-full flex flex-col items-center z-10 overflow-y-auto pr-2">
      <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 flex-shrink-0">Contact & Skills</h2>
      <div className="space-y-2 text-gray-200 w-full max-w-xs mb-3 md:mb-4">
        {data.contactInfo.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="flex justify-between items-center p-2 bg-white/10 rounded-lg">
            <span className="text-xs md:text-sm">{item.label}:</span>
            <span className="font-mono text-xs md:text-sm">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
    
     {/* Hint */}
    <motion.div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 flex items-center text-purple-300 text-xs opacity-70 z-20">
      <ChevronLeft size={16} /> <span className="hidden md:inline ml-1">Flip</span>
    </motion.div>
  </motion.div>
);

// ---- MAIN ----
export default function IdentityCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { stiffness: 100 });
  const rotateY = useSpring(useTransform(x, [-250, 250], [-10, 10]), { stiffness: 100 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="flex flex-col items-center justify-start p-4 min-h-screen">
      <div
        className="perspective-1000 w-[90vw] max-w-[500px] aspect-[5/3] mt-10" // <-- Using aspect ratio here!
        ref={cardRef}
      >
        <motion.div
          style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
          className="w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full cursor-pointer"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsFlipped(!isFlipped)}
            role="button"
            aria-pressed={isFlipped}
            tabIndex={0}
          >
            <CardFront data={cardData} />
            <CardBack data={cardData} />
          </motion.div>
        </motion.div>
      </div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-8 text-purple-300 text-sm">
        Click on the card to see more.
      </motion.p>
      <br></br>
      <a
        href="/Home"
        className="inline-flex items-center px-3 py-1.5 text-l font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md"
      >
        See Full Portfolio
      </a>
    </div>
  );
}