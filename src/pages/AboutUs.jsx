import { CheckCircle2, ChevronRight, GraduationCap, Building2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatsBar from '../components/StatsBar';

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
                  { icon: 'ph:user-focus-light', title: 'Evidence-Based\nCare', color: '#1e375a' },
                  { icon: 'ph:hand-heart-light', title: 'Patient-Centred\nApproach', color: '#9C4146' },
                  { icon: 'ph:shield-check-light', title: 'Minimally Invasive\nSolutions', color: '#d4af37' },
                  { icon: 'ph:person-arms-spread-light', title: 'Better Function &\nQuality of Life', color: '#688e73' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full shadow-md flex items-center justify-center mb-4 transition-transform hover:-translate-y-1" style={{ backgroundColor: item.color }}>
                       <img src={`https://api.iconify.design/${item.icon}.svg?color=white`} className="w-8 h-8" alt="icon"/>
                    </div>
                    <p className="text-[11.5px] font-bold text-[#1e375a] leading-[1.3] px-1 whitespace-pre-line">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image (Doctor at Desk) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} 
              className="lg:w-[45%] w-full h-[500px] relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80" 
                alt="Dr. Rajesh Kumar Vasam" 
                className="w-full h-full object-cover object-top rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Mission Statement & Philosophy */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#9C4146]/10 text-[#9C4146] text-xs font-bold uppercase tracking-widest mb-6 border border-[#9C4146]/20">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e375a] leading-tight mb-8">
              "To provide comprehensive pain relief and improve the quality of life of our patients through advanced interventional techniques, compassionate palliative care, and innovative regenerative medicine therapies."
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-[#C19A6B]">
              Relieving Pain. Restoring Function. Renewing Hope.
            </p>
          </motion.div>
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
              { title: "Expert Care", desc: "Provided by a fellowship-trained Interventional Pain Specialist.", icon: "ph:user-focus-light" },
              { title: "Personalized Plans", desc: "Treatment plans carefully tailored to each individual patient.", icon: "ph:clipboard-text-light" },
              { title: "Advanced Procedures", desc: "Image-guided, minimally invasive procedures for precision.", icon: "ph:crosshair-light" },
              { title: "Avoid Major Surgery", desc: "Reduced need for major surgery whenever possible.", icon: "ph:shield-check-light" },
              { title: "Faster Recovery", desc: "Minimal hospital stay allowing you to get back to life quicker.", icon: "ph:clock-clockwise-light" },
              { title: "Multidisciplinary", desc: "Combining pain medicine, palliative care, and regenerative therapies.", icon: "ph:users-three-light" },
              { title: "Compassionate Care", desc: "Patient-centered approach focusing on your overall well-being.", icon: "ph:heart-light" },
              { title: "Long-Term Relief", desc: "Holistic integration of rehab and therapies for lasting comfort.", icon: "ph:infinity-light" }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1e375a]/5 text-[#1e375a] flex items-center justify-center mb-4">
                  <img src={`https://api.iconify.design/${feature.icon}.svg?color=%231e375a`} className="w-7 h-7" alt={feature.title} />
                </div>
                <h4 className="font-bold text-[#1e375a] text-[15px] mb-2">{feature.title}</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed">{feature.desc}</p>
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
                  <img src="https://api.iconify.design/ph:stethoscope-thin.svg?color=white" className="w-8 h-8" alt="icon"/>
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
              <div className="md:w-1/3 opacity-30 mix-blend-multiply">
                 {/* Placeholder for Brain Illustration */}
                 <img src="https://api.iconify.design/ph:brain-thin.svg?color=%239C4146" className="w-full h-auto" alt="Brain Illustration" />
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
      <section className="py-24 bg-[#f8f9fa] border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-2xl lg:text-[28px] font-serif text-[#1e375a] uppercase tracking-wide">LEADERSHIP & HEALTHCARE ORGANIZATIONS</h2>
            <DecorativeDivider />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-white to-[#1e375a]/[0.03] rounded-[16px] border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6 gap-2">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1e375a] text-white flex items-center justify-center font-serif text-[18px] shrink-0">01</div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Founder & COO</p>
                    <h3 className="text-[16px] font-serif font-bold text-[#1e375a] leading-snug">PrimeLite Health Care<br/>Private Limited</h3>
                  </div>
                </div>
                <Building2 size={36} className="text-[#1e375a] opacity-80 shrink-0" strokeWidth={1} />
              </div>
              <p className="text-[12.5px] text-gray-600 leading-relaxed border-t border-gray-100 pt-5">
                Providing Anesthesia and Critical Care Medicine services to hospitals, with a focus on professional staffing, perioperative care, and critical care support.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-white to-[#4a728a]/[0.04] rounded-[16px] border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6 gap-2">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4a728a] text-white flex items-center justify-center font-serif text-[18px] shrink-0">02</div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Founder & Managing Director</p>
                    <h3 className="text-[16px] font-serif font-bold text-[#4a728a] leading-snug mb-0.5">Radiance Speciality Clinics</h3>
                    <p className="text-[10px] text-gray-400">Bachupally, Hyderabad</p>
                  </div>
                </div>
                <Building2 size={36} className="text-[#4a728a] opacity-80 shrink-0" strokeWidth={1} />
              </div>
              <p className="text-[12.5px] text-gray-600 leading-relaxed border-t border-gray-100 pt-5">
                A multispeciality healthcare centre with services including Interventional Pain Management, Women's Health & Fertility, Diagnostics and other specialty healthcare services.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-white to-[#9C4146]/[0.03] rounded-[16px] border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6 gap-2">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9C4146] text-white flex items-center justify-center font-serif text-[18px] shrink-0">03</div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Managing Director & CEO</p>
                    <h3 className="text-[16px] font-serif font-bold text-[#9C4146] leading-snug mb-0.5">Ramanuja Rehabilitation<br/>and Wellness Centre</h3>
                    <p className="text-[10px] text-gray-400">RC Puram, Hyderabad</p>
                  </div>
                </div>
                <Building2 size={36} className="text-[#9C4146] opacity-80 shrink-0" strokeWidth={1} />
              </div>
              <p className="text-[12.5px] text-gray-600 leading-relaxed border-t border-gray-100 pt-5">
                A comprehensive rehabilitation and wellness facility focused on post-surgical rehabilitation, neurological rehabilitation, physiotherapy, critical care support, pulmonary rehabilitation, orthopedic rehabilitation, and healthy ageing.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. Professional Philosophy */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#fbf7f4] rounded-[40px] flex flex-col md:flex-row relative shadow-lg">
            
            {/* Left Doctor Portrait */}
            <div className="md:w-[35%] relative flex items-end">
               <img 
                 src="https://images.unsplash.com/photo-1537368910025-702800faa86b?w=500&auto=format&fit=crop&q=80" 
                 alt="Dr. Rajesh" 
                 className="relative w-[90%] md:w-[120%] max-w-[400px] h-auto object-cover rounded-t-[32px] md:rounded-none z-10 bottom-0 md:-ml-8 -mt-16 md:-mt-24 drop-shadow-2xl" 
               />
            </div>

            {/* Middle Content */}
            <div className="md:w-[40%] p-10 lg:p-16 relative z-10 flex flex-col justify-center">
               <h3 className="font-serif text-[18px] font-bold text-[#1e375a] uppercase mb-1">PROFESSIONAL PHILOSOPHY</h3>
               <div className="flex justify-start mb-6 -ml-12"><DecorativeDivider /></div>
               <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                 Dr. Rajesh Kumar Vasam believes in evidence-based, patient-centred and minimally invasive approaches wherever appropriate, combining accurate diagnosis, advanced interventional procedures, critical care expertise and rehabilitation to improve patients' pain, function and quality of life.
               </p>
            </div>

            {/* Right Quote */}
            <div className="md:w-[25%] p-10 flex flex-col justify-center relative">
               <div className="absolute top-4 left-4 text-[100px] text-[#9C4146] font-serif leading-none opacity-20 rotate-180">"</div>
               <p className="font-serif text-[18px] lg:text-[22px] text-[#1e375a] font-bold leading-snug relative z-10 mt-8 text-center">
                 The goal is not just to relieve pain — it is to help patients return to a better, more active life.
               </p>
               <div className="absolute bottom-[-20px] right-4 text-[100px] text-[#9C4146] font-serif leading-none opacity-20">"</div>
            </div>

          </motion.div>
        </div>
      </section>

      <StatsBar />

    </main>
  );
}
