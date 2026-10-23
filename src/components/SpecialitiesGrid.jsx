import { motion } from 'framer-motion';
import { Brain, Wind, Activity, HeartPulse, Stethoscope, Droplet, User, Ear, Smile } from 'lucide-react';

export default function SpecialitiesGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const specialities = [
    { name: "Neuro Surgery & Neurology", icon: Brain },
    { name: "Pulmonology & Critical Care", icon: Wind },
    { name: "Orthopedics & Trauma", icon: Activity },
    { name: "Cardiology & Cardiothoracic Surgery", icon: HeartPulse },
    { name: "Surgical Gastro & Laparoscopic Surgery", icon: Stethoscope },
    { name: "Urology & Nephrology", icon: Droplet },
    { name: "Gynecology", icon: User },
    { name: "ENT", icon: Ear },
    { name: "Oral & Maxillofacial", icon: Smile }
  ];

  return (
    <section className="py-20 bg-[#fafcfd]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[12px] font-bold mb-2">Our Departments</p>
          <h2 className="text-4xl text-[#1e375a] font-serif font-bold">Centers of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {specialities.map((spec, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] border-[4px] border-[#f5efeb] flex items-center justify-center shrink-0 group-hover:border-[#9C4146] transition-colors duration-300">
                <spec.icon className="w-9 h-9 text-[#9C4146] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1e375a] font-bold text-[16px] leading-tight group-hover:text-[#9C4146] transition-colors">
                {spec.name}
              </h3>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
