import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, CheckCircle2, ChevronRight, Phone, ShieldCheck, 
  HelpCircle, Sparkles, Stethoscope, AlertCircle, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const protocols = [
  {
    id: 'knee-oa',
    title: 'Knee Osteoarthritis',
    tagline: 'Different Treatment Options on Grading Basis',
    heroBadge: 'Grading-Based Non-Surgical Protocol',
    image: '/knee_osteoarthritis.jpg',
    summary: 'Early care, accurate X-ray grading, and targeted non-surgical interventions help restore joint mobility without unnecessary knee replacement.',
    badgeColor: 'bg-blue-600',
    grades: [
      {
        grade: 'GRADE 1',
        title: 'Early OA (Mild Changes)',
        color: 'from-emerald-500 to-teal-600',
        borderColor: 'border-emerald-200',
        textColor: 'text-emerald-700',
        bgColor: 'bg-emerald-50',
        items: [
          'Lifestyle & weight optimization',
          'Physiotherapy & muscle strengthening',
          'Activity modification & ergonomic support',
          'Targeted symptom relief medicines'
        ]
      },
      {
        grade: 'GRADE 2',
        title: 'Mild to Moderate OA',
        color: 'from-amber-500 to-orange-600',
        borderColor: 'border-amber-200',
        textColor: 'text-amber-700',
        bgColor: 'bg-amber-50',
        items: [
          'Custom exercise & gait therapy',
          'Intra-articular PRP therapy (Regenerative)',
          'Viscosupplementation lubricating injections',
          'Functional knee bracing & biomechanical support'
        ]
      },
      {
        grade: 'GRADE 3',
        title: 'Moderate to Severe OA',
        color: 'from-[#9C4146] to-[#78282d]',
        borderColor: 'border-rose-200',
        textColor: 'text-[#9C4146]',
        bgColor: 'bg-rose-50',
        items: [
          'Advanced image-guided pain interventions',
          'Targeted Regenerative PRP / biologics',
          'Genicular Nerve RFA / COOLIEF Cooled RFA',
          'Multi-disciplinary pain management'
        ]
      },
      {
        grade: 'GRADE 4',
        title: 'Severe Joint Space Narrowing',
        color: 'from-purple-600 to-indigo-800',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-700',
        bgColor: 'bg-purple-50',
        items: [
          'COOLIEF RFA for non-surgical candidates',
          'Comprehensive nerve-block pain relief',
          'Pre & post-operative pain optimization',
          'Surgical evaluation when strictly indicated'
        ]
      }
    ],
    didYouKnow: 'Not every knee pain requires surgery. Treatment must be individualized based on X-ray grade, pain severity, age, and activity level.'
  },
  {
    id: 'bakers-cyst',
    title: "Baker's Cyst (Popliteal Cyst)",
    tagline: "Don't Ignore Knee Swelling & Posterior Fullness",
    heroBadge: 'Ultrasound-Guided Aspiration Protocol',
    image: '/bakers_cyst.jpg',
    summary: "A Baker's cyst is a cystic fluid collection in the popliteal fossa communicating with the knee joint. It is a symptom of underlying joint wear that can be treated effectively without surgery.",
    badgeColor: 'bg-[#9C4146]',
    symptoms: [
      'Visible swelling or soft lump behind the knee',
      'Tightness, stiffness, or discomfort when walking',
      'Sharp pain while fully bending or straightening the leg',
      'Sensation of fullness in the popliteal fossa'
    ],
    treatments: [
      { name: 'Image-Guided Aspiration', desc: 'Precise fluid drainage under real-time dynamic ultrasound visualization.' },
      { name: 'Targeted Anti-Inflammatory Injection', desc: 'Steroid or biologics delivered directly into the communicating bursa.' },
      { name: 'Treating Root Knee Pathology', desc: 'Addressing cartilage wear, meniscus tears, or arthritis causing the fluid.' },
      { name: 'Physiotherapy & Rehabilitation', desc: 'Targeted hamstrings and calf stretches to prevent recurrence.' }
    ],
    didYouKnow: "Baker's cyst is not an isolated disease — it is a symptom of an underlying knee problem. Treating the root cause ensures permanent resolution."
  },
  {
    id: 'occipital-neuralgia',
    title: 'Occipital Neuralgia',
    tagline: 'The Migraine Impostor — Know The Difference',
    heroBadge: 'Interventional Nerve Block Care',
    image: '/occipital_neuralgia.jpg',
    summary: 'Severe shooting head and neck pain is frequently misdiagnosed as chronic migraine. Targeted diagnostic blocks of the Greater & Lesser Occipital Nerves provide prompt, lasting relief.',
    badgeColor: 'bg-indigo-600',
    symptoms: [
      'Shooting, throbbing, or electric shock-like neck & head pain',
      'Pain spreading from skull base over the scalp to behind the eyes',
      'Positive Tinel’s Sign on gentle nerve percussion at skull base',
      'Severe scalp tenderness when brushing hair or resting on a pillow'
    ],
    treatments: [
      { name: 'Diagnostic Nerve Blocks', desc: 'Immediate numbing confirmation identifies the exact occipital nerve branch.' },
      { name: 'Ultrasound-Guided GON/LON Block', desc: 'Precision delivery of local anesthetic and anti-inflammatory medicine.' },
      { name: 'Pulsed Radiofrequency (PRF)', desc: 'Advanced neuromodulation resetting hypersensitive nerve pathways.' },
      { name: 'Postural & Myofascial Therapy', desc: 'Cervical spine alignment, trigger point release, and ergonomic guidance.' }
    ],
    didYouKnow: 'A diagnostic nerve block can instantly confirm whether your chronic headache is Occipital Neuralgia, avoiding unnecessary long-term painkillers.'
  },
  {
    id: 'plantar-fasciitis',
    title: 'Plantar Fasciitis',
    tagline: 'Heel Pain That Limits Your Daily Morning Steps',
    heroBadge: 'Regenerative Foot Care Protocol',
    image: '/plantar_fasciitis.jpg',
    summary: 'Stabbing pain under the heel caused by micro-tears and chronic inflammation of the plantar fascia ligament. Regenerative therapies accelerate tissue healing without surgical cuts.',
    badgeColor: 'bg-emerald-600',
    symptoms: [
      'Sharp stabbing heel pain during the very first morning steps',
      'Heel pain that intensifies after prolonged sitting or standing',
      'Localized tenderness on the bottom of the calcaneus (heel bone)',
      'Tightness and stiffness along the arch of the foot'
    ],
    treatments: [
      { name: 'Ultrasound-Guided PRP Therapy', desc: 'Concentrated autologous growth factors stimulate natural tissue repair.' },
      { name: 'Prolotherapy', desc: 'Hypertonic dextrose injections strengthening ligament attachment.' },
      { name: 'Pulsed RF of Medial Calcaneal Nerve', desc: 'Blocks chronic pain impulses safely without motor impairment.' },
      { name: 'Orthotic & Stretching Protocol', desc: 'Custom foot arch supports, night splints, and calf elongation.' }
    ],
    didYouKnow: '95% of plantar fasciitis cases resolve completely with structured non-surgical regenerative protocols and targeted biomechanical support.'
  }
];

