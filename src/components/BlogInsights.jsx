import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blogs';

export default function BlogInsights() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="py-24 bg-[#fcfaf9]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
            <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-[#9C4146]"></span> FROM OUR BLOG
            </p>
            <h2 className="text-4xl lg:text-[44px] font-serif text-[#1e375a] leading-[1.1]">
              Expert Tips & Insights
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link to="/blog" className="group flex items-center gap-2 text-[#9C4146] font-bold text-[14px] uppercase tracking-wider hover:text-[#1e375a] transition-colors">
              View All
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeUp} whileHover={{ y: -10 }}>
              <Link to={`/blog/${post.id}`} className="block bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(17,42,70,0.08)] transition-all duration-300 border border-gray-100 group">
                <div className="h-56 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-[#9C4146] px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest text-white">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#9C4146]" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-[#9C4146]" /> {post.author}
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-[#1e375a] text-[18px] mb-4 leading-snug group-hover:text-[#9C4146] transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-[#9C4146] font-bold text-[13px] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

