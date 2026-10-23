import { CheckCircle2, ChevronRight, GraduationCap, Building2, Award, Target, HeartHandshake, ShieldCheck, Activity, Zap, Heart, Infinity, Stethoscope, Brain, UserCheck, FileText, Crosshair, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatsBar from '../components/StatsBar';
import drRajeshImg from '../assets/dr-rajesh-img-2.jpeg';

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // Reusable decorative divider that appears in multiple sections
  const DecorativeDivider = ({ color = "#9C4146" }) => (
    <div className="flex items-center justify-center gap-2 my-4">
      <div className="h-[1px] w-12" style={{ backgroundColor: color, opacity: 0.5 }}></div>
      <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: color }}></div>
      <div className="h-[1px] w-12" style={{ backgroundColor: color, opacity: 0.5 }}></div>
    </div>
  );

  return (
    <main className="bg-[#f8f9fa]">
      
      {/* 1. Hero Section with Curved Background */}
      <section className="relative pt-8 pb-20 overflow-hidden bg-gradient-to-r from-[#fdfbfb] to-[#f4f2f0]">
        
        {/* Massive S-Curve Background Shape */}
        <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-[#eae3dc] rounded-l-[100%] translate-x-[15%] -translate-y-[10%]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-[#1e375a] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1e375a]">About Us</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:w-[55%] pr-8">
              <p className="uppercase tracking-widest text-[#9C4146] text-[11px] font-bold mb-4">
               ABOUT DR. VASAM RAJESH KUMAR
              </p>
              <h1 className="text-5xl lg:text-[60px] font-serif text-[#1e375a] leading-[1.1] mb-6">
                Healing Pain. Restoring Life.
              </h1>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6 max-w-lg">
                Dr. Vasam Rajesh Kumar (MBBS, MD, FIPM) is an Interventional Pain Physician and HOD – Anaesthesia and Pain Medicine. He specializes in advanced pain management, critical care, anesthesia services, and rehabilitation-focused care at Radiance Speciality Clinics.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-8 bg-[#9C4146]"></div>
                <span className="text-[#9C4146] font-bold text-sm italic">Compassion · Care · Cure</span>
                <div className="h-[2px] w-8 bg-[#9C4146]"></div>
              </div>
              
              {/* 4 Circular Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4">
                {[
                  { icon: Target, title: 'Evidence-Based\nCare', color: '#1e375a' },
                  { icon: HeartHandshake, title: 'Patient-Centred\nApproach', color: '#9C4146' },
                  { icon: ShieldCheck, title: 'Minimally Invasive\nSolutions', color: '#d4af37' },
                  { icon: Activity, title: 'Better Function &\nQuality of Life', color: '#688e73' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full shadow-md flex items-center justify-center mb-4 transition-transform hover:-translate-y-1 text-white" style={{ backgroundColor: item.color }}>
                       <item.icon className="w-8 h-8" strokeWidth={1.75} />
                    </div>
                    <p className="text-[11.5px] font-bold text-[#1e375a] leading-[1.3] px-1 whitespace-pre-line">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image — Dr. Rajesh (actual photo) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="lg:w-[45%] w-full relative z-10 flex justify-center"
            >
              {/* Decorative background blob */}
              <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-[#9C4146]/10 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full bg-[#C19A6B]/10 blur-2xl pointer-events-none" />

              {/* Image wrapper */}
              <div className="relative w-full max-w-[420px]">
                {/* Offset decorative border */}
                <div className="absolute inset-0 rounded-[28px] border-2 border-[#9C4146]/20 translate-x-3 translate-y-3" />

                <img
                  src={drRajeshImg}
                  alt="Dr. Vasam Rajesh Kumar — Interventional Pain Physician"
                  className="relative z-10 w-full object-cover object-top rounded-[28px] shadow-[0_24px_60px_rgba(17,42,70,0.18)] bg-[#1e375a]"
                  style={{ minHeight: '460px', maxHeight: '520px' }}
                />

                {/* Credential badge — bottom left */}
                <div className="absolute z-20 bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-gray-100 max-w-[200px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9C4146] mb-0.5">Qualifications</p>
                  <p className="text-[#1e375a] font-bold text-[13px] leading-snug">MBBS · MD · FIPM</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">Interventional Pain Physician</p>
                </div>

                {/* Experience badge — top right */}
                <div className="absolute z-20 top-5 right-5 bg-[#9C4146] text-white rounded-2xl px-4 py-3 shadow-xl text-center">
                  <p className="text-2xl font-black leading-none">10+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5 opacity-90">Years Exp.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Mission Statement & Philosophy */}
      <section className="py-28 bg-[#fdfbfa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9C4146]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C19A6B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Compassionate Photo Column */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-[45%] w-full relative"
            >
              {/* Outer decorative offset border */}
              <div className="absolute inset-0 rounded-[32px] border border-[#C19A6B]/30 translate-x-4 translate-y-4" />
              
              <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl bg-white p-3">
                <img 
                  src="/dr_patient_care.jpg" 
                  alt="Compassionate patient care at Radiance Speciality Clinics" 
                  className="w-full h-auto object-cover rounded-[24px]"
                />
              </div>

              {/* Floating quote badge */}
              <div className="absolute -bottom-8 -right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 max-w-[240px]">
                <p className="text-2xl font-serif italic text-[#9C4146] font-semibold leading-tight">"A patient-first approach to healing."</p>
                <div className="h-[2px] w-8 bg-[#C19A6B] mt-3" />
              </div>
            </motion.div>

            {/* Right: Mission Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:w-[55%] w-full text-left"
            >
              <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-[#9C4146]/5 text-[#9C4146] text-xs font-black uppercase tracking-widest mb-6 border border-[#9C4146]/10">
                <span className="w-1.5 h-1.5 bg-[#9C4146] rounded-full animate-pulse" />
                Our Mission
              </div>

              <h2 className="text-3xl md:text-[42px] font-serif font-bold text-[#1e375a] leading-[1.2] mb-6">
                Redefining Pain Care, <span className="italic font-light text-[#9C4146]">Restoring Quality of Life.</span>
              </h2>

              <p className="text-lg md:text-[20px] font-serif text-gray-700 leading-relaxed italic mb-8 border-l-2 border-[#C19A6B]/50 pl-5">
                "To provide comprehensive pain relief and improve the quality of life of our patients through advanced interventional techniques, compassionate palliative care, and innovative regenerative medicine therapies."
              </p>

              {/* Pillars of our Mission */}
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Interventional Precision",
                    desc: "Using state-of-the-art C-Arm fluoroscopy and high-resolution ultrasound guidance to target pain at its exact source.",
                    color: "#9C4146"
                  },
                  {
                    title: "Compassionate Care Philosophy",
                    desc: "Active listening, personalized treatment plans, and continuous rehabilitation support tailored to individual lifestyle goals.",
                    color: "#1e375a"
                  },
                  {
                    title: "Innovative Regenerative Therapies",
                    desc: "Harnessing the healing power of PRP and stem cell science to actively repair joint cartilage and tendon damage.",
                    color: "#C19A6B"
                  }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: `${pillar.color}15` }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e375a] text-[15px] mb-1">{pillar.title}</h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW: Why Choose Radiance Speciality Clinics */}
      <section className="py-24 bg-gradient-to-b from-[#f8f9fa] to-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-2xl lg:text-[28px] font-serif text-[#1e375a] uppercase tracking-wide">Why Choose Radiance Speciality Clinics?</h2>
            <DecorativeDivider />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">We are dedicated to bringing you the highest standard of non-surgical pain management.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Care", desc: "Provided by a fellowship-trained Interventional Pain Specialist.", icon: UserCheck },
              { title: "Personalized Plans", desc: "Treatment plans carefully tailored to each individual patient.", icon: FileText },
              { title: "Advanced Procedures", desc: "Image-guided, minimally invasive procedures for precision.", icon: Crosshair },
              { title: "Avoid Major Surgery", desc: "Reduced need for major surgery whenever possible.", icon: ShieldCheck },
              { title: "Faster Recovery", desc: "Minimal hospital stay allowing you to get back to life quicker.", icon: Clock },
              { title: "Multidisciplinary", desc: "Combining pain medicine, palliative care, and regenerative therapies.", icon: Users },
              { title: "Compassionate Care", desc: "Patient-centered approach focusing on your overall well-being.", icon: Heart },
              { title: "Long-Term Relief", desc: "Holistic integration of rehab and therapies for lasting comfort.", icon: Infinity }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative overflow-hidden bg-white p-7 rounded-[24px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 group cursor-pointer"
              >
                {/* Gradient background overlay that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e375a] via-[#2d4d75] to-[#9C4146] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1e375a]/5 text-[#1e375a] flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-[#1e375a] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-bold text-[#1e375a] text-[16px] mb-2.5 group-hover:text-white transition-colors duration-300">{feature.title}</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors duration-300">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Qualifications & Expertise */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-2xl lg:text-[28px] font-serif text-[#1e375a] uppercase tracking-wide">QUALIFICATIONS & EXPERTISE</h2>
            <DecorativeDivider />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left: Stacked Qualifications */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:w-1/3 flex flex-col gap-4">
              
              <motion.div variants={fadeUp} className="bg-white border border-gray-100 rounded-[20px] p-6 flex gap-6 items-center shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#1e375a] flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap size={32} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1e375a] text-[18px] mb-1">MBBS</h4>
                  <p className="text-[12px] text-gray-500">Completed in China</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border border-gray-100 rounded-[20px] p-6 flex gap-6 items-center shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#4a728a] flex items-center justify-center shrink-0 shadow-md">
                  <Stethoscope className="w-8 h-8 text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#4a728a] text-[18px] leading-tight mb-2">MD – Anesthesiology &<br/>Critical Care Medicine</h4>
                  <p className="text-[12px] text-gray-500 leading-snug">Datta Meghe Institute of Medical<br/>Sciences, Wardha, Maharashtra</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border border-[#9C4146]/20 rounded-[20px] p-6 flex gap-6 items-center shadow-sm bg-gradient-to-r from-white to-[#9C4146]/5">
                <div className="w-16 h-16 rounded-2xl bg-[#9C4146]/10 flex items-center justify-center shrink-0 shadow-sm border border-[#9C4146]/20">
                  <Award size={32} className="text-[#9C4146]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1e375a] text-[18px] leading-tight mb-2">FIPM – Fellowship in<br/>Interventional Pain Medicine</h4>
                  <p className="text-[12px] text-gray-500 leading-snug">Daradia Pain Clinics, West Bengal,<br/>and Panacea Spine & Pain Hospital,<br/>Hyderabad</p>
                </div>
              </motion.div>

            </motion.div>

            {/* Right: Areas of Expertise with Brain illustration */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-2/3 bg-[#fbf9f8] rounded-[32px] p-10 flex flex-col md:flex-row gap-8 items-center border border-gray-100 shadow-sm">
              <div className="md:w-2/3">
                <h3 className="font-serif text-[18px] font-bold text-[#1e375a] uppercase mb-6">AREAS OF EXPERTISE</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  {[
                    'Interventional Pain Management', 'Cancer & Palliative Pain',
                    'Chronic Back & Neck Pain', 'Sports-Related Pain and Injuries',
                    'Knee Osteoarthritis & Chronic Knee Pain', 'Headache & Neuralgias',
                    'Sciatica & Radicular Pain', 'Failed Back Surgery Syndrome',
                    'Frozen Shoulder', 'Critical Care Medicine',
                    'Facet Joint Pain', 'Anesthesia Services',
                    'Neuropathic Pain'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#9C4146] shrink-0 mt-[2px]" size={16} strokeWidth={2.5} />
                      <span className="text-[12.5px] text-gray-700 font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 opacity-30 mix-blend-multiply flex items-center justify-center">
                 {/* Brain Illustration */}
                 <Brain className="w-32 h-32 text-[#9C4146]" strokeWidth={1.2} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Interventional Pain Procedures Banner */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row rounded-[40px] overflow-hidden shadow-2xl relative bg-[#3c5a75]">
            
            {/* Left Dark Blue Panel */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:w-1/2 bg-[#3c5a75] p-12 lg:p-16 relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}>
              <h2 className="text-3xl lg:text-[34px] font-serif text-white mb-2">INTERVENTIONAL PAIN PROCEDURES</h2>
              <div className="flex items-center justify-start gap-2 my-6">
                <div className="h-[1px] w-12 bg-white opacity-50"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-white"></div>
                <div className="h-[1px] w-12 bg-white opacity-50"></div>
              </div>
              
              <p className="text-white/90 text-[14px] leading-relaxed mb-8 max-w-md font-medium">
                Dr. Rajesh Kumar Vasam has expertise in minimally invasive and image-guided pain interventions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  'Epidural Steroid Injections', 'Nerve Blocks',
                  'Facet Joint Blocks & Radiofrequency Ablation', 'PRP and Regenerative Pain Therapies',
                  'Genicular Nerve RFA / COOLIEF RFA for Knee Pain', 'Selected Ozone-Based Interventions',
                  'Multimodal and multidisciplinary pain management'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="text-[#e2b79a]" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-white/90 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:w-1/2 md:absolute md:top-0 md:right-0 md:h-full z-0 h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1000&auto=format&fit=crop&q=80" 
                alt="Procedure" 
                className="w-full h-full object-cover"
              />
              {/* Slanted overlay to blend the edge */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#3c5a75] to-transparent hidden md:block"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Leadership & Healthcare Organizations */}
      <section className="py-28 bg-[#faf9f8] border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#9C4146]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C19A6B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <span className="text-[#9C4146] text-xs font-black uppercase tracking-widest block mb-3">Healthcare Management</span>
            <h2 className="text-3xl lg:text-[40px] font-serif text-[#1e375a] font-bold">Leadership & Healthcare Organizations</h2>
            <DecorativeDivider />
            <p className="text-gray-500 text-[15px] mt-4 max-w-2xl mx-auto leading-relaxed">Providing direction, anesthesia excellence, diagnostics, and wellness rehabilitation across Hyderabad.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              variants={fadeUp} 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(30,55,90,0.08)] transition-all duration-500 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Colored top-accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#1e375a]" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e375a]/5 text-[#1e375a] flex items-center justify-center font-bold text-lg">01</div>
                  <Building2 size={32} className="text-[#1e375a]/30 group-hover:text-[#1e375a] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <p className="text-[10px] font-black text-[#9C4146] uppercase tracking-widest mb-1.5">Founder & COO</p>
                <h3 className="text-[20px] font-serif font-bold text-[#1e375a] leading-tight mb-6">PrimeLite Health Care Pvt. Ltd.</h3>
                
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                  Providing professional Anesthesia and Critical Care Medicine services to leading multi-speciality hospitals.
                </p>

                <ul className="space-y-3 text-[12.5px] text-gray-500 border-t border-gray-100 pt-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e375a]" /> Professional Medical Staffing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e375a]" /> Perioperative Anaesthesia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e375a]" /> Critical Care Setup & Support
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeUp} 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(30,55,90,0.08)] transition-all duration-500 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Colored top-accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#C19A6B]" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#C19A6B]/10 text-[#C19A6B] flex items-center justify-center font-bold text-lg">02</div>
                  <Building2 size={32} className="text-[#C19A6B]/50 group-hover:text-[#C19A6B] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <p className="text-[10px] font-black text-[#9C4146] uppercase tracking-widest mb-1.5">Founder & Managing Director</p>
                <h3 className="text-[20px] font-serif font-bold text-[#1e375a] leading-tight mb-6">Radiance Speciality Clinics</h3>
                
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                  A high-end multi-speciality centre located in Bachupally, Hyderabad, focusing on evidence-based outpatient therapies.
                </p>

                <ul className="space-y-3 text-[12.5px] text-gray-500 border-t border-gray-100 pt-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]" /> Interventional Pain Medicine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]" /> Comprehensive Women's Health
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]" /> In-House Diagnostic Services
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={fadeUp} 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(30,55,90,0.08)] transition-all duration-500 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Colored top-accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#9C4146]" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#9C4146]/10 text-[#9C4146] flex items-center justify-center font-bold text-lg">03</div>
                  <Building2 size={32} className="text-[#9C4146]/50 group-hover:text-[#9C4146] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <p className="text-[10px] font-black text-[#9C4146] uppercase tracking-widest mb-1.5">Managing Director & CEO</p>
                <h3 className="text-[20px] font-serif font-bold text-[#1e375a] leading-tight mb-6">Ramanuja Rehab Centre</h3>
                
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                  Comprehensive recovery and healthy ageing therapies located in RC Puram, Hyderabad.
                </p>

                <ul className="space-y-3 text-[12.5px] text-gray-500 border-t border-gray-100 pt-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C4146]" /> Post-Surgical & Orthopedic Rehab
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C4146]" /> Neurological Rehabilitation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C4146]" /> Geriatric & Wellness Care
                  </li>
                </ul>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. Professional Philosophy */}
      <section className="py-32 bg-[#FAF9F5] relative overflow-hidden">
        {/* Subtle high-end luxury background accents */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#C19A6B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#9C4146]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Beautiful Doctor Portrait with Luxury Arched Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-[42%] w-full relative flex justify-center"
            >
              {/* Decorative offset frames */}
              <div className="absolute inset-0 rounded-t-[180px] rounded-b-[40px] border border-[#C19A6B]/40 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 rounded-t-[180px] rounded-b-[40px] border border-[#1e375a]/10 -translate-x-2 -translate-y-2" />
              
              <div className="relative z-10 w-full max-w-[420px] rounded-t-[180px] rounded-b-[40px] overflow-hidden shadow-[0_30px_60px_rgba(30,55,90,0.12)] bg-white p-3 border border-gray-100">
                <img 
                  src={drRajeshImg} 
                  alt="Dr. Vasam Rajesh Kumar" 
                  className="w-full h-auto object-cover rounded-t-[170px] rounded-b-[32px] bg-[#FAF9F5]" 
                />
              </div>

              {/* Gold clinical core value badge */}
              <div className="absolute bottom-6 -left-6 z-20 bg-[#1e375a] text-white rounded-2xl p-5 shadow-2xl border border-white/10 max-w-[200px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C19A6B] mb-1">Core Focus</p>
                <p className="text-white font-serif text-[15px] font-bold leading-snug">Patient-Centered Outcomes</p>
              </div>
            </motion.div>

            {/* Right: Premium Editorial Text Block */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:w-[58%] w-full text-left"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-[#9C4146]" />
                <span className="text-[#9C4146] text-xs font-black uppercase tracking-widest">Philosophy</span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-[45px] font-bold text-[#1e375a] leading-[1.15] mb-8">
                Our Compassionate <br />
                <span className="italic font-light text-[#9C4146]">Healing Philosophy</span>
              </h3>
              
              <p className="text-[15.5px] text-gray-600 leading-relaxed font-light mb-10 max-w-xl">
                Dr. Vasam Rajesh Kumar believes in evidence-based, patient-centred and minimally invasive approaches wherever appropriate. By combining accurate diagnosis, advanced interventional procedures, critical care expertise, and customized rehabilitation plans, we don't just treat symptoms — we restore your lifestyle.
              </p>

              {/* Styled quote frame */}
              <div className="relative bg-[#1e375a] text-white rounded-3xl p-8 md:p-10 shadow-xl border-l-[6px] border-[#9C4146] overflow-hidden">
                {/* Decorative quote icon */}
                <div className="absolute right-6 bottom-4 text-[130px] text-white/5 font-serif leading-none select-none pointer-events-none">“</div>
                
                <p className="font-serif text-lg md:text-[21px] text-white/95 italic leading-relaxed relative z-10 font-light">
                  "The goal is not just to temporarily relieve pain — it is to help patients safely return to a better, more active and functional life."
                </p>
                
                <div className="flex items-center gap-3 mt-6 relative z-10">
                  <div className="h-[1px] w-6 bg-[#C19A6B]" />
                  <p className="text-xs uppercase tracking-widest font-black text-[#C19A6B]">Dr. Vasam Rajesh Kumar</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

    </main>
  );
}
