import { motion } from 'framer-motion';
import { WhatsAppIcon } from './CustomIcons';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/918125982855?text=${encodeURIComponent('Hello Dr. Rajesh Clinic, I would like to inquire about an appointment.')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] border-2 border-white transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" fill="white" />
      <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
