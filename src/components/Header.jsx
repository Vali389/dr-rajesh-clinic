import { CalendarDays } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Dr. Rajesh Clinic" className="h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-2xl text-brand-dark leading-none">Dr. Rajesh</span>
            <span className="text-[0.6rem] tracking-widest text-gray-500 mt-1 uppercase">Skin · Hair · Laser · Aesthetics</span>
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

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-[#1e375a] hover:bg-[#9C4146] text-white text-sm font-bold py-3 px-6 rounded-md transition-colors flex items-center gap-2 shadow-sm">
            <CalendarDays size={16} />
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
