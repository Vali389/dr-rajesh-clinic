import { motion } from 'framer-motion';
import { ArrowRight, Activity, Bone, Brain, HeartPulse, Sparkles, Footprints, ShieldAlert, Target } from 'lucide-react';

export default function ConditionsWeTreat() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
  };

  const conditions = [
    { name: "Chronic Back Pain", icon: <Bone size={24} strokeWidth={1.5} />, desc: "Lumbar disc herniation, degenerative disc disease." },
    { name: "Sciatica", icon: <Activity size={24} strokeWidth={1.5} />, desc: "Nerve compression causing radiating leg pain." },
    { name: "Cervical Spondylosis", icon: <Bone size={24} strokeWidth={1.5} />, desc: "Age-related neck spine degeneration." },
    { name: "Knee Osteoarthritis", icon: <PersonStandingIcon />, desc: "Cartilage wear causing chronic knee joint pain." },
    { name: "Disc Prolapse", icon: <Target size={24} strokeWidth={1.5} />, desc: "Slipped or herniated disc pressing on nerves." },
    { name: "Migraine & Headache", icon: <Brain size={24} strokeWidth={1.5} />, desc: "Chronic migraines, tension, and cluster headaches." },
    { name: "Trigeminal Neuralgia", icon: <Brain size={24} strokeWidth={1.5} />, desc: "Severe facial pain from trigeminal nerve disorder." },
    { name: "Shoulder Pain", icon: <Bone size={24} strokeWidth={1.5} />, desc: "Frozen shoulder, rotator cuff injuries." },
    { name: "Hip Pain", icon: <Bone size={24} strokeWidth={1.5} />, desc: "Arthritis, bursitis, and labral tears." },
    { name: "Cancer Pain", icon: <HeartPulse size={24} strokeWidth={1.5} />, desc: "Specialized palliative pain management." },
    { name: "Fibromyalgia", icon: <Activity size={24} strokeWidth={1.5} />, desc: "Widespread musculoskeletal pain with fatigue." },
    { name: "Sports Injuries", icon: <Activity size={24} strokeWidth={1.5} />, desc: "Ligament tears, sprains, and muscle strains." },
    { name: "Neuropathic Pain", icon: <Sparkles size={24} strokeWidth={1.5} />, desc: "Diabetic neuropathy and CRPS." },
    { name: "Foot & Ankle Pain", icon: <Footprints size={24} strokeWidth={1.5} />, desc: "Plantar fasciitis and Achilles tendonitis." },
    { name: "Neck Pain", icon: <Bone size={24} strokeWidth={1.5} />, desc: "Whiplash, cervical radiculopathy." },
    { name: "Failed Back Surgery", icon: <ShieldAlert size={24} strokeWidth={1.5} />, desc: "Persistent pain after spinal interventions." },
    { name: "Myofascial Pain", icon: <Target size={24} strokeWidth={1.5} />, desc: "Trigger points causing localized pain." },
    { name: "Sacroiliac Joint Pain", icon: <Bone size={24} strokeWidth={1.5} />, desc: "SI joint dysfunction in lower back." },
    { name: "Post-Surgical Pain", icon: <HeartPulse size={24} strokeWidth={1.5} />, desc: "Chronic pain persisting after surgery." },
    { name: "Abdominal Pain", icon: <Target size={24} strokeWidth={1.5} />, desc: "Chronic pancreatitis and visceral pain." }
  ];

  // 4 Vibrant, Colored Gradient Variants (NO WHITE)
  const cardVariants = [
    {
      // 0: Deep Navy Blue
      bg: "bg-gradient-to-br from-[#1e375a] to-[#112036]",
      border: "border-transparent",
      title: "text-white",
      desc: "text-white/70",
      iconBox: "bg-white/10 text-white shadow-inner",
      hoverScale: "group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(30,55,90,0.4)]"
    },
    {
      // 1: Rich Teal/Emerald
      bg: "bg-gradient-to-br from-[#0f4c5c] to-[#0a333d]",
      border: "border-transparent",
      title: "text-white",
      desc: "text-white/70",
      iconBox: "bg-white/10 text-[#5ed3b8] shadow-inner",
      hoverScale: "group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(15,76,92,0.4)]"
    },
    {
      // 2: Warm Gold/Bronze
      bg: "bg-gradient-to-br from-[#a68255] to-[#735532]",
      border: "border-transparent",
      title: "text-white",
      desc: "text-white/80",
      iconBox: "bg-white/20 text-white shadow-inner",
      hoverScale: "group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(166,130,85,0.4)]"
    },
    {
      // 3: Elegant Maroon/Red
      bg: "bg-gradient-to-br from-[#9C4146] to-[#632326]",
      border: "border-transparent",
      title: "text-white",
      desc: "text-white/70",
      iconBox: "bg-white/10 text-[#f5ede8] shadow-inner",
      hoverScale: "group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(156,65,70,0.4)]"
    },
    {
      // 4: Deep Indigo
      bg: "bg-gradient-to-br from-[#2f2b5c] to-[#1c193b]",
      border: "border-transparent",
      title: "text-white",
      desc: "text-white/70",
      iconBox: "bg-white/10 text-[#9b94eb] shadow-inner",
      hoverScale: "group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(47,43,92,0.4)]"
    }
  ];

  // Pattern using 0, 1, 2, 3, 4 fully avoiding white/light cards
  const pattern = [0, 1, 3, 2, 4, 0, 2, 1, 3, 4, 1, 0, 4, 2, 0, 3, 1, 4, 2, 3];

  return (
    <section className="py-24 bg-[#fcfaf9] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#9C4146]"></span>
            COMPREHENSIVE CARE
            <span className="w-8 h-px bg-[#9C4146]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] leading-[1.1] mb-6">
            Conditions We Treat
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            From acute injuries to chronic pain syndromes — providing expert, personalized care for a wide spectrum of pain conditions using advanced interventional techniques.
          </p>
        </motion.div>

        {/* Conditions Grid - Fully Vibrant Mixed Colored Gradients */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {conditions.map((condition, idx) => {
            const variant = cardVariants[pattern[idx]];
            
            return (
              <motion.div key={idx} variants={fadeUp} 
                className={`group ${variant.bg} rounded-[24px] p-6 border ${variant.border} shadow-lg ${variant.hoverScale} transition-all duration-500 relative overflow-hidden cursor-default`}
              >
                {/* Subtle light effect inside the colored card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-full ${variant.iconBox} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-translate-y-1`}>
                    {condition.icon}
                  </div>
                  <h4 className={`font-serif font-bold ${variant.title} text-[18px] mb-2 leading-snug`}>
                    {condition.name}
                  </h4>
                  <p className={`${variant.desc} text-[13px] leading-relaxed line-clamp-2`}>
                    {condition.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
          <button className="bg-transparent border-2 border-[#1e375a] text-[#1e375a] hover:bg-[#1e375a] hover:text-white py-4 px-10 font-bold text-[13px] uppercase tracking-wider transition-all shadow-sm inline-flex items-center gap-3">
            Consult Dr. Rajesh <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

function PersonStandingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="1"/>
      <path d="m9 20 3-6 3 6"/>
      <path d="m6 8 6 2 6-2"/>
      <path d="M12 10v4"/>
    </svg>
  );
}
