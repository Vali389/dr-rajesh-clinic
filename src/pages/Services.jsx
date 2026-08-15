import { CalendarDays, CheckCircle2, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatsBar from '../components/StatsBar';
import PopularTreatments from '../components/PopularTreatments';

export default function Services() {
  const [activeTab, setActiveTab] = useState('Spine & Back Pain');
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Will I need surgery for my pain condition?',
      a: 'Not in most cases. Our image-guided, minimally invasive interventions resolve a large majority of chronic pain conditions without surgery.'
    },
    {
      q: 'How soon will I feel relief after a procedure?',
      a: 'Many patients notice improvement within days. Nerve blocks can give near-immediate relief, while the full benefit of injections builds over a few weeks.'
    },
    {
      q: 'Are these procedures safe?',
      a: 'Yes. Every procedure is performed under image guidance in a sterile setting, which maximises accuracy and minimises risk.'
    },
    {
      q: 'How many sessions will I need?',
      a: 'Treatment is personalised. Most patients need 1–3 sessions, with your plan reviewed at every follow-up.'
    }
  ];

  const detailedServices = {
    'Spine & Back Pain': {
      title: 'Spine & Back Pain',
      desc: 'Comprehensive diagnosis and minimally invasive interventions for chronic back pain, allowing you to avoid surgery.',
      points: [
        'Sciatica & Radicular Pain',
        'Herniated or Slipped Discs',
        'Facet Joint Syndrome',
        'Cervical Spondylosis (Neck Pain)',
        'Failed Back Surgery Syndrome',
        'Spinal Stenosis'
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=80'
    },
    'Joint & Knee Pain': {
      title: 'Joint & Knee Pain',
      desc: 'Advanced non-surgical therapies for severe joint pain and osteoarthritis.',
      points: [
        'Knee Osteoarthritis',
        'Frozen Shoulder (Adhesive Capsulitis)',
        'Hip Joint Pain',
        'Sports-Related Joint Injuries',
        'Sacroiliac (SI) Joint Dysfunction'
      ],
      image: 'https://images.unsplash.com/photo-1552196563-552728e4fd59?w=500&auto=format&fit=crop&q=80'
    },
    'Neuropathic Pain': {
      title: 'Neuropathic Pain',
      desc: 'Specialized management for complex nerve-related pain conditions.',
      points: [
        'Diabetic Peripheral Neuropathy',
        'Complex Regional Pain Syndrome (CRPS)',
        'Post-Herpetic Neuralgia',
        'Trigeminal Neuralgia',
        'Phantom Limb Pain'
      ],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&auto=format&fit=crop&q=80'
    },
    'Advanced Therapies': {
      title: 'Advanced Therapies',
      desc: 'Cutting-edge regenerative and minimally invasive therapies for tissue healing and lasting relief.',
      points: [
        'Platelet-Rich Plasma (PRP) Therapy',
        'COOLIEF Radiofrequency Ablation (RFA)',
        'Epidural Steroid Injections (ESI)',
        'Ozone Nucleolysis',
        'Diagnostic & Therapeutic Nerve Blocks'
      ],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80'
    }
  };

  const tabLinks = {
    'Spine & Back Pain': 'chronic-back-neck-pain',
    'Joint & Knee Pain': 'knee-osteoarthritis',
    'Neuropathic Pain': 'neuropathic-pain',
    'Advanced Therapies': 'spine-interventions'
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const DecorativeDivider = () => (
    <div className="flex items-center justify-center gap-2 my-4">
      <div className="h-[1px] w-12 bg-[#9C4146] opacity-50"></div>
      <div className="w-1.5 h-1.5 rotate-45 bg-[#9C4146]"></div>
      <div className="h-[1px] w-12 bg-[#9C4146] opacity-50"></div>
    </div>
  );

  return (
    <main className="bg-[#fcfaf9]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-[#fdfcfb]">

        {/* Decorative leaf/floral elements */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none -translate-x-8 -translate-y-4">
          <img src="https://api.iconify.design/ph:leaf-thin.svg?color=%239C4146" className="w-full h-full" alt="" />
        </div>
        <div className="absolute top-10 left-32 w-32 h-32 opacity-10 pointer-events-none">
          <img src="https://api.iconify.design/ph:leaf-thin.svg?color=%239C4146" className="w-full h-full rotate-45" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none translate-x-4 translate-y-4">
          <img src="https://api.iconify.design/ph:leaf-thin.svg?color=%239C4146" className="w-full h-full -rotate-45" alt="" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-8 font-medium">
            <span>Home</span>
            <span className="text-gray-300">›</span>
            <span className="text-[#1e375a]">Services</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="lg:w-1/2 z-10 space-y-5"
            >
              <p className="uppercase tracking-widest text-[#9C4146] text-xs font-bold flex items-center gap-2">
                <span className="w-8 h-px bg-[#9C4146]"></span> CONDITIONS & TREATMENTS
              </p>
              <h1 className="text-5xl lg:text-6xl font-serif text-[#1e375a] leading-[1.15]">
                Complete Solutions for a Pain-Free Life
              </h1>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-md pt-1 pb-2">
                We utilize state-of-the-art diagnostic tools and minimally invasive interventions to target the root cause of your pain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#1e375a] hover:bg-[#162e4e] text-white py-4 px-8 rounded-md font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                  <CalendarDays size={18} /> Book Appointment
                </Link>
                <a href="#detailed-services" className="border border-[#1e375a] text-[#1e375a] hover:bg-[#1e375a] hover:text-white py-4 px-8 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2">
                  Explore Treatments
                </a>
              </div>
            </motion.div>

            {/* Right: High-Impact Medical Image Card with Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative w-full flex items-center justify-center"
            >
              {/* Main Medical Photo Container */}
              <div className="relative w-full max-w-[460px] aspect-[4/4.5] rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(30,55,90,0.18)] border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=80" 
                  alt="Doctor Patient Pain Consultation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e375a]/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge 1: Experience */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-4 -left-2 sm:left-4 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#9C4146] text-white flex items-center justify-center font-serif font-bold text-lg shadow-md">
                  15+
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1e375a]">Years Experience</p>
                  <p className="text-[10px] text-gray-500 font-medium">FIPM Fellowship Trained</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Non-Surgical Care */}
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-2 sm:right-4 bg-[#1e375a] text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white flex items-center gap-4 z-20 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C19A6B]/20 flex items-center justify-center text-[#C19A6B] shrink-0">
                  <img src="https://api.iconify.design/ph:heartbeat-fill.svg?color=%23C19A6B" className="w-6 h-6" alt="" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white leading-tight">Advanced Pain Relief</h4>
                  <p className="text-white/70 text-[10px] mt-0.5 leading-snug">Non-surgical, image-guided precision care</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Why Choose Non-Surgical Interventional Medicine */}
      <section className="py-20 bg-gradient-to-b from-[#1e375a] to-[#12243b] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[#C19A6B] text-xs font-bold mb-3">ADVANCED ALTERNATIVE TO SURGERY</p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Why Choose Interventional Pain Medicine?</h2>
            <p className="text-white/75 text-sm leading-relaxed">
              Traditional open surgery often carries high risks, long recovery periods, and scarring. Interventional pain procedures offer a safe, pinpoint accurate alternative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ph:clock-bold',
                title: 'Outpatient Procedure',
                desc: 'Most procedures take under 45 minutes with no hospital overnight stay needed.'
              },
              {
                icon: 'ph:shield-check-bold',
                title: 'Zero Open Surgery',
                desc: 'Performed using micro-needles and catheters under image guidance without open cuts.'
              },
              {
                icon: 'ph:first-aid-bold',
                title: 'Rapid Recovery',
                desc: 'Patients return home the same day and resume daily active life within 24-48 hours.'
              },
              {
                icon: 'ph:target-bold',
                title: 'Pinpoint Accuracy',
                desc: 'US-FDA approved C-Arm Fluoroscopy and Ultrasound target the exact pain-transmitting nerves.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C19A6B]/20 text-[#C19A6B] flex items-center justify-center mb-6">
                  <img src={`https://api.iconify.design/${item.icon}.svg?color=%23C19A6B`} className="w-6 h-6" alt={item.title} />
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Services Section */}
      <section id="detailed-services" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-2xl lg:text-[28px] font-serif text-[#1e375a] uppercase tracking-wide">DETAILED SERVICES WE OFFER</h2>
            <DecorativeDivider />
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left Tabs */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/3 flex flex-col gap-3">
              {Object.keys(detailedServices).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-6 py-4 rounded-xl flex justify-between items-center transition-all duration-300 font-bold text-[14px] ${
                    activeTab === tab 
                      ? 'bg-[#9C4146] text-white shadow-md' 
                      : 'bg-transparent text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                  <ChevronRight size={18} className={activeTab === tab ? "opacity-100 text-white" : "opacity-50"} />
                </button>
              ))}
            </motion.div>
            
             {/* Right Content */}
             <motion.div 
               initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
               className="md:w-2/3 bg-white rounded-[32px] p-10 border border-gray-100 flex flex-col lg:flex-row gap-10 items-center shadow-xl"
             >
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-serif text-[#1e375a] mb-4">{detailedServices[activeTab].title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8">{detailedServices[activeTab].desc}</p>
                
                <ul className="space-y-4">
                  {detailedServices[activeTab].points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#9C4146] shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                      <span className="text-[13.5px] text-gray-800 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${tabLinks[activeTab]}`} className="mt-8 inline-flex items-center gap-2 text-[#9C4146] font-bold text-[13px] uppercase tracking-wider hover:text-[#1e375a] transition-colors group">
                  Explore Full Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="lg:w-1/2 w-full h-full min-h-[300px]">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img src={detailedServices[activeTab].image} alt={detailedServices[activeTab].title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: 3-Step Treatment Roadmap */}
      <section className="py-24 bg-[#fcfaf9]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="uppercase tracking-widest text-[#9C4146] text-xs font-bold mb-3">HOW WE CARE FOR YOU</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1e375a] font-bold">Your 3-Step Pain Relief Roadmap</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Comprehensive Evaluation',
                desc: 'Detailed clinical assessment, MRI review, and diagnostic nerve block to pinpoint the exact source of pain.'
              },
              {
                step: '02',
                title: 'Image-Guided Procedure',
                desc: 'Minimally invasive, outpatient procedure performed under high-precision C-Arm Fluoroscopy or Ultrasound.'
              },
              {
                step: '03',
                title: 'Lasting Relief & Rehab',
                desc: 'Personalized recovery roadmap, physical rehabilitation, and regular follow-ups to maintain pain-free mobility.'
              }
            ].map((s, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all"
              >
                <span className="font-serif font-bold text-5xl text-[#C19A6B]/20 absolute top-4 right-6 group-hover:text-[#9C4146]/30 transition-colors">
                  {s.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#1e375a] text-white flex items-center justify-center font-bold text-sm mb-6">
                  {idx + 1}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1e375a] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <StatsBar />

      {/* 4. Popular Treatments */}
      <PopularTreatments />

      {/* 5. Ready To Begin CTA */}
      <section className="bg-[#f8f9fa] py-16 border-t border-gray-200">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="bg-white rounded-[20px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm border border-gray-100 relative">
            
            <div className="lg:w-[35%] relative z-10 text-center lg:text-left">
              <h3 className="text-[26px] font-serif font-bold text-[#1e375a] mb-2 leading-snug">Ready to Begin Your<br/>Transformation?</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Book a consultation with our experts today and take the first step towards a pain-free life.
              </p>
            </div>

            <div className="lg:w-[45%] flex justify-center lg:justify-between gap-8 md:gap-12 relative z-10">
               <div className="flex flex-col items-center text-center">
                 <img src="https://api.iconify.design/ph:file-text-light.svg?color=%231e375a" className="w-8 h-8 mb-2" alt="icon"/>
                 <p className="text-[11px] font-bold text-[#1e375a]">Personalised<br/>Treatment Plans</p>
               </div>
               <div className="flex flex-col items-center text-center">
                 <img src="https://api.iconify.design/ph:shield-plus-light.svg?color=%231e375a" className="w-8 h-8 mb-2" alt="icon"/>
                 <p className="text-[11px] font-bold text-[#1e375a]">Safe & Advanced<br/>Technology</p>
               </div>
               <div className="flex flex-col items-center text-center">
                 <img src="https://api.iconify.design/ph:user-focus-light.svg?color=%231e375a" className="w-8 h-8 mb-2" alt="icon"/>
                 <p className="text-[11px] font-bold text-[#1e375a]">Expert Care<br/>You Can Trust</p>
               </div>
            </div>
            
            <div className="lg:w-[20%] flex justify-center lg:justify-end relative z-10">
              <button className="bg-[#9C4146] hover:bg-[#86373b] text-white py-3.5 px-6 rounded-md font-bold text-[13px] transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-sm">
                <CalendarDays size={16} /> Book Appointment
              </button>
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-20 bg-[#faf7f5] border-t border-[#f0e8e1]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-3">Got Questions?</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1e375a] leading-tight">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#C19A6B]/50 shadow-[0_10px_30px_rgba(17,42,70,0.08)]' : 'border-[#f0e9e3] hover:border-gray-300'}`}
              >
                <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-[#fcfaf9] transition-colors">
                  <span className="font-bold text-gray-800 text-[14.5px]">{f.q}</span>
                  <motion.span animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-[#f5ede8] flex items-center justify-center text-[#9C4146] shrink-0">
                    <ChevronDown size={17} />
                  </motion.span>
                </button>
                <motion.div initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  transition={{ duration: 0.32 }}
                  className="overflow-hidden">
                  <div className="px-6 pb-5 border-t border-[#f0e9e3] pt-4">
                    <p className="text-[14px] text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

