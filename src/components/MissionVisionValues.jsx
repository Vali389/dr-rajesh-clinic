import { motion } from 'framer-motion';

export default function MissionVisionValues() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cards = [
    {
      title: "MISSION",
      icon: "ph:target-light",
      desc: "To provide exceptional, compassionate, and comprehensive services",
      color: "#9C4146",
      readMore: true
    },
    {
      title: "VISION",
      icon: "ph:eye-light",
      desc: "Aspire to be a beacon of innovation, collaboration, and excellence in the",
      color: "#1e375a",
      readMore: true
    },
    {
      title: "VALUES",
      icon: "ph:handshake-light",
      desc: "Best Hospital service rooted in integrity, compassion, trust.",
      color: "#C19A6B",
      readMore: true
    }
  ];

  return (
    <section className="py-20 bg-[#fbfbfa] relative overflow-hidden">
      {/* Subtle hexagonal background pattern (optional, mimicking the reference image) */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e375a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-10">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              transition={{ delay: idx * 0.2 }}
              className="relative bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] px-8 pt-16 pb-10 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300"
              style={{ borderBottom: `8px solid ${card.color}` }}
            >
              {/* Floating Top Icon */}
              <div 
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20 border-[6px] border-[#fbfbfa] transition-transform duration-300 group-hover:scale-110"
              >
                {/* Inner colored circle */}
                <div 
                  className="w-[85%] h-[85%] rounded-full flex items-center justify-center text-white transition-colors duration-300"
                  style={{ backgroundColor: card.color }}
                >
                   <img src={`https://api.iconify.design/${card.icon}.svg?color=white`} className="w-8 h-8" alt={card.title} />
                </div>
                {/* Half ring decoration based on reference image */}
                <div 
                  className="absolute -top-[12px] -left-[12px] w-[calc(100%+24px)] h-[calc(100%+24px)] rounded-full border-t-[6px] border-l-[6px] border-transparent pointer-events-none transition-transform duration-500 group-hover:rotate-180"
                  style={{ borderTopColor: card.color, borderLeftColor: card.color, transform: 'rotate(-45deg)' }}
                ></div>
              </div>

              <h3 className="font-serif font-bold text-[#1e375a] text-[20px] mb-4 tracking-wide">{card.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                {card.desc}
                {card.readMore && <span className="text-[#1e375a] font-semibold ml-1 cursor-pointer hover:underline">Read more...</span>}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
