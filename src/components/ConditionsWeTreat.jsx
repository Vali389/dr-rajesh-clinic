import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const conditions = [
  { name: "Chronic Back Pain", emoji: "🦴", desc: "Lumbar disc herniation, degenerative disc disease." },
  { name: "Sciatica", emoji: "⚡", desc: "Nerve compression causing radiating leg pain." },
  { name: "Knee Osteoarthritis", emoji: "🦵", desc: "Cartilage wear causing chronic knee joint pain." },
  { name: "Cervical Spondylosis", emoji: "🔄", desc: "Age-related neck spine degeneration." },
  { name: "Disc Prolapse", emoji: "🎯", desc: "Slipped or herniated disc pressing on nerves." },
  { name: "Migraine & Headache", emoji: "🧠", desc: "Chronic migraines, tension, and cluster headaches." },
  { name: "Trigeminal Neuralgia", emoji: "😣", desc: "Severe facial pain from trigeminal nerve disorder." },
  { name: "Frozen Shoulder", emoji: "💪", desc: "Adhesive capsulitis causing shoulder stiffness." },
  { name: "Hip Pain", emoji: "🦽", desc: "Arthritis, bursitis, and labral tears." },
  { name: "Cancer Pain", emoji: "❤️‍🩹", desc: "Specialized palliative pain management." },
  { name: "Fibromyalgia", emoji: "🌊", desc: "Widespread musculoskeletal pain with fatigue." },
  { name: "Sports Injuries", emoji: "🏃", desc: "Ligament tears, sprains, and muscle strains." },
  { name: "Neuropathic Pain", emoji: "⚡", desc: "Diabetic neuropathy, CRPS, burning nerve pain." },
  { name: "Plantar Fasciitis", emoji: "👣", desc: "Heel pain limiting daily life and movement." },
  { name: "Neck Pain", emoji: "🔄", desc: "Whiplash, cervical radiculopathy, stiffness." },
  { name: "Failed Back Surgery", emoji: "🛡️", desc: "Persistent pain after spinal interventions." },
  { name: "Baker's Cyst", emoji: "🦵", desc: "Fluid swelling behind the knee joint." },
  { name: "Occipital Neuralgia", emoji: "🧠", desc: "Migraine impostor — severe shooting head pain." },
  { name: "Post-Surgical Pain", emoji: "❤️‍🩹", desc: "Chronic pain persisting after surgery." },
  { name: "Sacroiliac Joint Pain", emoji: "🦴", desc: "SI joint dysfunction causing lower back pain." }
];

export default function ConditionsWeTreat() {
  return (
    <section className="py-24 bg-[#0b1624] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9C4146]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C19A6B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#9C4146]/20 text-[#e5a0a4] text-xs font-bold uppercase tracking-widest mb-5 border border-[#9C4146]/30">
            Comprehensive Care
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">
            Conditions We <span className="text-[#C19A6B] italic font-light">Treat</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-[15px]">
            Expert, personalized pain care for a wide spectrum of acute and chronic conditions using advanced interventional techniques.
          </p>
        </motion.div>

        {/* Grid — clean pill-style cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {conditions.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group bg-white/5 hover:bg-[#9C4146]/20 border border-white/10 hover:border-[#9C4146]/50 rounded-2xl p-4 flex flex-col items-center text-center cursor-default transition-all duration-300"
            >
              <span className="text-2xl mb-2">{c.emoji}</span>
              <h4 className="text-white font-bold text-[13px] leading-snug mb-1">{c.name}</h4>
              <p className="text-white/40 text-[11px] leading-tight group-hover:text-white/60 transition-colors">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#9C4146] hover:bg-[#b84a50] text-white font-bold text-sm px-10 py-4 rounded-full transition-colors shadow-lg"
          >
            Book a Consultation Today
          </Link>
          <p className="text-white/30 text-xs mt-4">
            Don't see your condition? We treat many more — call us to discuss.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
