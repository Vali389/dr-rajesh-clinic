import { motion } from 'framer-motion';
import { Calendar, Stethoscope, FileSearch, Pill, HeartHandshake } from 'lucide-react';

export default function TreatmentJourney() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const steps = [
    {
      number: "01",
      icon: <Calendar size={28} strokeWidth={1.5} />,
      title: "Book Appointment",
      desc: "Schedule your consultation online, by phone, or via WhatsApp — at a time that suits you best."
    },
    {
      number: "02",
      icon: <Stethoscope size={28} strokeWidth={1.5} />,
      title: "Expert Consultation",
      desc: "Meet Dr. Rajesh for a thorough evaluation, pain assessment, and detailed discussion."
    },
    {
      number: "03",
      icon: <FileSearch size={28} strokeWidth={1.5} />,
      title: "Precise Diagnosis",
      desc: "Advanced diagnostic imaging, lab tests, and nerve studies to pinpoint the exact cause."
    },
    {
      number: "04",
      icon: <Pill size={28} strokeWidth={1.5} />,
      title: "Personalized Plan",
      desc: "A customized, evidence-based treatment plan using minimally invasive techniques."
    },
    {
      number: "05",
      icon: <HeartHandshake size={28} strokeWidth={1.5} />,
      title: "Recovery",
      desc: "Ongoing monitoring, rehabilitation guidance, and lifestyle support to ensure lasting relief."
    }
  ];

  return (
    <section className="py-24 bg-[#fcfaf9] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-widest text-[#C19A6B] text-[11px] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#C19A6B]"></span>
            YOUR JOURNEY
            <span className="w-8 h-px bg-[#C19A6B]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] leading-[1.1] mb-4">
            From Pain to Freedom
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Our patient-first approach ensures you receive the highest quality care every step of the way, making your recovery journey seamless.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="relative max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-px bg-gray-200"></div>

            {steps.map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative text-center group">
                
                {/* Numbered Node */}
                <div className="relative mx-auto w-24 h-24 bg-[#1e375a] rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:bg-[#9C4146] group-hover:shadow-[0_0_20px_rgba(156,65,70,0.3)] transition-all duration-500 z-10">
                  <div className="text-white group-hover:scale-125 transition-transform duration-500">
                    {step.icon}
                  </div>
                  {/* Floating Number */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#C19A6B] rounded-full flex items-center justify-center text-white text-[12px] font-bold border-2 border-white shadow-sm">
                    {step.number}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-[#1e375a] text-[16px] mb-3 leading-snug">{step.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed px-2">{step.desc}</p>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-20">
          <a href="tel:+917995574432" className="bg-[#1e375a] hover:bg-[#162a45] text-white py-4 px-10 rounded-none font-bold text-[13px] uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2">
            Start Your Journey
          </a>
        </motion.div>

      </div>
    </section>
  );
}
