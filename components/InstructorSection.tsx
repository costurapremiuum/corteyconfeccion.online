import { instructor } from '../data/siteContent';

export default function InstructorSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#E0DCD3] shadow-sm flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 aspect-square bg-[#E0DCD3] rounded-2xl overflow-hidden">
          {/* Aquí podrías colocar una imagen tuya */}
          <div className="w-full h-full flex items-center justify-center text-[#E07A5F] font-serif font-bold text-4xl">IV</div>
        </div>
        <div className="flex-1">
          <span className="text-[#E07A5F] font-bold tracking-widest uppercase text-xs mb-2 block">
            Sobre la Instructora
          </span>
          <h2 className="text-3xl font-serif font-bold mb-4">{instructor.name}</h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            {instructor.bio}
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-[#E0DCD3] pt-6">
            {instructor.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold text-[#222222]">{stat.value}</div>
                <div className="text-xs opacity-60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}