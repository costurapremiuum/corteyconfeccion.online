import { testimonials } from '../data/siteContent';

export default function TestimonialSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12">Lo que dicen nuestras alumnas</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#FAF9F6] p-8 rounded-3xl border border-[#E0DCD3]">
            <p className="text-lg italic opacity-80 mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#E0DCD3] rounded-full"></div>
              <span className="font-bold">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}