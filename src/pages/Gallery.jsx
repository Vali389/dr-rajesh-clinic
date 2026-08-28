import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Video as VideoIcon, Sparkles, Filter, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

// Import all 17 gallery photos from assets
import ph1 from '../assets/ph-gallery-1.jpeg';
import ph2 from '../assets/ph-gallery-2.jpeg';
import ph3 from '../assets/ph-gallery-3.jpeg';
import ph4 from '../assets/ph-gallery-4.jpeg';
import ph5 from '../assets/ph-gallery-5.jpeg';
import ph6 from '../assets/ph-gallery-6.jpeg';
import ph7 from '../assets/ph-gallery-7.jpeg';
import ph8 from '../assets/ph-gallery-8.jpeg';
import ph9 from '../assets/ph-gallery-9.jpeg';
import ph10 from '../assets/ph-gallery-10.jpeg';
import ph11 from '../assets/ph-gallery-11.jpeg';
import ph12 from '../assets/ph-gallery-12.jpeg';
import ph13 from '../assets/ph-gallery-13.jpeg';
import ph14 from '../assets/ph-gallery-14.jpeg';
import ph15 from '../assets/ph-gallery-15.jpeg';
import ph16 from '../assets/ph-gallery-16.jpeg';
import ph17 from '../assets/ph-gallery-17.jpeg';

const videoItems = [
  {
    id: '1ATGLZMJ_UgyqE3_4wetLWnbiSFg0uyZD',
    title: 'Clinical Procedure Overview 1',
    description: 'Dr. Vasam Rajesh Kumar demonstrating advanced pain management technique.',
    category: 'Procedures',
    tag: 'Clinical Video'
  },
  {
    id: '1QvnOJxnrBhtXk3JbWoXC7wp2HWF8_a-Z',
    title: 'Clinical Procedure Overview 2',
    description: 'Ultrasound-guided precision intervention and patient recovery insights.',
    category: 'Procedures',
    tag: 'Clinical Video'
  },
  {
    id: '1hZlW2uE9q-Y-k71ngRb4zoHlOdR7OXdp',
    title: 'Patient Care & Wellness Therapy',
    description: 'Comprehensive rehabilitation & non-surgical treatment walkthrough.',
    category: 'Patient Care',
    tag: 'Wellness & Care'
  },
  {
    id: '1mXYLCXhIXtXsUY5kwsITHuGDAKW7_Hp8',
    title: 'Specialist Consultation & Facilities',
    description: 'Inside look at modern clinic facilities & diagnostic capabilities.',
    category: 'Facilities',
    tag: 'Facility Tour'
  }
];

