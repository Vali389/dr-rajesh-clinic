import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';

const posts = [
  {
    img: '/bakers_cyst.jpg',
    caption: "Baker's Cyst — Don't ignore knee swelling. Timely ultrasound-guided aspiration restores full function.",
    tag: '#KneePain',
    likes: '142',
    comments: '18',
    featured: true
  },
  {
    img: '/knee_osteoarthritis.jpg',
    caption: 'Knee OA — Non-surgical grading-based treatment & COOLIEF RFA for lasting relief.',
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
    caption: 'Plantar Fasciitis: Morning heel pain? Regenerative PRP therapies work wonders.',
    tag: '#PlantarFasciitis',
    likes: '198',
    comments: '27'
  },
  {
    img: '/spine_interventions.jpg',
    caption: 'Advanced spine procedures — C-Arm & Ultrasound guided pain relief without surgery.',
    tag: '#SpineCare',
    likes: '420',
    comments: '56'
  },
  {
    img: '/cancer_palliative_care.jpg',
    caption: 'Compassionate palliative care for cancer pain — enhancing quality of life every day.',
    tag: '#PalliativeCare',
    likes: '254',
    comments: '31'
  }
];

const IgIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function InstagramFeed() {
  const featured = posts[0];
  const grid = posts.slice(1);

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1e375a 50%, #2a1a1f 100%)' }}>

      {/* Background decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #e1306c, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #9C4146, transparent)' }} />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full opacity-8 pointer-events-none" style={{ background: 'radial-gradient(circle, #C19A6B, transparent)' }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-8"
        >
          <div>
            {/* Instagram gradient pill */}
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest"
              style={{ background: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)' }}>
              <IgIcon size={14} />
              <span>@radiancespecialityclinics</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Radiance on{' '}
              <span className="italic font-light" style={{ background: 'linear-gradient(90deg, #f9a8d4, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Instagram
              </span>
            </h2>
            <p className="text-white/60 mt-3 text-[15px] max-w-md leading-relaxed">
              Patient education, procedure insights & non-surgical pain management — follow Dr. Vasam Rajesh Kumar.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 shrink-0">
            {[
              { val: '12K+', label: 'Followers' },
              { val: '180+', label: 'Posts' },
              { val: '98%', label: 'Engagement' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-white">{s.val}</p>
                <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Layout: Featured + Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Featured Large Post */}
          <motion.a
            href="https://www.instagram.com/radiancespecialityclinics/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden block"
            style={{ minHeight: '480px' }}
          >
            <img
              src={featured.img}
              alt={featured.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            {/* Instagram badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-[11px] font-bold"
              style={{ background: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)' }}>
              <IgIcon size={12} /> FEATURED
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block text-[#fcb045] text-[11px] font-black uppercase tracking-wider mb-2">{featured.tag}</span>
              <p className="text-white font-semibold text-[15px] leading-snug mb-4">{featured.caption}</p>
              <div className="flex items-center gap-4 text-white/70 text-[13px]">
                <span className="flex items-center gap-1.5">
                  <Heart size={14} className="text-pink-400 fill-pink-400" /> {featured.likes}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle size={14} className="text-blue-300" /> {featured.comments}
                </span>
              </div>
            </div>
          </motion.a>

          {/* Right Grid — 2 cols × 2 rows */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-5">
            {grid.slice(0, 4).map((post, idx) => (
              <motion.a
                key={idx}
                href="https://www.instagram.com/radiancespecialityclinics/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.55 }}
                className="group relative rounded-2xl overflow-hidden block aspect-square"
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top-right IG badge */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white bg-black/40 backdrop-blur-sm border border-white/20">
                  <IgIcon size={12} />
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-[#fcb045] text-[10px] font-black uppercase tracking-wider block mb-1">{post.tag}</span>
                  <p className="text-white text-[11px] leading-snug line-clamp-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{post.caption}</p>
                  <div className="flex items-center gap-3 text-white/70 text-[11px]">
                    <span className="flex items-center gap-1"><Heart size={11} className="text-pink-400 fill-pink-400" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={11} className="text-blue-300" /> {post.comments}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom strip — remaining posts full width */}
          {grid.slice(4).map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/radiancespecialityclinics/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden block lg:col-span-5 h-40"
            >
              <img src={post.img} alt={post.caption} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 gap-6">
                <span className="text-[#fcb045] text-[11px] font-black uppercase tracking-wider shrink-0">{post.tag}</span>
                <p className="text-white text-[13px] font-medium leading-snug max-w-lg line-clamp-1">{post.caption}</p>
                <div className="ml-auto flex items-center gap-4 text-white/70 text-[13px] shrink-0">
                  <span className="flex items-center gap-1.5"><Heart size={13} className="text-pink-400 fill-pink-400" /> {post.likes}</span>
                  <span className="flex items-center gap-1.5"><MessageCircle size={13} className="text-blue-300" /> {post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.instagram.com/radiancespecialityclinics/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold text-[13px] uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-pink-500/30"
            style={{ background: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)' }}
          >
            <IgIcon size={18} />
            Follow @radiancespecialityclinics
            <ExternalLink size={15} />
          </a>
          <p className="text-white/40 text-[12px] mt-4 tracking-wide">Join 12,000+ followers for daily pain management insights</p>
        </motion.div>

      </div>
    </section>
  );
}
