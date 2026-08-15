import { CalendarDays, Search, UserCheck, ShieldCheck, HeartPulse, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const particles = [
    { top: '16%', left: '6%', size: 8, delay: 0 },
    { top: '28%', left: '18%', size: 5, delay: 1.2 },
    { top: '55%', left: '4%', size: 6, delay: 0.6 },
    { top: '70%', left: '16%', size: 4, delay: 2 },
    { top: '38%', left: '10%', size: 5, delay: 1.6 },
    { top: '80%', left: '40%', size: 6, delay: 0.9 },
    { top: '12%', left: '42%', size: 4, delay: 2.4 },
    { top: '64%', left: '52%', size: 5, delay: 1.1 }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdfbfa] via-[#f7eee8] to-[#f0e4da]">

      {/* Animated gradient blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#1e375a]/10 blur-3xl pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-[#9C4146]/10 blur-3xl pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute -bottom-24 left-1/3 w-[380px] h-[380px] rounded-full bg-[#C19A6B]/15 blur-3xl pointer-events-none z-0"
      ></motion.div>

      {/* Curved beige shape on the right */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#f0e4da] to-[#f7eee8] rounded-l-[200px] z-0 pointer-events-none"></div>

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-6 right-10 opacity-20 z-0 pointer-events-none"
      >
        <img src="https://api.iconify.design/ph:flower-lotus-thin.svg?color=%239C4146" className="w-40 h-40" alt="" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-28 left-4 opacity-10 z-0 pointer-events-none"
      >
        <img src="https://api.iconify.design/ph:leaf-thin.svg?color=%231e375a" className="w-24 h-24" alt="" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-24 left-2 opacity-10 z-0 pointer-events-none"
      >
        <img src="https://api.iconify.design/ph:heartbeat-thin.svg?color=%239C4146" className="w-20 h-20" alt="" />
      </motion.div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -32, 0], opacity: [0.25, 0.8, 0.25] }}
          transition={{ repeat: Infinity, duration: 5 + i * 0.4, ease: "easeInOut", delay: p.delay }}
          className="absolute rounded-full bg-[#9C4146]/30 pointer-events-none z-0"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
        ></motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Content */}
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }} className="lg:w-1/2">

            <motion.p variants={fadeUp} className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#9C4146]"></span> REVEAL YOUR BEST SELF
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-5xl lg:text-[60px] font-serif text-[#1e375a] leading-[1.1] mb-2">
              Advanced Care.
            </motion.h1>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-[60px] font-serif text-[#1e375a] leading-[1.1] mb-6">
              Timeless Confidence.
            </motion.h1>

            {/* Red decorative line */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-[#9C4146]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#9C4146]"></div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-lg">
              Specialized non-surgical interventional pain management for joint, spine, and knee pain using US-FDA approved image-guided precision care.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/contact" className="w-full sm:w-auto bg-[#1e375a] hover:bg-[#162e4e] text-white py-4 px-8 rounded-md font-bold text-[14px] transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5">
                <CalendarDays size={17} /> Book Appointment
              </Link>
              <Link to="/services" className="w-full sm:w-auto border border-[#1e375a] text-[#1e375a] hover:bg-[#1e375a] hover:text-white py-4 px-8 rounded-md font-bold text-[14px] transition-all flex items-center justify-center gap-2">
                <Search size={17} /> Explore Treatments
              </Link>
            </motion.div>

            {/* Bottom 4 Feature Items (Stacked Icon above Text - Matching Reference Image) */}
            <motion.div variants={fadeUp} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200/80 pt-8">
              {[
                { icon: <UserCheck size={28} className="text-[#1e375a]" />, label: 'Expert Doctors', sub: 'Experienced & Trusted' },
                { icon: <ShieldCheck size={28} className="text-[#1e375a]" />, label: 'Advanced Technology', sub: 'Safe & Effective' },
                { icon: <HeartPulse size={28} className="text-[#1e375a]" />, label: 'Personalized Care', sub: 'Just for You' },
                { icon: <Award size={28} className="text-[#1e375a]" />, label: 'Proven Results', sub: 'Visible & Lasting' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4 }} 
                  className="flex flex-col items-start gap-1 group cursor-default"
                >
                  <div className="mb-2 p-2 rounded-xl bg-gray-100/80 group-hover:bg-[#9C4146] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="text-[14px] font-bold text-[#1e375a] group-hover:text-[#9C4146] transition-colors leading-snug">{item.label}</p>
                  <p className="text-[11.5px] text-gray-500 font-medium">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Composition: Doctor Image + Lotus Graphic Overlay + 4 Floating Stacked Pill Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative min-h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
            {/* Glowing Rose-Gold Lotus Illustration (Background Left) */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute left-0 -top-4 opacity-30 pointer-events-none z-0"
            >
              <img 
                src="https://api.iconify.design/ph:flower-lotus-thin.svg?color=%239C4146" 
                className="w-80 h-80 lg:w-[380px] lg:h-[380px]" 
                alt="Lotus Symbol" 
              />
            </motion.div>

            {/* Main Doctor/Treatment Image Card (Fits Perfectly) */}
            <div className="relative w-[280px] sm:w-[320px] h-[440px] rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(30,55,90,0.18)] border-4 border-white shrink-0 z-10 -ml-8 sm:ml-0">
              <img
                src="/hero_pain_care.jpg"
                alt="Interventional Pain Relief Procedure C-Arm Guidance"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e375a]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block bg-[#9C4146] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-1">
                  C-Arm Image-Guided
                </span>
                <p className="font-serif font-bold text-sm leading-tight text-white">Non-Surgical Interventional Pain Center</p>
              </div>
            </div>

            {/* Dotted Arc Connector Line behind Cards */}
            <div className="absolute right-28 lg:right-32 top-8 bottom-8 w-24 pointer-events-none z-10 border-r-2 border-dashed border-[#9C4146]/40 rounded-r-full hidden sm:block"></div>

            {/* 4 Floating Stacked White Pill Cards Overlapping on Right */}
            <div className="relative z-20 flex flex-col gap-4 w-[210px] sm:w-[240px] -ml-16 sm:-ml-20">
              {[
                { 
                  icon: 'ph:plant-light', 
                  title: 'Advanced Tech', 
                  sub: 'US-FDA Approved',
                  delay: 0 
                },
                { 
                  icon: 'ph:user-gear-light', 
                  title: 'Personalized Care', 
                  sub: 'Tailored Roadmaps',
                  delay: 0.1 
                },
                { 
                  icon: 'ph:shield-check-light', 
                  title: 'Safe & Effective', 
                  sub: 'Minimally Invasive',
                  delay: 0.2 
                },
                { 
                  icon: 'ph:sparkle-light', 
                  title: 'Visible Results', 
                  sub: 'Lasting Pain Relief',
                  delay: 0.3 
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: card.delay, duration: 0.7 }}
                  whileHover={{ x: -6, scale: 1.03 }}
                  className="bg-white/95 backdrop-blur-md rounded-[24px] p-3 px-4 shadow-[0_12px_35px_rgba(30,55,90,0.14)] border border-white hover:border-[#9C4146] hover:shadow-[0_18px_45px_rgba(156,65,70,0.2)] transition-all duration-300 flex items-center gap-3 group cursor-default"
                >
                  {/* Icon Circle Box */}
                  <div className="w-9 h-9 rounded-xl bg-[#9C4146]/10 text-[#9C4146] flex items-center justify-center shrink-0 group-hover:bg-[#9C4146] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <img 
                      src={`https://api.iconify.design/${card.icon}.svg?color=%239C4146`} 
                      className="w-4.5 h-4.5 group-hover:brightness-200 transition-all" 
                      alt="" 
                    />
                  </div>

                  {/* Card Text */}
                  <div>
                    <h4 className="font-bold text-[#1e375a] text-[13px] group-hover:text-[#9C4146] transition-colors leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5 leading-none">
                      {card.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