const photoItems = [
  { img: ph1, title: 'Spacious Consultation Suites', category: 'Facilities', desc: 'Modern & comfortable private care rooms' },
  { img: ph2, title: 'Advanced Physiotherapy Suite', category: 'Facilities', desc: 'State-of-the-art rehabilitation equipment' },
  { img: ph3, title: 'Precision Interventional OT', category: 'Procedures', desc: 'US-FDA C-Arm guided treatment setup' },
  { img: ph4, title: 'Patient Recovery & Monitoring', category: 'Patient Care', desc: 'Dedicated critical care & monitoring unit' },
  { img: ph5, title: 'National Pain Science Keynote', category: 'Events', desc: 'Dr. Rajesh speaking at medical conference' },
  { img: ph6, title: 'Diagnostic Imaging Collaboration', category: 'Facilities', desc: 'High precision diagnostic technology' },
  { img: ph7, title: 'Non-Surgical Joint Therapy', category: 'Procedures', desc: 'Regenerative joint care & injection therapy' },
  { img: ph8, title: 'Modern Clinic Environment', category: 'Facilities', desc: 'Welcoming reception & outpatient care' },
  { img: ph9, title: 'Spine & Disc Care Suite', category: 'Procedures', desc: 'Minimally invasive spine procedures' },
  { img: ph10, title: 'Specialist Medical Workshop', category: 'Events', desc: 'Knowledge sharing with clinical experts' },
  { img: ph11, title: 'Ultrasound Guided Scan Unit', category: 'Facilities', desc: 'Real-time targeted nerve localization' },
  { img: ph12, title: 'Holistic Wellness & Activity', category: 'Patient Care', desc: 'Palliative & pain relief rehabilitation' },
  { img: ph13, title: 'Regenerative PRP Preparation', category: 'Procedures', desc: 'Advanced autologous cellular therapy' },
  { img: ph14, title: 'Personalized Doctor Guidance', category: 'Patient Care', desc: 'Comprehensive patient assessment & care' },
  { img: ph15, title: 'Interventional Clinical Team', category: 'Facilities', desc: 'Expert medical & nursing support staff' },
  { img: ph16, title: 'Academic Medical Lecture', category: 'Events', desc: 'Training next generation pain specialists' },
  { img: ph17, title: 'Restoring Quality of Life', category: 'Patient Care', desc: 'Patient relief and recovery milestone' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = ['All', 'Videos', 'Procedures', 'Facilities', 'Patient Care', 'Events'];

  const filteredVideos = videoItems.filter(item => {
    if (activeFilter === 'All' || activeFilter === 'Videos') return true;
    return item.category === activeFilter;
  });

  const filteredPhotos = photoItems.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Videos') return false;
    return item.category === activeFilter;
  });

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#070d14] text-[#e2e8f0]">
      
      {/* ── HERO BANNER ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#0a1522] via-[#08111c] to-[#070d14] border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C19A6B]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#9C4146]/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C19A6B]/10 border border-[#C19A6B]/30 text-[#C19A6B] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(193,154,107,0.15)]">
              <Sparkles size={14} /> Luxury Clinical Gallery
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
              Explore Our <span className="text-[#C19A6B] italic font-normal">State-of-the-Art</span> Facilities
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Immerse yourself in our premier interventional suites, modern rehabilitation spaces, and video walkthroughs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY FILTER NAVBAR ── */}
      <section className="sticky top-[73px] z-40 bg-[#070d14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-[#C19A6B] text-xs uppercase tracking-[0.15em] font-bold">
            <Filter size={14} />
            <span>Filter Gallery:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#C19A6B] text-[#070d14] font-bold shadow-[0_0_20px_rgba(193,154,107,0.4)] scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN GALLERY SECTION ── */}
      <main className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 space-y-24">
        
        {/* ── 1. FEATURED VIDEO HIGHLIGHTS ── */}
        {(activeFilter === 'All' || activeFilter === 'Videos' || (filteredVideos.length > 0 && activeFilter !== 'Events')) && (
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#9C4146]/20 border border-[#9C4146]/40 text-[#f87171] flex items-center justify-center shadow-lg">
                  <VideoIcon size={22} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-wide">
                    Video Walkthroughs & Insights
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Watch our clinical procedures & treatment walkthroughs
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold px-4 py-1.5 bg-[#C19A6B]/15 text-[#C19A6B] border border-[#C19A6B]/30 rounded-full">
                {filteredVideos.length} Videos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVideos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-[#0d1826] rounded-[28px] overflow-hidden border border-[#C19A6B]/20 hover:border-[#C19A6B]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(193,154,107,0.15)] transition-all duration-500 flex flex-col"
                >
                  <div className="relative aspect-video bg-black overflow-hidden">
                    <iframe
                      src={`https://drive.google.com/file/d/${video.id}/preview`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0d1826] to-[#0a121d]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#C19A6B] bg-[#C19A6B]/15 px-3 py-1 rounded-full border border-[#C19A6B]/30">
                          {video.tag}
                        </span>
                        <span className="text-[11px] text-gray-400 font-medium">{video.category}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C19A6B] transition-colors leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <Play size={13} className="text-[#C19A6B]" /> HD Video Presentation
                      </span>
                      <button
                        onClick={() => setSelectedVideo(video)}
                        className="text-[#C19A6B] hover:text-white flex items-center gap-1.5 font-bold transition-colors"
                      >
                        Expand Modal <Maximize2 size={13} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── 2. LUXURY PHOTO GALLERY GRID ── */}
        {(activeFilter !== 'Videos' && filteredPhotos.length > 0) && (
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#C19A6B]/20 border border-[#C19A6B]/40 text-[#C19A6B] flex items-center justify-center shadow-lg">
                  <ImageIcon size={22} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-wide">
                    Hospital Facilities & Gallery
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Spacious rooms, rehabilitation suites & advanced monitoring environments
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold px-4 py-1.5 bg-[#C19A6B]/15 text-[#C19A6B] border border-[#C19A6B]/30 rounded-full">
                {filteredPhotos.length} Captures
              </span>
            </div>

            {/* Photo Cards Grid with Clean Unshaded Top Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.08, duration: 0.5 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-[28px] overflow-hidden cursor-pointer bg-[#0c1622] border border-[#C19A6B]/25 hover:border-[#C19A6B]/70 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(193,154,107,0.25)] transition-all duration-500 aspect-[16/11]"
                >
                  {/* Photo Image - Fully visible, aligned top-center */}
                  <img
                    src={photo.img}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay ONLY at the bottom so top of image is 100% crystal clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500" />

                  {/* Top Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C19A6B] bg-black/60 backdrop-blur-md border border-[#C19A6B]/30 px-3 py-1 rounded-full shadow-lg">
                      {photo.category}
                    </span>
                  </div>

                  {/* Card Bottom Row Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex items-end justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-xl md:text-2xl text-white group-hover:text-[#C19A6B] transition-colors leading-tight tracking-wide drop-shadow-md">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-gray-300 font-light mt-1 line-clamp-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        {photo.desc}
                      </p>
                    </div>

                    {/* Gold Circular Icon Button */}
                    <div className="w-10 h-10 rounded-full bg-[#C19A6B]/20 border border-[#C19A6B] text-[#C19A6B] group-hover:bg-[#C19A6B] group-hover:text-[#070d14] flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_0_15px_rgba(193,154,107,0.3)] group-hover:scale-110">
                      <CheckCircle2 size={18} strokeWidth={2} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* ── LIGHTBOX MODAL FOR VIDEO EXPANSION ── */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0b1420] rounded-[32px] overflow-hidden max-w-4xl w-full border border-[#C19A6B]/30 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-[#9C4146] flex items-center justify-center transition-colors border border-white/20"
              >
                <X size={20} />
              </button>

              <div className="aspect-video bg-black">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo.id}/preview`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="p-6 text-white bg-[#0b1420]">
                <span className="text-xs font-bold text-[#C19A6B] uppercase tracking-widest">{selectedVideo.tag}</span>
                <h3 className="text-xl font-serif font-bold mt-1 text-white">{selectedVideo.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FULLSCREEN IMAGE LIGHTBOX WITH PREV/NEXT NAVIGATION ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white z-10 max-w-7xl w-full mx-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold bg-[#C19A6B]/20 text-[#C19A6B] px-3.5 py-1 rounded-full border border-[#C19A6B]/40">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest hidden sm:inline">
                  {filteredPhotos[lightboxIndex].category}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#9C4146] text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <X size={22} />
              </button>
            </div>

            {/* Main Lightbox Image View with Prev/Next Controls */}
            <div className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4" onClick={e => e.stopPropagation()}>
              
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C19A6B] hover:text-[#070d14] text-white flex items-center justify-center transition-all border border-white/20 shadow-2xl hover:scale-110"
                aria-label="Previous Image"
              >
                <ChevronLeft size={26} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredPhotos[lightboxIndex].img}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/15"
              />

              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C19A6B] hover:text-[#070d14] text-white flex items-center justify-center transition-all border border-white/20 shadow-2xl hover:scale-110"
                aria-label="Next Image"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="max-w-3xl w-full mx-auto bg-[#0d1826]/90 backdrop-blur-xl p-5 rounded-3xl text-white text-center border border-[#C19A6B]/30 z-10 shadow-2xl" onClick={e => e.stopPropagation()}>
              <h3 className="font-serif font-bold text-xl text-white tracking-wide">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 mt-1 font-light">
                {filteredPhotos[lightboxIndex].desc}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
