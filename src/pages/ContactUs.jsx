import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, AlertCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Interventional Pain Medicine',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const validateField = (field, value) => {
    let err = '';
    if (field === 'name') {
      if (!value.trim()) err = 'Enter Name is required';
      else if (value.trim().length < 2) err = 'Name must be at least 2 characters';
    } else if (field === 'phone') {
      if (!value.trim()) err = 'Enter Phone Number is required';
      else if (!/^[0-9]{10}$/.test(value.replace(/[\s-]/g, ''))) err = 'Enter a valid 10-digit phone number';
    } else if (field === 'email') {
      if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) err = 'Enter a valid email address';
    } else if (field === 'message') {
      if (!value.trim()) err = 'Enter Your Message is required';
    }
    return err;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setTouched({ name: true, phone: true, email: true, message: true });
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== '')) {
      return;
    }

    setSubmitted(true);
    
    // Construct WhatsApp message URL and open WhatsApp chat room
    const whatsappMsg = `Hello Dr. Rajesh Clinic, My Name is ${formData.name}. Phone: ${formData.phone}. Service: ${formData.service}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918125982855?text=${encodeURIComponent(whatsappMsg)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'Interventional Pain Medicine', message: '' });
      setTouched({});
      setErrors({});
    }, 6000);
  };

  return (
    <div className="bg-[#fcfdfd]">
      
      {/* Modern High-End Hero Banner Header */}
      <section className="bg-gradient-to-r from-[#1e375a] via-[#162e4e] to-[#9C4146] text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative Ambient Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C19A6B]/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9C4146]/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C19A6B] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Get In Touch
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            Contact <span className="text-[#C19A6B] italic font-light">Dr. Rajesh</span> Clinic
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Schedule your consultation with our interventional pain specialists today. We are dedicated to helping you live a pain-free life.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid: Redesigned World-Class Layout */}
      <section className="py-20 bg-gradient-to-b from-[#fcfdfd] via-[#f7f9fb] to-[#ffffff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Premium Dark Navy Clinic Info Panel (5 cols) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="lg:col-span-5 bg-gradient-to-br from-[#1e375a] via-[#162e4e] to-[#0a1829] text-white p-8 lg:p-10 rounded-[36px] shadow-[0_25px_60px_rgba(30,55,90,0.25)] border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Background Ambient Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9C4146]/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C19A6B]/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#C19A6B]/20 text-[#C19A6B] text-[11px] font-bold uppercase tracking-widest mb-4 border border-[#C19A6B]/30">
                  Quick Access
                </span>
                <h2 className="text-3xl font-serif font-bold text-white mb-3">Clinic Contact Details</h2>
                <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-8">
                  Dr. Rajesh Kumar Vasam offers specialized interventional pain management at Chandanagar and Bachupally, Hyderabad. Contact us directly for immediate appointments.
                </p>

                <div className="space-y-5 mb-8">
                  {/* Phone & WhatsApp Card */}
                  <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#C19A6B] text-[#1e375a] flex items-center justify-center shrink-0 shadow-md">
                          <Phone size={22} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#C19A6B] uppercase tracking-wider">Phone & WhatsApp</p>
                          <a href="tel:+917995574432" className="text-white font-bold text-lg hover:text-[#C19A6B] transition-colors">+91 79955 74432</a>
                        </div>
                      </div>
                      <a 
                        href={`https://wa.me/917995574432?text=${encodeURIComponent('Hello Dr. Rajesh Clinic, I would like to book an appointment.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md shrink-0"
                        title="Chat on WhatsApp"
                      >
                        <img src="https://api.iconify.design/logos:whatsapp-icon.svg" className="w-5 h-5" alt="WA" />
                      </a>
                    </div>
                    <div className="flex items-center gap-3 pl-16">
                      <a href="tel:+919346297238" className="text-white/80 text-sm hover:text-[#C19A6B] transition-colors">+91 93462 97238</a>
                      <span className="text-white/30">|</span>
                      <a href="tel:+918125982855" className="text-white/80 text-sm hover:text-[#C19A6B] transition-colors">+91 81259 82855</a>
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 flex items-start gap-4 hover:bg-white/15 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#9C4146] text-white flex items-center justify-center shrink-0 shadow-md">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#C19A6B] uppercase tracking-wider">Clinic Locations</p>
                      <p className="text-white font-medium text-sm mt-0.5 leading-snug">
                        Omega PRP Hospital, Chandanagar<br/>
                        Radiance Speciality Clinics, Bachupally
                      </p>
                      <p className="text-white/50 text-[11px] mt-1 leading-snug">
                        Sri Hanuman's Pagadala Pride, Flat No. 201,<br/>above Dominos Pizza, B Block, Bachupally 500118
                      </p>
                      <a 
                        href="#maps" 
                        className="text-[11px] text-[#C19A6B] font-bold underline mt-1.5 inline-block hover:text-white transition-colors"
                      >
                        View on Map →
                      </a>
                    </div>
                  </div>

                  {/* Email & Hours */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                      <Mail size={18} className="text-[#C19A6B] mb-2" />
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Email</p>
                      <p className="text-white text-xs font-semibold truncate mt-0.5">drrajeshvasam@gmail.com</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                      <Clock size={18} className="text-[#C19A6B] mb-2" />
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Availability</p>
                      <p className="text-white text-xs font-semibold mt-0.5">Omega PRP: 9am - 4pm<br/>Radiance: 6pm - 9pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Call Banner */}
              <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] text-white/70">Need urgent pain relief?</p>
                  <p className="text-xs font-bold text-white">Direct Helpline Available 24/7</p>
                </div>
                <a 
                  href="tel:+918125982855" 
                  className="bg-[#C19A6B] hover:bg-white text-[#1e375a] py-2.5 px-5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shrink-0"
                >
                  Call Specialist
                </a>
              </div>

            </motion.div>

            {/* Right Column: Elevated Modern Appointment Form (7 cols) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7">
              <div className="bg-white rounded-[36px] p-8 lg:p-12 shadow-[0_20px_50px_rgba(30,55,90,0.08)] border border-gray-100 relative">
                
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#9C4146]">Online Booking</span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e375a] mt-1">Book Your Consultation</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#9C4146]/10 text-[#9C4146] flex items-center justify-center shrink-0">
                    <MessageSquare size={22} />
                  </div>
                </div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                    <CheckCircle2 size={48} className="text-green-600 mx-auto mb-3 animate-bounce" />
                    <h4 className="font-bold text-xl mb-1">Appointment Request Sent!</h4>
                    <p className="text-sm text-green-700 mb-4">Opening WhatsApp chat room with Dr. Rajesh Clinic... If it didn't open automatically, click below:</p>
                    <a 
                      href={`https://wa.me/918125982855?text=${encodeURIComponent('Hello Dr. Rajesh Clinic, I would like to book an appointment.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      <img src="https://api.iconify.design/logos:whatsapp-icon.svg" className="w-5 h-5" alt="WhatsApp" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-[#1e375a] uppercase tracking-wider mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onBlur={() => handleBlur('name')}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Enter Name"
                          className={`w-full px-4.5 py-3.5 rounded-2xl border ${touched.name && errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#9C4146] focus:ring-2 focus:ring-[#9C4146]/15'} focus:outline-none transition-all text-sm`}
                        />
                        {touched.name && errors.name && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label className="block text-xs font-bold text-[#1e375a] uppercase tracking-wider mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onBlur={() => handleBlur('phone')}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="Enter Phone Number"
                          className={`w-full px-4.5 py-3.5 rounded-2xl border ${touched.phone && errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#9C4146] focus:ring-2 focus:ring-[#9C4146]/15'} focus:outline-none transition-all text-sm`}
                        />
                        {touched.phone && errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.phone}
                          </p>
                        )}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-bold text-[#1e375a] uppercase tracking-wider mb-2">Email Address</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onBlur={() => handleBlur('email')}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="Enter Email Address"
                          className={`w-full px-4.5 py-3.5 rounded-2xl border ${touched.email && errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#9C4146] focus:ring-2 focus:ring-[#9C4146]/15'} focus:outline-none transition-all text-sm`}
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Service Select */}
                      <div>
                        <label className="block text-xs font-bold text-[#1e375a] uppercase tracking-wider mb-2">Service Required</label>
                        <select 
                          value={formData.service}
                          onChange={(e) => handleChange('service', e.target.value)}
                          className="w-full px-4.5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#9C4146] focus:ring-2 focus:ring-[#9C4146]/15 transition-all text-sm bg-white"
                        >
                          <option>Interventional Pain Medicine</option>
                          <option>Spine & Back Pain Care</option>
                          <option>Joint & Knee Pain Management</option>
                          <option>Laser & Aesthetic Procedures</option>
                        </select>
                      </div>

                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-bold text-[#1e375a] uppercase tracking-wider mb-2">Message / Symptoms *</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onBlur={() => handleBlur('message')}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Enter Your Message"
                        className={`w-full px-4.5 py-3.5 rounded-2xl border ${touched.message && errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#9C4146] focus:ring-2 focus:ring-[#9C4146]/15'} focus:outline-none transition-all text-sm`}
                      ></textarea>
                      {touched.message && errors.message && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={13} /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1e375a] to-[#9C4146] hover:from-[#9C4146] hover:to-[#1e375a] text-white py-4 px-8 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    >
                      <Send size={16} /> Submit Appointment Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Embedded Map Section: Bachupally & Chandanagar, Hyderabad */}
      <section className="pb-20" id="maps">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[350px]">
              <div className="bg-[#1e375a] text-white py-2 px-4 text-center font-semibold text-sm">Omega PRP Hospital, Chandanagar (9 AM - 4 PM)</div>
              <iframe 
                title="Omega PRP Hospital Chandanagar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1583803875567!2d78.32488331527871!3d17.498453404179374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9232938096dd%3A0xe67bc7d206f2c38f!2sChandanagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[350px]">
              <div className="bg-[#9C4146] text-white py-2 px-4 text-center font-semibold text-sm">Radiance Specialty Clinic, Bachupally (6 PM - 9 PM)</div>
              <iframe 
                title="Radiance Specialty Clinic Bachupally"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.148154133469!2d78.3846!3d17.5348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e13717c18c5%3A0x6b2b7373f1d24590!2sBachupally%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


