import { motion } from 'framer-motion';
import { Building2, MapPin, Stethoscope, HeartPulse, FlaskConical, CheckCircle2 } from 'lucide-react';

export default function DiagnosticPartners() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const partners = [
    {
      name: "Omega PRP Hospital",
      type: "Multi-Speciality Hospital",
      role: "HOD — Anesthesiology & Pain Medicine",
      location: "Chandanagar, Hyderabad",
      icon: <Building2 size={24} strokeWidth={1.5} />,
      features: ["State-of-the-art OT", "Advanced Pain Clinic", "24/7 Critical Care"]
    },
    {
      name: "Primeelite Health Solutions",
      type: "Healthcare Solutions",
      role: "Founder & CEO",
      location: "Multi-Hospital Network, Hyderabad",
      icon: <HeartPulse size={24} strokeWidth={1.5} />,
      features: ["ICU Services", "OT Services", "Hospital Consulting"]
    },
    {
      name: "Radiance Speciality Clinics",
      type: "Multi-Speciality Clinic",
      role: "Co-Founder & Pain Specialist",
      location: "Bachupally, Hyderabad",
      icon: <Stethoscope size={24} strokeWidth={1.5} />,
      features: ["Pain Management", "Women's Health", "Home Care Services"]
    },
    {
      name: "Ramanuja Rehabilitation and Wellness Centre",
      type: "Rehabilitation & Wellness",
      role: "Managing Director Consultant and Critical Care and Pain Physician",
      location: "Hyderabad",
      icon: <Building2 size={24} strokeWidth={1.5} />,
      features: ["Rehabilitation Services", "Physiotherapy", "Wellness Care"]
    },
    {
      name: "Life Cell Diagnostics",
      type: "Diagnostics Partner",
      role: "Managing Director Consultant and Critical Care and Pain Physician",
      location: "Hyderabad",
      icon: <FlaskConical size={24} strokeWidth={1.5} />,
      features: ["Comprehensive Blood Tests", "Advanced Imaging", "Home Sample Collection"]
    }
  ];

  const services = [
    "Laboratory & Home Sample Collection",
    "Pharmacy & Home Delivery",
    "Second Opinion Consultation",
    "Secure Video Consultation",
    "Home Care & Nursing Services",
    "ICU & OT Services Support"
  ];

  return (
    <section className="py-24 bg-[#fcfaf9] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#9C4146]"></span>
            OUR NETWORK
            <span className="w-8 h-px bg-[#9C4146]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] leading-[1.1] mb-4">
            Hospital Partners & Services
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Collaborating with leading hospitals and diagnostic centers across Hyderabad to provide comprehensive, end-to-end healthcare solutions.
          </p>
        </motion.div>

        {/* Partners Grid - Elegant Soft Gradient Cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {partners.map((partner, idx) => (
            <motion.div key={idx} variants={fadeUp} whileHover={{ y: -6 }}
              className="group bg-gradient-to-br from-white via-white to-[#f5ede8] hover:from-[#1e375a] hover:via-[#162a45] hover:to-[#112a46] border border-white hover:border-[#1e375a] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,55,90,0.2)] transition-all duration-500 rounded-[28px] relative overflow-hidden"
            >
              {/* Corner accent hover effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-white shadow-sm border border-gray-50 rounded-2xl flex items-center justify-center shrink-0 text-[#C19A6B] group-hover:bg-white/10 group-hover:border-transparent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {partner.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-[#1e375a] group-hover:text-white text-[20px] mb-1 leading-snug transition-colors">{partner.name}</h4>
                    <p className="text-[#C19A6B] group-hover:text-[#e8dccb] text-[11px] font-bold uppercase tracking-wider transition-colors">{partner.type}</p>
                  </div>
                </div>

                <div className="border-t border-b border-gray-100/60 group-hover:border-white/10 py-4 mb-5 transition-colors">
                  <p className="text-[#1e375a] group-hover:text-white text-[14px] font-bold mb-1 transition-colors">{partner.role}</p>
                  <div className="flex items-center gap-1.5 text-gray-500 group-hover:text-white/70 text-[12px] transition-colors">
                    <MapPin size={14} className="text-[#C19A6B] group-hover:text-white/70 transition-colors" />
                    <span>{partner.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {partner.features.map((feature, fIdx) => (
                    <span key={fIdx} className="text-gray-600 group-hover:text-white/80 text-[12px] flex items-center gap-1.5 font-medium transition-colors">
                      <span className="w-1 h-1 rounded-full bg-[#9C4146] group-hover:bg-[#C19A6B] transition-colors"></span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended Services List */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
          className="max-w-5xl mx-auto relative border border-[#f5efeb] rounded-[32px] p-10 lg:p-14 text-center shadow-lg overflow-hidden group"
        >
          {/* Beautiful Medical/Abstract Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&auto=format&fit=crop&q=80" 
              alt="Hospital Care" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Elegant overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e375a]/95 via-[#1e375a]/90 to-[#112a46]/95 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-serif text-white mb-10">
              Beyond the Clinic — Complete Care Ecosystem
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 text-left">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <CheckCircle2 size={20} className="text-[#C19A6B] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white/90 text-[14.5px] font-medium group-hover/item:text-white transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
