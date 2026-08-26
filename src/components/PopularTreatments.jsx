import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import epiduralImg from '../assets/treatments/epidural_steroid_injection.jpg';
import rfaImg from '../assets/treatments/rfa.jpg';
import coolRfsImg from '../assets/treatments/cool_rfs.png';
import ozoneImg from '../assets/treatments/ozone_therapy.png';
import diagnosticImg from '../assets/treatments/diagnostic_block.png';
import prpImg from '../assets/treatments/regenerative_prp.png';
import stemCellImg from '../assets/treatments/stem_cell_therapy.jpg';

export default function PopularTreatments() {
  const treatments = [
    {
      img: epiduralImg,
      title: "Epidural Steroid Injections",
      desc: "Targeted corticosteroid delivery to relieve sciatica, nerve compression and radicular pain."
    },
    {
      img: rfaImg,
      title: "Radiofrequency Ablation (RFA)",
      desc: "Precision RF energy to interrupt pain signals from facet joints for durable long-term relief."
    },
    {
      img: coolRfsImg,
      title: "Cool RFS (Cooled RFA)",
      desc: "Advanced cooled radiofrequency ablation for long-lasting chronic knee & joint pain relief."
    },
    {
      img: ozoneImg,
      title: "Ozone Therapy",
      desc: "Innovative ozone interventions to reduce inflammation and promote tissue healing."
    },
    {
      img: diagnosticImg,
      title: "Diagnostic Block",
      desc: "Ultrasound-guided precision nerve blocks for accurate pain source identification."
    },
    {
      img: prpImg,
      title: "Regenerative PRP Therapy",
      desc: "Platelet-rich plasma therapy to accelerate healing in joints, tendons and ligaments."
    },
    {
      img: stemCellImg,
      title: "Stem Cell Therapy",
      desc: "Cutting-edge regenerative stem cell treatment for cartilage repair and tissue regeneration."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3">OUR POPULAR TREATMENTS</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a]">Advanced Pain Relief. <span className="italic font-light text-[#9C4146]">Minimally Invasive.</span></h2>
          <p className="text-gray-500 text-[15px] mt-5 max-w-xl mx-auto leading-relaxed">Evidence-based, image-guided procedures designed to eliminate pain and restore function — without surgery.</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-[1px] w-12 bg-[#9C4146] opacity-50"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#9C4146]"></div>
            <div className="h-[1px] w-12 bg-[#9C4146] opacity-50"></div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group relative overflow-hidden rounded-[32px] bg-white shadow-md hover:shadow-[0_20px_40px_rgba(17,42,70,0.12)] transition-all duration-500 border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={t.img} 
                  alt={t.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112a46]/90 via-[#112a46]/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-serif font-bold text-white text-[22px] mb-2 leading-snug">{t.title}</h4>
                  <p className="text-[13px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
          <button className="bg-transparent border-2 border-[#9C4146] text-[#9C4146] hover:bg-[#9C4146] hover:text-white py-4 px-8 rounded-md font-bold text-[14px] transition-all shadow-sm inline-flex items-center gap-2">
            View All Treatments <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
