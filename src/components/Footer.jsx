import { MapPin, Phone, Mail, Clock, ShieldCheck, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1e375a] via-[#152a46] to-[#0a1727] text-white pt-20 pb-8 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9C4146]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C19A6B]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Emergency CTA Bar */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 mb-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#9C4146] text-white flex items-center justify-center shrink-0 shadow-lg">
              <HeartPulse size={28} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-white">Need Immediate Pain Relief Consultation?</h3>
              <p className="text-white/70 text-sm">Schedule your appointment with Dr. Rajesh in Chandanagar & Bachupally, Hyderabad.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918125982855" 
              className="bg-[#C19A6B] hover:bg-white text-[#1e375a] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <Phone size={16} /> Call +91 81259 82855
            </a>
            <Link 
              to="/contact" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              Book Online
            </Link>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Doctor Profile Branding */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                 <img src="/favicon.png" alt="Dr. Rajesh Clinic" className="w-11 h-11 rounded-xl shadow-md object-contain border border-[#C19A6B]/30" />
                 <div>
                    <h2 className="font-serif text-2xl font-bold text-white tracking-wide">Dr. Vasam Rajesh Kumar</h2>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#C19A6B] font-bold">Interventional Pain Physician</p>
                  </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Specialized non-surgical treatment for chronic joint, knee, spine, and back pain using US-FDA approved image-guided procedures.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] font-semibold">
              <ShieldCheck size={16} /> FIPM Certified Pain Specialist
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-6 text-[#C19A6B] font-serif">Quick Navigation</h4>
            <ul className="space-y-3.5">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Dr. Rajesh', path: '/about' },
                { label: 'Treatments & Services', path: '/services' },
                { label: 'Media & Photo Gallery', path: '/gallery' },
                { label: 'Medical Blog & Articles', path: '/blog' },
                { label: 'Contact Clinic', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/75 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="text-[#9C4146] group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Treatments */}
          <div>
            <h4 className="font-bold text-base mb-6 text-[#C19A6B] font-serif">Key Treatments</h4>
            <ul className="space-y-3.5">
              {[
                'Knee Pain & COOLIEF RFA',
                'Spine & Sciatica Management',
                'Epidural Steroid Injections',
                'Joint & Shoulder Pain Care',
                'Palliative Care & Wellness Therapy'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-white/75 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="text-[#C19A6B] group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic Info */}
          <div>
            <h4 className="font-bold text-base mb-6 text-[#C19A6B] font-serif">Clinic Information</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#9C4146] shrink-0 mt-1" />
                <span className="leading-relaxed">PRK Hospital, Chandanagar<br/>Radiance Speciality Clinics, Bachupally<br/><span className="text-white/50 text-xs">Sri Hanuman's Pagadala Pride, Flat No. 201, above Dominos Pizza, B Block, Bachupally 500118</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#9C4146] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  <a href="tel:+917995574432" className="hover:text-white transition-colors font-semibold">+91 79955 74432</a><br/>
                  <a href="tel:+919346297238" className="hover:text-white transition-colors text-xs">+91 93462 97238</a>
                  <span className="text-white/30 mx-1">|</span>
                  <a href="tel:+918125982855" className="hover:text-white transition-colors text-xs">+91 81259 82855</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#9C4146] shrink-0" />
                <span>drrajeshvasam@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#9C4146] shrink-0 mt-1" />
                <span className="leading-relaxed">PRK Hospital: 9am - 4pm<br/>Radiance: 6pm - 9pm</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Sub-Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2024 Dr. Vasam Rajesh Kumar — Radiance Speciality Clinics. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link>
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <a href="https://www.instagram.com/radiancespecialityclinics/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@radianceclinics-dr.rajeshvasam" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

