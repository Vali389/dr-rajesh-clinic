import { FileText, ShieldCheck, UserCheck, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OfferBanner() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-16 bg-[#fcfdfd] relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="bg-white rounded-[28px] p-8 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left Text Block */}
          <div className="lg:w-5/12 text-center lg:text-left">
            <h2 className="text-3xl lg:text-[38px] font-serif font-bold text-[#1e375a] leading-tight mb-4">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Book a consultation with our experts today and take the first step towards a pain-free life.
            </p>
          </div>

          {/* Center 3 Features with Icons */}
          <div className="lg:w-5/12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1e375a] border border-gray-200">
                <FileText size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[13px] font-bold text-[#1e375a] leading-snug">
                Personalised <br /> Treatment Plans
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1e375a] border border-gray-200">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[13px] font-bold text-[#1e375a] leading-snug">
                Safe & Advanced <br /> Technology
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1e375a] border border-gray-200">
                <UserCheck size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[13px] font-bold text-[#1e375a] leading-snug">
                Expert Care <br /> You Can Trust
              </p>
            </div>

          </div>

          {/* Right CTA Button */}
          <div className="lg:w-2/12 flex justify-center lg:justify-end shrink-0">
            <button className="bg-[#9C4146] hover:bg-[#85353a] text-white py-4 px-7 rounded-xl font-bold text-[14px] transition-all shadow-md flex items-center justify-center gap-2.5 whitespace-nowrap hover:shadow-lg hover:-translate-y-0.5">
              <Calendar size={18} /> Book Appointment
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

