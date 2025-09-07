"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Download, ChevronLeft, ChevronRight, MapPin, GraduationCap, Code, Sparkles } from "lucide-react";
import { QRCode } from "react-qrcode-logo";

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

const cardData = {
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
    { icon: Github, link: "https://github.com/your-github" },
    { icon: Linkedin, link: "https://linkedin.com/in/your-linkedin" },
    { icon: Mail, link: "mailto:your-email@example.com" },
    { icon: Globe, link: "https://your-portfolio.com" },
  ],
  cvUrl: "/cv.pdf",
  qrCodeValue: "https://your-identity-hub.vercel.app",
  contactInfo: [
    { label: "Email", value: "contact@example.com" },
    { label: "Phone", value: "+123 456 789" },
    { label: "Availability", value: "Open to work" },
  ],
  skills: ["React", "Node.js", "Python", "AI/ML", "Next.js"],
};

// ---- MOTION CONFIG ----
const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// ---- FRONT ----
const CardFront: React.FC<{ data: CardData }> = ({ data }) => (
  <motion.div
    className="absolute w-full h-full bg-gradient-to-br from-purple-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-between p-6 overflow-hidden backface-hidden"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl" />

    {/* Left */}
    <motion.div className="flex flex-col items-center w-[40%] z-10" variants={fadeUp}>
      <motion.div
        whileHover={{ scale: 1.1, rotateZ: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/80 shadow-lg"
      >
        <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
      </motion.div>
      <h1 className="mt-4 text-2xl font-bold text-white">{data.name}</h1>
      <p className="text-sm text-purple-200">{data.title}</p>
    </motion.div>

    {/* Right */}
    <div className="flex flex-col justify-between w-[55%] h-full py-2 z-10">
      <motion.p variants={fadeUp} className="text-gray-200 text-sm leading-relaxed">
        {data.bio}
      </motion.p>

      <motion.div className="grid grid-cols-2 gap-2 text-xs text-gray-100">
        {data.details.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            className="bg-white/10 backdrop-blur-md rounded-md p-2 flex items-center gap-2"
          >
            <item.icon size={14} className="text-purple-300" /> {item.text}
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-between">
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
        <a
          href={data.cvUrl}
          download
          className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md"
        >
          <Download size={14} className="mr-1.5" /> CV
        </a>
      </div>
    </div>


    {/* Hint */}
    <motion.div variants={fadeUp} className="absolute bottom-4 left-4 flex items-center text-purple-300 text-xs">
      <ChevronRight size={14} /> Click to flip
    </motion.div>
  </motion.div>
);

// ---- BACK ----
const CardBack: React.FC<{ data: CardData }> = ({ data }) => (
  <motion.div
    className="absolute w-full h-full bg-gradient-to-br from-gray-900 to-purple-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden backface-hidden"
    style={{ transform: "rotateY(180deg)" }}
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 blur-xl" />

    <h2 className="text-xl font-bold text-white mb-4">Contact & Skills</h2>

    <div className="space-y-3 text-gray-200 w-full max-w-sm">
      {data.contactInfo.map((item, i) => (
        <motion.div key={i} variants={fadeUp} className="flex justify-between items-center p-2 bg-white/10 rounded-lg">
          <span className="text-sm">{item.label}:</span>
          <span className="font-mono text-sm">{item.value}</span>
        </motion.div>
      ))}
    </div>

    <div className="mt-6 w-full max-w-sm">
      <h3 className="text-lg font-semibold text-white mb-2">Primary Skills</h3>
      <motion.div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <motion.span key={skill} variants={fadeUp} className="px-3 py-1 bg-purple-600 text-xs text-white rounded-full">
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>

  </motion.div>
);

// ---- MAIN ----
export default function IdentityCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { stiffness: 100 });
  const rotateY = useSpring(useTransform(x, [-250, 250], [-10, 10]), { stiffness: 100 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
  className="perspective-1000 w-[90vw] h-[54vw] max-w-[500px] max-h-[300px] md:w-[500px] md:h-[300px]"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  ref={cardRef}
>
  {/* Outer: Tilt */}
  <motion.div
    style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
    className="w-full h-full"
  >
    {/* Inner: Flip */}
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
    </div>
  );
}
