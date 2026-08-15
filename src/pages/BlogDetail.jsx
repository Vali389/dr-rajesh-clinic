import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Calendar, Clock, ChevronRight, ArrowRight, Lightbulb, CheckCircle2,
  Quote, ArrowUp, Sparkles, Share2, UserRound
} from 'lucide-react';
import { posts, getPostById } from '../data/blogs';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function BlogDetail() {
  const { id } = useParams();
  const post = getPostById(id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState(0);

  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (index) => {
    const el = sectionRefs.current[index];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  if (!post) {
    return (
      <main className="bg-[#fcfaf9] min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-serif text-[#1e375a] mb-4">Article Not Found</motion.h1>
        <p className="text-gray-500 mb-8">The article you are looking for does not exist.</p>
        <Link to="/" className="bg-[#1e375a] text-white px-8 py-4 rounded-md font-bold text-sm inline-flex items-center gap-2">
          Back to Home <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);
  const words = post.title.split(' ');

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdfbfa] via-[#f6ede7] to-[#e9ded4]">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-[#C19A6B]/15 blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[420px] h-[420px] rounded-full bg-[#1e375a]/10 blur-3xl pointer-events-none"
        ></motion.div>

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10 pt-10 pb-20 lg:pt-14">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[11px] text-gray-400 mb-10 font-medium">
            <Link to="/" className="hover:text-[#1e375a] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-[#1e375a] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#1e375a] line-clamp-1">Article</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9C4146]/10 text-[#9C4146] text-[11px] font-bold uppercase tracking-widest mb-6 border border-[#9C4146]/20">
            <Sparkles size={13} /> {post.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-4xl lg:text-[50px] font-serif text-[#1e375a] leading-[1.1] mb-6"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 26, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.55 }}
                className="inline-block mr-[0.28em] origin-bottom"
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">{post.excerpt}</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e375a] to-[#0a1829] flex items-center justify-center text-[#C19A6B] border-2 border-white shadow-md">
                <UserRound size={20} />
              </div>
              <div>
                <p className="font-bold text-[13px] text-[#1e375a]">Dr. Rajesh Kumar Vasam</p>
                <p className="text-[11px] text-gray-400">Interventional Pain Specialist</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
              <Calendar size={15} className="text-[#9C4146]" /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
              <Clock size={15} className="text-[#9C4146]" /> {post.readTime}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
              <Lightbulb size={15} className="text-[#9C4146]" /> {post.sections.length} min read
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="relative z-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl -mt-10">
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }} className="rounded-[32px] overflow-hidden shadow-2xl border-[8px] border-white relative">
            <img src={post.img} alt={post.title} className="w-full h-[340px] lg:h-[440px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112a46]/30 to-transparent"></div>
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-5 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
              <Quote className="text-[#9C4146]" size={18} />
              <p className="text-[12px] font-bold text-[#1e375a]">{post.category}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-14">
            {/* TOC sidebar */}
            <aside className="hidden lg:block lg:w-[240px] shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-[#fcfaf9] border border-[#f0e9e3] rounded-2xl p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#9C4146] mb-4">In this article</p>
                  <ul className="space-y-1">
                    {post.sections.map((s, idx) => (
                      <li key={idx}>
                        <button onClick={() => scrollTo(idx)}
                          className={`w-full text-left text-[12.5px] py-2 px-3 rounded-lg transition-all flex items-start gap-2 border-l-2 ${
                            active === idx ? 'bg-white text-[#1e375a] font-bold border-[#9C4146] shadow-sm' : 'text-gray-500 border-transparent hover:text-[#1e375a] hover:bg-white'
                          }`}>
                          {s.heading}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1e375a] to-[#0a1829] rounded-2xl p-6 text-center relative overflow-hidden">
                  <div className="absolute top-[-40%] right-[-30%] w-32 h-32 bg-[#9C4146] rounded-full blur-[70px] opacity-40 pointer-events-none"></div>
                  <div className="relative z-10">
                    <p className="font-serif font-bold text-white text-[17px] mb-2 leading-snug">Still in Pain?</p>
                    <p className="text-white/60 text-[11.5px] mb-4 leading-relaxed">Book a consultation with Dr. Rajesh today.</p>
                    <Link to="/contact" className="bg-[#C19A6B] hover:bg-white text-[#1e375a] text-[11px] font-bold uppercase tracking-wider py-2.5 px-5 rounded-full transition-colors w-full inline-block text-center">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              {/* Intro quote */}
              <motion.blockquote initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="relative border-l-4 border-[#9C4146] pl-6 py-2 mb-12">
                <p className="text-[#1e375a] font-serif text-[18px] lg:text-[20px] font-bold leading-relaxed italic">"{post.excerpt}"</p>
                <footer className="mt-3 text-[12px] text-gray-400 font-bold uppercase tracking-widest">— Dr. Rajesh Kumar Vasam</footer>
              </motion.blockquote>

              <div className="space-y-16">
                {post.sections.map((section, idx) => (
                  <motion.article
                    key={idx}
                    ref={(el) => { sectionRefs.current[idx] = el; }}
                    data-index={idx}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-serif font-bold text-[#C19A6B] text-2xl">{String(idx + 1).padStart(2, '0')}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#C19A6B]/50 to-transparent"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#1e375a] mb-5 leading-tight">{section.heading}</h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className={`text-gray-600 text-[15px] leading-[1.85] ${pIdx === 0 ? 'first-letter:font-serif first-letter:text-[#9C4146] first-letter:font-bold first-letter:text-6xl first-letter:float-left first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1' : ''}`}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.article>
                ))}

                {/* Key takeaways */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-gradient-to-br from-[#1e375a] to-[#0a1829] rounded-[28px] p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute top-[-40%] right-[-15%] w-64 h-64 bg-[#9C4146] rounded-full blur-[110px] opacity-30 pointer-events-none"></div>
                  <div className="relative z-10">
                    <p className="uppercase tracking-widest text-[#C19A6B] text-[11px] font-bold mb-3 flex items-center gap-2">
                      <Lightbulb size={14} /> KEY TAKEAWAYS
                    </p>
                    <h3 className="font-serif font-bold text-white text-[22px] mb-6">Remember This</h3>
                    <ul className="space-y-4">
                      {post.takeaways.map((t, idx) => (
                        <motion.li key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                          <span className="w-7 h-7 rounded-full bg-[#C19A6B]/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="text-[#C19A6B]" size={15} strokeWidth={2.5} />
                          </span>
                          <span className="text-white/90 text-[14px] leading-snug">{t}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Author box */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-[#fcfaf9] border border-[#f0e9e3] rounded-[24px] p-7 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e375a] to-[#0a1829] flex items-center justify-center text-[#C19A6B] shrink-0">
                    <UserRound size={34} />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[11px] uppercase tracking-widest text-[#9C4146] font-bold mb-1">Written by</p>
                    <h4 className="font-serif font-bold text-[#1e375a] text-[18px] mb-1">Dr. Rajesh Kumar Vasam</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      Interventional Pain Specialist with 15+ years of experience in image-guided, minimally invasive treatments for chronic pain.
                    </p>
                  </div>
                  <button className="sm:ml-auto shrink-0 bg-[#1e375a] hover:bg-[#9C4146] text-white text-[11px] font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-colors whitespace-nowrap">
                    View Profile
                  </button>
                </motion.div>

                {/* Share */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-gray-100 pt-8">
                  <div>
                    <p className="font-bold text-[#1e375a] text-[15px]">Enjoyed this article?</p>
                    <p className="text-[12.5px] text-gray-500">Share it with someone who may benefit.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {['X', 'f', 'in', 'wa'].map((s, i) => (
                      <motion.button key={i} whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-full bg-[#f5ede8] text-[#1e375a] font-bold text-[13px] hover:bg-[#9C4146] hover:text-white transition-colors flex items-center justify-center">
                        {s === 'wa' ? <Share2 size={17} /> : s}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 lg:py-24 bg-[#fcfaf9] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-end justify-between mb-14 gap-6">
            <div>
              <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3">KEEP READING</p>
              <h2 className="text-3xl font-serif text-[#1e375a]">More From Our Blog</h2>
            </div>
            <Link to="/" className="hidden sm:inline-flex items-center gap-2 text-[#1e375a] font-bold text-[13px] uppercase tracking-wider hover:text-[#9C4146] transition-colors group">
              All Articles <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group block bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(17,42,70,0.12)] transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold text-[#9C4146] uppercase tracking-widest mb-2">{p.category}</p>
                  <h3 className="font-serif font-bold text-[#1e375a] text-[17px] leading-snug mb-3 line-clamp-2 group-hover:text-[#9C4146] transition-colors">{p.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11.5px] text-gray-400 font-medium"><Clock size={12} /> {p.readTime}</span>
                    <span className="w-9 h-9 rounded-full bg-[#f5ede8] flex items-center justify-center text-[#9C4146] group-hover:bg-[#9C4146] group-hover:text-white transition-colors">
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
