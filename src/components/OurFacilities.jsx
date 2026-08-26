import { motion } from 'framer-motion';

export default function OurFacilities() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const facilities = [
    { 
      name: "Ozone Therapy", 
      icon: "healthicons:oxygen-tank-outline", 
      fallbackIcon: "ph:wind-light",
      delay: 0.2, 
      pos: "top-[15%] left-[5%] lg:left-[10%]" 
    },
    { 
      name: "Regenerative Therapy", 
      icon: "healthicons:biochemistry-laboratory-outline", 
      fallbackIcon: "ph:dna-light",
      delay: 0.4, 
      pos: "top-[15%] right-[5%] lg:right-[10%]" 
    },
    { 
      name: "C-Arm", 
      icon: "healthicons:medical-equipment-outline", 
      fallbackIcon: "ph:monitor-light",
      delay: 0.6, 
      pos: "bottom-[15%] left-[5%] lg:left-[10%]" 
    },
    { 
      name: "Ultra Sound", 
      icon: "healthicons:ultrasound-outline", 
      fallbackIcon: "ph:scan-light",
      delay: 0.8, 
      pos: "bottom-[15%] right-[5%] lg:right-[10%]" 
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#eef4f8] via-white to-[#f5f8fa] rounded-full blur-3xl opacity-70 z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Badge & Title */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <div className="inline-block bg-[#008ba3] text-white px-5 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-sm shadow-sm">
            state of the art
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#3b438b] font-serif font-bold mb-4 tracking-wide">
            OUR FACILITIES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            With constant innovation in medical field, bringing world class facilities to the comforts of the city is extremely paramount.
          </p>
        </motion.div>

        {/* Circular Layout Container */}
        <div className="relative w-full max-w-[550px] mx-auto aspect-square mt-12 mb-10">
          
          {/* Central Medical Image Container */}
          <div className="absolute inset-8 rounded-full bg-white shadow-[0_20px_50px_rgba(30,55,90,0.12)] border-[8px] border-white overflow-hidden z-10 group">
             <img 
               src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80" 
               alt="State of the art medical facility" 
               className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e375a]/60 via-transparent to-transparent flex items-end justify-center pb-8">
               <span className="text-white font-serif font-semibold text-base tracking-wider bg-[#1e375a]/75 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg">
                 World Class Care
               </span>
             </div>
          </div>

          {/* 4 Connected Facility Nodes */}
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: fac.delay, duration: 0.5 }}
              className={`absolute flex flex-col items-center gap-2 z-20 ${fac.pos}`}
            >
              {/* Circular Icon Circle */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#3b438b] border-[5px] border-white shadow-xl flex items-center justify-center relative hover:bg-[#008ba3] transition-colors duration-300 group cursor-pointer">
                <img 
                  src={`https://api.iconify.design/${fac.icon}.svg?color=white`} 
                  onError={(e) => { e.target.src = `https://api.iconify.design/${fac.fallbackIcon}.svg?color=white`; }}
                  className="w-9 h-9 lg:w-11 lg:h-11 group-hover:scale-110 transition-transform" 
                  alt={fac.name} 
                />
              </div>

              {/* Label Badge */}
              <div className="bg-[#4b529a] text-white px-5 py-2 rounded-md text-[14px] font-medium shadow-md whitespace-nowrap">
                {fac.name}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

