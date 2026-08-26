import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const videos = [
  {
    id: 'v2TSiZAzApw',
    title: 'Do High Heels Cause Back Pain?',
    desc: 'Dr. Rajesh Kumar Vasam explains the link between footwear and back pain.'
  },
  {
    id: '_pHnHlazgdw',
    title: 'Why Women Get Back Pain',
    desc: 'Causes every woman should know — explained by Dr. Rajesh Kumar Vasam.'
  },
  {
    id: '6xoLv1aSpC4',
    title: 'Arm Pain Relief — Stellate Ganglion Block',
    desc: 'A successful minimally invasive procedure at Radiance Specialty Clinics.'
  }
];

export default function YoutubeVideos() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9C4146]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 text-red-400 text-xs font-bold uppercase tracking-widest mb-5 border border-red-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            Our YouTube Channel
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-4">
            Watch & <span className="text-[#C19A6B] italic">Learn</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-[15px]">
            Educational videos on pain conditions, treatments, and patient care from Dr. Rajesh Kumar Vasam.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#9C4146]/50 transition-all duration-300 group"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-5">
                <h4 className="text-white font-bold text-[14px] mb-1 leading-snug">{video.title}</h4>
                <p className="text-white/50 text-[12px]">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/@radianceclinics-dr.rajeshvasam"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            View All Videos on YouTube
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
