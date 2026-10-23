import { ArrowRight, ArrowUpRight, Activity, ShieldCheck, HeartPulse, Sparkles, UserCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const getServiceIcon = (id) => {
  switch (id) {
    case 'chronic-back-neck-pain': return Activity;
    case 'knee-osteoarthritis': return ShieldCheck;
    case 'cancer-pain-palliative-care': return HeartPulse;
    case 'frozen-shoulder-joint-pain': return Sparkles;
    case 'headache-neuralgias': return Stethoscope;
    default: return UserCheck;
  }
};

export default function Services() {
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

        {/* Centered Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#9C4146]"></span> OUR SERVICES <span className="w-8 h-px bg-[#9C4146]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] leading-[1.1]">
            Complete Solutions for Every You
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => {
            const SrvIcon = getServiceIcon(srv.id);
            return (
              <motion.div key={srv.id} variants={fadeUp} whileHover={{ y: -10 }} className="group bg-[#fcfaf9] rounded-[24px] overflow-hidden border border-[#f5efeb] shadow-sm hover:shadow-[0_20px_40px_rgba(17,42,70,0.08)] transition-all duration-300 flex flex-col">
                <Link to={`/services/${srv.id}`} className="block">
                  <div className="h-56 overflow-hidden relative shrink-0">
                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112a46]/80 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                      <SrvIcon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                  </div>
                <div className="p-8">
                  <h3 className="font-serif font-bold text-[#1e375a] text-[20px] mb-3 leading-snug">{srv.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{srv.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-[#C19A6B] font-bold text-[13px] group-hover:text-[#9C4146] transition-colors">
                    Explore Service <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
        </motion.div>

        {/* View All Button at the bottom center */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
          <Link to="/services" className="inline-flex items-center gap-3 bg-transparent border-2 border-[#1e375a] text-[#1e375a] hover:bg-[#1e375a] hover:text-white py-4 px-10 font-bold text-[13px] uppercase tracking-wider transition-all shadow-sm">
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
