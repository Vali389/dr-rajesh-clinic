import { Award, Users, Trophy, Star, CalendarCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { num: '10+', text: 'Years of Experience', icon: Award, color: '#1e375a' },
    { num: '25K+', text: 'Happy Patients', icon: Users, color: '#4a728a' },
    { num: '15+', text: 'Advanced Technologies', icon: Trophy, color: '#9C4146' },
    { num: '98%', text: 'Patient Satisfaction', icon: Star, color: '#C19A6B' },
    { num: '5K+', text: 'Successful Treatments', icon: CalendarCheck, color: '#889b73' }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-4" style={{ backgroundColor: stat.color }}>
            <div className="text-white hover:scale-110 transition-transform shrink-0">
              <stat.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[24px] font-serif text-white font-bold leading-none mb-1">{stat.num}</div>
              <div className="text-[11px] text-white/90 font-medium whitespace-nowrap">{stat.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
