import { ShieldCheck, Award, Users, Stethoscope, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseBest() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const leftFeatures = [
    { title: "Experienced Doctors", desc: "Specialists with fellowship training", icon: Stethoscope },
    { title: "Modern Equipment", desc: "US-FDA approved technology", icon: ShieldCheck },
    { title: "Advanced Patient Care", desc: "Custom recovery & pain roadmaps", icon: Award }
  ];

  const rightFeatures = [
    { title: "Dedicated Staff", desc: "Compassionate 1-on-1 assistance", icon: Users },
    { title: "Trusted Superspeciality", desc: "Non-surgical pain relief center", icon: HeartHandshake },
    { title: "24/7 Support", desc: "Always available for patient care", icon: Clock }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f4f8fb] to-white overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1e375a]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <p className="text-[#9C4146] text-[13px] uppercase tracking-widest font-bold mb-2">Why Patients Trust Us</p>
          <h2 className="text-4xl lg:text-[48px] text-[#1e375a] font-serif font-bold tracking-tight mb-4">
            WHY CHOOSE DR. RAJESH
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e375a] to-[#9C4146] mx-auto rounded-full"></div>
        </motion.div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Feature Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {leftFeatures.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ x: 6 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e375a]/10 text-[#1e375a] flex items-center justify-center shrink-0 group-hover:bg-[#9C4146] group-hover:text-white transition-colors duration-300">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e375a] text-[16px] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: Animated Flying Butterfly Card (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center justify-center py-4"
          >
            {/* Interactive Butterfly Container */}
            <div className="relative w-full max-w-[360px] aspect-[4/4.4] rounded-[36px] bg-gradient-to-br from-[#1e375a] via-[#162a45] to-[#0a1829] p-6 shadow-[0_25px_60px_rgba(30,55,90,0.3)] border-4 border-white overflow-hidden text-white text-center flex flex-col justify-between items-center">
              
              {/* Soft Radial Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00a8cc]/20 rounded-full blur-3xl pointer-events-none"></div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-[#C19A6B] pt-1">
                Centers of Excellence
              </p>

              {/* Large Animated Flying SVG Butterfly */}
              <motion.div 
                animate={{ y: [0, -12, 0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="w-full max-w-[280px] relative my-auto py-2 filter drop-shadow-[0_10px_20px_rgba(0,168,204,0.4)]"
              >
                <svg viewBox="0 0 400 300" className="w-full h-auto select-none overflow-visible">
                  <defs>
                    <linearGradient id="centerWingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#005f73" />
                      <stop offset="100%" stopColor="#0a9396" />
                    </linearGradient>
                    <linearGradient id="centerWingRight" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#005f73" />
                      <stop offset="100%" stopColor="#0a9396" />
                    </linearGradient>
                  </defs>

                  {/* Antennae */}
                  <g stroke="#94d2bd" strokeWidth="3" fill="none" strokeLinecap="round">
                    <path d="M 195 105 C 185 65 160 55 140 65" />
                    <circle cx="140" cy="65" r="3" fill="#94d2bd" stroke="none" />
                    <path d="M 205 105 C 215 65 240 55 260 65" />
                    <circle cx="260" cy="65" r="3" fill="#94d2bd" stroke="none" />
                  </g>

                  {/* LEFT WING - FLAPPING ANIMATION */}
                  <motion.g
                    animate={{ scaleX: [1, 0.72, 1, 0.78, 1], rotate: [0, -5, 0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                    style={{ transformOrigin: "200px 150px" }}
                  >
                    {/* Top Left Lobe */}
                    <path d="M 195 145 C 140 35 15 50 30 145 C 40 175 135 175 195 165 Z" fill="url(#centerWingLeft)" />
                    {/* Bottom Left Lobe */}
                    <path d="M 195 168 C 135 180 65 185 85 265 C 100 305 175 285 195 220 Z" fill="#005f73" opacity="0.9" />
                    {/* Dashed dividing line */}
                    <line x1="40" y1="160" x2="190" y2="160" stroke="#e9d8a6" strokeWidth="2" strokeDasharray="4,3" opacity="0.8" />
                    
                    {/* Text inside Left Wing */}
                    <text x="135" y="115" fill="#ffffff" textAnchor="middle" fontSize="24" fontWeight="bold" fontFamily="serif">10+</text>
                    <text x="135" y="132" fill="#e9d8a6" textAnchor="middle" fontSize="8" fontWeight="bold" letterSpacing="0.5">YRS EXP.</text>
                    
                    <text x="140" y="215" fill="#ffffff" textAnchor="middle" fontSize="22" fontWeight="bold" fontFamily="serif">10k+</text>
                    <text x="140" y="230" fill="#e9d8a6" textAnchor="middle" fontSize="8" fontWeight="bold" letterSpacing="0.5">PATIENTS</text>
                  </motion.g>

                  {/* RIGHT WING - FLAPPING ANIMATION */}
                  <motion.g
                    animate={{ scaleX: [1, 0.72, 1, 0.78, 1], rotate: [0, 5, 0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                    style={{ transformOrigin: "200px 150px" }}
                  >
                    {/* Top Right Lobe */}
                    <path d="M 205 145 C 260 35 385 50 370 145 C 360 175 265 175 205 165 Z" fill="url(#centerWingRight)" />
                    {/* Bottom Right Lobe */}
                    <path d="M 205 168 C 265 180 335 185 315 265 C 300 305 225 285 205 220 Z" fill="#005f73" opacity="0.9" />
                    {/* Dashed dividing line */}
                    <line x1="360" y1="160" x2="210" y2="160" stroke="#e9d8a6" strokeWidth="2" strokeDasharray="4,3" opacity="0.8" />

                    {/* Text inside Right Wing */}
                    <text x="265" y="115" fill="#ffffff" textAnchor="middle" fontSize="24" fontWeight="bold" fontFamily="serif">3000+</text>
                    <text x="265" y="132" fill="#e9d8a6" textAnchor="middle" fontSize="8" fontWeight="bold" letterSpacing="0.5">SURGERIES</text>

                    <text x="260" y="215" fill="#ffffff" textAnchor="middle" fontSize="22" fontWeight="bold" fontFamily="serif">100%</text>
                    <text x="260" y="230" fill="#e9d8a6" textAnchor="middle" fontSize="8" fontWeight="bold" letterSpacing="0.5">TRUSTED</text>
                  </motion.g>

                  {/* Center Body Core */}
                  <path d="M 200 105 C 190 110 188 235 200 240 C 212 235 210 110 200 105 Z" fill="#ee9b00" />
                  <circle cx="200" cy="105" r="7" fill="#ee9b00" />
                </svg>
              </motion.div>

              {/* Bottom Card Badge */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl py-2 px-4 border border-white/20 text-[11px] font-semibold text-white/90 w-full">
                Specialized Interventional Pain Care
              </div>

            </div>
          </motion.div>

          {/* Right Feature Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {rightFeatures.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ x: -6 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#9C4146]/10 text-[#9C4146] flex items-center justify-center shrink-0 group-hover:bg-[#1e375a] group-hover:text-white transition-colors duration-300">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e375a] text-[16px] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

