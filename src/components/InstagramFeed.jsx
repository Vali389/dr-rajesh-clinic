import { motion } from 'framer-motion';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';

const posts = [
  {
    img: '/bakers_cyst.jpg',
    caption: "Baker's Cyst — Don't ignore knee swelling. Timely ultrasound-guided aspiration can restore full function.",
    tag: '#KneePain',
    likes: '142',
    comments: '18'
  },
  {
    img: '/knee_osteoarthritis.jpg',
    caption: 'Knee Pain & Osteoarthritis — Non-surgical grading-based treatment options & COOLIEF RFA.',
    tag: '#Osteoarthritis',
    likes: '286',
    comments: '34'
  },
  {
    img: '/occipital_neuralgia.jpg',
    caption: 'Occipital Neuralgia — The Migraine Impostor. Accurate nerve diagnosis brings lasting relief.',
    tag: '#NeuropathicPain',
    likes: '315',
    comments: '42'
  },
  {
    img: '/plantar_fasciitis.jpg',
    caption: 'Plantar Fasciitis: Morning heel pain limiting your steps? Regenerative PRP therapies work.',
    tag: '#PlantarFasciitis',
    likes: '198',
    comments: '27'
  },
  {
    img: '/spine_interventions.jpg',
    caption: 'Advanced interventional spine procedures — C-Arm & Ultrasound guided pain relief without surgery.',
    tag: '#SpineCare',
    likes: '420',
    comments: '56'
  },
  {
    img: '/cancer_palliative_care.jpg',
    caption: 'Compassionate palliative care for cancer pain management — enhancing quality of life.',
    tag: '#PalliativeCare',
    likes: '254',
    comments: '31'
  }
];

export default function InstagramFeed() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="py-24 bg-[#faf9f8] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#9C4146]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#C19A6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header with profile pill */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-pink-200 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 text-[#9C4146] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>@radiancespecialityclinics</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1e375a] mb-4">
            Radiance on <span className="text-[#9C4146] italic font-light">Instagram</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[15px] leading-relaxed">
            Follow Dr. Vasam Rajesh Kumar for patient education, procedure videos, and non-surgical pain management insights.
          </p>
        </motion.div>

        {/* Grid of Instagram posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/radiancespecialityclinics/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-85"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                <span className="text-[#C19A6B] text-[10px] font-bold uppercase tracking-wider mb-1 block">
                  {post.tag}
                </span>
                <p className="text-white text-[11px] font-medium leading-snug line-clamp-2 mb-2 group-hover:line-clamp-none transition-all">
                  {post.caption}
                </p>

                {/* Likes & Comments stats */}
                <div className="flex items-center gap-3 text-white/80 text-[11px] pt-1 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart size={11} className="text-pink-500 fill-pink-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={11} className="text-white" /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Instagram badge in top corner */}
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/radiancespecialityclinics/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#9C4146] via-[#C19A6B] to-[#9C4146] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#9C4146]/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            Follow @radiancespecialityclinics on Instagram
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
