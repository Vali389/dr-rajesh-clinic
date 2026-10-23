import { CheckCircle2, Award, Microscope, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageFadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#1e375a] to-[#0a1829] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#9C4146] rounded-full filter blur-[200px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C19A6B] rounded-full filter blur-[150px] opacity-[0.1] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Image Over Image Layout */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageFadeIn} className="lg:w-1/2 w-full relative">
            
            {/* Main Large Image - Highly professional hospital/doctor setting */}
            <div className="rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 w-[85%]">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=80" 
                alt="Advanced Medical Facility" 
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e375a]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Secondary Overlapping Image (Bottom Right) - High-end technology/treatment */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }} 
              whileInView={{ opacity: 1, x: 0, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-8 -right-4 w-[55%] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 border-[6px] border-[#0a1829]"
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80" 
                alt="Precision Technology" 
                className="w-full h-auto object-cover aspect-square hover:scale-110 transition-transform duration-1000"
              />
              {/* Floating Stat Overlay */}
              <div className="absolute inset-0 bg-[#9C4146]/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 group cursor-default hover:bg-[#9C4146]/90 transition-colors">
                <h4 className="text-4xl font-serif font-bold text-white mb-1 group-hover:scale-110 transition-transform">15+</h4>
                <p className="text-[10px] text-white/90 uppercase tracking-[0.2em] font-bold">Years<br/>Experience</p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 pt-12 lg:pt-0">
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C19A6B]/15 border border-[#C19A6B]/30 text-[#C19A6B] text-[12px] font-bold uppercase tracking-widest mb-4"
            >
              <Sparkles className="w-4 h-4 text-[#C19A6B]" />
              <span>WHY CHOOSE DR. RAJESH</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white leading-[1.15] mb-6">
              Excellence in Care,<br/> <span className="italic font-light text-white/90">Results You Can Trust.</span>
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-10 max-w-lg">
              Dr. Vasam Rajesh Kumar is a highly specialized Interventional Pain Physician offering world-class, non-surgical solutions to help you reclaim your active life. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <motion.div whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-md p-6 rounded-[24px] border border-white/10 flex gap-4 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#C19A6B]/20 flex items-center justify-center shrink-0">
                  <Award size={20} className="text-[#C19A6B]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-[15px] mb-1">FIPM Certified</h4>
                  <p className="text-[13px] text-white/60 leading-tight">Fellowship in Interventional Pain Medicine.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-md p-6 rounded-[24px] border border-white/10 flex gap-4 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#C19A6B]/20 flex items-center justify-center shrink-0">
                  <Microscope size={20} className="text-[#C19A6B]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-[15px] mb-1">Advanced Tech</h4>
                  <p className="text-[13px] text-white/60 leading-tight">Image-guided & US FDA approved treatments.</p>
                </div>
              </motion.div>
            </div>
            
            <ul className="space-y-5 mb-10">
              {[
                'Evidenced-based, patient-centered approach',
                'Minimally invasive, non-surgical focus',
                'Customized rehabilitation and recovery plans',
                'Multidisciplinary critical care expertise'
              ].map((text, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="text-[#C19A6B]" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-white/80 font-medium">{text}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C19A6B] hover:bg-white text-[#1e375a] py-4 px-10 rounded-full font-bold text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(193,154,107,0.3)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] flex items-center gap-3 group"
            >
              Know More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
