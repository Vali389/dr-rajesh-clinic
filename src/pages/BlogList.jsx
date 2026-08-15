import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { posts } from '../data/blogs';

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map((p) => p.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#fcfdfd] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-r from-[#1e375a] via-[#162e4e] to-[#9C4146] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C19A6B]/20 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C19A6B] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Medical Articles & Insights
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            Dr. Rajesh <span className="text-[#C19A6B] italic font-light">Health Blog</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Explore evidence-based articles, patient guides, and non-surgical pain management techniques written by Dr. Rajesh.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#1e375a] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#1e375a] text-sm bg-gray-50/50"
              />
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-serif text-[#1e375a] mb-2">No Articles Found</h3>
              <p className="text-gray-500 text-sm">Try searching for a different keyword or selecting another category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.div key={post.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -8 }}>
                  <Link to={`/blog/${post.id}`} className="block bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(30,55,90,0.12)] transition-all duration-300 group h-full flex flex-col justify-between">
                    <div>
                      {/* Image Container */}
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute top-4 left-4 bg-[#9C4146] px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                          {post.category}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-7">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#9C4146]" /> {post.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-[#9C4146]" /> {post.readTime}
                          </div>
                        </div>

                        <h3 className="font-serif font-bold text-[#1e375a] text-xl mb-3 leading-snug group-hover:text-[#9C4146] transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-7 pb-7 pt-0 border-t border-gray-50 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                        <User size={14} className="text-[#1e375a]" /> {post.author}
                      </div>
                      <span className="text-[#9C4146] font-bold text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
