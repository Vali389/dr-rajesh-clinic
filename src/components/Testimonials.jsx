import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const reviews = [
    { 
      name: 'Srinivas R.', 
      treatment: 'COOLIEF RFA for Knee', 
      text: 'I was told knee replacement was my only option. Thanks to Dr. Rajesh, the COOLIEF procedure took away my pain without any surgery. I am walking comfortably again.',
      variant: 'bg-gradient-to-br from-[#1e375a] to-[#0f1f33]',
      quoteColor: 'text-[#C19A6B]',
      starColor: 'fill-[#C19A6B] text-[#C19A6B]',
      textColor: 'text-white/80',
      nameColor: 'text-white',
      avatarBg: 'bg-white/10 text-[#C19A6B]',
      treatmentColor: 'text-[#C19A6B]'
    },
    { 
      name: 'Anita K.', 
      treatment: 'Epidural Steroid Injection', 
      text: 'The severe sciatica pain down my leg was unbearable. Dr. Rajesh is incredibly skilled—the injection was painless and gave me my life back instantly.',
      variant: 'bg-gradient-to-br from-[#a68255] to-[#735532]',
      quoteColor: 'text-[#1e375a]',
      starColor: 'fill-white text-white',
      textColor: 'text-white/90',
      nameColor: 'text-white',
      avatarBg: 'bg-white/20 text-[#1e375a]',
      treatmentColor: 'text-white'
    },
    { 
      name: 'David M.', 
      treatment: 'Spine Intervention', 
      text: 'After a failed back surgery, I lived with constant pain. Dr. Rajesh’s multidisciplinary approach and advanced nerve blocks finally gave me the relief I prayed for.',
      variant: 'bg-gradient-to-br from-[#9C4146] to-[#632326]',
      quoteColor: 'text-[#f5ede8]',
      starColor: 'fill-[#C19A6B] text-[#C19A6B]',
      textColor: 'text-white/80',
      nameColor: 'text-white',
      avatarBg: 'bg-white/10 text-[#f5ede8]',
      treatmentColor: 'text-[#C19A6B]'
    }
  ];

  return (
    <section className="py-24 bg-[#fcfaf9] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#9C4146]"></span>
            WHAT OUR PATIENTS SAY
            <span className="w-8 h-px bg-[#9C4146]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1e375a] mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Real stories from our patients who have reclaimed their lives and overcome chronic pain through our advanced treatments.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div key={idx} variants={fadeUp} whileHover={{ y: -10 }} 
              className={`${review.variant} p-10 rounded-[32px] border border-white/5 relative group cursor-default shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 overflow-hidden`}
            >
              {/* Subtle light overlay for modern gradient feel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>

              <Quote className={`absolute top-8 right-8 ${review.quoteColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} size={48} />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className={review.starColor} />)}
              </div>
              
              <p className={`${review.textColor} text-[15px] leading-relaxed mb-8 italic relative z-10 font-medium`}>"{review.text}"</p>
              
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10">
                <div className={`w-12 h-12 rounded-full ${review.avatarBg} flex items-center justify-center font-serif font-bold text-[18px] shadow-sm`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className={`font-serif font-bold ${review.nameColor} text-[16px] mb-1`}>{review.name}</h5>
                  <p className={`text-[10px] ${review.treatmentColor} font-bold uppercase tracking-widest`}>{review.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
