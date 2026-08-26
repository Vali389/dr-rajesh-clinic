import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  CalendarDays, ChevronRight, ChevronDown, Clock, Ban, Sparkles,
  CheckCircle2, ArrowRight, Quote, HeartPulse, Stethoscope, FileSearch,
  Phone, ShieldCheck, Star, Award
} from 'lucide-react';
import { services, getServiceById } from '../data/services';
import StatsBar from '../components/StatsBar';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } }
};

const SectionHeader = ({ eyebrow, title, sub, align = 'center' }) => (
  <motion.div
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
    className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
  >
    <motion.p variants={fadeUp} className={`uppercase tracking-[0.2em] text-[11px] font-bold mb-3 ${align === 'center' ? 'text-center' : ''}`}>
      <span className="text-[#C19A6B]">{eyebrow}</span>
    </motion.p>
    <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-serif text-[#1e375a] leading-tight">{title}</motion.h2>
    {sub && <motion.p variants={fadeUp} className="text-gray-500 text-[14.5px] leading-relaxed max-w-2xl mt-4 mx-auto">{sub}</motion.p>}
  </motion.div>
);

export default function ServiceDetail() {
  const { id } = useParams();
  const service = getServiceById(id);
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (!service) {
    return (
      <main className="bg-[#fcfaf9] min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-serif text-[#1e375a] mb-4">Service Not Found</motion.h1>
        <p className="text-gray-500 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="bg-[#1e375a] text-white px-8 py-4 rounded-md font-bold text-sm inline-flex items-center gap-2">
          View All Services <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);
  const quick = [
    { icon: <Clock size={18} />, label: 'Treatment Time', value: service.quick.time },
    { icon: <Ban size={18} />, label: 'Downtime', value: service.quick.downtime },
    { icon: <Sparkles size={18} />, label: 'Results', value: service.quick.results },
    { icon: <CalendarDays size={18} />, label: 'Sessions', value: service.quick.sessions }
  ];
  const processIcons = [
    <FileSearch key="p1" size={24} strokeWidth={1.6} />,
    <Stethoscope key="p2" size={24} strokeWidth={1.6} />,
    <HeartPulse key="p3" size={24} strokeWidth={1.6} />,
    <CheckCircle2 key="p4" size={24} strokeWidth={1.6} />
  ];
  const words = service.title.split(' ');

  return (
    <main className="bg-white">
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-[#9C4146] via-[#C19A6B] to-[#1e375a]"
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf7f5] to-[#f4ede6]">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full bg-[#1e375a]/[0.06] blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C19A6B]/[0.15] blur-3xl pointer-events-none"
        ></motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-8 pb-20">
          {/* Breadcrumb */}
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[11px] text-gray-400 font-medium mb-12">
            <Link to="/" className="hover:text-[#1e375a] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-[#1e375a] transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-[#1e375a]">{service.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9C4146]/[0.08] text-[#9C4146] text-[11px] font-bold uppercase tracking-[0.14em] mb-7 border border-[#9C4146]/[0.15]"
              >
                <HeartPulse size={14} /> {service.category}
              </motion.span>

              <h1 className="text-4xl lg:text-[52px] font-serif text-[#1e375a] leading-[1.1] mb-6">
                {words.map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                    className="inline-block mr-[0.26em]"
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-[16.5px] font-medium text-[#9C4146] mb-5 flex items-center gap-3"
              >
                <span className="w-9 h-[2px] bg-[#9C4146] inline-block rounded-full"></span>
                {service.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="text-gray-600 text-[15px] leading-[1.85] mb-4 max-w-xl"
              >
                {service.overview}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}
                className="text-gray-500 text-[14px] leading-[1.85] mb-9 max-w-xl"
              >
                {service.longDesc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.66 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
                  className="bg-[#1e375a] hover:bg-[#162e4e] text-white py-4 px-8 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-[#1e375a]/20">
                  <CalendarDays size={17} /> Book Appointment
                </motion.button>
                <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="tel:+917995574432"
                  className="border border-[#1e375a]/25 text-[#1e375a] hover:bg-[#1e375a] hover:text-white py-4 px-8 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2.5">
                  <Phone size={16} /> +91 79955 74432
                </motion.a>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-[#C19A6B]/[0.18] via-transparent to-[#1e375a]/[0.08] rounded-[40px] -z-10"></div>
              <div className="absolute inset-0 border border-[#C19A6B]/[0.35] rounded-[32px] translate-x-4 translate-y-4 -z-10"></div>

              <div className="rounded-[30px] overflow-hidden shadow-2xl shadow-[#1e375a]/15 border-[6px] border-white relative">
                <motion.img
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
                  src={service.img} alt={service.title}
                  className="w-full h-[420px] lg:h-[470px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112a46]/[0.25] to-transparent"></div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-7 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl shadow-[#1e375a]/10 border border-gray-100 px-6 py-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9C4146] to-[#c05a4f] flex items-center justify-center text-white">
                  <Award size={22} />
                </div>
                <div>
                  <p className="font-serif font-bold text-[#1e375a] text-[17px] leading-none mb-1">15+ Years</p>
                  <p className="text-[11px] text-gray-500">of clinical experience</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ QUICK FACTS ============ */}
      <section className="border-b border-[#f0e8e1] bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl py-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-[#f0e8e1]">
            {quick.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-4 lg:justify-start lg:px-6 first:lg:pl-0">
                <span className="w-12 h-12 rounded-xl bg-[#faf4f0] flex items-center justify-center text-[#9C4146] shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.14em]">{item.label}</p>
                  <p className="font-serif font-bold text-[#1e375a] text-[15px]">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Content */}
            <div className="flex-1 min-w-0 space-y-24">

              {/* Conditions */}
              <div>
                <SectionHeader
                  eyebrow="What we treat"
                  title="Conditions We Address"
                  sub="Every patient is different. We evaluate your presentation and tailor each intervention to your anatomy, lifestyle and goals."
                  align="left"
                />
                <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                  className="grid sm:grid-cols-2 gap-3.5">
                  {service.conditions.map((c, idx) => (
                    <motion.li key={idx} variants={fadeUp}
                      className="flex items-start gap-3 bg-[#faf8f6] rounded-xl px-5 py-4 border border-[#f0e9e3] hover:border-[#C19A6B]/50 hover:bg-white hover:shadow-md transition-all group">
                      <span className="w-6 h-6 rounded-full bg-[#9C4146]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#9C4146] transition-colors">
                        <CheckCircle2 className="text-[#9C4146] group-hover:text-white" size={13} strokeWidth={3} />
                      </span>
                      <span className="text-[14px] text-gray-700 font-medium leading-snug">{c}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Process */}
              <div>
                <SectionHeader
                  eyebrow="Your journey"
                  title="How the Treatment Works"
                  sub="A clear, guided pathway — from first consultation to lasting relief."
                />
                <div className="relative">
                  <motion.div
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
                    className="hidden lg:block absolute top-9 left-[13%] right-[13%] h-[2px] origin-left bg-gradient-to-r from-[#9C4146] via-[#C19A6B] to-[#1e375a]/40"
                  ></motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    {service.process.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: idx * 0.14 }}
                        className="relative text-center group"
                      >
                        <div className="relative mx-auto mb-6 w-[74px] h-[74px]">
                          <div className="absolute inset-0 rounded-2xl bg-[#f5ede8] group-hover:bg-[#1e375a] transition-colors duration-300 -rotate-6"></div>
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1e375a] to-[#0a1829] flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1.5">
                            {processIcons[idx]}
                          </div>
                          <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-[#C19A6B] text-white text-[13px] font-bold flex items-center justify-center border-[3px] border-white shadow">
                            {idx + 1}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-[#1e375a] text-[17px] mb-2.5">{step.title}</h4>
                        <p className="text-gray-500 text-[13px] leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <SectionHeader
                  eyebrow="Why choose it"
                  title={`Why Patients Choose ${service.title}`}
                  sub="Advanced, image-guided interventional care — designed around safety, comfort and results."
                />
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                  className="grid sm:grid-cols-2 gap-5">
                  {service.benefits.map((b, idx) => (
                    <motion.div key={idx} variants={fadeUp}
                      className="flex items-start gap-4 bg-white rounded-2xl border border-[#f0e9e3] p-6 shadow-sm hover:shadow-[0_14px_30px_rgba(17,42,70,0.1)] hover:-translate-y-1 hover:border-[#C19A6B]/40 transition-all duration-300">
                      <span className="w-11 h-11 rounded-xl bg-[#f5ede8] flex items-center justify-center text-[#9C4146] shrink-0">
                        <ShieldCheck size={20} />
                      </span>
                      <span className="text-[14.5px] text-gray-700 font-medium leading-snug pt-1">{b}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="relative bg-[#faf7f5] border border-[#f0e8e1] rounded-3xl px-10 lg:px-14 py-12 text-center overflow-hidden"
              >
                <Quote className="absolute top-6 left-8 text-[#C19A6B]/[0.25] fill-[#C19A6B]/[0.1]" size={52} />
                <p className="font-serif text-[21px] lg:text-[24px] text-[#1e375a] font-bold leading-[1.4] relative z-10">
                  "The goal is not just to relieve pain — it is to help patients return to a better, more active life."
                </p>
                <footer className="mt-7">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#9C4146]">Dr. Vasam Rajesh Kumar</p>
                  <p className="text-[11px] text-gray-400 mt-1">Interventional Pain Specialist</p>
                </footer>
              </motion.blockquote>

              {/* FAQ */}
              <div>
                <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" />
                <div className="space-y-4 max-w-3xl mx-auto">
                  {service.faqs.map((faq, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: idx * 0.07 }}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#C19A6B]/50 shadow-[0_10px_30px_rgba(17,42,70,0.08)]' : 'border-[#f0e9e3] hover:border-gray-300'}`}
                    >
                      <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-[#faf8f6] transition-colors">
                        <span className="font-bold text-gray-800 text-[14.5px]">{faq.q}</span>
                        <motion.span animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }}
                          className="w-8 h-8 rounded-full bg-[#f5ede8] flex items-center justify-center text-[#9C4146] shrink-0">
                          <ChevronDown size={17} />
                        </motion.span>
                      </button>
                      <motion.div initial={false}
                        animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                        transition={{ duration: 0.32 }} className="overflow-hidden">
                        <div className="px-6 pb-5 border-t border-[#f0e9e3] pt-4">
                          <p className="text-[14px] text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-[340px] shrink-0">
              <div className="lg:sticky lg:top-8 space-y-6">
                {/* Booking card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white rounded-[26px] border border-[#f0e9e3] shadow-[0_18px_45px_rgba(17,42,70,0.1)] overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#1e375a] to-[#0a1829] px-7 py-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#C19A6B]/20 flex items-center justify-center text-[#C19A6B]">
                      <CalendarDays size={18} />
                    </span>
                    <div>
                      <p className="text-white font-serif font-bold text-[16px] leading-none">Book a Consultation</p>
                      <p className="text-white/50 text-[11px] mt-1">with Dr. Vasam Rajesh Kumar</p>
                    </div>
                  </div>

                  <div className="p-7 space-y-5">
                    <ul className="space-y-3.5">
                      {quick.map((item) => (
                        <li key={item.label} className="flex items-center gap-3.5">
                          <span className="w-10 h-10 rounded-xl bg-[#faf4f0] flex items-center justify-center text-[#9C4146] shrink-0">{item.icon}</span>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.12em]">{item.label}</p>
                            <p className="text-[13.5px] font-bold text-[#1e375a]">{item.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                      className="w-full bg-[#1e375a] hover:bg-[#162e4e] text-white py-4 rounded-xl font-bold text-[13px] uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2">
                      <CalendarDays size={16} /> Book Appointment
                    </motion.button>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="tel:+917995574432"
                      className="w-full border border-[#1e375a]/20 text-[#1e375a] py-3.5 rounded-xl font-bold text-[13px] transition-colors hover:bg-[#1e375a] hover:text-white flex items-center justify-center gap-2">
                      <Phone size={15} /> +91 79955 74432
                    </motion.a>

                    <div className="border-t border-[#f0e9e3] pt-5 flex items-center justify-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-[#C19A6B] text-[#C19A6B]" />)}
                      <span className="text-[12px] font-bold text-gray-600 ml-1.5">4.9 · 2,500+ patients</span>
                    </div>
                  </div>
                </motion.div>

                {/* Trust card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="bg-[#faf7f5] border border-[#f0e8e1] rounded-[26px] p-7"
                >
                  <h4 className="font-serif font-bold text-[#1e375a] text-[16px] mb-5">Why Patients Trust Us</h4>
                  <ul className="space-y-4">
                    {[
                      { icon: <ShieldCheck size={17} className="text-[#9C4146]" />, text: 'Image-guided precision' },
                      { icon: <Award size={17} className="text-[#9C4146]" />, text: 'Proven success rates' },
                      { icon: <HeartPulse size={17} className="text-[#9C4146]" />, text: 'Personalised care plans' },
                      { icon: <Stethoscope size={17} className="text-[#9C4146]" />, text: 'FIPM certified specialist' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3.5">
                        <span className="w-9 h-9 rounded-full bg-white shadow-sm border border-[#f0e9e3] flex items-center justify-center shrink-0">{item.icon}</span>
                        <span className="text-[13.5px] text-gray-700 font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ RELATED ============ */}
      <section className="py-20 lg:py-24 bg-[#faf7f5] border-t border-[#f0e8e1]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <motion.p variants={fadeUp} className="uppercase tracking-[0.2em] text-[11px] font-bold mb-3 text-[#C19A6B]">Explore more</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl font-serif text-[#1e375a]">Related Treatments</motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link to="/services" className="inline-flex items-center gap-2 text-[#1e375a] font-bold text-[13px] uppercase tracking-wider hover:text-[#9C4146] transition-colors group">
                View All Services <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((s) => (
              <motion.div key={s.id} variants={fadeUp}>
                <Link to={`/services/${s.id}`} className="group block bg-white rounded-[24px] overflow-hidden border border-[#f0e9e3] shadow-sm hover:shadow-[0_20px_45px_rgba(17,42,70,0.12)] transition-all duration-300 hover:-translate-y-2">
                  <div className="h-52 overflow-hidden relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112a46]/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-5">
                      <p className="text-[10px] font-bold text-[#C19A6B] uppercase tracking-widest mb-1">{s.category}</p>
                      <h3 className="font-serif font-bold text-white text-[19px] leading-snug pr-6">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <span className="text-[13.5px] text-gray-600 font-medium line-clamp-1 pr-4">{s.tagline}</span>
                    <span className="w-10 h-10 rounded-full bg-[#f5ede8] flex items-center justify-center text-[#9C4146] shrink-0 group-hover:bg-[#9C4146] group-hover:text-white transition-colors">
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ============ CTA ============ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative rounded-[32px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e375a] via-[#162a45] to-[#9C4146]"></div>
            <motion.div
              animate={{ x: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
              className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-[#C19A6B] rounded-full mix-blend-screen blur-[130px] opacity-25 pointer-events-none"
            ></motion.div>
            <div className="relative z-10 p-10 lg:p-16 text-center">
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-serif text-white mb-4">
                Ready to Begin {service.title}?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/70 text-[15px] max-w-xl mx-auto mb-9">
                Book a consultation with Dr. Vasam Rajesh Kumar today and take the first step towards a pain-free, active life.
              </motion.p>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="bg-[#C19A6B] hover:bg-white text-[#1e375a] py-4 px-10 rounded-full font-bold text-[13px] uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-3 mx-auto">
                <CalendarDays size={17} /> Book Appointment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
