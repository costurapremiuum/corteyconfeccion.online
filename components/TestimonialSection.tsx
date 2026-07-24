import { testimonials } from '../data/siteContent';

export default function TestimonialSection() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12">Lo que dicen nuestras alumnas</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-3xl border border-[#E0DCD3] shadow-sm">
            <p className="text-lg italic opacity-80 mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4 mt-4">
              <img src={t.photo || '/placeholder-avatar.svg'} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-[#6B7280]">{t.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}