export default function ClinicalSpotlights() {
  const [activeTab, setActiveTab] = useState('knee-oa');
  const current = protocols.find((p) => p.id === activeTab);

  return (
    <section className="py-24 bg-[#f8f9fb] relative overflow-hidden border-y border-gray-200/70">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e375a]/10 text-[#1e375a] text-xs font-bold uppercase tracking-widest mb-4">
            <Stethoscope size={14} className="text-[#9C4146]" />
            Evidence-Based Patient Protocols
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-[#1e375a] font-bold tracking-tight mb-4">
            Clinical Protocols & <span className="text-[#9C4146] italic font-light">Care Guidelines</span>
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Detailed clinical workflows, diagnostic grading, and image-guided non-surgical pathways formulated by Dr. Vasam Rajesh Kumar.
          </p>
        </div>

        {/* Interactive Condition Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {protocols.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-sm ${
                  isActive
                    ? 'bg-[#1e375a] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#C19A6B]' : 'bg-gray-300'}`}></span>
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Protocol Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 lg:p-10 border border-gray-200 shadow-xl"
          >
            {/* Top Banner Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider mb-2 ${current.badgeColor}`}>
                  {current.heroBadge}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#1e375a]">
                  {current.title}
                </h3>
                <p className="text-[#9C4146] font-semibold text-sm mt-1">
                  {current.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="bg-[#9C4146] hover:bg-[#832c31] text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2 shadow-md"
                >
                  Book Assessment <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+917995574432"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-full transition-colors inline-flex items-center gap-2 border border-gray-200"
                >
                  <Phone size={13} className="text-[#1e375a]" /> 79955 74432
                </a>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Image & Visual Infographic (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-900 aspect-[4/3] relative group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-[#C19A6B] font-bold">Clinical Anatomy & Intervention</p>
                    <p className="text-sm font-semibold">{current.title}</p>
                  </div>
                </div>

                {/* Did You Know Box */}
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
                    <HelpCircle size={16} className="text-amber-600" />
                    Did You Know?
                  </div>
                  <p className="text-amber-950 text-xs leading-relaxed">
                    {current.didYouKnow}
                  </p>
                </div>
              </div>

              {/* Right Column: Protocols / Grades (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {current.summary}
                </p>

                {/* KNEE OA: 4 Grades Grid */}
                {current.grades && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-2">
                      <Activity size={14} className="text-[#1e375a]" /> Grade-Wise Treatment Pathways
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {current.grades.map((g, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-2xl border ${g.borderColor} ${g.bgColor} transition-all hover:shadow-md`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white shadow-sm text-gray-800 border border-gray-200/60">
                              {g.grade}
                            </span>
                            <span className={`text-[12px] font-bold ${g.textColor}`}>{g.title}</span>
                          </div>
                          <ul className="space-y-1.5 mt-2.5">
                            {g.items.map((item, i) => (
                              <li key={i} className="text-gray-700 text-[11.5px] flex items-start gap-1.5 leading-snug">
                                <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${g.textColor}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Conditions: Symptoms & Interventions */}
                {current.symptoms && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Symptoms */}
                    <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C4146] mb-3 flex items-center gap-2">
                        <AlertCircle size={15} /> Common Symptoms
                      </h4>
                      <ul className="space-y-2">
                        {current.symptoms.map((s, idx) => (
                          <li key={idx} className="text-gray-700 text-[12px] flex items-start gap-2 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9C4146] shrink-0 mt-1.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Treatments */}
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1e375a] mb-3 flex items-center gap-2">
                        <ShieldCheck size={15} className="text-blue-600" /> Non-Surgical Solutions
                      </h4>
                      <ul className="space-y-2.5">
                        {current.treatments.map((t, idx) => (
                          <li key={idx} className="text-[12px] leading-snug">
                            <p className="font-bold text-[#1e375a] text-[12px]">{t.name}</p>
                            <p className="text-gray-600 text-[11px]">{t.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Bottom Highlight Strip */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
                    <Sparkles size={14} className="text-[#C19A6B]" />
                    Real-time Ultrasound & Fluoroscopic Image Guidance
                  </span>
                  <Link to="/contact" className="text-[#9C4146] font-bold hover:underline inline-flex items-center gap-1">
                    Consult for personalized protocol <ChevronRight size={13} />
                  </Link>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
