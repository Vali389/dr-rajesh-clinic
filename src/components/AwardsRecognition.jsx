import { motion } from 'framer-motion';
import { Award, GraduationCap, Medal, ShieldCheck, Star } from 'lucide-react';

export default function AwardsRecognition() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const certificates = [
    {
      icon: <GraduationCap size={32} strokeWidth={1.5} />,
      title: "MBBS",
      year: "2012",
      institution: "Medical Council",
      detail: "Bachelor of Medicine & Surgery, recognized for academic excellence."
    },
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: "MD Anesthesiology",
      year: "2018",
      institution: "Maharashtra University",
      detail: "Advanced specialization in Pain Medicine and critical care."
    },
    {
      icon: <Medal size={32} strokeWidth={1.5} />,
      title: "FIPM Certified",
      year: "Fellowship",
      institution: "Pain Medicine Board",
      detail: "Fellowship in Interventional Pain Medicine for advanced techniques."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Critical Care",
      year: "Excellence",
      institution: "Healthcare Network",
      detail: "Leading expert in ICU and OT solutions across hospitals."
    },
    {
      icon: <Star size={32} strokeWidth={1.5} />,
      title: "Best Pain Physician",
      year: "Recognition",
      institution: "Radiance Clinics",
      detail: "Awarded for exceptional patient care and high success rates."
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="py-24 bg-[#fcfaf9] relative overflow-hidden border-t border-[#f5efeb]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#9C4146]"></span>
            AWARDS & RECOGNITION
            <span className="w-8 h-px bg-[#9C4146]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] leading-[1.15] mb-6">
            A Legacy of Excellence
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            A showcase of professional credentials and rigorous training that establish Dr. Rajesh as a trusted leader in Interventional Pain Medicine.
          </p>
        </motion.div>

        {/* Clean, Professional Grid (3 top, 2 bottom centered) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-[0_20px_40px_rgba(17,42,70,0.08)] border border-[#f5efeb] transition-all duration-300 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex flex-col text-center items-center group relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C19A6B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-[#fcfaf9] flex items-center justify-center text-[#9C4146] mb-6 group-hover:scale-110 group-hover:bg-[#9C4146] group-hover:text-white transition-all duration-500">
                {cert.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-[20px] font-bold text-[#1e375a] mb-1">
                {cert.title}
              </h3>
              <p className="text-[#C19A6B] text-[10px] font-bold tracking-widest uppercase mb-4">
                {cert.institution} • {cert.year}
              </p>
              
              <div className="w-10 h-px bg-gray-200 mb-4 group-hover:bg-[#C19A6B] transition-colors duration-500"></div>
              
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {cert.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
