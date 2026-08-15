import { motion } from 'framer-motion';
import { ArrowRight, Syringe, Waypoints, Activity, Sparkles, ShieldPlus, Target } from 'lucide-react';

export default function AdvancedProcedures() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const procedures = [
    {
      icon: <Syringe size={28} strokeWidth={1.5} />,
      title: "Facet Joint Injections",
      desc: "Targeted injections into cervical, thoracic, and lumbar facet joints to relieve arthritis-related spine pain.",
      tag: "Spine Care"
    },
    {
      icon: <Waypoints size={28} strokeWidth={1.5} />,
      title: "Medial Branch Blocks",
      desc: "Diagnostic and therapeutic nerve blocks to identify and treat facet joint-mediated pain.",
      tag: "Diagnostic"
    },
    {
      icon: <Target size={28} strokeWidth={1.5} />,
      title: "Genicular Nerve Block",
      desc: "Precise nerve block targeting the genicular nerves around the knee for chronic knee pain relief.",
      tag: "Joint Care"
    },
    {
      icon: <Activity size={28} strokeWidth={1.5} />,
      title: "Stellate Ganglion Block",
      desc: "Sympathetic nerve block for CRPS, vascular insufficiency, and chronic pain of the head and neck.",
      tag: "Nerve Block"
    },
    {
      icon: <Sparkles size={28} strokeWidth={1.5} />,
      title: "Spinal Cord Stimulators",
      desc: "Implantable neuromodulation devices that deliver electrical pulses to interrupt pain signals.",
      tag: "Neuromodulation"
    },
    {
      icon: <ShieldPlus size={28} strokeWidth={1.5} />,
      title: "Vertebroplasty",
      desc: "Minimally invasive procedure to stabilize vertebral compression fractures with bone cement.",
      tag: "Spine Care"
    },
    {
      icon: <Syringe size={28} strokeWidth={1.5} />,
      title: "Hyaluronic Acid Injections",
      desc: "Viscosupplementation for knee osteoarthritis — lubricating injections that reduce friction.",
      tag: "Joint Care"
    },
    {
      icon: <Target size={28} strokeWidth={1.5} />,
      title: "Botulinum for Headache",
      desc: "FDA-approved injections for chronic migraines and tension headaches, reducing episode frequency.",
      tag: "Headache Care"
    },
    {
      icon: <ShieldPlus size={28} strokeWidth={1.5} />,
      title: "Intrathecal Pump",
      desc: "Implantable drug delivery system for targeted medication directly to the spinal cord.",
      tag: "Advanced"
    }
  ];

  // 3 Rich Colored Gradient Variants for Advanced Procedures
  const cardVariants = [
    {
      // 0: Deep Slate Blue
      bg: "bg-gradient-to-br from-[#2a3c5a] to-[#162236]",
      tagBg: "bg-white/10 text-white",
      title: "text-white",
      desc: "text-white/70",
      iconColor: "text-[#8bb0e8]",
      lineColor: "bg-white/10 group-hover:bg-[#8bb0e8]/40",
      btnColor: "text-white group-hover:text-[#8bb0e8]",
      hoverShadow: "hover:shadow-[0_20px_40px_rgba(42,60,90,0.4)]"
    },
    {
      // 1: Warm Ruby/Maroon
      bg: "bg-gradient-to-br from-[#803135] to-[#4a1c1e]",
      tagBg: "bg-white/10 text-white",
      title: "text-white",
      desc: "text-white/70",
      iconColor: "text-[#e89fa3]",
      lineColor: "bg-white/10 group-hover:bg-[#e89fa3]/40",
      btnColor: "text-white group-hover:text-[#e89fa3]",
      hoverShadow: "hover:shadow-[0_20px_40px_rgba(128,49,53,0.4)]"
    },
    {
      // 2: Deep Forest/Emerald
      bg: "bg-gradient-to-br from-[#1a4a40] to-[#0d2621]",
      tagBg: "bg-white/10 text-white",
      title: "text-white",
      desc: "text-white/70",
      iconColor: "text-[#86d4c1]",
      lineColor: "bg-white/10 group-hover:bg-[#86d4c1]/40",
      btnColor: "text-white group-hover:text-[#86d4c1]",
      hoverShadow: "hover:shadow-[0_20px_40px_rgba(26,74,64,0.4)]"
    }
  ];

  const pattern = [0, 1, 2, 2, 0, 1, 1, 2, 0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
            <p className="uppercase tracking-widest text-[#C19A6B] text-[11px] font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C19A6B]"></span> ADVANCED PROCEDURES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] leading-[1.1]">
              Cutting-Edge<br/>Interventional Techniques
            </h2>
            <p className="mt-6 text-gray-600 text-[15px] leading-relaxed">
              Beyond conventional treatments, providing a comprehensive suite of advanced interventional procedures using image-guided precision.
            </p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <button className="group flex items-center gap-2 text-[#9C4146] font-bold text-[14px] uppercase tracking-wider hover:text-[#1e375a] transition-colors">
              Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Procedures Grid - Colored Gradients */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {procedures.map((proc, idx) => {
            const variant = cardVariants[pattern[idx]];
            
            return (
              <motion.div key={idx} variants={fadeUp}
                className={`group ${variant.bg} rounded-[28px] p-8 shadow-lg ${variant.hoverShadow} transition-all duration-500 relative overflow-hidden`}
              >
                {/* Subtle top light reflection */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-white/20"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={`${variant.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    {proc.icon}
                  </div>
                  <span className={`${variant.tagBg} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10`}>
                    {proc.tag}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <h4 className={`font-serif font-bold ${variant.title} text-[20px] mb-3 leading-snug`}>{proc.title}</h4>
                  <p className={`${variant.desc} text-[14px] leading-relaxed mb-6`}>{proc.desc}</p>
                  
                  <div className={`h-px w-full ${variant.lineColor} mb-6 transition-colors duration-500`}></div>
                  
                  <a href="#" className={`inline-flex items-center gap-2 font-bold text-[12px] uppercase tracking-wider ${variant.btnColor} transition-colors`}>
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
