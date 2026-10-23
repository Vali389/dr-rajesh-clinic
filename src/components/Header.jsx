import { CalendarDays } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/favicon.png" alt="Dr. Rajesh Clinic" className="w-12 h-12 rounded-xl object-contain shadow-sm group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-2xl text-brand-dark leading-none">Dr. Vasam Rajesh Kumar</span>
            <span className="text-[0.6rem] tracking-widest text-gray-500 mt-1 uppercase">Pain Management · Palliative Care · Wellness Therapy</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors border-b-2 py-1 ${
                  isActive 
                    ? 'text-[#9C4146] border-[#9C4146] font-bold' 
                    : 'text-gray-700 hover:text-[#9C4146] border-transparent'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-500">
            <a href="https://www.instagram.com/radiancespecialityclinics/" target="_blank" rel="noreferrer" className="hover:text-[#9C4146] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@radianceclinics-dr.rajeshvasam" target="_blank" rel="noreferrer" className="hover:text-[#9C4146] transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
          <Link to="/contact" className="bg-[#1e375a] hover:bg-[#9C4146] text-white text-sm font-bold py-3 px-6 rounded-md transition-colors flex items-center gap-2 shadow-sm">
            <CalendarDays size={16} />
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
